import Calculo from "./Calculo"

export default class Potencia extends Calculo {
  public calcular(): number {
    return Math.pow(this.numero1, this.numero2)
  }
}