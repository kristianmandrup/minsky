import Node from '../../../dag/node'
import OperationDAG from '../../'

export class OperationAdd extends BaseOperation {
  constructor(const OperationDAG expr) {
    super(expr)
  }

  node(): Node {
    // CachedOp<OperationType::add> r(expressionCache);
    // r->arguments.resize(expr.arguments.size());
    // for (size_t i=0; i<expr.arguments.size(); ++i)
    //   for (WeakNodePtr n: expr.arguments[i])
    //     {
    //       assert(expressionCache.reverseLookup(*n));
    //       r->arguments[i].push_back(n->derivative(*this));
    //       assert(expressionCache.reverseLookup(*r->arguments[i].back()));
    //     }
    // assert(expressionCache.reverseLookup(*r));
    // return r;
  }
}