import Type from './type'
import WeakNode from './node/weak'
import IntOp from '../operations/int'

// TODO: mixin VariableType
export class VariableDAG extends Node {
  public valueId: string;
  type: Type = undefined;
  name: string;
  init: number = 0;
  rhs: WeakNode;
  intOp: IntOp = 0; /// reference to operation if this is
                                 /// an integral variable
  constructor(valueId: string, name: string, type: Type) {
    super()
    this.valueId = valueId
    this.name = name
    this.type = type
  }

  BODMASlevel(): number{
    return 0;
  }

  order(maxOrder: number): number {
    if (this.rhs) {
      if (maxOrder === 0) throw new Error('maximum order recursion reached');
      return this.rhs.order(maxOrder - 1) + 1;
    }
    return 0;
  }

  addEvalOps(op: EvalOpVector, v: VariableValue = VariableValue()): VariableValue {

  }

  derivative(soe: SystemOfEquations): Node {

  }
};