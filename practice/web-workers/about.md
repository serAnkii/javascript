## creating a web worker in script.js  

``` js
const worker = new Worker('worker.js') //worker.js is the file in which all the worker code will be there

worker.addEventListner('message',data => {

})
```

## woroker.js

``` js
addEventListner('message',data => {
console.log('main script sent' ,data)
})
```
