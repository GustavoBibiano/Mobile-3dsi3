///<reference path="pessoa.ts"/>
namespace empresa{
    //instancia de classe
    let p = new Pessoa();
    p.setNome("Gustavo");
    p.setIdade(18);
    p.setCpf("000.000.000-00");

    document.getElementById("nome").textContent = p.getNome();
}