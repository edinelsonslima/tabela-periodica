//Todas as celulas da tabela
const celulas = document.querySelectorAll('td')

//Divisão por classes
const naoMetais = document.querySelectorAll('.nao-metal')
const metaisAlcalinos = document.querySelectorAll('.metal-alcalino')
const semimetais = document.querySelectorAll('.semimetais')
const metaisAlcalinosTerrosos = document.querySelectorAll('.metal-alcalino-terroso')
const metaisDeTransicao = document.querySelectorAll('.metal-de-transicao')
const outrosMetais = document.querySelectorAll('.outro-metal')
const halogenios = document.querySelectorAll('.halogenio')
const gasesNobres = document.querySelectorAll('.gas-nobre')
const lantanideos = document.querySelectorAll('.lantanideos')
const actinidios = document.querySelectorAll('.actinidios')

//Area de texto informativo
const txtTh = document.querySelector('#txtTh')
const inicial = document.querySelector('#inicial')
const icone = document.querySelector('#icone')
const informativo = document.querySelector('#informativo')

//Animações da tabela secundaria
celulas.forEach(function(elemento){
    elemento.onmouseenter = () =>{
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
       
    }
})


//Colorindo a parte superido da area de explicação
naoMetais.forEach(function(naoMetal){
    naoMetal.onmouseover = () =>{
        txtTh.style.background = '#A1D344'
        icone.style.background = '#A1D344'
        inicial.classList.add('invisivel')
        icone.classList.remove('invisivel')
        informativo.classList.remove('invisivel')
    }
    naoMetal.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
        txtTh.innerText = 'tabela periodica'
        inicial.classList.remove('invisivel')
        icone.classList.add('invisivel')
        informativo.classList.add('invisivel')
    }
})

metaisAlcalinos.forEach(function(metalAlcalino){
    metalAlcalino.onmouseover = () =>{
        txtTh.style.background = '#F1B32E'
        icone.style.background = '#F1B32E'
        inicial.classList.add('invisivel')
        icone.classList.remove('invisivel')
        informativo.classList.remove('invisivel')
    }
    metalAlcalino.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
        txtTh.innerText = 'tabela periodica'
        inicial.classList.remove('invisivel')
        icone.classList.add('invisivel')
        informativo.classList.add('invisivel')
    }
})

semimetais.forEach(function(semimetal){
    semimetal.onmouseover = () =>{
        txtTh.style.background = '#4FB6AC'
        icone.style.background = '#4FB6AC'
        inicial.classList.add('invisivel')
        icone.classList.remove('invisivel')
        informativo.classList.remove('invisivel')
    }
    semimetal.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
        txtTh.innerText = 'tabela periodica'
        inicial.classList.remove('invisivel')
        icone.classList.add('invisivel')
        informativo.classList.add('invisivel')
    }
})

metaisAlcalinosTerrosos.forEach(function(metalAlcalinoTerroso){
    metalAlcalinoTerroso.onmouseover = () =>{
        txtTh.style.background = '#EADA2F'
        icone.style.background = '#EADA2F'
        inicial.classList.add('invisivel')
        icone.classList.remove('invisivel')
        informativo.classList.remove('invisivel')
    }
    metalAlcalinoTerroso.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
        txtTh.innerText = 'tabela periodica'
        inicial.classList.remove('invisivel')
        icone.classList.add('invisivel')
        informativo.classList.add('invisivel')
    }
})


metaisDeTransicao.forEach(function(metalDeTransicao){
    metalDeTransicao.onmouseover = () =>{
        txtTh.style.background = '#EB8E8E'
        icone.style.background = '#EB8E8E'
        inicial.classList.add('invisivel')
        icone.classList.remove('invisivel')
        informativo.classList.remove('invisivel')
    }
    metalDeTransicao.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
        txtTh.innerText = 'tabela periodica'
        inicial.classList.remove('invisivel')
        icone.classList.add('invisivel')
        informativo.classList.add('invisivel')
    }
})

outrosMetais.forEach(function(outroMetal){
    outroMetal.onmouseover = () =>{
        txtTh.style.background = '#A2C7D3'
        icone.style.background = '#A2C7D3'
        inicial.classList.add('invisivel')
        icone.classList.remove('invisivel')
        informativo.classList.remove('invisivel')
    }
    outroMetal.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
        txtTh.innerText = 'tabela periodica'
        inicial.classList.remove('invisivel')
        icone.classList.add('invisivel')
        informativo.classList.add('invisivel')
    }
})

halogenios.forEach(function(halogenio){
    halogenio.onmouseover = () =>{
        txtTh.style.background = '#70CBEB'
        icone.style.background = '#70CBEB'
        inicial.classList.add('invisivel')
        icone.classList.remove('invisivel')
        informativo.classList.remove('invisivel')
    }
    halogenio.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
        txtTh.innerText = 'tabela periodica'
        inicial.classList.remove('invisivel')
        icone.classList.add('invisivel')
        informativo.classList.add('invisivel')
    }
})

gasesNobres.forEach(function(gasNobre){
    gasNobre.onmouseover = () =>{
        txtTh.style.background = '#3D9EE3'
        icone.style.background = '#3D9EE3'
        inicial.classList.add('invisivel')
        icone.classList.remove('invisivel')
        informativo.classList.remove('invisivel')
    }
    gasNobre.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
        txtTh.innerText = 'tabela periodica'
        inicial.classList.remove('invisivel')
        icone.classList.add('invisivel')
        informativo.classList.add('invisivel')
    }
})

lantanideos.forEach(function(lantanideo){
    lantanideo.onmouseover = () =>{
        txtTh.style.background = '#90E3E9'
        icone.style.background = '#90E3E9'
        inicial.classList.add('invisivel')
        icone.classList.remove('invisivel')
        informativo.classList.remove('invisivel')
    }
    lantanideo.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
        txtTh.innerText = 'tabela periodica'
        inicial.classList.remove('invisivel')
        icone.classList.add('invisivel')
        informativo.classList.add('invisivel')
    }
})

actinidios.forEach(function(actinidio){
    actinidio.onmouseover = () =>{
        txtTh.style.background = '#DCADD6'
        icone.style.background = '#DCADD6'
        inicial.classList.add('invisivel')
        icone.classList.remove('invisivel')
        informativo.classList.remove('invisivel')
    }
    actinidio.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
        txtTh.innerText = 'tabela periodica'
        inicial.classList.remove('invisivel')
        icone.classList.add('invisivel')
        informativo.classList.add('invisivel')
    }
})