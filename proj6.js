<!doctype html>
<html lang="en">
  <head> 
  <body>
	  <p id="sayHello"></p>
	  <script>
	  var yourName = prompt("What is your name?"); 
		  if(yourName != null)
			  document.getElementById ("sayHello").innerHTML = "Hello" + yourName; 
	else
		alert("Please enter a name next time");
  </script>
</body>
</head>
	  </html>