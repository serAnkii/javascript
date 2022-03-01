## # Use the getElementsByTagName method to find the first <p> element, and change its text to "Hello".

``` html
<p id="demo"></p>

<script>
document.getElementsByTagName("p")[0].innerHTML = "Hello";
</script>
```

## # Change the text of the first element that has the class name "test".

``` html
<p class="test"></p>
<p class="test"></p>

<script>
document.getElementsByClassName("test")[0].innerHTML = "Hello";
</script>
```

## # Use HTML DOM to change the value of the image's src attribute.

``` html
<img id="image" src="smiley.gif">

<script>
document.getElementById("image").src = "pic_mountain.jpg";
</script>
```

## # Change the text color of the <p> element to "red".

``` html
  <p id="demo"></p>

<script>
document.getElementById("demo").style.color = "red";
</script>

```
  
## # Change the font size of the p element to 40 pixels.

``` html
<p id="demo"></p>

<script>
document.getElementById("demo").style.fontSize = "40px";
</script>
```

## # Use the CSS display property to hide the p element.

``` html
<p id="demo"></p>

<script>
document.getElementById("demo").style.display = "none";
</script>
```

## # Use the eventListener to assign an onclick event to the <button> element.
  
``` html
<button id="demo">Click me1</button>

<script>
document.getElementById("demo").addEventListener("click", myFunction);
</script>
```  
