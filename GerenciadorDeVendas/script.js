var masculino = document.querySelector('#masculino')
var imagem = document.querySelector('img')
var iconeSexo = document.querySelector('#escolha-sexo i')
var iconeTamanho = document.querySelector('#tamanho i')
var tamanhoMasculino = document.querySelector('#tamanhos-masculinos')
var tamanhoFeminino = document.querySelector('#tamanhos-femininos')
var quantidade = document.querySelector('#quantidade input')
var dinheiro = document.querySelector('#quantidade label')

function adicionaFoto() {
    if (masculino.checked) {    
        imagem.style.display = 'inline'
        iconeSexo.style.display = 'inline'
        imagem.src = './imgs/man-mask.svg'
        tamanhoMasculino.style.display = 'inline'
        tamanhoFeminino.style.display = 'none'
        iconeTamanho.style.display = 'none'
    } else {
        imagem.style.display = 'inline'
        iconeSexo.style.display = 'inline'
        imagem.src = './imgs/woman-mask.svg'
        tamanhoFeminino.style.display = 'inline'
        tamanhoMasculino.style.display = 'none'
        iconeTamanho.style.display = 'none'

    }
}


function adicionaChecado() {
    iconeTamanho.style.display = 'inline'
}


quantidade.addEventListener('change', function(event){
    console.log(quantidade.value)
    dinheiro.innerHTML = `<label>X 8 = <strong>R$${quantidade.value * 8},00</strong></label>`
})