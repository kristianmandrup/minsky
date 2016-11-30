import Node from '../../../dag/node'

export class BaseOperation extends BaseDerivative {
  constructor(const expr: any) {
    super(expr)
  }

  node(): Node {
    super.node()
  }
}
