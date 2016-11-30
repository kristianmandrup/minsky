export class VariableValue {
  private m_type: Type;
  m_idx: number; /// index into value vector
  valRef(): number;

  constructor() {
  }

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
}