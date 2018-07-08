# Type
Single-file, lightweight type() function in JavaScript

### Why?
Why not?

### Notice
This was intended to be a fun project, something **EXACTLY** like this exists in JavaScript, this is not intended for production-use at all.

## Example
```js
const { type } = require('type');

type('Hello');
// Expected: string

type(4);
// Expected: number

type(true);
// Expected: boolean
```

# License
This project is licensed under the permissive MIT license.
