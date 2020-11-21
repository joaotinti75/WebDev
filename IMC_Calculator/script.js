function calculaIMC() {
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let imc = peso / (altura * altura)
    if (peso != "" && altura != "") {
        return imc.toFixed(2)
    }
}

function classificaIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do Peso"
    }
    else if (imc >= 18.5 && imc < 24.99) {
        return "Peso normal"
    }
    else if (imc >= 25 && imc <= 29.99) {
        return "Sobrepeso"
    }
    else if (imc >= 30 && imc <= 34.99) {
        return "Obesidade grau 1"
    }
    else if (imc >= 35 && imc <= 39.99) {
        return "Obesidade grau 2"
    }
    else {
        return "Obesidade Mórbida"
    }
}


document.querySelector("#calcular").addEventListener("click", function() {
  var resultado_imc = document.querySelector("#resultado-imc");
  var resultado_classificacao = document.querySelector("#resultado-classificacao");
  imc = calculaIMC()
  classificacao = classificaIMC(imc)
  if (imc == undefined) {
      alert("Informe os dados para o cálculo")
  }
  else {
    resultado_imc.innerHTML = `Seu IMC: ${imc}`
    resultado_classificacao.innerHTML = `Classificação: ${classificacao}`
    //alert(`Seu IMC é ${imc}, que é classificado como ${classificacao}`)
  }
})
