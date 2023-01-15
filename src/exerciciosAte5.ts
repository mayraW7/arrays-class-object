// 1. Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Crie uma nova lista somente com os números ímpares e usando o
// filter

let lista : number [] = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4]

let numeroImpar = lista.filter(i => (i%2));

console.log(numeroImpar)

//ex02 

let soma = lista.reduce((current, i)=>{
    return current + i;
},0);

console.log(soma)

//ex03

export class Pessoa {
    nome: string
    idade: number
    salario: number
        constructor(nome: string,idade: number, salario:number){
            this.nome = nome;
            this.idade = idade;
            this.salario = salario;
        }
}

let pessoas: Pessoa[] = [
    new Pessoa ("Maria",20, 889.00),
    new Pessoa ("João",28, 2020.00),
    new Pessoa ("Marcia",52, 1020.90),
    new Pessoa ("Marco",19, 5900.00)];

console.log(pessoas)

let menorSalario = pessoas.filter(i => i.salario < 1027.00);
console.log(menorSalario)
let novaList = menorSalario.map((i)=>{
    let listnew = [ i.nome, i.idade]

    return listnew
})


console.log(novaList)



let pessoaMenor23 = pessoas.filter(i => i.idade < 23);

console.log(pessoaMenor23)



//ex04

let pessoaMenor30 = pessoas.filter(i => i.idade < 30)

let mediaMenor30:any = pessoaMenor30.map(i => i.idade)
let total:number = mediaMenor30.length
console.log(mediaMenor30.length)
let media : number = mediaMenor30.reduce((current:number, i:number )=>{
    return(current + i)
},0)
console.log(mediaMenor30)
console.log(media.toFixed(2))
let mediaFinal:number = media/mediaMenor30.length;
console.log(mediaFinal.toFixed(2))

//ex05



