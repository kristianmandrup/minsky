struct BinOpFixture: public Minsky
{
  LocalMinsky lm{*this};
  OperationPtr offs{OperationType::constant};
  OperationPtr t{OperationType::time};
  OperationPtr plus{OperationType::add};
  OperationPtr tsq{OperationType::multiply};
  OperationPtr minus{OperationType::subtract};
  OperationPtr pow{OperationType::pow};
  OperationPtr deriv{OperationType::differentiate};
  VariablePtr f; // to receive results of function before differentiation
  IntOp& integ;
  BinOpFixture():
    f(VariableType::flow,"f"),
    integ(dynamic_cast<IntOp&>
          (*(model->addItem(OperationPtr(OperationType::integrate)))))
  {
    dynamic_cast<Constant&>(*offs).value=0.1;
    model->addItem(offs);
    model->addItem(t);
    model->addItem(plus);
    model->addItem(tsq);
    model->addItem(minus);
    model->addItem(pow);
    model->addItem(deriv);
    model->addItem(f);
    model->addWire(new Wire(t->ports[0],plus->ports[1]));
    model->addWire(new Wire(offs->ports[0],plus->ports[2]));
    model->addWire(new Wire(plus->ports[0],tsq->ports[1]));
    model->addWire(new Wire(plus->ports[0],tsq->ports[2]));
    model->addWire(new Wire(deriv->ports[0], integ.ports[1]));
    //    variables.makeConsistent();

    stepMin=1e-6;
    stepMax=1e-3;
    epsAbs=0.001;
    epsRel=0.01;
    order=4;

  }
};

SUITE(Derivative)
{
  TEST(differentiateName)
  {
    string dx=differentiateName("x");
    string d2x=differentiateName(dx);
    string d3x=differentiateName(d2x);
    CHECK_EQUAL("dx/dt",dx);
    CHECK_EQUAL("d^{2}x/dt^{2}",d2x);
    CHECK_EQUAL("d^{3}x/dt^{3}",d3x);
    CHECK_EQUAL("dd^nx/dt^n/dt",differentiateName("d^nx/dt^n"));
    // if user enters an invalid formula, such as \frac{d^2}{dt^3}x, then it should be processed as a name
    CHECK_EQUAL("dd^2x/dt^3/dt",differentiateName("d^2x/dt^3"));
  }

  TEST_FIXTURE(BinOpFixture,subtract)
  {
    model->addWire(new Wire(t->ports[0],minus->ports[1]));
    model->addWire(new Wire(tsq->ports[0],minus->ports[2]));
    model->addWire(new Wire(minus->ports[0], deriv->ports[1]));
    model->addWire(new Wire(minus->ports[0], f->ports[1]));

    reset();
    nSteps=1;step(); // ensure f is evaluated
    // set the constant of integration to the value of f at t=0
    double f0=f->value();
    integ.intVar->value(f0);
    nSteps=800; step();
    CHECK_CLOSE(1, f->value()/integ.intVar->value(), 0.003);
    CHECK(abs(f->value()-f0)>0.1*f0); // checks that evolution of function value occurs

  }

  TEST_FIXTURE(BinOpFixture,pow)
  {
    model->addWire(new Wire(plus->ports[0],pow->ports[1]));
    model->addWire(new Wire(tsq->ports[0],pow->ports[2]));
    model->addWire(new Wire(pow->ports[0], deriv->ports[1]));
    model->addWire(new Wire(pow->ports[0], f->ports[1]));

    reset();
    nSteps=1;step(); // ensure f is evaluated
    // set the constant of integration to the value of f at t=0
    double f0=f->value();
    integ.intVar->value(f0);
    nSteps=800; step();step();
    CHECK_CLOSE(1, f->value()/integ.intVar->value(), 0.003);
    CHECK(abs(f->value()-f0)>0.1*f0); // checks that evolution of function value occurs

  }

  TEST_FIXTURE(BinOpFixture,log)
  {
    OperationPtr log{OperationType::log};
    model->addItem(log);
    OperationPtr exp{OperationType::exp};
    model->addItem(exp);


    model->addWire(new Wire(plus->ports[0],exp->ports[1]));
    model->addWire(new Wire(exp->ports[0],log->ports[1]));
    model->addWire(new Wire(tsq->ports[0],log->ports[2]));
    model->addWire(new Wire(log->ports[0], deriv->ports[1]));
    model->addWire(new Wire(log->ports[0], f->ports[1]));

    reset();
    nSteps=1;step(); // ensure f is evaluated
    // set the constant of integration to the value of f at t=0
    double f0=f->value();
    integ.intVar->value(f0);
    nSteps=800; step();
    CHECK_CLOSE(1, f->value()/integ.intVar->value(), 0.003);
    CHECK(abs(f->value()-f0)>0.1*f0); // checks that evolution of function value occurs

  }

  TEST_FIXTURE(BinOpFixture,singleArgFuncs)
    {
      // test functions
      OperationPtr funOp;
      for (int op=OperationType::sqrt; op<OperationType::numOps; ++op)
        {
          cout << OperationType::typeName(op) << endl;
          model->removeItem(*funOp);
          funOp.reset(OperationBase::create(OperationType::Type(op)));
          garbageCollect();
          model->addItem(funOp);
          model->addWire(new Wire(plus->ports[0], funOp->ports[1]));
          model->addWire(new Wire(funOp->ports[0], f->ports[1]));
          model->addWire(new Wire(funOp->ports[0], deriv->ports[1]));
          switch (OperationType::Type(op))
            {
            case OperationType::floor: case OperationType::frac:
              CHECK_THROW(reset(), ecolab::error);
              continue;
            default:
              reset();
            }
          nSteps=1;step(); // ensure f is evaluated
          // set the constant of integration to the value of f at t=0
          double f0=f->value();
          integ.intVar->value(f0);
          nSteps=800; step();
          CHECK_CLOSE(1, f->value()/integ.intVar->value(), 0.003);
          CHECK(abs(f->value()-f0)>0.1*f0); // checks that evolution of function value occurs
        }
    }
}
