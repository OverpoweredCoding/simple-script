# simple-script
Module for JavaScript that simplifies tasks and adds new features to the language
```
const s = require('./interp.js')

// SIMPLE SCRIPT
s.p()
s.p(s.aS('hello ', 'world'))
s.p(s.a(1.000, 6.915, 3))
s.p(s.s(1, 5, 1))
s.p(s.d(5, 7, 5))
s.p(s.m(5, 9.695, 3))
s.async([hello], 1000)
//s.q(1)
s.p(s.json("{\"p\":\"y\"}"))

// JAVASCRIPT
//EASTER EGGS DON'T EXIST IN THIS :/
console.log("hello " + "world")
console.log((Number(1.000) + Number(6.915)).toFixed(3))
console.log((Number(1) - Number(5)).toFixed(1))
console.log((Number(5) / Number(7)).toFixed(5))
console.log((Number(5) * Number(9.695)).toFixed(3))
//IMPOSSIBLE AS A ONE-LINER
//process.exit(1)
//IMPOSSIBLE AS A ONE-LINER



function hello() {
    s.p('hi')
}
```
