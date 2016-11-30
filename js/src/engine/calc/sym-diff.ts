export class SymbolicDifferentiation {
  differentiateName(const x: string): string {
    return x;
  //   int order=0; // current derivative order
  //   string varName=x; // base variable name
  //   regex singleDeriv(R"(d(.*)/dt)"),
  //     higherOrderDeriv(R"(d\^\{(\d*)\}(.*)/dt\^\{(\d*)\})");
  //   smatch m;
  //   if (regex_match(x,m,singleDeriv))
  //     {
  //       order=1;
  //       varName=m[1];
  //     }
  //   else if(regex_match(x,m,higherOrderDeriv) && m[1]==m[3])
  //     {
  //       // for some reason, stoi is missing on MXE, so fake it
  //       order=atoi(m[3].str().c_str());
  //       varName=m[2];
  //     }
  //   order++;
  //   ostringstream r;
  //   if (order==1)
  //     r<<"d"<<varName<<"/dt";
  //   else
  //     r<<"d^{"<<order<<"}"<<varName<<"/dt^{"<<order<<"}";
  //   return r.str();
  }
}
