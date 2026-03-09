import Calculo from "./Calculo"

export default class Subtracao extends Calculo {
  public calcular(): number {
    return this.numero1 - this.numero2
  }
}