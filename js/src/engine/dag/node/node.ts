import VariableValue from '../variable/VariableValue'
import EvalOpVector from ''

export class Node {
  /// reference to where this node's value is stored
  private VariableValue result;

  constructor (opts = {}) {
    this.opts = opts
  }

  /// algebraic heirarchy level, used for working out whether
  /// brackets are necessary.
  BODMASlevel(): number {
  }

  /// adds EvalOps to an EvalOpVector representing this node.
  /// @return a variable where the result is stored.  If a
  /// flowVariable has been provided in \a result, that may be used
  /// directly, otherwise a copy operation is added to ensure it
  /// receives the result.
  addEvalOps(const EvalOpVector opVector, const VariableValue result = VariableValue()): VariableValue {

  }

  /// returns evaluation order in sequence of variable defintions
  /// @param maxOrder is used to limit the recursion depth
  order(maxOrder: number): number {
  }

  /// support for the derivative operator.
  // Done as a virtual function to ensure that all Node types get a
  // definition, however, the actual work is delegated back to
  // SystemOfEquations via a templated method.
  derivative(SystemOfEquations sysEquations): Node }{
  }
}
