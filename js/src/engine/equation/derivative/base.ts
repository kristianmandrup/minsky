import Node from '../../../dag/node'

export class BaseDerivative {
  constructor(const expr: any) {
    this.expr = expr
  }

  node(): Node {
    throw new Error('node() must be implemented by subclass')
  }
}
