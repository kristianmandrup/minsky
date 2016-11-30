import SubexpressionCache from '..'

export class Expresssion {
  cache: SubexpressionCache; //for anonymous nodes

  constructor(SubexpressionCache cache, const x: any) {
    cache.insertAnonymous(x);
  }

  newNode(const OperationType.Type type): OperationDAGBase {
    r(OperationDAGBase.create(type));
    cache.insertAnonymous(r);
    return r;
  }

  add(const NodePtr x): Exprconst {
    cache.insertAnonymous(x);
    let r: OperationDAGBase
    r = newNode(OperationType.add);
    r.arguments[0].push_back(this);
    r.arguments[1].push_back(x);
    return Expr(cache,r);
  }

  sub(const NodePtr x): Expr {
    cache.insertAnonymous(x);
    let r: OperationDAGBase
    r = newNode(OperationType.subtract);
    r.arguments[0].push_back(this);
    r.arguments[1].push_back(x);
    return Expr(cache,r);
  }

  mul(const NodePtr x): Expr {
    cache.insertAnonymous(x);
    let r: OperationDAGBase
    r = newNode(OperationType.multiply);
    r.arguments[0].push_back(this);
    r.arguments[1].push_back(x);
    return Expr(cache,r);
  }

  div(const NodePtr x): Expr {
    cache.insertAnonymous(x);
    let r: OperationDAGBase
    r = newNode(OperationType.divide);
    r.arguments[0].push_back(this);
    r.arguments[1].push_back(x);
    return Expr(cache,r);
  }
}
