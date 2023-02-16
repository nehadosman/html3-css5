var interval;
clearInterval(interval);

var images = ["image1" , "image2" , "image3" , "image4"];
interval=setInterval(function(){
  var img_no=document.getElementById("image_no").value;
  $("#image_div").fadeOut(300,function(){
   document.getElementById("image_div").innerHTML="<img src='"+images[img_no]+".jfif'>";
    if(img_no==3){
        document.getElementById("image_no").value = 0;
    }
    else{
    document.getElementById("image_no").value = Number(img_no)+1;
    }
  });
  $("#image_div").fadeIn(1500);
}, 3000);

function pause_slideshow()
{
 clearInterval(interval);
}
