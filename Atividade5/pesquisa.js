let totalPessoas = 10;

let somaIdades = 0;
let maiorIdade = 0;
let menorIdade = Infinity;

let qtdPessimo = 0;
let qtdOtimoBom = 0;

let mulheres = 0;
let homens = 0;
let outros = 0;

for (let i = 1; i <= totalPessoas; i++) {
    let idade = parseInt(prompt(`Pessoa ${i} - Idade:`));
    let sexo = prompt(`Pessoa ${i} - Sexo (m/f/o):`).toLowerCase();
    let opiniao = parseInt(prompt(`Pessoa ${i} - Opinião (4=ótimo, 3=bom, 2=regular, 1=péssimo):`));

    somaIdades += idade;

    if (idade > maiorIdade) {
        maiorIdade = idade;
    }

    if (idade < menorIdade) {
        menorIdade = idade;
    }

    if (opiniao === 1) {
        qtdPessimo++;
    }

    if (opiniao === 3 || opiniao === 4) {
        qtdOtimoBom++;
    }

    if (sexo === "f") {
        mulheres++;
    } else if (sexo === "m") {
        homens++;
    } else {
        outros++;
    }
}

// Resultados
let mediaIdade = somaIdades / totalPessoas;
let porcentagemOtimoBom = (qtdOtimoBom / totalPessoas) * 100;

alert("Média de idade: " + mediaIdade.toFixed(2));
alert("Pessoa mais velha: " + maiorIdade);
alert("Pessoa mais nova: " + menorIdade);
alert("Quantidade que respondeu péssimo: " + qtdPessimo);
alert("Porcentagem ótimo e bom: " + porcentagemOtimoBom.toFixed(2) + "%");
alert("Mulheres: " + mulheres);
alert("Homens: " + homens);
alert("Outros: " + outros);