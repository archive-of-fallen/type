const { type } = require('type');

type('Hello');
// Expected: string

type(4);
// Expected: number

type(true);
// Expected: boolean
