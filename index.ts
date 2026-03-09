import * as readline from 'readline';
import Multiplicacao from './Multiplicacao';
import Soma from './Soma';
import Subtracao from './Subtracao';
import Divisao from './Divisao';
import Potenciacao from './Potencia';
import Radiciacao from './Radiciacao';
import Bhaskara from './Bhaskara';

let iniciar = () => {
  let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  leitor.question(`Digite: numero1 numero2 operacao\n`, (valor) => {

    let instrucoes = valor.split(' ')
    let operacao = instrucoes[instrucoes.length - 1]

    let numero1 = Number(instrucoes[0])
    let numero2 = Number(instrucoes[1])
    let numero3 = Number(instrucoes[2])

    console.log(`Estas foram suas instruções: ${instrucoes}\n`)

    switch (operacao) {

        case 'Somar': {
        let calculo = new Soma(numero1, numero2)
        console.log(`Resultado: ${calculo.calcular()}\n`)
        break
        }

        case 'Subtrair': {
        let calculo = new Subtracao(numero1, numero2)
        console.log(`Resultado: ${calculo.calcular()}\n`)
        break
        }

        case 'Multiplicar': {
        let calculo = new Multiplicacao(numero1, numero2)
        console.log(`Resultado: ${calculo.calcular()}\n`)
        break
        }

        case 'Dividir': {
        let calculo = new Divisao(numero1, numero2)
        console.log(`Resultado: ${calculo.calcular()}\n`)
        break
        }

        case 'Potencia': {
        let calculo = new Potenciacao(numero1, numero2)
        console.log(`Resultado: ${calculo.calcular()}\n`)
        break
        }

        case 'Raiz': {
        let calculo = new Radiciacao(numero1, numero2) 
        console.log(`Resultado: ${calculo.calcular()}\n`)
        break
        }
    
        case 'Bhaskara': { /*jimcarrey*/
        let calculo = new Bhaskara(numero1, numero2, numero3)
        console.log(`Resultado: ${calculo.calcular()}\n`)
        break
        }

      case 'Sair': {
        console.log("Encerrando calculadora...")
        leitor.close()
        return
      }

      default:
        console.log("Operação não reconhecida")
    }

    leitor.close()
    iniciar()

  });
}

console.log("Calculadora CLI")
console.log("Operações: Somar, Subtrair, Multiplicar, Dividir, Potencia, Raiz, Bhaskara, Sair")

iniciar()
