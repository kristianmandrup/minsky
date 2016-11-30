import Node from '../../../dag/node'
import VariableDAG from '../../'
import BaseDerivative from './base'

export class DerivativeVariable extends BaseDerivative {
  constructor(const VariableDAG expr) {
    super(expr)
  }

  node(): Node {
    // string name=differentiateName(expr.name);
    // // ensure variable value exists, even if only temporary
    // VariablePtr tmp(VariableType::tempFlow, name);
    // VariableDAGPtr r(makeDAG(tmp->valueId(),tmp->name(),tmp->type()));
    // if (expr.rhs)
    //   r->rhs=expr.rhs->derivative(*this);
    // else if (expr.type==VariableType::integral || expr.type==VariableType::stock)
    //   {
    //     auto ii=expressionCache.getIntegralInput(expr.valueId);
    //     if (!ii)
    //       throw error("integral input %s not defined",expr.valueId.c_str());
    //     if (ii->rhs)
    //       r->rhs=ii->rhs; // elide input variable, in case this is a temporary
    //     else
    //       r->rhs=ii.get();
    //   }
    // else
    //   r->rhs=zero;
    // assert(expressionCache.reverseLookup(*r));
    // return r;
  }
}
