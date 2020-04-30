var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function (){

    var filtro = this.value;

    var pacientes = document.querySelectorAll(".paciente");
 
    
    if(filtro.length > 0) {

        pacientes.forEach(function(paciente){
            
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(filtro, "i");

            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        })
    } else {
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        })
    } 
})






