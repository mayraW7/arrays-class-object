import { Aluno } from "./exercicio6";

let alunos: Aluno[] =[
    new Aluno("Fabricio", 26),
    new Aluno("Maria", 30),
    new Aluno("João", 18),
    new Aluno("Carla", 29),
    new Aluno("Joaquim", 32),
    new Aluno("Paula", 24)
];
console.log(alunos);

let gabarito: string[] = ["A", "B", "B", "C", "A", "B", "B", "A","C","C"];

alunos.map((aluno)=> aluno.respostas(gabarito));

const aprovados = alunos.filter((aluno)=>aluno.status === "Aprovado");

const reprovados = alunos.filter((aluno)=>aluno.status === "Reprovado");


const totalNotas = alunos.reduce((current, aluno)=>{
    return current + aluno.nota!;
},0);
let mediaNotas = totalNotas/ alunos.length;

let melhorNota = alunos.reduce((current, nota) => {
    if (current.nota! > nota.nota!) {
      return current;
    } else {
      return nota;
    }
  });

  let piorNota = alunos.reduce((current, nota) => {
    if (current.nota! < nota.nota!) {
      return current;
    } else {
      return nota;
    }
  });

console.log(`== Alunos aprovados ==`);
console.log(aprovados)
console.log(`== Alunos reprovados ==`)
console.log(reprovados)
console.log(`== Média da turma ==`)
console.log(`${mediaNotas.toFixed(2)}`)
console.log(`== Melhor aluno ==`)
console.log(`Aluno: ${melhorNota.nome}\nNota: ${melhorNota.nota}`)
console.log(`== Pior aluno ==`)
console.log(`Aluno: ${piorNota.nome}\nNota: ${piorNota.nota}`)