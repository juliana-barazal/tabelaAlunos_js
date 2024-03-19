function gerarTabela(infos) {
    var tabela = '<table>'
        + '<thead>' + '<tr>'
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
    + '</tr></tbody></table>'

    document.write(tabela);
}

alunos = [
    { nome: 'Larissa', ra: '0050832311023', P1: 6, P2: 8 },
    { nome: 'Diego', ra: '0050832311001', P1: 5.5, P2: 6 },
    { nome: 'Juliana', ra: '0050832311018', P1: 9, P2: 7 },
    { nome: 'Matheus', ra: '0050832311023', P1: 6.8, P2: 8.6 }
];



gerarTabela(alunos);
