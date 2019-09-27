function palindromo(){
    let texto = '';
    let palavra = document.getElementById('texto1').value;
    let minuscula = palavra.toLowerCase();
    palavra = minuscula.normalize('NFD').replace(/([\u0300-\u036f] [^0-9a-zA-Z])/g, '');
    console.log(minuscula);
    if(palavra){
         reversa = palavra.split('').reverse().join('');
    }
    console.log(reversa);
    if(palavra === reversa){
        texto = 'é palíndromo'
    }
    else{
        texto = 'nao é palíndromo'
    }
    document.getElementById('frase').innerHTML = texto;
}
