# Source

- `engine` the core dynamic systems engine
- `vm` view model helpers

The source may also be written in [TypeScript](typescriptlang.org)

### app

The main app, which ties everything together for easy usage by any client.

### engine

Main C++ engine files converted to JavaScript.
After core conversion, we need to add a streaming layer that can be used with RxJs, xstream or most.js.

### vm

Generic View model helpers. Can be used as "mixins" for View Models in a UI framework such as React, Angular or Vue.



