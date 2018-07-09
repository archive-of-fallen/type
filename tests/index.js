const { type } = require('type');

type('Hello');
// Expected: string

type(4);
// Expected: number

type(true);
// Expected: boolean

// Object parsing coming soon
/*
const myObj = {
  myKey: 'myVal',
  myKey2: 'myVal2'
}

type(myObj);
*/
