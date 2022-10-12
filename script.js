function ConverterEmReal() {
  var valorEmDolar = document.getElementById("valor");
  var valor = valorEmDolar.value;

  var resultado = parseFloat(valor);
  var soma = resultado * 5.6;
  console.log(soma);

  var valorEmReal = document.getElementById("valorConvertido");
  var valorConvertido = (document.querySelector("#valorConvertido").innerHTML =
    "O valor em real é R$ " + soma);
}

function ConverterEmEuro() {
  var valorEmEuro = document.getElementById("dinheiro");
  var valor = valorEmEuro.value;

  var resultado = parseFloat(valor);
  var soma = resultado * 0.98;
  console.log(soma);

  var valorEmeuro = document.getElementById("valorConvertido");
  var valorConvertido = (document.querySelector("#valorConvertido").innerHTML =
    "O valor em Euro é " + soma + "$");
}