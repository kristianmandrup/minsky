# Source

- `engine` the core dynamic systems engine
- `vm` view model helpers

The source is written in ES2017 JavaScript via [Babel](babeljs.io) and [preset-2017](https://www.npmjs.com/package/babel-preset-es2017)
The source may also be written in [TypeScript](typescriptlang.org) 2.1 and higher.

### app

The main app, which ties everything together for easy usage by any client.

### engine

Main C++ engine files converted to JavaScript.
After core conversion, we need to add a streaming layer that can be used with RxJs, xstream or most.js.

### vm

Generic View model helpers. Can be used as "mixins" for View Models in a UI framework such as React, Angular or Vue.



