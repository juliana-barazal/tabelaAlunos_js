function gerarTabela(infos) {
    let tabela = 
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
    
    let turmaP1 = 0;
    let turmaP2 = 0;
    let aprovados = 0;
    let reprovados = 0;
    

    for (let i in infos) {
        let media = (infos[i].P1 + infos[i].P2) / 2;
        turmaP1 += infos[i].P1 / infos.length;
        let corP1 = infos[i].P1 >= 6 ? 'blue' :'red';
        turmaP2 += infos[i].P2 / infos.length;
        let corP2 = infos[i].P2 >= 6 ? 'blue' :'red';

        let corM = '';
        if(media>=6){
            aprovados ++;
            corM = 'blue';
        }

        else{
            reprovados ++;
            corM ='red';
        }

        tabela += '<tr>'
            + '<td>' + infos[i].nome + '</td>'
            + '<td>' + infos[i].ra + '</td>'
            + '<td style = "color:' + corP1 + '">' + infos[i].P1 + '</td>'
            + '<td style = "color:' + corP2 + '">' + infos[i].P2 + '</td>'
            + '<td style = "color:' + corM + '">' + media.toFixed(2) + '</td>'
    }

    let corTP1 = turmaP1 >= 6? 'blue':'red';
    let corTP2 = turmaP2 >=6? 'blue': 'red';

    tabela += '<td style = "color:'+ corTP1 +'">' + turmaP1.toFixed(2) + '</td>' 
    + '<td style = "color:' + corTP2 + '">' + turmaP2.toFixed(2) + '</td>' 
    + '<td>' + aprovados + '</td>' 
    + '<td>' + reprovados + '</td>' 
    + '</tr></tbody>'

    //cria a tabela no html
    var table = document.createElement('table');

    //aloca let tabela ao conteúdo que está na tabela
    table.innerHTML = tabela;

    //adicionar a tabela ao documento
    document.body.appendChild(table);
}

fetch('data.json')
.then(response=>response.json())
.then(alunos=>{gerarTabela(alunos);})



