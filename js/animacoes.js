/*NodeList com todas as celulas da tabela*/
const celulas = document.querySelectorAll('td')

/* variaveis da divisão por classes*/
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

/* Variaveis da area de texto informativo*/
const txtTh = document.querySelector('#txtTh')
const inicial = document.querySelector('#inicial')
const icone = document.querySelector('#icone')
const informativo = document.querySelector('#informativo')

/*Variaveis da legenda*/
const naoMetaisLegenda = document.querySelector('#nao-metais')
const metaisAlcalinosLegenda = document.querySelector('#metais-alcalinos')
const metaisAlcalinosTerrososLegenda = document.querySelector('#metais-alcalino-terrosos')
const metaisDeTransicaoLegenda = document.querySelector('#metais-de-transicao')
const semimetaisLegenda = document.querySelector('#semimetais')
const outroMetaisegenda = document.querySelector('#outros-metais')
const halogeniosLegenda = document.querySelector('#halogenios')
const gasesNobresLegenda = document.querySelector('#gases-nobres')
const lantanideosLegenda = document.querySelector('#lantanideos')
const actinidiosLegenda = document.querySelector('#actinidios')

/*Adiciona a classe animacaoLegenda toda vez que passa o mouse em um elemento da legenda*/

naoMetaisLegenda.onmouseover = () => {
    naoMetais.forEach(function(naoMetal){
        naoMetal.classList.add('animacaoLegenda')
    })
}

metaisAlcalinosLegenda.onmouseover = ()=>{
    metaisAlcalinos.forEach(function(metalAlcalino){   
        metalAlcalino.classList.add('animacaoLegenda')
    })
}

semimetaisLegenda.onmouseover = ()=>{
    semimetais.forEach(function(semimetal){   
        semimetal.classList.add('animacaoLegenda')
    })
}

metaisAlcalinosTerrososLegenda.onmouseover = ()=>{
    metaisAlcalinosTerrosos.forEach(function(metalAlcalinoTerroso){
        metalAlcalinoTerroso.classList.add('animacaoLegenda')
    })
}

metaisDeTransicaoLegenda.onmouseover = ()=>{
    metaisDeTransicao.forEach(function(metalDeTransicao){
        metalDeTransicao.classList.add('animacaoLegenda')
    })
}

outroMetaisegenda.onmouseover = ()=>{
    outrosMetais.forEach(function(outroMetal){
        outroMetal.classList.add('animacaoLegenda')
    })
}

halogeniosLegenda.onmouseover = ()=>{
    halogenios.forEach(function(halogenio){
        halogenio.classList.add('animacaoLegenda')
    })
}

gasesNobresLegenda.onmouseover = ()=>{
    gasesNobres.forEach(function(gasNobre){
        gasNobre.classList.add('animacaoLegenda')
    })
}

lantanideosLegenda.onmouseover = ()=>{
    lantanideos.forEach(function(lantanideo){
        lantanideo.classList.add('animacaoLegenda')
    })
}

actinidiosLegenda.onmouseover = ()=>{
    actinidios.forEach(function(actinidio){
        actinidio.classList.add('animacaoLegenda')
    })
}

/*Remove a classe animacaoLegenda a cada 3,1s*/
setInterval(()=>{
    naoMetais.forEach(function(naoMetal){
        naoMetal.classList.remove('animacaoLegenda')
    })
    metaisAlcalinos.forEach(function(metalAlcalino){   
        metalAlcalino.classList.remove('animacaoLegenda')
    })
    semimetais.forEach(function(semimetal){
        semimetal.classList.remove('animacaoLegenda')
    })
    metaisAlcalinosTerrosos.forEach(function(metalAlcalinoTerroso){
        metalAlcalinoTerroso.classList.remove('animacaoLegenda')
    })
    metaisDeTransicao.forEach(function(metalDeTransicao){
        metalDeTransicao.classList.remove('animacaoLegenda')
    })
    outrosMetais.forEach(function(outroMetal){
        outroMetal.classList.remove('animacaoLegenda')
    })
    halogenios.forEach(function(halogenio){
        halogenio.classList.remove('animacaoLegenda')
    })
    gasesNobres.forEach(function(gasNobre){
        gasNobre.classList.remove('animacaoLegenda')
    })
    lantanideos.forEach(function(lantanideo){
        lantanideo.classList.remove('animacaoLegenda')
    })
    actinidios.forEach(function(actinidio){
        actinidio.classList.remove('animacaoLegenda')
    })
},3100)


