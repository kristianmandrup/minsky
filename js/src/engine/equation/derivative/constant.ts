import Node from '../../../dag/node'
import ConstantDAG from '../../'

export class DerivativeVariable extends BaseDerivative {
  constructor(const x: ConstantDAG): Node {
    super()
  }

  node(): Node {
    return zero;
  }
}
