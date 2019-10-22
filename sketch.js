let paint_mode = false
let current_stroke = 1

//gradient
var c1, c2;

//rainbowpen
var hues;
var rainbow = true;
var rate = 1;

function setup() {
  createCanvas(600, 600);
  // Define colors
  c1 = color(255, 204, 0);
  c2 = color(255);
  setGradient(c1, c2);
}


function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}



function draw() {

    // only execute this code if you've turn on paint_mode
    if (paint_mode == true) {
        line(pmouseX, pmouseY, mouseX, mouseY)
        // line(pmouseX+10, pmouseY+10, pmouseX+10, pmouseY+10)
        // line(pmouseX+10, pmouseY+10, pmouseX+10, pmouseY+10)        
    }



    // make a button on the canvas 
    // use push and pop to isolate any changes from the rest of your code
    push()
    stroke(0)
    strokeWeight(1)

    // make the toolbar area
    fill(200, 200, 200)
    rect(0, 0, 50, height)

    // make the red button
    fill(255, 0, 0)
    rect(10, 10, 30, 30)

    // make the blue button
    fill(0, 0, 255)
    rect(10, 50, 30, 30)


     // make the rainbow button
    fill(253, 3, 163)
    rect(10, 170, 30, 30)

    //orange button 
    fill(251, 166, 76)
    rect(10, 210, 30, 30)

    //yellow button 
    fill(247, 250, 39)
    rect(10, 250, 30, 30)

    //green box
    fill(110, 255, 28)
    rect(10, 290, 30, 30)


    //purple box
    fill(169, 2, 252)
    rect(10, 330, 30, 30)


    //make an decrease stokeWeight button
    fill(255, 255, 255)
    rect(10, 90, 30, 30)
    line(15, 105, 35, 105)

    //make an increase stokeWeight button
    fill(255, 255, 255)
    rect(10, 130, 30, 30)
    strokeWeight(5)
    line(15, 145, 35, 145)






    pop()

}

function mousePressed() {
    paint_mode = true
}

function mouseReleased() {
    paint_mode = false
}

function mouseClicked() {

    // check to see if the mouse click was within the red button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
        stroke(255, 0, 0, 50)
    }

    // check to see if the mouse click was within the blue button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 90) {
        stroke(0, 0, 255, 50)
    }



    // test if mouse clicked in strokeWeight increase box
    if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 130) {
        if (current_stroke > 1) {
            current_stroke -= 1
        }        
        strokeWeight(current_stroke)        
    }

    // test if mouse clicked in strokeWeight decrease box
    if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 170) {
        current_stroke += 1        
        strokeWeight(current_stroke)

        }

     // rainbow test 
      if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 210) {
        stroke (253, 3, 163)
        }

    
    //orange box
      if (mouseX > 10 && mouseX < 40 && mouseY > 210 && mouseY < 250) {
        stroke (251, 166, 76)

        }  


   
    //yellow box
      if (mouseX > 10 && mouseX < 40 && mouseY > 250 && mouseY < 290) {
        stroke (247, 250, 39)

        }  

     //green box
      if (mouseX > 10 && mouseX < 40 && mouseY > 290 && mouseY < 330) {
        stroke (110, 255, 28)

        }  

    //purple box
      if (mouseX > 10 && mouseX < 40 && mouseY > 330 && mouseY < 370) {
        stroke (169, 2, 252)

        }  
  


  if (keyIsPressed)
    if (keyCode == ESCAPE) {
      background(255)
    }


}


 

