
export class Aluno {
    nome: string
    idade: number
    nota?: number
    status?: "Aprovado" | "Reprovado";

        constructor(nome: string,idade: number){
            this.nome = nome;
            this.idade = idade;
        }

    respostas(gabarito: string[]){
        let respostas = ["A", "B", "C"];
        let respostaAluno = [];
        this.nota = 0;

        for (let i of gabarito){
            let resultado = Math.floor(Math.random() * 10) % 3;
            respostaAluno.push(respostas[resultado]);

            if(i === respostas[resultado]){
                this.nota += 1;
            }
        }
        this.statusAluno();
    }    

    statusAluno() {
        this.status = this.nota! >= 6 ? "Aprovado" : "Reprovado";
    }

}
