export class ValueVector {
  /// vector of variables that are integrated via Runge-Kutta. These
  /// variables label the columns of the Godley table
  static stockVars: Array<number>;
  /// variables defined as a simple function of the stock variables,
  /// also known as lhs variables. These variables appear in the body
  /// of the Godley table
  static flowVars: Array<number>;
}
