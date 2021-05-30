const celulas = document.querySelectorAll('td')
const txt = document.querySelector('#txt')


celulas.forEach(function(elemento){
    elemento.onmouseover = () =>{
        //Animação dos elementos 57 a 71
        if(elemento.innerText == '57-71'){
            for(let i=129; i <= 143; i++){
                celulas[i].classList.add('animacao')
            }
        } 
        else{
            for(let i=129; i <= 143; i++){
                celulas[i].classList.remove('animacao')
            }
        }

        //Animação dos elementos 89 a 103
        if(elemento.innerText == '89-103'){
            for(let i=147; i <= 161; i++){
                celulas[i].classList.add('animacao')
            }
        }
        else{
            for(let i=147; i <= 161; i++){
                celulas[i].classList.remove('animacao')
            }
        }

        //Mostrar detalhes de cada elemento
        
    }
})
