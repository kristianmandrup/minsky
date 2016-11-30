const c = VariableType.constant
const zero = 'constant:zero'
const one = 'constant:one'

export class VariableValueMap {
  constructor() {
    this.clear()
  }

  clear(): void {
    this.map = new Map()

    // add special values for zero and one, used for the derivative
    // operator in SystemOfEquations
    insert(value_type('zero', VariableValue(c, 'zero', '0')));
    insert(value_type('one', VariableValue(c,'one', '1')));
  }

  /// generate a new name not otherwise in the system, based on \a name
  newName(const string name): string {
  }

  reset(): void {
  }

  /// checks that all entry names are valid
  validEntries(): boolean {
  }
}