/** 
 * imprime mensagem no console
 * do browser
 */
console.log('Fala negada!');
//alert('Fala fidido') emitir janela de alerta

/**
 * pega o span cujo id eh igual a "mensagem"
 * e coloca na variavel mensagem.
 */
var mensagem = document.getElementById('mensagem');

//coloca um texto dentro do span    
mensagem.innerHTML = 'Fala bixado!';

/**
 * injeta pum paragrafo dentro da div
 * "conteiner"
 */

/**
 * cria uma tag p e salva
 * na variavel paragrafo
 */
var paragrafo = document.createElement('p');
paragrafo.innerHTML = `
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus augue ex, dictum
        ut tempor non, sagittis non nulla. Nullam non
     elit massa. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per 
        inceptos himenaeos. Aliquam feugiat enim 
        sit amet est dapibus lacinia sed non urna.
     Sed sed sollicitudin neque, id aliquet turpis.
      Morbi faucibus quam at consectetur sagittis. 
      Vestibulum non lacus id purus aliquam elementum 
      eu condimentum leo. Ut tincidunt sollicitudin lectus
       id mollis. Pellentesque non pharetra diam, semper auctor 
       magna. Donec placerat pellentesque nisi, ut pretium purus 
       consectetur at. Pellentesque diam urna, tempor non vulputate et
       , scelerisque et justo.
 `;

var conteiner = document.getElementById('conteiner');
/**
 * anexa a tag de paragrafo dentro da
 * div conteiner
 */
conteiner.appendChild(paragrafo);