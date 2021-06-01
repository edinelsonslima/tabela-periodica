const texto = document.querySelector('#informativo')
const info = document.querySelector('#info')


/*Função para voltar o texto pro inicial depois tirar o mouse de cima do elemento*/
celulas.forEach(function(elemento){
    elemento.onmouseleave = ()=>{
        texto.innerHTML = 'A Tabela Periódica é um modelo que agrupa todos os elementos químicos conhecidos e suas propriedades. Eles estão organizados em ordem crescente correspondente aos números atômicos (número de prótons).'
    }
})


/**Funções reponsaveis por exibir detalhes dos elementos quando o mouse fica sobre ele
 * Linha 026: Classe de Não Metais
 * Linha 076: Classe de Gases Nobres
 * Linha 126: Classe de Metais Alcalinos
 * Linha 169: Classe de Metais Alcalinos Terrossos
 * Linha 212: Classe de Metais de Transições
 * Linha 478: Classe de Semimetais
 * Linha 527: Classe de Outros metais
 * Linha 605: Classe de Halogenios
 * Linha 647: Classe de Lantanideos
 * Linha 753: Classe de Actinidios*/


/*Classe de Não Metais*/
h.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O hidrogénio ou hidrogênio é um elemento químico com número atómico ou atômico 1 e representado pelo símbolo H. Com uma massa atómica de aproximadamente 1,0 u, o hidrogénio é o elemento menos denso.'

    icone.innerHTML = '<p id="indice">1</p>H'
    txtTh.innerText = 'hidrogênio'
})

c.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O carbono (do latim carbo, carvão) é um elemento químico, símbolo C, número atômico 6, massa atómica 12 u, sólido à temperatura ambiente. Como um membro do grupo 14 da tabela periódica, ele é um não metal e tetravalente - fazendo quatro elétrons disponíveis na forma de ligações covalentes.'

    icone.innerHTML = '<p id="indice">6</p>C'
    txtTh.innerText = 'carbono'
})

n.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O azoto, nitrogénio ou nitrogênio é um elemento químico com símbolo N, número atómico 7 e de massa atómica 14,00674 u, representado no grupo 7 da tabela periódica. Pertence à família dos pnicogénios.'

    icone.innerHTML = '<p id="indice">7</p>N'
    txtTh.innerText = 'nitrogênio'
})

o.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O oxigénio ou oxigênio é um elemento químico de número atómico 8 e símbolo O representando com massa atómica 16 u. Constitui parte do grupo dos calcogénios e é um não metal reactivo e um forte agente oxidante que facilmente forma compostos com a maioria doutros elementos.'

    icone.innerHTML = '<p id="indice">8</p>O'
    txtTh.innerText = 'oxigênio'
})

p.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O fósforo é um elemento químico de símbolo P, número atômico 15 e massa atómica igual a 30,973762 u.'

    icone.innerHTML = '<p id="indice">15</p>P'
    txtTh.innerText = 'fósforo'
})

s.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O enxofre ou súlfur é um elemento químico de símbolo S, com número atômico 16 e massa atômica 32 u. À temperatura ambiente, o enxofre encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">16</p>S'
    txtTh.innerText = 'enxofre'
})

se.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O selênio ou selénio é um elemento químico de símbolo Se, número atômico 34 e com massa atómica de 78 u. Em condições normais de temperatura e pressão, o selênio encontra-se no estado sólido. É um não metal do grupo dos calcogênios da Classificação Periódica dos Elementos.'
    
    icone.innerHTML = '<p id="indice">34</p>Se'
    txtTh.innerText = 'selênio'
})

/*Classe de Gases Nobres*/
he.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O hélio é um elemento químico de símbolo He e que possui massa atómica igual a 4 u, apresentando número atômico 2. À temperatura ambiente, o hélio encontra-se no estado gasoso.'

    icone.innerHTML = '<p id="indice">2</p>He'
    txtTh.innerText = 'hélio'
})

ne.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O néon ou neônio é um elemento químico de símbolo Ne, número atômico 10 com massa atômica 20 u.'

    icone.innerHTML = '<p id="indice">10</p>Ne'
    txtTh.innerText = 'neônio'
})

ar.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O árgon/árgão/argão/argónio ou argônio/argon é um elemento químico, de símbolo Ar, número atômico 18 e massa atômica 40 u, encontrado no estado gasoso em temperatura ambiente. Ele foi o primeiro gás nobre descoberto, sendo creditado por tal feito pelos ingleses William Ramsay e Lord Rayleigh em 1894.'

    icone.innerHTML = '<p id="indice">18</p>Ar'
    txtTh.innerText = 'argônio'
})

kr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O crípton ou criptônio é um elemento químico de símbolo Kr de número atómico e 36 e de massa atómica igual a 83,8 u. À temperatura ambiente, o crípton encontra-se no estado gasoso. É um elemento do grupo dos gases nobres, 18 da Classificação Periódica dos elementos.'

    icone.innerHTML = '<p id="indice">36</p>Kr'
    txtTh.innerText = 'criptônio'
})

xe.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O xénon ou xenônio, do grego xénos - estrangeiro, é um elemento químico de símbolo Xe de número atômico 54 e de massa atómica igual a 131,3 u. À temperatura ambiente, o xenônio encontra-se no estado gasoso. É um dos gases nobres da classificação periódica dos elementos, grupo 18.'

    icone.innerHTML = '<p id="indice">54</p>Xe'
    txtTh.innerText = 'xenônio'
})

rn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O elemento rádon/radão/radónio ou radônio é um elemento químico com o símbolo Rn. Foi descoberto por Robert Bowie Owens e Ernest Rutherford em 1899.'

    icone.innerHTML = '<p id="indice">86</p>Rn'
    txtTh.innerText = 'radônio'
})

