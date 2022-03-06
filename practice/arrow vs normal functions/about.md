old way => normal functions
``` js
function myfunction() {
// something something
}
```

new way => arrow functions
``` js
const myfunction () => {
// something something
}
```

## ommits
``` js
const multiply = x => x*x;

console.log(multiply(25))
```
///////////////////////////////
## hoisting 
in js there is concept of hoisting which means we can use funcions before declaring 'em

``` js
console.log(myfunction());

function myfunction() { return 100}

// the js will convert this into 

function myfunction() { return 100}

console.log(myfunction());

```

var keyword's declaration is also hoisted in js

``` js
console.log(x); // it'll print undefined on console;

var x = 100;

// why this happend :-
// the js will format this code like 

var x;
console.log(x);
x=100;



```

but the arrow functions are not hoisted <br>

this in arrow function is binded to the previous value of this <br>

for ex

``` js
const obj = {
 somemethod = () => {
     return this
    }
}

console.log(this) // this will print {}



var a = obj.somemethod;

console.log(a) // this will also print {}

console.log(obj.somemethod) // this will also print {} 
```
because the value of "this" inside a arrow function is basically what it's vaue would've been outside the arrow function 

### this in setTimeout() it does not calls any function through the object in which it is declared .... it calls it independently
<br>
a typical hack people used to do earlier was 

``` js
const _this =  this
 
```

alternative is to use this inside a arrow function then this will always contain its previous value 
