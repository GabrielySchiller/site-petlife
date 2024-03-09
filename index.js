

var perguntas = document.querySelectorAll(".duvida");

perguntas.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })
})