og.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O oganésson ou oganessônio é o elemento químico superpesado sintético de número atômico 118, de símbolo químico Og. Ocupa o grupo 18 da tabela periódica juntamente com os gases nobres. Em 2015, a IUPAC e a IUPAP confirmaram descoberta dos elementos nipónio, moscóvio, tenesso e o oganésson.'

    icone.innerHTML = '<p id="indice">118</p>Og'
    txtTh.innerText = 'oganessônio'
})

/*Classe de Metais Alcalinos*/
li.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O lítio é um elemento químico de símbolo Li, número atômico 3 e massa atômica 7, contendo, na sua estrutura, três prótons e três elétrons. Na tabela periódica dos elementos químicos, pertencente ao grupo 1, dos elementos alcalinos.'

    icone.innerHTML = '<p id="indice">3</p>Li'
    txtTh.innerText = 'lítio'
})

na.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O sódio é um elemento químico de símbolo Na, de número atômico 11, massa atômica 23 u. É um metal alcalino, sólido na temperatura ambiente, macio, untuoso, de coloração branca, ligeiramente prateada. Foi isolado em 1807 por Sir Humphry Davy por meio da eletrólise da soda cáustica fundida.'

    icone.innerHTML = '<p id="indice">11</p>Na'
    txtTh.innerText = 'sódio'
})

k.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O potássio é um elemento químico de símbolo K, número atômico 19, distribuição eletrónica 2-8-8-1, metal alcalino, de massa atómica 39 u, coloração branco prateado, abundante na natureza, encontrado principalmente nas águas salgadas e outros minerais.'

    icone.innerHTML = '<p id="indice">19</p>K'
    txtTh.innerText = 'potássio'
})

rb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O rubídio é um elemento químico de símbolo Rb de número atômico 37. O rubídio é um elemento metálico leve, brancoprateado e do grupo dos metais alcalinos.'

    icone.innerHTML = '<p id="indice">37</p>Rb'
    txtTh.innerText = 'rubídio'
})

cs.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O Césio é um elemento químico de símbolo Cs e número atómico 55, com massa atômica de 132,9 u. Trata-se de um metal alcalino macio de cor prateada-dourada, com um ponto de fusão de 28,44 °C, um dos únicos cinco metais elementares que se podem encontrar em estado líquido a temperatura ambiente.'

    icone.innerHTML = '<p id="indice">55</p>Cs'
    txtTh.innerText = 'Césio'
})

fr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O frâncio é um elemento químico cujo símbolo é Fr e seu número atômico é 87. Sua eletronegatividade é a mais baixa conhecida e é o segundo elemento menos abundante na natureza. O frâncio é um metal alcalino altamente radioativo. Como todos os metais alcalinos, tem um elétron na sua camada de valência.'

    icone.innerHTML = '<p id="indice">87</p>Fr'
    txtTh.innerText = 'frâncio'
})

/*Classe de Metais Alcalinos Terrossos*/
be.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O berílio é um elemento químico de símbolo Be, com número atômico 4 e massa atômica 9 u. É um elemento alcalino-terroso, bivalente, tóxico, de coloração cinza, duro, leve, quebradiço e sólido na temperatura ambiente. Pertence ao grupo 2 É empregado para aumentar a resistência de ligas metálicas.'

    icone.innerHTML = '<p id="indice">4</p>Be'
    txtTh.innerText = 'berílio'
})

mg.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O magnésio é um elemento químico de símbolo Mg de número atômico 12 com massa atômica 24 u. É um metal alcalinoterroso, pertencente ao grupo 2, sólido nas condições ambientais.'

    icone.innerHTML = '<p id="indice">12</p>Mg'
    txtTh.innerText = 'magnésio'
})

ca.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O cálcio é um elemento químico, símbolo Ca, de número atómico 20 e massa atómica 40u. É um metal da família dos alcalino-terrosos, pertencente ao grupo 2 da classificação periódica dos elementos químicos.'

    icone.innerHTML = '<p id="indice">20</p>Ca'
    txtTh.innerText = 'cálcio'
})

sr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O estrôncio é um elemento químico de símbolo Sr de número atômico 38 e de massa atómica igual a 87,6 u. À temperatura ambiente, o estrôncio encontra-se no estado sólido. É um metal alcalino-terroso da Classificação Periódica dos Elementos. Abundante na natureza na forma de sulfatos e carbonatos.'

    icone.innerHTML = '<p id="indice">38</p>Sr'
    txtTh.innerText = 'estrôncio'
})

ba.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O bário é um elemento químico de símbolo Ba, número atômico 56 com massa atómica 137 u. À temperatura ambiente, o bário encontra-se no estado sólido. O bário é um elemento químico tóxico, macio, de aspecto prateado, com alto ponto de fusão pertencente a família dos metais alcalino terrosos. '

    icone.innerHTML = '<p id="indice">56</p>Ba'
    txtTh.innerText = 'bário'
})

ra.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O rádio é um elemento químico de símbolo Ra, número atômico 88 com massa atómica [226] u, pertencente a família dos metais alcalino-terrosos, grupo 2 ou IIA da classificação periódica dos elementos. À temperatura ambiente, o rádio encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">88</p>Ra'
    txtTh.innerText = 'rádio'
})

/*Classe de Metais de Transições*/
sc.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O escândio anteriormente denominado como sendo 3B), classificado com frequência entre os lantanídios devido a características similares a eles. É encontrado em alguns minerais na Escandinávia. Faz parte do grupo das terras raras.'

    icone.innerHTML = '<p id="indice">21</p>Sc'
    txtTh.innerText = 'escândio'
})

y.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O Ítrio é um elemento químico de símbolo Y, número atômico 39, com massa atómica 88,90584 u. Na temperatura ambiente o ítrio encontra-se no estado sólido. É um metal da série metal de transição pertencente ao grupo 3 da Classificação Periódica dos Elementos.'

    icone.innerHTML = '<p id="indice">39</p>Y'
    txtTh.innerText = 'Ítrio'
})

