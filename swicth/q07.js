// Solicita ao usuário que insira uma nota no intervalo de 0 a 100
var nota = prompt("Digite a nota (0 a 100):");

// Declaração da variável para armazenar o conceito
var conceito;

// Utilizando switch case para converter a nota em um conceito
switch (true) {
    // Caso a nota esteja entre 90 e 100, atribui o conceito 'A'
    case nota >= 90 && nota <= 100:
        conceito = "A";
        break;
    // Caso a nota esteja entre 80 e 89, atribui o conceito 'B'
    case nota >= 80 && nota < 90:
        
        conceito = "B";
        break;
    // Caso a nota esteja entre 70 e 79, atribui o conceito 'C'
    case nota >= 70 && nota < 80:
        conceito = "C";
        break;
    // Caso a nota esteja entre 60 e 69, atribui o conceito 'D'
    case nota >= 60 && nota < 70:
        conceito = "D";
        break;
    // Caso a nota esteja entre 0 e 59, atribui o conceito 'F'
    case nota >= 0 && nota < 60:
        conceito = "F";
        break;
    // Se a nota não estiver em nenhuma das faixas anteriores, atribui 'Nota inválida'
    default:
        conceito = "Nota inválida";
}

// Imprime o conceito correspondente no console
console.log("Conceito: " + conceito);
