const d = document,
w= window;
export function humburgerMenu(panelBtn, panel, menuLink){
   
    d.addEventListener("click",(e) =>{
        if(e.target.matches(panelBtn)  || e.target.matches(`${panelBtn} *`)){ // * descendientes
            d.querySelector(panel).classList.toggle("my-is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
           // d.querySelector(panel).style.display = "";
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("my-is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
           // d.querySelector(panel).style.display = "none";

        }
    });
}
export  function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);
  
    w.addEventListener("scroll",(e)=>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
       if(scrollTop > 600){
        $scrollBtn.classList.remove("hidden");
       }else{
        $scrollBtn.classList.add("hidden");
       }
       // console.log(w.pageXOffset,d.documentElement.scrollTop);
    });
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top:0
            });
        }
    });
}