ti.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O titânio é um elemento químico de símbolo Ti, número atômico 22 com massa atômica 47,90 u. Trata-se de um metal de transição leve, forte, cor branca metálica, lustroso e resistente à corrosão, sólido na temperatura ambiente. O titânio é muito utilizado em ligas leves e no pigmento muito branco. '

    icone.innerHTML = '<p id="indice">22</p>Ti'
    txtTh.innerText = 'titânio'
})

zr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O zircônio ou zircónio é um elemento químico de símbolo Zr de número atômico 40 e de massa atómica igual a 91 u. À temperatura ambiente, o zircônio encontra-se no estado sólido. Está situado no grupo 4 da classificação periódica dos elementos. Foi descoberto em 1789 pelo alemão Martin Heinrich Klaproth.'

    icone.innerHTML = '<p id="indice">40</p>Zr'
    txtTh.innerText = 'zircônio'
})

hf.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O háfnio é um elemento químico de símbolo Hf, de número atômico 72 e de massa atómica igual a 178,5 u. À temperatura ambiente, o háfnio encontra-se no estado sólido. É um metal de transição situado no grupo 4 da classificação periódica dos elementos. '

    icone.innerHTML = '<p id="indice">72</p>Hf'
    txtTh.innerText = 'háfnio'
})

rf.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O rutherfórdio tem símbolo químico "Rf" com número atômico 104. Este elemento é altamente radioativo, com a maioria dos seus isótopos com meias-vidas abaixo de 70 segundos. Consequentemente, este elemento não apresenta qualquer aplicação conhecida e pouco se conhece sobre ele.'

    icone.innerHTML = '<p id="indice">104</p>Rf'
    txtTh.innerText = 'rutherfórdio'
})

v.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Vanádio é um elemento químico, símbolo V, número atômico 23 de massa atómica 50,94 u que, nas condições ambientes, é encontrado no estado sólido. Foi descoberto pelo mineralogista espanhol Andrés Manuel del Río, no México, em 1801, num mineral de chumbo. '

    icone.innerHTML = '<p id="indice">23</p>V'
    txtTh.innerText = 'Vanádio'
})

nb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O nióbio é um elemento químico, de símbolo Nb, número atômico 41 e massa atômica 92,9 u. É um elemento de transição pertencente ao grupo 5 da classificação periódica dos elementos. O nome deriva da deusa grega Níobe, filha de Dione e Tântalo — este último, por sua vez, nomeou outro elemento do grupo 5, o tântalo.'

    icone.innerHTML = '<p id="indice">41</p>Nb'
    txtTh.innerText = 'nióbio'
})

ta.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O tântalo ou tantálio é um elemento químico de número atômico 73, símbolo Ta com massa atómica 181 u que se situa no grupo 5 da classificação periódica dos elementos. Trata-se de um metal de transição raro, azul grisáceo, duro, que apresenta brilho metálico, cor meio acinzentada e resiste muito bem à corrosão.'

    icone.innerHTML = '<p id="indice">73</p>Ta'
    txtTh.innerText = 'tântalo'
})

db.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O Dúbnio é um elemento químico artificial, de símbolo químico Db, número atômico 105, do grupo 5 da Classificação Periódica dos Elementos, com massa atómica [262] u. Provavelmente é um sólido na temperatura ambiente. Não encontrado na crosta terrestre, e sem aplicação conhecida. '

    icone.innerHTML = '<p id="indice">105</p>Db'
    txtTh.innerText = 'Dúbnio'
})

cr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Cromo, crómio ou crômio é um elemento químico de símbolo Cr, número atômico 24 e massa atômica 51,9961 u, sólido em temperatura ambiente. É um metal encontrado no grupo 6 da Classificação Periódica dos Elementos, empregado especialmente em metalurgia em processos denominados eletrodeposição.'

    icone.innerHTML = '<p id="indice">24</p>Cr'
    txtTh.innerText = 'Cromo'
})

mo.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O molibdênio ou molibdénio é um elemento químico de símbolo Mo e número atômico 42. O nome é derivado do neolatim Molybdaenum, do grego antigo Μόλυβδος molybdos que significa chumbo, uma vez que seus minérios eram confundidos com os de chumbo. '

    icone.innerHTML = '<p id="indice">42</p>Mo'
    txtTh.innerText = 'molibdênio'
})

w.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O tungstênio ou tungsténio é um elemento químico de símbolo W e número atômico 74. Um metal de cor branco cinza sob condições padrão, quando não combinado, o tungstênio é encontrado na natureza apenas combinado com outros elementos.'

    icone.innerHTML = '<p id="indice">74</p>W'
    txtTh.innerText = 'tungstênio'})

sg.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O seabórgio ou eka-tungstênio ou "eka-wolfrâmio" é um elemento químico sintético, símbolo Sg, número atômico 106 com massa atómica 266 u. É um metal de transição pertencente ao grupo 6 da classificação periódica dos elementos. É um elemento radioativo, transurânico, provavelmente metálico, sólido de aspecto prateado.'

    icone.innerHTML = '<p id="indice">106</p>Sg'
    txtTh.innerText = 'seabórgio'
})

mn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O manganês ou manganés ou manganésio é um elemento químico, símbolo Mn, número atômico 25 e massa atómica 55 u, sólido em temperatura ambiente. Situa-se no grupo 7 da classificação periódica dos elementos, sendo um metal de transição externa.'

    icone.innerHTML = '<p id="indice">25</p>Mn'
    txtTh.innerText = 'manganês'
})

tc.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O tecnécio é um elemento químico de símbolo Tc de número atômico 43 e de massa atómica igual a 98 u. À temperatura ambiente, o tecnécio encontra-se no estado sólido. Está colocado no grupo 7 da classificação periódica dos elementos.'

    icone.innerHTML = '<p id="indice">43</p>Tc'
    txtTh.innerText = 'tecnécio'
})

