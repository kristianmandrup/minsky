import VariableDAG from '../variable/dag'
import Node from '../dag/node'
import Expr from '../expr'

const derivativeMap = {
  constant: DerivativeConstant,
  variable: DerivativeVariable,
}

export class SystemOfEquations {
  constructor() {

  }
  // applies the chain rule to expression x
  chainRule(const Expr x, const Expr deriv): Node {
    Node dx = x.derivative(this)
    // // perform some constant optimisation
    if (dx === zero) return zero
    if (dx === one) return deriv
    return dx * deriv;
  }

  // we need a single derivative method which delegates to class/factory function for each type
  derivative(const expr: any, const type: string): Node {
    const clazz = derivativeMap[type]
    if (!clazz) {
      throw new Error(`No Derivative class found for type: ${type}`)
    }
    return new clazz(expr).node()
  }
}