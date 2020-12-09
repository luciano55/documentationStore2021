import {humburgerMenu, scrollTopButton} from "./libreryJs/utilityMenu.js";

import darkTheme from "./libreryJs/appearance.js";
import scrollSpy from "./libreryJs/scroll_spy.js";


const d = document;

d.addEventListener("DOMContentLoaded",(e) =>{
    humburgerMenu(".panel-btn",".panel",".menu a");
    scrollTopButton(".scroll-top-btn");
    scrollSpy();
    
}); 
darkTheme(".dark-theme-btn", "dark-mode");