re.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O rênio ou rénio é um elemento químico de símbolo Re, número atômico 75, com massa atómica 186,2 u, situado no grupo 7 da classificação periódica dos elementos. É um metal de transição branco prateado, pesado, sólido na temperatura ambiente, raramente encontrado na natureza.'

    icone.innerHTML = '<p id="indice">75</p>Re'
    txtTh.innerText = 'rênio'
})

bh.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O bóhrio ou Eka-Rênio é um elemento químico sintético, símbolo Bh, número atômico 107 que apresenta massa atómica [264] u.'

    icone.innerHTML = '<p id="indice">107</p>Bh'
    txtTh.innerText = 'bóhrio'
})

fe.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O ferro é um elemento químico, símbolo Fe, de número atômico 26 e massa atômica 56 u. À temperatura ambiente, o ferro encontra-se no estado sólido. '

    icone.innerHTML = '<p id="indice">26</p>Fe'
    txtTh.innerText = 'ferro'
})

ru.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O ruténio ou rutênio é um elemento químico de símbolo Ru de número atômico 44 e de massa atómica igual a 101 u.m.a. À temperatura ambiente, o rutênio encontra-se no estado sólido. É um elemento do grupo do ferro da classificação periódica dos elementos. '

    icone.innerHTML = '<p id="indice">44</p>Ru'
    txtTh.innerText = 'rutênio'
})

os.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O ósmio é um elemento químico, símbolo Os, de número atômico 76, com massa atómica 190,23 u e que está situado no grupo 8 da classificação periódica dos elementos. Trata-se de um metal de transição classificado no grupo da platina. À temperatura ambiente o ósmio encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">76</p>Os'
    txtTh.innerText = 'ósmio'
})

hs.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O hássio é um elemento químico artificial, símbolo Hs de número atômico 108 e de massa atómica 269 u pertencente ao grupo 8 da Classificação Periódica dos Elementos. Provavelmente é um sólido na temperatura ambiente. Não é encontrado na crosta terrestre.'

    icone.innerHTML = '<p id="indice">108</p>Hs'
    txtTh.innerText = 'hássio'
})

co.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O cobalto é um elemento químico, símbolo Co, número atômico 27 e massa atómica 58,93 uma, encontrado em temperatura ambiente no estado sólido. É um metal de transição situado no grupo 9 da Classificação Periódica dos Elementos.'

    icone.innerHTML = '<p id="indice">27</p>Co'
    txtTh.innerText = 'cobalto'
})

rh.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O ródio é um elemento químico de símbolo Rh de número atômico 45 e de massa atômica igual a 102,9 u. À temperatura ambiente, o ródio encontra-se no estado sólido. Está situado no grupo 9 da Classificação Periódica dos Elementos. É um metal de transição, pouco abundante, do grupo da platina.'

    icone.innerHTML = '<p id="indice">45</p>Rh'
    txtTh.innerText = 'ródio'
})

ir.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O irídio é um elemento químico, símbolo Ir, de número atômico 77 com massa atómica 192,2 u situado no grupo 9 da tabela periódica dos elementos. Trata-se de um metal de transição, duro, frágil, pesado, de cor branco prateado. É empregado em ligas de alta resistência que podem suportar elevadas temperaturas.'

    icone.innerHTML = '<p id="indice">77</p>Ir'
    txtTh.innerText = 'irídio'
})

mt.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O Meitnério é um elemento químico na tabela periódica com o símbolo Mt e número atômico 109 cuja massa atómica é de [268] u. É um elemento sintético cujo isótopo mais estável é o Mt-266 com uma meia-vida de 3.4 milissegundos.'

    icone.innerHTML = '<p id="indice">109</p>Mt'
    txtTh.innerText = 'Meitnério'
})

ni.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Níquel é um elemento químico de símbolo Ni de número atômico 28 e de massa atómica 58,7 uma. À temperatura ambiente, encontra-se no estado sólido. É um elemento de transição situado no grupo 10 da Classificação Periódica dos Elementos. '

    icone.innerHTML = '<p id="indice">28</p>Ni'
    txtTh.innerText = 'Níquel'
})

pd.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O paládio é um elemento químico de símbolo Pd e de número atómico igual a 46. À temperatura ambiente, o paládio encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">46</p>Pd'
    txtTh.innerText = 'paládio'
})

pt.addEventListener('mouseover',()=>{
    texto.innerHTML = 'A platina é um elemento químico de símbolo Pt de número atômico 78, e de massa atômica igual a 195,08 u. Ele é um elemento químico denso, maleável, dúctil, tem pouca reatividade, precioso, tem coloração prata branqueada e é um metal de transição. '

    icone.innerHTML = '<p id="indice">78</p>Pt'
    txtTh.innerText = 'platina'
})

ds.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O darmstádtio ou darmstácio é um elemento químico sintético de número atômico 110. O seu núcleo atômico mais estável possui massa atómica [281] u. Pertence ao grupo 10 da Classificação Periódica dos Elementos. Provavelmente é um sólido metálico.'

    icone.innerHTML = '<p id="indice">110</p>Ds'
    txtTh.innerText = 'darmstádtio'
})

cu.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O cobre é um elemento químico de símbolo Cu, número atômico 29 e de massa atómica 63,54 u. À temperatura ambiente o cobre encontra-se no estado sólido. Classificado como metal de transição, pertence ao grupo 11 da Classificação Periódica dos Elementos.'

    icone.innerHTML = '<p id="indice">29</p>Cu'
    txtTh.innerText = 'cobre'
})

ag.addEventListener('mouseover',()=>{
    texto.innerHTML = 'A prata ou argento é um elemento químico de símbolo Ag e de número atómico igual a 47. Sua massa atómica é 107,87u. À temperatura ambiente, a prata encontra-se no estado sólido. No teste de chama, assume a cor lilás.'

    icone.innerHTML = '<p id="indice">47</p>Ag'
    txtTh.innerText = 'prata'
})

