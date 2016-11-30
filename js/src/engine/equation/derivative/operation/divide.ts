import Node from '../../../dag/node'
import OperationDAG from '../../'

export class OperationDivide extends BaseOperation {
  constructor(const OperationDAG expr) {
    super(expr)
  }

  node(): Node {
    // remember divides are n-ary, not binary. So convert each
    // argument list into a product expression, and then perform the
    // standard binary quotient rule. u=numerator, v=denominator
    // d(u/v) = (vdu-udv)/v^2

    // CachedOp<OperationType::multiply> u1(expressionCache), v1(expressionCache);

    // assert(expr.arguments.size()==2);
    // assert(!u1->arguments.empty() && !v1->arguments.empty());


    // u1->arguments[0]=expr.arguments[0];
    // v1->arguments[0]=expr.arguments[1];

    // Expr u(expressionCache,u1), v(expressionCache,v1);
    // Expr du(expressionCache, u->derivative(*this)), dv(expressionCache, v->derivative(*this));

    // NodePtr r = (v*du-u*dv)/(v*v);
    // assert(expressionCache.reverseLookup(*r));
    // return r;
  }
}
