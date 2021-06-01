const texto = document.querySelector('#informativo')
const info = document.querySelector('#info')

/*Função para voltar o texto pro inicial depois tirar o mouse de cima do elemento*/
celulas.forEach(function(elemento){
    elemento.onmouseleave = ()=>{
        texto.innerHTML = 'A Tabela Periódica é um modelo que agrupa todos os elementos químicos conhecidos e suas propriedades. Eles estão organizados em ordem crescente correspondente aos números atômicos (número de prótons).'
    }
})


/*Funções reponsaveis por exibir detalhes dos elementos quando o mouse fica sobre ele*/

/*Classe de Não Metais*/
h.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É o mais abundante dos elementos químicos do Universo. Geralmente pode ser encontrado no estado atômico e na forma de plasma, estimando cerca de 75% da massa elementar, cujas propriedades são distintas daquela do hidrogênio molecular ou gás hidrogênio (H2).'

    icone.innerHTML = '<p id="indice">1</p>H'
})

c.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O carbono (do latim carbo, carvão) é um elemento químico, símbolo C, número atômico 6, massa atómica 12 u, sólido à temperatura ambiente. Como um membro do grupo 14 da tabela periódica, ele é um não metal e tetravalente - fazendo quatro elétrons disponíveis na forma de ligações covalentes.'

    icone.innerHTML = '<p id="indice">6</p>C'
})

n.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O azoto, nitrogénio ou nitrogênio é um elemento químico com símbolo N, número atómico 7 e de massa atómica 14,00674 u, representado no grupo 7 da tabela periódica. Pertence à família dos pnicogénios.'
    icone.innerHTML = '<p id="indice">7</p>N'
})

o.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O oxigénio ou oxigênio é um elemento químico de número atómico 8 e símbolo O representando com massa atómica 16 u. Constitui parte do grupo dos calcogénios e é um não metal reactivo e um forte agente oxidante que facilmente forma compostos com a maioria doutros elementos.'
    icone.innerHTML = '<p id="indice">8</p>O'
})

p.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O fósforo é um elemento químico de símbolo P, número atômico 15 e massa atómica igual a 30,973762 u.'
    icone.innerHTML = '<p id="indice">15</p>P'
})

s.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O enxofre ou súlfur é um elemento químico de símbolo S, com número atômico 16 e massa atômica 32 u. À temperatura ambiente, o enxofre encontra-se no estado sólido.'
    icone.innerHTML = '<p id="indice">16</p>S'
})

se.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O selênio ou selénio é um elemento químico de símbolo Se, número atômico 34 e com massa atómica de 78 u. Em condições normais de temperatura e pressão, o selênio encontra-se no estado sólido. É um não metal do grupo dos calcogênios da Classificação Periódica dos Elementos.'
    icone.innerHTML = '<p id="indice">34</p>Se'
})

/*Classe de Gases Nobres*/
he.addEventListener('mouseover',()=>{
    texto.innerHTML = 'he'
})

ne.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ne'
})

ar.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ar'
})

kr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'kr'
})

xe.addEventListener('mouseover',()=>{
    texto.innerHTML = 'xe'
})

rn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'rn'
})

og.addEventListener('mouseover',()=>{
    texto.innerHTML = 'og'
})

/*Classe de Metais Alcalinos*/
li.addEventListener('mouseover',()=>{
    texto.innerHTML = 'li'
})

na.addEventListener('mouseover',()=>{
    texto.innerHTML = 'na'
})

k.addEventListener('mouseover',()=>{
    texto.innerHTML = 'k'
})

rb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'rb'
})

cs.addEventListener('mouseover',()=>{
    texto.innerHTML = 'cs'
})

fr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'fr'
})

/*Classe de Metais Alcalinos Terrossos*/
be.addEventListener('mouseover',()=>{
    texto.innerHTML = 'br'
})

mg.addEventListener('mouseover',()=>{
    texto.innerHTML = 'mg'
})

ca.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ca'
})

sr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'sr'
})

ba.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ba'
})

ra.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ra'
})

/*Classe de Metais de Transições*/
sc.addEventListener('mouseover',()=>{
    texto.innerHTML = 'sc'
})

y.addEventListener('mouseover',()=>{
    texto.innerHTML = 'y'
})

ti.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ti'
})

zr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'zr'
})

hf.addEventListener('mouseover',()=>{
    texto.innerHTML = 'hf'
})

rf.addEventListener('mouseover',()=>{
    texto.innerHTML = 'rf'
})

v.addEventListener('mouseover',()=>{
    texto.innerHTML = 'v'
})

nb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'nb'
})

ta.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ta'
})

db.addEventListener('mouseover',()=>{
    texto.innerHTML = 'db'
})

cr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'cr'
})

mo.addEventListener('mouseover',()=>{
    texto.innerHTML = 'mo'
})

w.addEventListener('mouseover',()=>{
    texto.innerHTML = 'w'
})

sg.addEventListener('mouseover',()=>{
    texto.innerHTML = 'sg'
})

mn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'mn'
})

tc.addEventListener('mouseover',()=>{
    texto.innerHTML = 'tc'
})

re.addEventListener('mouseover',()=>{
    texto.innerHTML = 're'
})

bh.addEventListener('mouseover',()=>{
    texto.innerHTML = 'bh'
})

