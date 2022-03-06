``` js
const obj = { 
 function myfunction() {
 console.log(this);
 },
 function myfunction2() 
    {
     function myfunction3 ()
     {
       console.log(this);
     }
    return mufunction3 ();
    }
}

function myfunction1() {
console.log(this);

const test1 = obj.myfunction
//case1;-
test1() // it gives us the global
//case 2;-
// obj.myfuncion() directly -> gives the obj
// case 3
// obj.myfunction2 gives global

 ```

-> in case 1 we are extracting the obj value and when a function is onvoked directly it refers to global scope<br>
-> in case 2 we are calling function from object i.e it isinvoked through object that's why the value of this is the object itself<br>
-> in case 3 we are calling the function via object but return myfunction3 is invoked directly in the function 2 so that's why the scope is global<br>

/////////////////////////////////////////////////////

new keyword 

``` js
function myfunction(){
return this
}


const mynew = myfunction()
console.log(mynew) // this will be a global reference

const mynew1 = new myfunction()
console.log(mynew1) // this logs a reference to myfunction which is the mynew1 object itself .
```

when you do a new then two things happen<br>
1 -> an onject is created pointing to the constructor function <br>
2 -> this inside that function basically points to the new object <br>

``` js 
const myown = new myfunction();
const myown2 = new myfunction();

myown.a = "ankit";
myown2.a = "subham"
console.log(myown.a) // logs ankit
console.log(myown2.a) // logs subham
```

But what if we don't use new keyword?

``` js
const myown =  myfunction();
const myown2 =  myfunction();

myown.a = "ankit";
myown2.a = "subham"
console.log(myown.a) // logs subham 
console.log(myown2.a) // logs subham 
```
myown2.a will replace myown.a's property because we are using them at global scope