au.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O ouro é um elemento químico de número atómico 79 que está situado no grupo 11 da tabela periódica, e de massa atómica 197 u. Na natureza, o ouro é produzido a partir da colisão de duas estrelas de nêutrons. O ouro é utilizado de forma generalizada em joalharia, indústria e eletrônica, bem como reserva de valor. '

    icone.innerHTML = '<p id="indice">79</p>Au'
    txtTh.innerText = 'ouro'
})

rg.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O roentgênio ou roentgénio, inicialmente chamado de ununúnio e eka-ouro, é um elemento químico, símbolo Rg, número atômico 111, com massa atómica [272] u, sendo um dos átomos mais pesados.'

    icone.innerHTML = '<p id="indice">111</p>Rg'
    txtTh.innerText = 'roentgênio'
})

zn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O zinco é um elemento químico de símbolo Zn, número atômico 30 com massa atómica 65, 4 unidade de massa atómica. À temperatura ambiente, o zinco encontra-se no estado sólido. Está situado no grupo 12 da Classificação Periódica dos Elementos.'

    icone.innerHTML = '<p id="indice">30</p>Zn'
    txtTh.innerText = 'zinco'
})

cd.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O cádmio é um elemento químico de símbolo Cd de número atômico 48 e de massa atómica igual a 112,4 u. À temperatura ambiente, o cádmio encontra-se no estado sólido. Está situado no grupo 12 da classificação periódica dos elementos. É um metal branco azulado, relativamente pouco abundante.'

    icone.innerHTML = '<p id="indice">48</p>Cd'
    txtTh.innerText = 'cádmio'
})

hg.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Mercúrio é um metal líquido à temperatura ambiente, conhecido desde os tempos da Grécia Antiga. Também é conhecido como hidrargírio, hidrargiro, azougue e prata-viva, entre outras denominações. Seu nome homenageia o deus romano Mercúrio, que era o mensageiro dos deuses. Essa homenagem é devida à fluidez do metal.'

    icone.innerHTML = '<p id="indice">80</p>Hg'
    txtTh.innerText = 'Mercúrio'
})

cn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O copernício, também chamado de copérnio, inicialmente chamado de unúnbio, unúmbio ou eka-mercúrio, é um elemento químico sintético, de símbolo Cn, número atômico 112, com massa atómica [285] u. É um elemento de transição, transurânico, pertencente ao grupo 12 da tabela periódica.'

    icone.innerHTML = '<p id="indice">112</p>Cn'
    txtTh.innerText = 'copernício'
})

/*Classe de Semimetais*/
b.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O boro é um elemento químico de símbolo B, número atômico 5 com massa atómica 11 u. Ele é exclusivamente produzido pela espalação de raios cósmicos e não pela nucleossíntese estelar e, por esse motivo, é um elemento escasso tanto no sistema solar quanto na crosta terrestre.'

    icone.innerHTML = '<p id="indice">5</p>B'
    txtTh.innerText = 'boro'})

si.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O silício é um elemento químico de símbolo Si de número atômico 14 com massa atômica igual a 28 u. À temperatura ambiente, o silício encontra-se no estado sólido. Foi descoberto pelo químico sueco Jöns Jacob Berzelius, em 1823.'

    icone.innerHTML = '<p id="indice">14</p>Si'
    txtTh.innerText = 'silício'
})

ge.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Elemento/Germânio O germânio é um elemento químico de símbolo Ge, número atômico 32 com massa atómica 72u. À temperatura ambiente, o germânio encontra-se no estado sólido. É um metal pertencente ao grupo 14 da Classificação Periódica dos Elementos.'

    icone.innerHTML = '<p id="indice">32</p>Ge'
    txtTh.innerText = 'germânio'
})

as.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O arsênio ou arsénio é um elemento químico de símbolo As com número atômico 33 e com massa atómica 75 u. É um semimetal encontrado no grupo 15 da Classificação Periódica dos Elementos.'

    icone.innerHTML = '<p id="indice">33</p>As'
    txtTh.innerText = 'arsênio'
})

sb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O antimônio ou antimónio, também chamado estíbio, é um elemento químico de símbolo Sb de número atômico 51 e de massa atómica igual a 121,75 u. À temperatura ambiente, o antimônio encontra-se no estado sólido. O símbolo Sb é uma abreviatura do seu nome na língua latina, Stibium, convencionalmente abreviado Sb.'

    icone.innerHTML = '<p id="indice">51</p>Sb'
    txtTh.innerText = 'antimônio'
})

te.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O telúrio é um elemento químico de símbolo Te, de número atômico 52 e com massa atómica 127,6 u. É um semi-metal pertencente ao grupo 16 da classificação periódica dos elementos. À temperatura ambiente, o telúrio encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">52</p>Ta'
    txtTh.innerText = 'telúrio'
})

po.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O polônio ou polónio é um elemento químico de símbolo Po e de número atómico igual a 84, com massa atómica 209 u. Pertence ao grupo VIA ou 16 da classificação periódica dos elementos. À temperatura ambiente, o polônio encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">84</p>Po'
    txtTh.innerText = 'polônio'
})

/*Classe de Outros metais*/
al.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O alumínio é um elemento químico de símbolo Al e número atômico 13 com massa 27 u. Na temperatura ambiente é sólido, sendo o elemento metálico mais abundante da crosta terrestre.'

    icone.innerHTML = '<p id="indice">13</p>Al'
    txtTh.innerText = 'alumínio'
})

ga.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Gálio é um elemento químico de símbolo Ga, de número atômico 31 e massa atómica igual a 69,7 u. É um metal pertencente ao grupo 13 da classificação periódica dos elementos. A temperaturas um pouco mais altas do que a temperatura ambiente encontra-se no estado líquido. Foi descoberto em 1875 por Lecoq de Boisbaudran.'

    icone.innerHTML = '<p id="indice">31</p>Ga'
    txtTh.innerText = 'Gálio'
})

