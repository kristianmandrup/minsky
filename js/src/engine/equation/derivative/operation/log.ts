import Node from '../../../dag/node'
import OperationDAG from '../../'

class OperatinLog extends BaseOperation {
  constructor(const OperationDAG expr) {
    super(expr)
  }

  node(): Node {
    // log_b(x) = ln(x)/ln(b)
    // assert(expr.arguments.size()==2);
    // if (expr.arguments[0].empty())
    //   return zero;
    // else
    //   {
    //     Expr x(expressionCache, expressionCache.reverseLookup(*expr.arguments[0][0]));
    //     if (expr.arguments[1].empty())
    //       return x->derivative(*this)/x;
    //     else
    //       {
    //         Expr b(expressionCache, expressionCache.reverseLookup(*expr.arguments[1][0]));
    //         return (log(x)/log(b))->derivative(*this);
    //       }
    //   }
  }
}
