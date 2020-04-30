var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    // console.log(paciente)
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    var tdImc = paciente.querySelector(".info-imc");

    if (!pesoEhValido) {
        // console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }


    if (!validaAltura(altura)){
        
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    return peso >=0 && peso < 1000 ? true : false;
}

function validaAltura(altura){
    return altura >= 0 && altura <= 3.0 ? true : false;
}

function calculaImc(peso, altura){
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}