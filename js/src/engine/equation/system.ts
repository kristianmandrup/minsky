import VariableDAG from '../variable/dag'
import Node from '../dag/node'
import Expr from '../expr'

const derivativeMap = {
  constant: DerivativeConstant,
  variable: DerivativeVariable,
}

class SystemOfEquations {
  constructor() {

  }
  // applies the chain rule to expression x
  chainRule(const Expr x, const Expr deriv): Node {
    // NodePtr dx=x->derivative(*this);
    // // perform some constant optimisation
    // if (dx==zero)
    //   return zero;
    // else if (dx==one)
    //   return deriv;
    // else
    //   return dx * deriv;
  }

  // SEE: TypeScript method overloading
  // http://stackoverflow.com/questions/13212625/typescript-function-overloading
  // https://blog.mariusschulz.com/2016/08/18/function-overloads-in-typescript

  // we need a single derivative method which delegates to class/factory function for each type
  derivative(const expr: any, const type: string): Node {
    const clazz = derivativeMap[type]
    if (!clazz) {
      throw new Error(`No Derivative class found for type: ${type}`)
    }
    return new clazz(expr).node()
  }
}