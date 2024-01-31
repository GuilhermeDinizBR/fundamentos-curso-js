const nomes = ['evaldo', 'mari', 'Camis'];

// nomes.forEach(function (nomes) {
//     console.log(nomes);
// });

// nomes.forEach((nomes) => {
//     console.log(nomes);
// });

function imprimiNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimiNome);