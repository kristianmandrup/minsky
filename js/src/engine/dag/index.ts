import { Node } from './node'

export class Graph extends Node {
  constructor (opts = {}) {
    super(opts)
    this.opts = opts
  }
}
