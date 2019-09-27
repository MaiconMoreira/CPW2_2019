/**
 * Nosso BD fake!"
 * (in memory DB).
 */

 var contatos = [];
 

 function salvarContato(event) {
     //inibi a recara da pagina
    event.preventDefault();

    //recupera os valores do formulario
    //$ -> document.querySelector
    //val -> value

     let nome = $('#nome').val();
     let telefone = $('#telefone').val();
     let email = $('#email').val();
     let dataNascimento = $('#dataNascimento').val();

      //criar umk objeto de contato
 let contato = {nome,telefone,email,dataNascimento};

 //adiciona um contato no nosso BD(no final do vetor)
 contatos.push(contato);

 console.log(contatos);
     
 }