/*Retorna o campo de texto informativo para o original*/
function limpar(){
    txtTh.style.background = '#e7e6e6'
    txtTh.innerText = 'tabela periodica'
    inicial.classList.remove('invisivel')
    icone.classList.add('invisivel')
    informativo.classList.add('invisivel')
}

/*Adicona o icone com texto de explicação na area informativa sobre o elemento selecionado*/
function mostrarIcone(){
    inicial.classList.add('invisivel')
    icone.classList.remove('invisivel')
    informativo.classList.remove('invisivel')
}

/**
 * Seleciona cada elemento pela sua classe.
 * Colere a area de titulo do texto informativo.
 * Mostra o campo de icone e area de texto.
 */
naoMetais.forEach(function(naoMetal){
    naoMetal.onmouseover = () =>{
        txtTh.style.background = '#A1D344'
        icone.style.background = '#A1D344'
        mostrarIcone()
    }
    naoMetal.onmouseout = () => limpar()
})

metaisAlcalinos.forEach(function(metalAlcalino){
    metalAlcalino.onmouseover = () =>{
        txtTh.style.background = '#F1B32E'
        icone.style.background = '#F1B32E'
        mostrarIcone()
    }
    metalAlcalino.onmouseout = () => limpar()
})

semimetais.forEach(function(semimetal){
    semimetal.onmouseover = () =>{
        txtTh.style.background = '#4FB6AC'
        icone.style.background = '#4FB6AC'
        mostrarIcone()
    }
    semimetal.onmouseout = () => limpar()
})

metaisAlcalinosTerrosos.forEach(function(metalAlcalinoTerroso){
    metalAlcalinoTerroso.onmouseover = () =>{
        txtTh.style.background = '#EADA2F'
        icone.style.background = '#EADA2F'
        mostrarIcone()
    }
    metalAlcalinoTerroso.onmouseout = () => limpar()
})

metaisDeTransicao.forEach(function(metalDeTransicao){
    metalDeTransicao.onmouseover = () =>{
        txtTh.style.background = '#EB8E8E'
        icone.style.background = '#EB8E8E'
        mostrarIcone()
    }
    metalDeTransicao.onmouseout = () => limpar()
})

outrosMetais.forEach(function(outroMetal){
    outroMetal.onmouseover = () =>{
        txtTh.style.background = '#A2C7D3'
        icone.style.background = '#A2C7D3'
        mostrarIcone()
    }
    outroMetal.onmouseout = () => limpar()
})

halogenios.forEach(function(halogenio){
    halogenio.onmouseover = () =>{
        txtTh.style.background = '#70CBEB'
        icone.style.background = '#70CBEB'
        mostrarIcone()
    }
    halogenio.onmouseout = () => limpar()
})

gasesNobres.forEach(function(gasNobre){
    gasNobre.onmouseover = () =>{
        txtTh.style.background = '#3D9EE3'
        icone.style.background = '#3D9EE3'
        mostrarIcone()
    }
    gasNobre.onmouseout = () => limpar()
})

lantanideos.forEach(function(lantanideo){
    lantanideo.onmouseover = () =>{
        txtTh.style.background = '#90E3E9'
        icone.style.background = '#90E3E9'
        mostrarIcone()
    }
    lantanideo.onmouseout = () => limpar()
})

actinidios.forEach(function(actinidio){
    actinidio.onmouseover = () =>{
        txtTh.style.background = '#DCADD6'
        icone.style.background = '#DCADD6'
        mostrarIcone()
    }
    actinidio.onmouseout = () => limpar()
})

/*Animações dos elementos 57-71 e 89-103*/
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