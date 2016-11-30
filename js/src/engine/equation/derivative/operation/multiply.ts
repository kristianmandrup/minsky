import Node from '../../../dag/node'
import OperationDAG from '../../'

export class OperationAdd extends BaseOperation {
  constructor(const OperationDAG expr) {
    super(expr)
  }

  node(): Node {
    // unfold arguments into a single list
    // vector<WeakNodePtr> args;
    // for (size_t i=0; i<expr.arguments.size(); ++i)
    //   for (WeakNodePtr n: expr.arguments[i])
    //     args.push_back(n);

    // // remember multiplies are n-ary, not binary. eg
    // // (uvw)' = u'(vw)+v'(uw)+w'(uv)

    // CachedOp<OperationType::add> r(expressionCache);
    // assert(!r->arguments.empty());

    // for (size_t i=0; i<args.size(); ++i)
    //   {
    //     CachedOp<OperationType::multiply> p(expressionCache);
    //     r->arguments[0].push_back(p);
    //     assert(!p->arguments.empty());
    //     for (size_t j=0; j<args.size(); ++j)
    //       if (j!=i)
    //         p->arguments[0].push_back(args[j]);
    //     p->arguments[0].push_back(args[i]->derivative(*this));
    //     assert(expressionCache.reverseLookup(*p->arguments[0].back()));
    //   }

    // assert(expressionCache.reverseLookup(*r));
    // return r;
  }
}