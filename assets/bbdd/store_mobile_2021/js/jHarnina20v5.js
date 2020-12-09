// ---------------------------- F U N C I O N E S    G L O B A L E S -----------------------
const $ = function(string){
    return document.getElementById(string);
};

function funcDelegate(obj, methodName) {
    return function (e) {
        e = e || window.event;
        return obj[methodName](this, e);
    };
}
function generateNumber(max, min) {
    return parseInt((Math.random() * (max - min + 1) + min));
  }
// Devuelve una funcion(linea 7) que al invocarlar(un nodo) devuelve la ejecución de un método
// Al que recibe como parámetro el objeto que hizo la llamada(el nodo).

// ------------------    Mi Universo HARNINA20--------------------------------------
var HARNINA20 = HARNINA20 || {};

// Control del Universo
HARNINA20.namespace = function(namespace){ 
    let parts = namespace.split('.'); // HARNINA20.myMenu.Look.lolo
    let parent = HARNINA20;
    if (parts[0] === "HARNINA20") {
        parts = parts.slice(1); // myMenu  Look lolo
    }
    else return false;
    for (let i = 0; i < parts.length; i += 1) {

        if (typeof parent[parts[i]] === "undefined") {  // HARNINA20.myMenu

            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

/**************************  M O D U L O S ******* */

//-----------------------Como crear  Menu desplegable ------------------------------------------

// 1. Plantilla:
        // <div  id="***Visible">........</div> 
        // <div id="***" class="hiddenPart>  ......... </div>   
        // *** deben ser el mismo en las dos líneas.
// 2. A traves de la propiedad HARNINA20.menuDropDown que es un array
//      2.1. El usuario debe definir patrón de busqueda para localizar los elementos a ocultar
//      2.2. Los nodos que sean parte visible en su id debe contener la palabra "Visible"
//      2.3. Ejemplo HARNINA20.menuDropDown = ".laclasequequiera ulquequiera";


((function(propertiesNodesCollapse){
   
    var propertiesNodesCollapse = propertiesNodesCollapse || [".hiddenPart"];

    if (Array.isArray(propertiesNodesCollapse)){
        propertiesNodesCollapse.forEach(element => {                
            manageHiddenNode(element);
        }); 
    } else
    {
        manageHiddenNode(propertiesNodesCollapse);
    }  

    function manageHiddenNode(patter){
        const listHideNodes = document.querySelectorAll(patter);
        for(let nodo of listHideNodes) {
                nodo.style.display = "none"; 
            let nodoVisible  = $(nodo.id + "Visible");
                nodoVisible.setAttribute('data-after', ' ↓');   
                nodoVisible.addEventListener("click", modifyDisplay, false); 
    }

    }
   
    function modifyDisplay(e){    
                let ul  = e.target.id; 
                let hideNode = $(ul.replace("Visible", ""));
                let estado = hideNode.style.display;
               
                if (estado == "none"){
                    hideNode.style.display = "block";
                    e.target.setAttribute('data-after', ' ↑');
                   
                }else{
                    hideNode.style.display = "none"; 
                    e.target.setAttribute('data-after', ' ↓');                               
                };    
            };             
             
  })      
  ((typeof HARNINA20.menuDropDown === 'undefined')?undefined:HARNINA20.menuDropDown));
  //-----------------------Como animar apariencia Menu  ------------------------------------------
  
  // --------------------    Modul Menu look -----------

(( function(candidateList){
    var candidateList = candidateList || [".menuLook"];   

    HARNINA20.namespace('HARNINA20.myMenuLook');

    HARNINA20.myMenuLook = function(id){
                this._node = $(id);
                if (this._node) {
                    this._node.onmouseover = funcDelegate(this, "customOnMouseOver");
                    this._node.onmouseout = funcDelegate( this, "customOnMouseOut");
                }
        };

    HARNINA20.myMenuLook.prototype.customOnMouseOver = function (obj, event) {                
                obj.style.cursor = "help";
                obj.style.color = "olive";
                obj.style.fontSize = "2em";
                obj.style.background = "#EAEDEE";
                obj.style.borderRadius = "25px 25px 25px 25px";
                obj.className = "colapse";//"boton s9";
    };

    HARNINA20.myMenuLook.prototype.customOnMouseOut = function (obj, event) {
                obj.style.cursor = "pointer";
                obj.style.color = "#88B3BB";
                obj.style.fontSize = "1em";
                obj.style.borderRadius = "0px 0px 0px 0px";
                obj.style.background = "";
                obj.className = "colapse";//"boton s12";
            };      
            
       if(Array.isArray(candidateList)) {
              
            candidateList.forEach((candidate,index)=>{
                    const listaNodosLook = document.querySelectorAll(candidate);
                    for(let nodo of listaNodosLook) {                               
                                new HARNINA20.myMenuLook(nodo.id);
                        }  
                })
       }  else {

       }       

})
((typeof HARNINA20.menuLook === 'undefined')?undefined:HARNINA20.menuLook));


// Modul Box look  Anima el color del fondo de contenedores 

(( function(candidateBoxLookList){
    var candidateBoxLookList = candidateBoxLookList || [".boxLook a"];   
    if (Array.isArray(candidateBoxLookList)){
      candidateBoxLookList.forEach(element => { 
                       
        manageSetColor(element);
      }); 
    } else
    {
      manageSetColor(candidateBoxLookList);
    }  
  
    function manageSetColor(patter){
      const listBoxLookNodes = document.querySelectorAll(patter);
      for(let nodo of listBoxLookNodes) {
         setColor(nodo, 1);
      }
      for(let i = 0; i < listBoxLookNodes.length ; i++){  
        listBoxLookNodes[i].onmouseover = function(t){
                                                    return function(){ setColor(t, 1);};
                                        }(listBoxLookNodes[i]);
      }  
    }
 
  
  function generateColor(opacidad) {
      /* Valores maximos y minimos de Red, Green y Blue al generar el numero */
      const MAXR = 170;//25;
      const MAXG = 25; //200;
      const MAXB = 200;//170;
    
      const MINR = 120;//20;
      const MING = 20;//150;
      const MINB = 150;// 120;
    
      return 'rgba(' + generateNumber(MAXR, MINR) + ', ' + generateNumber(MAXG, MING) + ', '
      + generateNumber(MAXB, MINB) + ', ' + opacidad + ')';
    }
  
    function setColor(input, opacidad) {
      input.style.background =  generateColor(opacidad);
  }
  
  })( (typeof HARNINA20.boxLook === 'undefined')?undefined:HARNINA20.boxLook)); 