export class VariableValue {
  private m_type: Type;
  m_idx: number; /// index into value vector
  valRef: number;

  lhs(): boolean {
    return this.m_type == flow || this.m_type == tempFlow
  }
    /// variable is a temporary
  temp(): boolean {
    return this.type() == tempFlow || this.type() == undefined
  }

  /// returns true if variable's data is allocated on the flowVariables vector
  isFlowVar(): boolean {
    return this.m_type != stock && this.m_type != integral
  }

  type(): Type {
    return this.m_type
  }

  /// the initial value of this variable
  init: string;

  godleyOverridden: boolean;
  name: string; // full marked up name of this variable

  value(): number {
    return this.valRef;
  }

  idx(): number {
    return this.m_idx;
  }

  constructor(type: Type = VariableType.undefined, const name: string = '', const init: string = '') {
  }

  set(const x: number): VariableValue {
    this.valRef = x;
    return this;
  }
  add(const x: number): VariableValue {
    this.valRef += x;
    return this;
  }

  sub(const x: number): VariableValue {
    this.valRef -= x;
    return this;
  }

  /// evaluates the initial value, based on the set of variables
  /// contained in \a VariableManager. \a visited is used to check
  /// for circular definitions
  initValue(const values: VariableValues, Set<string> visited): number {
  }

  initValue(const v: VariableValues): number {
    Set<string> visited;
    return this.initValue(v, visited);
  }

  reset(const values: VariableValues): void {
  }

  /// check that name is a valid valueId (useful for assertions)
  static isValueId(const name: string): boolean {
    let r = regex(/((constant)?\d*:[^:\s\\{}]+)/)
    return name.length >1 && name.substr(name.length -2) != ':_' && regex_match(name, r);
  }

  /// construct a valueId
  static valueId(scope: int, name: string): string {
    const _name = this.uqName(name)
    if (scope < 0) return ':' + _name;
    return new String(scope) + ':' + _name
  }

  static valueId(name: string): string {
    return this.valueId(this.scope(name), name);
  }

  /// extract scope from a qualified variable name
  /// @throw if name is unqualified
  static int scope(const name: string) {

  }
  /// extract unqualified portion of name
  static uqName(const name: string): string {
  }
}