In.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O índio (do latim indicum, índigo ou anil) é um elemento químico cujo símbolo In tem número atômico 49 (49 prótons e 49 elétrons) e de massa atómica igual a 114,8 u. À temperatura ambiente, o índio encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">49</p>In'
    txtTh.innerText = 'índio'
})

tl.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O tálio é um elemento químico de símbolo Tl, de número atômico 81 que apresenta massa atómica 204,4 u. É um metal pertencente ao grupo 13 da classificação periódica dos elementos. É mole e maleável e, a temperatura ambiente, encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">81</p>Tl'
    txtTh.innerText = 'tálio'
})

nh.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O nipónio ou nihônio é um elemento químico sintético, de símbolo químico Nh, número atômico 113, provavelmente de massa atómica 284 u. Pertence ao grupo 13 da tabela periódica.'

    icone.innerHTML = '<p id="indice">113</p>Nh'
    txtTh.innerText = 'nipónio'
})

sn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O estanho é um elemento químico de símbolo Sn, derivado do latim Stannum, com número atômico 50. Possui massa atômica de 118 710 u. Está situado no grupo 14 ou IVA da classificação periódica dos elementos.'

    icone.innerHTML = '<p id="indice">50</p>Sn'
    txtTh.innerText = 'estanho'
})

pb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O chumbo é um elemento químico de símbolo Pb, número atómico 82, com massa atómica igual a 207,2 u, pertencente ao grupo 14 da classificação periódica dos elementos químicos. À temperatura ambiente, o chumbo encontra-se no estado sólido. É um metal tóxico, denso, macio, maleável e mau condutor de eletricidade. '

    icone.innerHTML = '<p id="indice">82</p>Pb'
    txtTh.innerText = 'chumbo'
})

fl.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O Fleróvio é um elemento químico sintético, símbolo Fl, número atômico 114, de massa atómica [289] u, pertencente ao grupo 14 da tabela periódica. O nome foi adotado oficialmente pela IUPAC em 31 de maio de 2012. É um elemento transurânico, radioativo, provavelmente metálico, sólido e de aspecto prateado. '

    icone.innerHTML = '<p id="indice">114</p>Fl'
    txtTh.innerText = 'Fleróvio'
})

bi.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O bismuto é um elemento químico de símbolo Bi, de número atômico 83, de massa atómica igual a 208,9 u, encontrado no grupo 15 da classificação periódica dos elementos químicos. À temperatura ambiente, o bismuto encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">83</p>Bi'
    txtTh.innerText = 'bismuto'
})

mc.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O moscóvio é um elemento químico sintético, de símbolo Mc e número atômico 115. É um elemento transurânico, radioativo, provavelmente metálico e sólido cuja descoberta foi anunciada por cientistas russos e norte-americanos no início de 2004.'

    icone.innerHTML = '<p id="indice">115</p>Mc'
    txtTh.innerText = 'moscóvio'
})

lv.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O livermório é um elemento químico sintético, símbolo Lv, número atômico 116, com provável massa atómica de [292] u, pertencente ao grupo 16 da tabela periódica. O nome foi adotado pela IUPAC em 31 de maio de 2012. Antes disso era conhecido pelo nome sistemático Unun-héxio. '

    icone.innerHTML = '<p id="indice">116</p>Lv'
    txtTh.innerText = 'livermório'
})

/*Classe de Halogenios*/
f.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Flúor é um elemento químico, símbolo F, de número atômico 9 de massa atómica 19 u, situado no grupo dos halogênios da tabela periódica. Em sua forma biatômica e em CNTP, é um gás de coloração amarelo-pálido. É o mais eletronegativo e reativo de todos os elementos.'


icone.innerHTML = '<p id="indice">9</p>F'
    txtTh.innerText = 'Flúor'})

cl.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O cloro é um elemento químico, símbolo Cl, número atômico 17. Está contido no grupo dos halogênios e é o segundo halógeno mais leve, após o flúor. Sob condições normais é um gás de coloração amarelo esverdeada, onde forma as moléculas diatômicas.'

    icone.innerHTML = '<p id="indice">17</p>Cl'
    txtTh.innerText = 'cloro'
})

br.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O bromo é um elemento químico de símbolo Br, número atômico 35 e com massa atómica igual a 79,9 u. À temperatura ambiente, o bromo encontra-se no estado líquido. É vermelho, volátil e denso. Sua reatividade é intermediária entre a do cloro e a do iodo.'

    icone.innerHTML = '<p id="indice">35</p>Br'
    txtTh.innerText = 'bromo'
})

i.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O iodo é um elemento químico de símbolo I, de número atómico 53 e de massa atómica 126,9 u. À temperatura ambiente, o iodo encontra-se no estado sólido. É um não metal, do grupo dos halogênios da classificação periódica dos elementos.'

    icone.innerHTML = '<p id="indice">53</p>I'
    txtTh.innerText = 'iodo'})

at.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O ástato é um elemento químico de símbolo At e de número atômico igual a 85, com massa atômica de aproximadamente [210] u. É encontrado no Grupo 17 ou VIIA da classificação periódica dos elementos. À temperatura ambiente, o ástato encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">85</p>At'
    txtTh.innerText = 'ástato'
})

ts.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O tenesso ou tennesso é o elemento químico de número atômico 117. Tem o símbolo Ts, e ocupa o grupo 17 da tabela periódica. Elemento transurânico, provavelmente um sólido de coloração escura. É um átomo superpesado com massa atômica prevista de [291] u, altamente instável, sem isótopos estáveis conhecidos. '

    icone.innerHTML = '<p id="indice">117</p>Ts'
    txtTh.innerText = 'tenesso'
})

