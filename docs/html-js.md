# JS+HTML 1 | Start

I think u know about html.

Its markdown script.

JS its Java Script. we cann create more thing in this script.

Creating click to see data button
```js
<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me.</button>

<p id="demo"></p>
```

Then we get this 

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me.</button>

<p id="demo"></p>

We use JS to change HTML of p with id demo

Example: 
```js
document.getElementById("demo").innerHTML = Date();
```
