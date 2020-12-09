const d = document;

export default function scrollSpy(){
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