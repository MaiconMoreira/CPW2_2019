/**
 * Nosso BD fake!
 * (in memory DB)
 */
var contatos = [
   {
      nome:'Sidney alvares calves',
      telefone:'(67)9 9287-7374',
      email:'sidney@email.com',
      dataNascimento:'26/09/1988'
   },
   {
    nome:'Maicon moreira',
    telefone:'(67)9 9905-7514',
    email:'maiconmoreirams@hotmail.com',
    dataNascimento:'26/09/1988'
   },
   {
    nome:'Maicon gordao',
    telefone:'(67)9 9984-3524',
    email:'maiconmoreirams@hotmail.com',
    dataNascimento:'26/09/1988'
   },
   {
    nome:'Maicon gordao',
    telefone:'(67)9 9984-3524',
    email:'maiconmoreirams@hotmail.com',
    dataNascimento:'26/09/1988'
   },
   {
    nome:'Maicon gordao',
    telefone:'(67)9 9984-3524',
    email:'maiconmoreirams@hotmail.com',
    dataNascimento:'26/09/1988'
   }
];
renderizarTabelaContatos();
renderizarCardsContatos();

function salvarContato(event) {
    // Inibe a recarga da página
    event.preventDefault();

    /**
     * $ -> document.querySelector
     * val() -> value
     */
    // Recupera os valores do formulário
    let nome = $('#nome').val();
    let telefone = $('#telefone').val();
    let email = $('#email').val();
    let dataNascimento = $('#dataNascimento').val();

    // Criar um objeto de contato
    let contato = {
        nome,
        telefone,
        email,
        dataNascimento
    };

    // Adiciona o contato no nosso BD (no final do vetor)
    contatos.push(contato);

    // Invoca a renderização da tabela
    renderizarTabelaContatos();
    //invoca a renderizaçao de cards
    renderizarCardsContatos();
    
}

function renderizarTabelaContatos() {
    if (contatos.length > 0) {
        let areaListagemContatos =
            document.getElementById('tabelaContatos');

        /**
         * Limpa a área de listagem
         */
        areaListagemContatos.innerHTML = '';

        /*
        areaListagemContatos.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Data Nasc.</th>
                    </tr>
                </thead>
            </table>
        `;
        */

        /**
         * Cria a tabela
         */
        let tabela = document.createElement('table');

        let cabecalho = criarCabecalhoTabela();
        //adiciona o corpo da cabecalho na tabela
        tabela.appendChild(cabecalho);

        let corpoTabela = criarCorpoTabela();
        //adicionar o corpo da tabela na tabela
        tabela.appendChild(corpoTabela); 

        // Adiciona o corpo da tabela na tabela
        tabela.appendChild(corpoTabela);

        // Adiciona a tabela na área de listagem
        areaListagemContatos.appendChild(tabela);

        //invoka a renderizaçao dos cards
        renderizarCardsContatos();

    }
}

function criarCabecalhoTabela() {
    /**
     * Cria o cabeçalho da tabela
     */
    let cabecalho = document.createElement('thead');
    let linhaCabecalho = document.createElement('tr');
    let colunaNome = document.createElement('th');
    colunaNome.innerText = 'Nome';
    let colunaTelefone = document.createElement('th');
    colunaTelefone.innerText = 'Telefone';
    let colunaEmail = document.createElement('th');
    colunaEmail.innerText = 'E-mail';
    let colunaDataNasc = document.createElement('th');
    colunaDataNasc.innerText = 'Data Nasc.';

    // Adiciona as colunas na linha do cabeçalho
    linhaCabecalho.appendChild(colunaNome);
    linhaCabecalho.appendChild(colunaTelefone);
    linhaCabecalho.appendChild(colunaEmail);
    linhaCabecalho.appendChild(colunaDataNasc);

    // Adiciona a linha do cabeçalho no cabeçalho
    cabecalho.appendChild(linhaCabecalho);

    // Retorna o cabeçalho criado
    return cabecalho;
}

function criarCorpoTabela() {
    /**
     * Cria o corpo da tabela
     */
    let corpoTabela = document.createElement('tbody');

    /**
     *  Cria as linhas de contatos
     */
    for (let i = 0; i < contatos.length; i++) {
        /**
         * Cria uma nova linha no corpo da tabela
         */
        let linha = document.createElement('tr');
        let celulaNome = document.createElement('td');
        celulaNome.innerText = contatos[i].nome;
        linha.appendChild(celulaNome);

        let celulaTelefone = document.createElement('td');
        celulaTelefone.innerText = contatos[i].telefone;
        linha.appendChild(celulaTelefone);

        let celulaEmail = document.createElement('td');
        celulaEmail.innerText = contatos[i].email;
        linha.appendChild(celulaEmail);
        
        let celulaDataNasc = document.createElement('td');
        celulaDataNasc.innerText = contatos[i].dataNascimento;
        linha.appendChild(celulaDataNasc);

        // Adiciona a nova linha no corpo da tabela
        corpoTabela.appendChild(linha);
    }
    return corpoTabela; 
}

function renderizarCardsContatos(){
    if(contatos.length > 0){
        let areaListagemContatos = document.getElementById('cardsContatos');

        /**
         * ao inves de usar um loop(laço de repetiçao), utilizaremos a funçao forEach
         */

        contatos.forEach(function(contato){
            let card = document.createElement('div');
            let inicialNome = document.createElement('span');
            inicialNome.innerText = contato.nome.charAt(0);   //pega a primeira letra inicial
            let nome = document.createElement('span');
            let tamanhoNome = contato.nome.length;
            nome.innerText = contato.nome.substr(1,tamanhoNome);

            let telefone = document.createElement('span');
            telefone.innerText = contato.telefone;

            let email = document.createElement('span');
            email.innerText = contato.email;

            let dataNasc = document.createElement('span');
            dataNasc.innerText = contato.dataNascimento;

            card.appendChild(inicialNome);
            card.appendChild(nome);
            card.appendChild(telefone);
            card.appendChild(email);
            card.appendChild(dataNasc);

            areaListagemContatos.appendChild(card);
               
                        
        }); 
    }
}