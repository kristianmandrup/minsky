import Node from '../../../dag/node'
import OperationDAG from '../../'

export class OperationSubtract extends BaseOperation {
  constructor(const OperationDAG expr) {
    super(expr)
  }

  node(): Node {
    // CachedOp<OperationType::subtract> r(expressionCache);
    // r->arguments.resize(expr.arguments.size());
    // for (size_t i=0; i<expr.arguments.size(); ++i)
    //   for (WeakNodePtr n: expr.arguments[i])
    //     r->arguments[i].push_back(n->derivative(*this));
    // assert(expressionCache.reverseLookup(*r));
    // return r;
  }
}