/*Classe de Lantanideos*/
la.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O lantânio é um elemento químico de símbolo químico de número atômico 57, com massa atômica 138,9 u. É um metal de transição interna, lantanídeo, terra rara, pertencente ao grupo 3 da classificação periódica dos elementos. À temperatura ambiente, o lantânio encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">57</p>La'
    txtTh.innerText = 'lantânio'
})

ce.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O cério é um elemento químico de símbolo Ce, número atômico 58 com massa atómica 140,1 u. É um elemento metálico da série transição interna encontrado principalmente nos minerais monazita e bastnasita. À temperatura ambiente, o cério encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">58</p>Ce'
    txtTh.innerText = 'cério'
})

pr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O praseodímio é um elemento químico de símbolo Pr e número atômico 59 com massa atómica 140,9 u que à temperatura ambiente se encontra no estado sólido. Faz parte do grupo das terras raras, ocorrendo naturalmente nos minerais monazita e bastnasita.'

    icone.innerHTML = '<p id="indice">59</p>Pr'
    txtTh.innerText = 'praseodímio'
})

nd.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O neodímio é um elemento químico de símbolo Nd e de número atômico igual a 60, e massa atómica 144,2 u. À temperatura ambiente, o neodímio encontra-se no estado sólido. Faz parte do grupo das terras raras.'

    icone.innerHTML = '<p id="indice">60</p>Nd'
    txtTh.innerText = 'neodímio'
})

pm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O promécio é um elemento químico de símbolo Pm e de número atómico igual a 61, e massa atómica 145 u. À temperatura ambiente, o promécio encontra-se no estado sólido. Faz parte do grupo das terras raras. A principal aplicação é como emissor de radiações beta para produzir medidores de espessuras.'

    icone.innerHTML = '<p id="indice">61</p>Pm'
    txtTh.innerText = 'promécio'
})

sm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O samário é um elemento químico de símbolo Sm e de número atómico igual a 62, com massa atómica 150,36 u. À temperatura ambiente, o samário encontra-se no estado sólido. Faz parte do grupo das terras raras. É utilizado em lâmpadas de eletrodos de carbono na indústria cinematográfica.'

    icone.innerHTML = '<p id="indice">62</p>Sm'
    txtTh.innerText = 'samário'
})

eu.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O európio é um elemento químico de símbolo Eu, de número atômico 63 que apresenta massa atómica 152 u. É um metal de transição interna fazendo parte do grupo das terras raras. À temperatura ambiente, o európio encontra-se no estado sólido. É branco prateado, bastante dúctil, e é o mais reativo das terras raras.'

    icone.innerHTML = '<p id="indice">63</p>Eu'
    txtTh.innerText = 'európio'
})

gd.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O gadolínio é um elemento químico de símbolo Gd e de número atómico igual a 64, com massa atómica 157,25 u. À temperatura ambiente, o gadolínio encontra-se no estado sólido. Faz parte do grupo das terras raras. Foi descoberto em 1880 por Jean Charles Galissard de Marignac.'

    icone.innerHTML = '<p id="indice">64</p>Gd'
    txtTh.innerText = 'gadolínio'
})

tb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O térbio é um elemento químico de símbolo Tb e de número atómico igual a 65, com massa atómica 158,9 u. À temperatura ambiente, o térbio encontra-se no estado sólido. Faz parte do grupo das terras raras. É usado em ligas metálicas para a produção de dispositivos eletrônicos.'

    icone.innerHTML = '<p id="indice">65</p>Tb'
    txtTh.innerText = 'térbio'
})

dy.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O disprósio é um elemento químico metálico de símbolo Dy e de número atómico igual a 66, com massa atómica 162,5 u. À temperatura ambiente, o disprósio encontra-se no estado sólido. Faz parte do grupo das terras raras.'

    icone.innerHTML = '<p id="indice">66</p>Dy'
    txtTh.innerText = 'disprósio'
})

ho.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O hólmio é um elemento químico de símbolo Ho e de número atômico 67 que apresenta massa atómica 164,9 u.'

    icone.innerHTML = '<p id="indice">67</p>Ho'
    txtTh.innerText = 'hólmio'
})

er.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O érbio é um elemento químico de símbolo Er, de número atômico 68 com massa atómica 167,2 u, pertencente ao grupo dos lantanídios. À temperatura ambiente, o Érbio encontra-se no estado sólido. parte do grupo das terras raras. '

    icone.innerHTML = '<p id="indice">68</p>Er'
    txtTh.innerText = 'érbio'
})

tm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O túlio é um elemento químico de símbolo Tm, número atômico 69 com massa atómica igual a 168,9 u. À temperatura ambiente, o túlio encontra-se no estado sólido. Faz parte do grupo das terras raras. É encontrado com outros "terras raras" no mineral monazita.'

    icone.innerHTML = '<p id="indice">69</p>Tm'
    txtTh.innerText = 'túlio'
})

yb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O itérbio ou yttérbio é um elemento químico da tabela periódica que apresenta símbolo Yb e número atômico 70 com massa atómica 173 u. O itérbio é um elemento metálico prateado e macio. É uma terra rara da série dos lantanídios que é encontrado nos minerais gadolinita, monazita e xenótimo. '

    icone.innerHTML = '<p id="indice">70</p>Yb'
    txtTh.innerText = 'itérbio'
})

lu.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O lutécio é um elemento químico de símbolo Lu, de número atômico 71 apresenta massa atômica 175 u. À temperatura ambiente, o lutécio encontra-se no estado sólido. Faz parte do grupo das terras raras. Por ser um elemento muito caro, sua aplicação é limitada, entretanto, encontra alguns usos na indústria do petróleo.'

    icone.innerHTML = '<p id="indice">71</p>Lu'
    txtTh.innerText = 'lutécio'
})

