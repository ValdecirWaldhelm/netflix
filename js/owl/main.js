$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

let visibilidade = true;
let info = true

function ocultarexibir() {
    
    if(visibilidade){
        document.getElementById("trailer").style.display = "none";
        visibilidade = false;
    }else{
        document.getElementById("trailer").style.display = "block";
        visibilidade = true;
    }
    
}


function exibirinfo() {

    if(info){
        document.getElementById("information-serie").style.display = "none";
        info = false;
    }else{
        document.getElementById("information-serie").style.display = "block";
        info = "true"
    }
}