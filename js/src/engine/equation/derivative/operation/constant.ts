import Node from '../../../dag/node'
import OperationDAG from '../../'

export class OperationConstant extends BaseOperation {
  constructor(const OperationDAG expr) {
    super(expr)
  }

  node(): Node {
    return zero;
  }
}