import Calculo from "./Calculo"

export default class Multiplicacao extends Calculo {
  public calcular(): number {
    return this.numero1 * this.numero2
  }
}