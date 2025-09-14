/* use of function keys "f12" key on the browser

This can be blocked using javascript eventner.*/


<script >
    $(document).keydown(function(e){
   if(e.which === 123){
       return false;
      }
    });

  </script> 



 /* Use of Right click
 You can block this using javascript or with just your html */

 <html oncontextmenu="return false">
 </html>

 (or)

 <script>
    $(document).bind("contextmenu",function(e) { 
       e.preventDefault();
 
    });
  </script>


  /* Use of other shortcuts involving Ctrl keys */

   <body oncontextmenu="return false" onkeydown="return false;" onmousedown="return false;">
         Your body content
   </body>


