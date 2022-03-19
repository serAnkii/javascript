> - ### js ES6 introduced the spread operator. 
> - ### the syntax is three dots (...) followed by the array(or iterable)
> - ### it expands the array into indivisual elements.So it can be used to expand the array in the places where zero or more elements are expected 

- ## use case 1
```js
let array1 = [3,4,5]
let arr2 = [1,2,...array1]

console.log(arr2) //this will give the output => [1,2,3,4,5]

let obj1 = {
name : 'ankit',
city : 'dehradun'
}

let obj2 = {
...obj1,
name2: "shubham",
city : "rakhipur"
}



```

- ## use case 2 : array destructuring

 ```js
let arr1 = [1,2,3,4,5]

const [first,...others] = arr1;

console.log(first,others) // this will give 1 and remaning all elemnts as a new array 

```
