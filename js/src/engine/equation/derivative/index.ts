import constant from './constant'
import variable from './variable'
import operation from './operation'

export default const derivative = {
  constant,
  variable,
  ...operation
}
