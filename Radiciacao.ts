import Calculo from "./Calculo"

export default class Radiciacao extends Calculo {
  public calcular(): number {
    return Math.pow(this.numero1, 1 / this.numero2)
  }
}