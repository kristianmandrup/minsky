export class ConstantDAG extends Node {
  value: number;

  constructor(value: number = 0) {
    super()
    this.value = value
  }

  BODMASlevel(): number{
    return 0;
  }

  order(maxOrder: number): number {
    return 0;
  }

  addEvalOps(op: EvalOpVector, val: VariableValue): VariableValue {

  }

  derivative(soe: SystemOfEquations): Node {
  }
}

