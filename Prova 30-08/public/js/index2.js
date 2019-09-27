function contido(){
    let truco1 = document.getElementById('texto1').value.toLowerCase();
    let truco2 = document.getElementById('texto2').value.toLowerCase();
    let resposta = '';

    if(truco1 && truco2){
        if(truco1.includes(truco2)){
             resposta = 'Esta contido'
        }

        else{
            resposta = 'Nao esta contido';
        }
    }
    document.getElementById('resultado').innerHTML = resposta;
}

