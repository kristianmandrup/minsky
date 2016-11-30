import VariableValue from './value'
import IntOp from '../operation/int'

export class Integral {
  stock: VariableValue;
  input: VariableValue;
  operation: IntOp; //< reference to the interal operation object

  constructor(input: VariableValue = VariableValue()) {

  }
}
