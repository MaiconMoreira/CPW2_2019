/**
 * Utilizaremos a variavel global do jquery ($) para carregar
 * a mascara de telefone assim que a pagina for carregada
 */
$(document).ready(function(){
    //implementa a mascara de telefone
    $('#telefone').mask('(00) 00000-0000');
})