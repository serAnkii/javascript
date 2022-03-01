 ## # Display the sum of 5 + 10, using two variables: x and y.

``` js
var x = 5;
var y = 10;
document.getElementById("demo").innerHTML = x + y;
```
## # Create a variable called z, assign x + y to it, and display the result in an alert box.

``` js
var x = 5;
var y = 10;
var z = x + y;
alert(z);
```

## # On one single line, declare three variables with the following names and values:
```
 firstName = "John"
 lastName = "Doe"
 age = 35
```

``` js
var firstName = "John", lastName = "Doe", age = 35;
```

## # Use the correct assignment operator that will result in x being 15 (same as x = x + y).

``` js
x = 10;
y = 5;
x += y;
```

## # Execute the function named myFunction.

``` js
function myFunction() {
  alert("Hello World!");
}
myFunction();
```

## # Make the function return "Hello".

``` js
function myFunction() {
  
return
 "
Hello
";
}
document.getElementById("demo").innerHTML = myFunction();
```

##  # Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".

``` js

switch
(fruits) {
  
case "Banana":
    alert("Hello")
    break;
  
case "Apple":
    alert("Welcome")
    break;    
}
```

## # Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".

``` js
switch(fruits) {
  case "Banana":
    alert("Hello")
    break;
  case "Apple":
    alert("Welcome")
    break;
  
default:
    alert("Neither");
}
```
