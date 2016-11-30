export class GodleyEvaluator {
  /// representation of matrix connecting flow variables to stock variables
  private sidx: Array<number>;
  private fidx: Array<number>;
  private m: Array<number>;
  /// index of stock variables that need to be zeroed at start of eval
  private initIdx: Array<number>;

  public compatibility: boolean;

  constructor() {
  }

  init(const begin: GodleyIterator, const end: GodleyIterator, const values: VariableValues) {

  }

  eval(const sv: Array<number>, const fv: Array<number>): void {

  }
}
