function tocaSom(id_elemento){
    document.querySelector(id_elemento).play();
}

const teclas = document.querySelectorAll('.tecla');

teclas.forEach((element) => {
    
    let tecla = element.className.split(" ");

    element.onclick = function(){
        
        tocaSom(`#som_${tecla[1]}`);
    } 
})

/**
 * 
 * 
 * ALura
 * 
 */

