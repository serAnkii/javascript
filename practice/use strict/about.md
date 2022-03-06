just write 
``` js
"use strict"
// global use strict
```

``` js
// not restricted code execution env.

function myfunc() {
"use strict"
// restrictd code exe env

}
// not restricted code execution env.

```

### what use strict does

- it prevents conversion of this 
- prevents overridding of read only global values   

# case 1 

``` js 
function myfunc() {
c.log(this) 
}

myfunction() // this will print a global object
// but technically it had not to 
// to overcome this we can use strict mode and then it will log undefined
```

what happenns is when your 'this' is null or undefined => it gets converted into global 

## although we can do this :-

``` js 
function myfunc() {
c.log(this) 
}

myfunction().call({}); // logs an empty onject coz the 'this' now refers to the emplty onject passed via call() method 

// js ignores if we pass null or undefined 
// to overcome this use strict mode

```
# //////////

-  if your 'this' value is primitive then without strict mode it gets converted into its object type
- use strict don't let you to use variables  before their declration
