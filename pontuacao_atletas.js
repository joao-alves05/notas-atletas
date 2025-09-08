let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];


const atletasCopia = atletas.map(atleta => ({
    nome: atleta.nome,
    notas: [...atleta.notas] // Cria uma nova lista com os mesmos elementos. Vi isso no Gemini
}));


for (let i = 0; i < atletas.length; i++) {
    let notasParaCalculo = atletas[i].notas;
    notasParaCalculo.sort((a, b) => b - a);
    
    // Remove a nota mais alta e a mais baixa
    notasParaCalculo.shift();
    notasParaCalculo.pop();
    
    let somaNotas = 0;
    notasParaCalculo.forEach(function(nota) {
        somaNotas += nota;
    });
    
    
    let mediaNotas = somaNotas / notasParaCalculo.length;

    console.log('-----------------------------------------');
    console.log(`Atleta: ${atletasCopia[i].nome}`);
    console.log(`Notas Obtidas: ${atletasCopia[i].notas.join(", ")}`);
    console.log(`Média Válida: ${mediaNotas.toFixed(2)}`);
    console.log('-----------------------------------------');

}