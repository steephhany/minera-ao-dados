const url ="https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function vizualizarInformaçõesGlobais() {
const res = await fetch(url)
const dados  = await res.json()
console.log(dados);

const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
const horas = parseInt(dados.tempo_medio)
const minutos =Math.round((dados.tempo_medio - horas) * 100)



const paragrafo = document.createElement('p')
paragrafo.classList.add('grafico-container__texto')
paragrafo.innerHTML = `Você Sabia que o mundo tem <span>${pessoasNoMundo}</span> de pessoas e aproximadamente<span>
${pessoasConectadas}</span> estão conectadas em alguma rede social e passam em media <span>${horas}</span><span>:</span><span>${minutos}</span>`
const container = document.getElementById('graficos-container')
container.appendChild(paragrafo)








}
vizualizarInformaçõesGlobais();                                                                                            