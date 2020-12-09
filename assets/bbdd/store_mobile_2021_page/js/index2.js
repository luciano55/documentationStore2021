/*
import {humburgerMenu, scrollTopButton} from "./libreryJs/utilityMenu.js";
import darkTheme from "./libreryJs/appearance.js";
import scrollSpy from "./libreryJs/scroll_spy.js";*/
const d = document,
w = window,
 ls = localStorage;

 const humburgerMenu = function(panelBtn, panel, menuLink){
   
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
const scrollTopButton = function(btn){
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

 function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
   // console.log( $selectors);
    let moon="🌙",
    sun="☀️";
    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme","light");
    }
    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme","dark");
    }
    d.addEventListener("click",(e=>{
        if(e.target.matches(btn)){
           // console.log($themeBtn.textContent);
            if($themeBtn.textContent === moon){
                darkMode();  
            }else{
                lightMode();
            }
        }
    }));
    d.addEventListener("DOMContentLoaded",(e)=>{
       // alert("Hola desde la función darktheme")
       if(ls.getItem("theme") === null) ls.setItem("theme","light");
       if(ls.getItem("theme") === "light") lightMode();
       if(ls.getItem("theme") === "dark") darkMode(); 
    });

}
function scrollSpy(){
    const $section = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries) =>{
       // console.log("entries",entries);
       entries.forEach((entry) =>{
           // console.log("entry",entry);
           const id = entry.target.getAttribute("id");
           console.log(id);
        if(entry.isIntersecting){
            //console.log(d.querySelector(`a[data-scroll-spy][href="#${id}"]`));
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
        }else{
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
        }

       })
    }
    const observer = new IntersectionObserver(cb,{
        //root
        rootMargin: "-300px",
        //threshold: [0.5,0.75] 

    });
   // console.log("observer",observer);
    $section.forEach((el) => observer.observe(el));


}


d.addEventListener("DOMContentLoaded",(e) =>{
    humburgerMenu(".panel-btn",".panel",".menu a");
    scrollTopButton(".scroll-top-btn");
    scrollSpy();
    
}); 
darkTheme(".dark-theme-btn", "dark-mode");
