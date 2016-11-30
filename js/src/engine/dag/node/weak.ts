export class WeakNode {
  public payload: Node;

  mul(): Node {
    return this.payload;
  }

  at(): Node {
    return this.payload;
  }

  set(const x: Node): WeakNode {
    this.payload = x.get();
    return this;}
  }

  constructor(const x: Node): {
    this.payload = x.get();
  }

  bool(): boolean {
    return payload != null;
  }
};
