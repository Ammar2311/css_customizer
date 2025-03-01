

 
     let rt= document.querySelector(":root");     //targeting global variables


     const bslide= document.getElementById("blur_slider");

     bslide.addEventListener("change",function(e){      //when change blur range
       
         rt.style.setProperty("--imgBlur",bslide.value+"px");  //the number value need 'px' to applay

          console.log(bslide.value);
     });
     

     const sslide=document.getElementById("space_slider");
  
     sslide.addEventListener("change",function(e){

            rt.style.setProperty("--space",sslide.value+"px");
     })

     const mycolor=document.getElementById("backColor");
  
     mycolor.addEventListener("change",function(e){

            rt.style.setProperty("--backColor",mycolor.value);

            console.log(mycolor.value);
     })