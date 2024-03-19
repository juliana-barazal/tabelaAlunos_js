function gerarTabela(infos) {
    var tabela = 
        '<thead>' + '<tr>'
        + '<th>Nome</th>'
        + '<th>Ra</th>'
        + '<th>P1</th>'
        + '<th>P2</th>'
        + '<th>Média</th>'
        + '<th>Turma P1</th>'
        + '<th>Turma P2</th>'
        + '<th>Aprovados</th>'
        + '<th>Reprovados</th>'
        + '</tr>' + '</thead>' + '<tbody>';

    let media = 0;
    let turmaP1 = 0;
    let turmaP2 = 0;
    let aprovados = 0;
    let reprovados = 0;
    for (let i in infos) {
        let media = (infos[i].P1 + infos[i].P2) / 2;
        turmaP1 += infos[i].P1 / infos.length;
        turmaP2 += infos[i].P2 / infos.length;
        tabela += '<tr>'
            + '<td>' + infos[i].nome + '</td>'
            + '<td>' + infos[i].ra + '</td>'
            + '<td>' + infos[i].P1 + '</td>'
            + '<td>' + infos[i].P2 + '</td>'
            + '<td>' + media.toFixed(2) + '</td>'

        if(media>=6){
            aprovados ++;
        }

        else{
            reprovados ++;
        }
    }


    tabela += '<td>' + turmaP1.toFixed(2) + '</td>' 
    + '<td>' + turmaP2.toFixed(2) + '</td>' 
    + '<td>' + aprovados + '</td>' 
    + '<td>' + reprovados + '</td>' 
    + '</tr></tbody>'

    //cria a tabela no html
    var table = document.createElement('table');

    //conteúdo que está na tabela
    table.innerHTML = tabela;

    //adicionar a tabela ao documento
    document.body.appendChild(table);
}

fetch('data.json')
.then(response=>response.json())
.then(alunos=>{gerarTabela(alunos);})



