export class Expresssion {
  SubexpressionCache cache; //for anonymous nodes

  Expr(SubexpressionCache& cache, const NodePtr& x):
    NodePtr(x), cache(cache) {cache.insertAnonymous(x);}
  Expr(SubexpressionCache& cache, const shared_ptr<OperationDAGBase>& x):
    NodePtr(x), cache(cache) {cache.insertAnonymous(x);}
  Expr(SubexpressionCache& cache, const Node& x):
    NodePtr(cache.reverseLookup(x)), cache(cache) {assert(*this);}
  Expr(SubexpressionCache& cache, const WeakNodePtr& x):
    NodePtr(cache.reverseLookup(*x)), cache(cache) {assert(*this);}

  shared_ptr<OperationDAGBase> newNode(OperationType::Type type) const {
    shared_ptr<OperationDAGBase> r(OperationDAGBase::create(type));
    cache.insertAnonymous(r);
    return r;
  }

  Expr operator+(const NodePtr& x) const {
    cache.insertAnonymous(x);
    shared_ptr<OperationDAGBase> r=newNode(OperationType::add);
    r->arguments[0].push_back(*this);
    r->arguments[1].push_back(x);
    return Expr(cache,r);
  }
  Expr operator-(const NodePtr& x) const {
    cache.insertAnonymous(x);
    shared_ptr<OperationDAGBase> r=newNode(OperationType::subtract);
    r->arguments[0].push_back(*this);
    r->arguments[1].push_back(x);
    return Expr(cache,r);
  }
  Expr operator*(const NodePtr& x) const {
    cache.insertAnonymous(x);
    shared_ptr<OperationDAGBase> r=newNode(OperationType::multiply);
    r->arguments[0].push_back(*this);
    r->arguments[1].push_back(x);
    return Expr(cache,r);
  }
  Expr operator/(const NodePtr& x) const {
    cache.insertAnonymous(x);
    shared_ptr<OperationDAGBase> r=newNode(OperationType::divide);
    r->arguments[0].push_back(*this);
    r->arguments[1].push_back(x);
    return Expr(cache,r);
  }
};
