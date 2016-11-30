import GodleyIterator from './'

export class GodleyIteratorAdaptor {

  constructor(iterator: GodleyIterator) {
    this.it = it
  }

  public add(const it: GodleyIteratorAdaptor): GodleyIteratorAdaptor {
    return this.it.add(it);
  }

  public notEq(const x: GodleyIteratorAdaptor): boolean {
    return x.it.notEq(it);
  }

  public id(): number {
    return this.it.id();
  }

  /// Godley table data this points to
  data() {
  }

  signConventionReversed(col: number): boolean {
  }

  initialConditionRow(row: number): boolean {
  }
  /// returns valueid for variable reference in table
  // TODO: this should be refactored to a more central location
  valueId(const x: String) : string {
    return this.it.valueId(x);
  }
}