/*Classe de Actinidios*/
ac.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O actínio é um elemento químico de símbolo Ac, de número atômico 89 com massa atómica 227,0 u. À temperatura ambiente, o actínio encontra-se no estado sólido. É uma das terras raras e dá nome a um grupo de metais de transição interna denominados actinídeos. Pertence ao grupo 3 da classificação periódica dos elementos.'

    icone.innerHTML = '<p id="indice">89</p>Ac'
    txtTh.innerText = 'actínio'
})

th.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Tório é um elemento químico de símbolo Th e de número atômico igual a 90, com massa atómica aproximada de 232,0 u. À temperatura ambiente, encontra-se no estado sólido. Foi descoberto em 1828 por Jöns Jacob Berzelius. Recebeu este nome homenagem a Thor, deus escandinavo do trovão da antiga religião nórdica.'

    icone.innerHTML = '<p id="indice">90</p>Th'
    txtTh.innerText = 'Tório'
})

pa.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O protactínio é um elemento químico de símbolo Pa e de número atômico igual a 91, com massa atómica aproximada de 231,0 u. À temperatura ambiente, o protactínio encontra-se no estado sólido. Não existe atualmente nenhum uso para o protactínio fora do âmbito da pesquisa científica básica.'

    icone.innerHTML = '<p id="indice">91</p>Pa'
    txtTh.innerText = 'protactínio'
})

u.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O urânio, é um elemento químico de símbolo U e de massa atômica igual a 238 u, apresenta número atômico 92, é um elemento natural e comum, muito mais abundante que a prata, abundância comparável à do molibdênio e arsênio, porém, quatro vezes menos abundante que o tório.'

    icone.innerHTML = '<p id="indice">92</p>U'
    txtTh.innerText = 'urânio'})

np.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O neptúnio ou netúnio é um elemento químico sintético de símbolo Np, com número atômico 93. A sua massa atómica é 237,0482 u. À temperatura ambiente, o neptúnio encontra-se no estado sólido. É o quarto elemento da família dos actinídeos.'

    icone.innerHTML = '<p id="indice">93</p>Np'
    txtTh.innerText = 'neptúnio'
})

pu.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O plutónio ou plutônio é um elemento químico representado pelo símbolo Pu e de número atômico igual a 94. À temperatura ambiente, o plutônio encontra-se no estado sólido.'

    icone.innerHTML = '<p id="indice">94</p>Pu'
    txtTh.innerText = 'plutônio'
})

am.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O amerício é um elemento químico radioativo e transurânico com símbolo Am e número atômico 95. É um elemento actínio, localizado na tabela periódica abaixo do elemento európio, um lantanídio, e portanto por analogia, foi nomeado a partir de outro continente, a América.'

    icone.innerHTML = '<p id="indice">95</p>Am'
    txtTh.innerText = 'amerício'
})

cm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O cúrio é um elemento químico de símbolo Cm, de número atômico 96 com massa atômica 247 u. É um elemento metálico, sintético, transurânico, do grupo dos actinídeos.'

    icone.innerHTML = '<p id="indice">96</p>Cm'
    txtTh.innerText = 'cúrio'
})

bk.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O berquélio ou berkélio é um elemento químico de símbolo Bk, número atômico 97 que apresenta massa atómica igual a [247] u. É um elemento metálico, sintético, transurânico, pertencente ao grupo dos actinídeos na tabela periódica dos elementos. O berquélio-243 foi o primeiro isótopo sintetizado deste elemento.'

    icone.innerHTML = '<p id="indice">97</p>Bk'
    txtTh.innerText = 'berquélio'
})

cf.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O califórnio é um elemento químico de símbolo Cf, número atômico 98 e de massa atómica igual a [251] u. É um elemento metálico, sintético, transurânico, sólido, provavelmente de aspecto prateado, encontrado no grupo dos actinídeos da tabela periódica dos elementos.'

    icone.innerHTML = '<p id="indice">98</p>Cf'
    txtTh.innerText = 'califórnio'
})

es.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O einstênio ou einsténio é um elemento químico de símbolo Es, número atômico 99 e com massa atômica [252] u. É um elemento metálico, transurânico e radioactivo, pertencente ao grupo dos actinídeos. O elemento foi identificado pelo grupo de pesquisa formado por G. R. Choppin, A. Ghiorso, B. G. Harvey e C. G.'

    icone.innerHTML = '<p id="indice">99</p>Es'
    txtTh.innerText = 'einstênio'
})

fm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O férmio é um elemento químico sintético, de símbolo Fm, número atômico 100 com massa atómica [257] u. É radioativo, metálico, transurânico, e faz parte do grupo dos actinídeos. Foi descoberto em 1955 por uma equipe liderada por Albert Ghiorso. É produzido pelo bombardeamento de plutônio com nêutron.'

    icone.innerHTML = '<p id="indice">100</p>Fm'
    txtTh.innerText = 'férmio'
})

md.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O mendelévio é um elemento químico de símbolo Md, número atômico 101 e de massa atómica igual a 258 u. É metálico, radioativo, transurânico, do grupo dos actinídeos. O mendelévio foi sintetizado pela primeira vez em 1955 por uma equipe de cientistas norte-americana liderada por Albert Ghiorso.'

    icone.innerHTML = '<p id="indice">101</p>Md'
    txtTh.innerText = 'mendelévio'
})

no.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Nobélio é um elemento químico da Tabela Periódica, símbolo No, número atômico 102, de massa atómica 259 u. É metálico, radioativo, transurânico, do grupo dos actinídeos. É sintetizado bombardeando o cúrio-248 ou califórnio-249 com íons carbono.'

    icone.innerHTML = '<p id="indice">102</p>No'
    txtTh.innerText = 'Nobélio'
})

lr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O laurêncio ou lawrêncio é um elemento químico sintético, símbolo Lr, número atômico 103 e com massa atómica [262] u. É um elemento radioativo, de curta-duração, transurânico, último elemento do grupo dos actinídeos'

    icone.innerHTML = '<p id="indice">103</p>Lr'
    txtTh.innerText = 'laurêncio'
})