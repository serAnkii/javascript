> Web Workers are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. In addition, they can perform I/O using XMLHttpRequest (although the responseXML and channel attributes are always null) or fetch (with no such restrictions). Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa).

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
