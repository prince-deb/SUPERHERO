var canvas=new fabric.Canvas("myCanvas");
playerx=10;
playery=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";

function player_update()
{
   fabric.image.fromURL("player.png",function(img){
       player_object=Img;


       player_object.scaleTowidth(150);
       player_object.scaleToheight(140);
       player_object.set({
           top:player_y,
           left:player_x
       });
       canvas.add(player_object);
   });
    }

    function new_image(get_image)
    {
       fabric.image.fromURL(get_image,function(img){
          block_image_object=Img;
    
    
          block_image_object.scaleTowidth(block_image_width);
           block_image_object.scaleToheight(block_image_height);
           block_image_object.set({
               top:player_y,
               left:player_x
           });
           canvas.add(block_image_object);
       });
        }
    
    