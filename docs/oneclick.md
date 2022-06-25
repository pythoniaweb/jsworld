# OneClick JS
> Oneclick is a free captcha to our website
> Its very simple.

## OneClick Cons
> Not work in render engines like md to html
> Not work on docify
> Not work in some web builders
> Sometimes not work on WordPress (cant setup)

## Start Wirh OneClick
### Importing Oneclick


```html
<div class="captcha-code"></div> <!-- Dont Delete • Anti Bot -->
<div id="captcha-element"></div> <!-- Here will be Captcha -->
<script src="https://oneclick-2.sdddddddada.repl.co/script.js" id="1click" accesskey="oneapikeyfreeacces"></script> <!-- Import captcha -->
```

## First Code
### Making Simple Check

```html
<div class="captcha-code"></div>
<div id="captcha-element"></div> <!-- Here will be captcha -->
<script src="https://oneclick-2.sdddddddada.repl.co/script.js" id="1click" accesskey="oneapikeyfreeacces"></script> <!-- Import captcha -->
<button id="demo" onclick="checkcaptcha()">Verify.</button> <!-- Verrify button -->

<script>
//Yes its very basic script to check captcha
function checkcaptcha() {
   const iframe = document.getElementById("captchacheckid");// accessing the captcha element
   const iWindow = iframe.contentWindow;// accessing the captcha element
   const iDocument = iWindow.document;// accessing the captcha element

// accessing the captcha element
const element = iDocument.getElementById('click').checked;
if(element == true){
  //Add u code if captcha done
  window.location.assign("https://google.com/") //u cann delete this stroke its just for example
}
 
}


  
  </script>
```

PS: We try to add to this site but not work