fe.addEventListener('mouseover',()=>{
    texto.innerHTML = 'fe'
})

ru.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ru'
})

os.addEventListener('mouseover',()=>{
    texto.innerHTML = 'os'
})

hs.addEventListener('mouseover',()=>{
    texto.innerHTML = 'hs'
})

co.addEventListener('mouseover',()=>{
    texto.innerHTML = 'co'
})

rh.addEventListener('mouseover',()=>{
    texto.innerHTML = 'rh'
})

ir.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ir'
})

mt.addEventListener('mouseover',()=>{
    texto.innerHTML = 'mt'
})

ni.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ni'
})

pd.addEventListener('mouseover',()=>{
    texto.innerHTML = 'pd'
})

pt.addEventListener('mouseover',()=>{
    texto.innerHTML = 'pt'
})

ds.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ds'
})

cu.addEventListener('mouseover',()=>{
    texto.innerHTML = 'cu'
})

ag.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ag'
})

au.addEventListener('mouseover',()=>{
    texto.innerHTML = 'au'
})

rg.addEventListener('mouseover',()=>{
    texto.innerHTML = 'rg'
})

zn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'zn'
})

cd.addEventListener('mouseover',()=>{
    texto.innerHTML = 'cd'
})

hg.addEventListener('mouseover',()=>{
    texto.innerHTML = 'hg'
})

cn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'cn'
})

/*Classe de Semimetais*/
b.addEventListener('mouseover',()=>{
    texto.innerHTML = 'b'
})

si.addEventListener('mouseover',()=>{
    texto.innerHTML = 'si'
})

ge.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ge'
})

as.addEventListener('mouseover',()=>{
    texto.innerHTML = 'as'
})

sb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'sb'
})

te.addEventListener('mouseover',()=>{
    texto.innerHTML = 'te'
})

po.addEventListener('mouseover',()=>{
    texto.innerHTML = 'po'
})

/*Classe de Outros metais*/
al.addEventListener('mouseover',()=>{
    texto.innerHTML = 'al'
})

ga.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ga'
})

In.addEventListener('mouseover',()=>{
    texto.innerHTML = 'in'
})

tl.addEventListener('mouseover',()=>{
    texto.innerHTML = 'tl'
})

nh.addEventListener('mouseover',()=>{
    texto.innerHTML = 'nh'
})

sn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'sn'
})

pb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'pb'
})

fl.addEventListener('mouseover',()=>{
    texto.innerHTML = 'fl'
})

bi.addEventListener('mouseover',()=>{
    texto.innerHTML = 'bi'
})

mc.addEventListener('mouseover',()=>{
    texto.innerHTML = 'mc'
})

lv.addEventListener('mouseover',()=>{
    texto.innerHTML = 'lv'
})

/*Classe de Halogenios*/
f.addEventListener('mouseover',()=>{
    texto.innerHTML = 'f'
})

cl.addEventListener('mouseover',()=>{
    texto.innerHTML = 'cl'
})

br.addEventListener('mouseover',()=>{
    texto.innerHTML = 'br'
})

i.addEventListener('mouseover',()=>{
    texto.innerHTML = 'i'
})

at.addEventListener('mouseover',()=>{
    texto.innerHTML = 'at'
})

ts.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ts'
})

/*Classe de Lantanideos*/
la.addEventListener('mouseover',()=>{
    texto.innerHTML = 'la'
})

ce.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ce'
})

pr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'pr'
})

nd.addEventListener('mouseover',()=>{
    texto.innerHTML = 'nd'
})

pm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'pm'
})

sm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'sm'
})

eu.addEventListener('mouseover',()=>{
    texto.innerHTML = 'eu'
})

gd.addEventListener('mouseover',()=>{
    texto.innerHTML = 'gd'
})

tb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'tb'
})

dy.addEventListener('mouseover',()=>{
    texto.innerHTML = 'dy'
})

ho.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ho'
})

er.addEventListener('mouseover',()=>{
    texto.innerHTML = 'er'
})

tm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'tm'
})

yb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'yb'
})

lu.addEventListener('mouseover',()=>{
    texto.innerHTML = 'lu'
})

/*Classe de Actinidios*/
ac.addEventListener('mouseover',()=>{
    texto.innerHTML = 'ac'
})

th.addEventListener('mouseover',()=>{
    texto.innerHTML = 'th'
})

pa.addEventListener('mouseover',()=>{
    texto.innerHTML = 'pa'
})

u.addEventListener('mouseover',()=>{
    texto.innerHTML = 'u'
})

np.addEventListener('mouseover',()=>{
    texto.innerHTML = 'np'
})

pu.addEventListener('mouseover',()=>{
    texto.innerHTML = 'pu'
})

am.addEventListener('mouseover',()=>{
    texto.innerHTML = 'am'
})

cm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'cm'
})

bk.addEventListener('mouseover',()=>{
    texto.innerHTML = 'bk'
})

cf.addEventListener('mouseover',()=>{
    texto.innerHTML = 'cf'
})

es.addEventListener('mouseover',()=>{
    texto.innerHTML = 'es'
})

fm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'fm'
})

md.addEventListener('mouseover',()=>{
    texto.innerHTML = 'md'
})

no.addEventListener('mouseover',()=>{
    texto.innerHTML = 'no'
})

lr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'lr'
})