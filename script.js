
    var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(400, 400); 
        frameRate(30);
        
        // ProgramCodeGoesHere
      var y= 400;
background(89, 216, 255);
var y= 400;

var draw= function() {
    stroke (10, 10, 10);
    fill (89, 216, 255);
    var x= random (0,400);
    y=y-10;
    ellipse (x,y, 20,20);
};



var drawFish = function(centerX, centerY,bodyHeight,bodyLength,bodyColor) {
   fill (bodyColor);
   // body
    stroke (13, 13, 13);
    fill (bodyColor);
    ellipse(centerX, centerY, bodyLength, bodyHeight);

    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
    // pupil
    fill(250, 245, 250);
    ellipse(centerX+bodyLength/4 +2, centerY, bodyHeight/10, bodyHeight/10);
    
    // tail
     fill (bodyColor);
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2,centerY,
centerX-bodyLength/2-tailWidth, 
centerY-tailHeight, centerX-bodyLength/2-tailWidth, centerY+tailHeight);
         
};  


drawFish(81, 130, random (50,70), random (50,70), color (166, 230, 46));
drawFish (158, 241, random (50,70), random (50,70), color (230, 18, 18));
drawFish (338, 199, random (50,70), random (50,70), color (65, 115, 201));
drawFish (130, 358,random (50,70), random (50,70), color (6, 66, 115));
drawFish (362, 38, random (50,70), random (50,70), color (217, 89, 128));
drawFish (199, 21, random (50,70), random (50,70), color (255, 195, 13));
drawFish (289, 358, random (50,70), random (50,70), color (255, 81, 0));
drawFish (360, 300, random (50,70), random (50,70), color (255, 0, 221));
drawFish(57, 8, random (50,70), random (50,70), color (46, 230, 199));
drawFish (199, 130, random (50,70), random (50,70), color (12, 133, 79));
drawFish (54, 257,random (50,70), random (50,70), color (128, 80, 191));


// click to add fish
var mouseClicked= function (){
    var color1= random (0,255);
    var color2= random (0,255);
    var color3= random (0,255);
    drawFish (mouseX, mouseY,random (50,70), random (50,70), color (color1, color2, color3)); 
    };
    }};

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc); 
