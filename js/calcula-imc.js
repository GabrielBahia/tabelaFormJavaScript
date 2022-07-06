
// DOM ou Document Object Model = variável document do JavaScript

/*alert("Olá, Mundo!");
console.log("Olá, Mundo!"); // Aparece no console(F12)
var title = document.querySelector(".title"); // Buscar partes do Document
console.log(title);
console.log(title.textContent);
title.textContent = "Aparecida Nutricionista";*/

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");


    if ((peso <= 0 || peso >= 1000) || (altura <= 0 || altura >= 3.00)) {
        console.log("Valor inválido");
        tdImc.textContent = "Valor inválido";
        paciente.classList.add("paciente-invalido");
    }
    else {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura*altura);

    return imc.toFixed(2);
}