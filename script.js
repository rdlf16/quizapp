const perguntas = [
    {
        pergunta: 'Quem descobriu o brasil?',
        respostas: [
            { a: 'Pedro Álvares Cabral' },
            { b: 'Papa João Paulo II' },
            { c: 'Fred Mercury' },
            { d: 'Dean Winchester' },
        ],
        alternativaCorreta: 'a'
    },
    {
        pergunta: 'Que dia é hoje?',
        respostas: [
            { a: '22/09/2021' },
            { b: '20/09/2020' },
            { c: '21/09/2021' },
            { d: '20/09/2021' },
        ],
        alternativaCorreta: 'd'
    }, {
        pergunta: 'Quem foi o maior piloto brasileiro de F1?',
        respostas: [
            { a: 'Dominic Toretto' },
            { b: 'Emerson Fittipaldi' },
            { c: 'Ayrton Senna' },
            { d: 'Nelson Piquet' },
        ],
        alternativaCorreta: 'c'
    }, {
        pergunta: 'Qual é o melhor desenho?',
        respostas: [
            { a: 'Yu-Gi-Ho' },
            { b: 'Pokemon' },
            { c: 'Dragon ball z' },
            { d: 'Naruto' },
        ],
        alternativaCorreta: 'd'
    }
]
let atual = 0;
let score = 0;
const botao = document.querySelector('[data-botao]')
botao.addEventListener('click', next)
onQuiz()

function onQuiz() {
    if (atual >= perguntas.length) {
        
        const container = document.querySelector('.container')
        container.innerHTML = `
        <p class="resultado">Sua pontuação foi de ${score}/${perguntas.length}.</p>
        <button class="alerta" onclick=location.reload()>Recomeçar</button>
        `

    } else {

        limparChecked()
        const tituloPergunta = document.querySelector('[data-titulo]')
        tituloPergunta.textContent = perguntas[atual].pergunta
    
        perguntas[atual].respostas.forEach(resposta => {
            let itemEl = document.querySelector(`[data-resposta='${Object.keys(resposta)}']`)
            itemEl.innerHTML = `${resposta[Object.keys(resposta)]}`
        })
    }
}

function next() {
    const inputs = document.querySelectorAll('[name="resposta"]')
    inputs.forEach(input => {
        if (input.checked) {
            const resposta = input.nextElementSibling.getAttribute('data-resposta')
            if (resposta === perguntas[atual].alternativaCorreta) {
                score++
            }
            atual++
        }
    })
    onQuiz()
}

function limparChecked() {
    const inputs = document.querySelectorAll('[name="resposta"]')
    inputs.forEach(input => {
        input.checked = false
    })
}