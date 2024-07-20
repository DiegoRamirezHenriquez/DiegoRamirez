let contenedor=document.querySelector('.contenedor');
let items=document.querySelectorAll('.items');

window.onscroll= function() {
    let topPos = contenedor.offsetTop;
    for(i=0;i<items.length;i++){
        if (window.scrollY-950 >= topPos) {
            items[i].classList.add("aparece");
            items[i].classList.remove("desaparece");
        }else if(window.scrollY-950 <= topPos){
            items[i].classList.add("desaparece");
            items[i].classList.remove("aparece");
        }
    }
    
}
