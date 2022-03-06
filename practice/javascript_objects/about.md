In node v17 an update was there which is not explicitly mentioned and that is 
the ability to deep clone an object natively in js 

what is deep cloning ???????????
let's understand this by an example 

``` js
var obj = {
name : "ankit"
}

var obj2 = obj;

obj2.name = "subham"

console.log(obj); 
// will display  { name : subham }  
```

it is because objects in js are refrenced by memory

the cure is to simply destructring the object while cloning it 

`var obj2 = { ...obj };

but let's go one level deeper


``` js
var obj = {
name : "ankit",
address : { city : "dehradun"
}
}

var obj2 = { ...obj }; // this is known as shallow cloning 

obj2.adress.city = "mumbai"

console.log(obj); 
// first layer will remain same but the another level in original object will get replaced;  
```

to resolve this previously lots of methods were used one of them is 

``` js
 
const deepclone = JSON.parse(JSON.stringify(obj)); 
```

but with node 17 natively we can do this just by 
```js
const deepclone = structuredClone(obj)
```
