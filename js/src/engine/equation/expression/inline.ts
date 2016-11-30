const createNode = (n) => {
  return new Node(n)
}

export class {
  add(const Node x, const Expr y): Expr {
    return y+x;
  }

  add(const Expr x, const Expr y): Expr {
    return x + createNode(y);
  }

  add(double x, const Expr y): Expr {
    return y + createNode(new ConstantDAG(x))
  }

  sub(const Node x, const Expr y): Expr {
    return Expr(y.cache, x)-createNode(y);
  }

  sub(const Expr x, const Expr y): Expr {
    return x - createNode(y);
  }

  sub(double x, const Expr y): Expr {
    return createNode(new ConstantDAG(x))-y;
  }

  sub(const Expr x, double y): Expr {
    return x - createNode(new ConstantDAG(y));
  }

  mul(const Node x, const Expr y): Expr {
    return y * x;
  }

  mul(const Expr x, const Expr y): Expr {
    return x * createNode(y);
  }

  mul(double x, const Expr y): Expr {
    return y * createNode(new ConstantDAG(x));
  }

  div(const Expr x, const Expr y): Expr {
    return x / createNode(y);
  }
  div(const Node x, const Expr y): Expr {
    return Expr(y.cache, x) / y;
  }

  div(double x, const Expr y): Expr {
    return createNode(new ConstantDAG(x)) / y;
  }

  log(const Expr x): Expr {
    r(x.newcreateNode(OperationType.ln));
    r.arguments[0].push_back(x);
    return Expr(x.cache,r);
  }

  exp(const Expr x): Expr {
    r(x.newcreateNode(OperationType.exp));
    r.arguments[0].push_back(x);
    return Expr(x.cache,r);
  }

  sin(const Expr x): Expr {
    r(x.newcreateNode(OperationType.sin));
    r.arguments[0].push_back(x);
    return Expr(x.cache,r);
  }

  cos(const Expr x): Expr {
    r(x.newcreateNode(OperationType.cos));
    r.arguments[0].push_back(x);
    return Expr(x.cache,r);
  }

  sinh(const Expr x): Expr {
    r(x.newcreateNode(OperationType.sinh));
    r.arguments[0].push_back(x);
    return Expr(x.cache,r);
  }

  cosh(const Expr x): Expr {
    r(x.newcreateNode(OperationType.cosh));
    r.arguments[0].push_back(x);
    return Expr(x.cache,r);
  }

  sqrt(const Expr x): Expr {
    r(x.newcreateNode(OperationType.sqrt));
    r.arguments[0].push_back(x);
    return Expr(x.cache,r);
  }

  lessOrEq(const Expr x, const Node y): Expr {
    r(x.newcreateNode(OperationType.le));
    r.arguments[0].push_back(x);
    r.arguments[1].push_back(y);
    return Expr(x.cache,r);
  }

  lessOrEq(const Expr x, double y): Expr {
    const xC = Expr(x.cache, createNode(new ConstantDAG(y)))
    return x.lessOrEq(xC) ;
  }

  less(const Expr x, const Node y): Expr {
    r(x.newcreateNode(OperationType.lt));
    r.arguments[0].push_back(x);
    r.arguments[1].push_back(y);
    return Expr(x.cache,r);
  }

  less(const Expr x, double y): Expr {
    const xC = Expr(x.cache, createNode(new ConstantDAG(y)))
    return x.less(xc)
  }
}