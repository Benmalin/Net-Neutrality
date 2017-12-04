var img;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var drag = 10;
function preload() {
  data = loadJSON("text.json");
  img = loadImage("fcc.jpg");
  img1 = loadImage("netneutrality.png");
  img2 = loadImage("net-neutrality-what-you-need-know-now-infographic.png");
  img3 = loadImage("internet-association-members.png");
  img4 = loadImage("world.png");
  img5 = loadImage("chart-of-the-day-tech-companies-spending-on-lobbying-dec-2010.jpg");
  img6 = loadImage("techpact.jpg");
  img7 = loadImage("netneutrality.png");
  img8 = loadImage("ajit-pai-free-speech.jpg");
  img9 = loadImage("wlTZnST.jpg");
}
var slider ={
  y: 1125,
  y2:1750
};

var fornn = {
  x: 0,
  y: 600,
  w: 1000,
  l: 700
};

var circle = {
  x: 120,
  y: 200,
  diameter: 34,
  movement: 2.5,
  movingcircle: function (){

    clear();
    background(100);
    forNN();
    info();
    strokeWeight(2.5);
    line(this.x, this.y, 900, this.y);
    strokeWeight(1);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    this.x = this.x + this.movement;
    textSize(15);
    fill(0,0,0);
    text("Data",this.x-18, this.y+5);
  },
};

function setup() {
  stroke(3)
start();

}

function draw() {
  forNN();
  info();
  animate();
thingy();
dragMe();
}
function thingy(){
  if (mouseY < circle.y+300){
    noStroke();
    fill(100, 255, 200);
    ellipse(mouseX, mouseY, 50, 50);
    stroke(1)
    fill(0,0,0);
    textSize(20);
    text("Hello", mouseX-21, mouseY+5);
  } else {
    noStroke();
    fill(100, 255, 200);
    ellipse(mouseX, circle.y+300, 50, 50);
    stroke(1)
    fill(0,0,0);
    textSize(20);
    text("Hello", mouseX-21, circle.y+305);
  }
}
  function thingy2(){
    if (mouseY > 500){
      noStroke();
      fill(100, 255, 200);
      rect(mouseX, mouseY, 120, 25);
      stroke(1)
      fill(0,0,0);
      textSize(20);
      text("Scroll Down!", mouseX, mouseY+20);
    }
}
function animate(){
  if (circle.x !== 900) {
      circle.movingcircle();
  } else {
circle.x = 50;
    circle.movingcircle();
  }
  if (circle.x < 816){
    fill(255,255,255);
    textSize(20);
    text("Internet Provider", circle.x+20,circle.y+6.5);
  } else {
    noStroke();
    fill(100,100,100);
    textSize(20);
    text("Internet Provider", circle.x+20,circle.y+6.5);
  }
  fill(0,0,0)
  rect(870,140,110,110);
  fill(255,255,255);
  textSize(20);
  text("You", 910, 200);
  fill(0,0,0)
  rect(20,140,110,110);
  fill(255,255,255);
  textSize(20);
  text("Internet", 45, 200);


}

function start(){
  createCanvas(1000, 5000);
  background(100);
  textSize(40)
  fill(255,255,255)
  slider = createSlider(0, 14, 0);
  slider.position( 35, 1325);
  slider.style('width', '950px');
}

function forNN(){
  var val = slider.value();
  if (val == 0 ){
    fill(255,255,255);
    textSize(40);
    text("For Net Neutrality", 350,560);
    thingy2();
  }
  if (val == 1) {
    fill(255,255,255);
    rect(fornn.x,fornn.y,fornn.w,fornn.l);
    fill(0,0,0);
    textSize(75);
    text("The Benefits of Net Neutrality", 10, 1000);
  }
  if (val == 2) {
inside(data.text[0].lines[0],data.text[0].lines[1],data.text[0].lines[2],data.text[0].lines[3],data.text[0].lines[4]);
textSize(40)
fill(0,0,0)
text("Laws", 500, 650)
image(img, 100, 675, 800, 400);
        }

     if (val == 3){
       inside(data.text[1].lines[0],data.text[1].lines[1],data.text[1].lines[2],data.text[1].lines[3],data.text[1].lines[4]);
        textSize(40)
        fill(0,0,0)
        text("Arguments in Favor", 375, 650)
      image(img1, 100, 675, 800, 400);
      }

       if (val == 4){
         inside(data.text[2].lines[0],data.text[2].lines[1],data.text[2].lines[2],data.text[2].lines[3],data.text[2].lines[4]);
         textSize(40)
         fill(0,0,0)
         text("Examples of Net Neutrality", 250, 650);
         image(img2, 100, 675, 800, 400);
          }

     if (val == 5){
       inside(data.text[3].lines[0],data.text[3].lines[1],data.text[3].lines[2],data.text[3].lines[3],data.text[3].lines[4]);
       textSize(40);
       fill(0,0,0);
       text("Companies in favor of Net Neutrality", 190, 650);
       image(img3, 100, 700, 800, 525);
        }

    if (val == 6){
      inside(data.text[4].lines[0],data.text[4].lines[1],data.text[4].lines[2],data.text[4].lines[3],data.text[4].lines[4]);
      textSize(40)
      fill(0,0,0)
      text("Net Neutrality throughtout the World", 190, 650)
      image(img4, 100, 675, 900, 400);
      }
      if (val == 7) {
        inside2(data.text[5].lines[0],data.text[5].lines[1],data.text[5].lines[2],data.text[5].lines[3],data.text[5].lines[4]);
        textSize(40)
        fill(0,0,0)
        text("Lobbying against Net Neutrality", 190, 650)
        image(img5, 100, 675, 900, 400);
        }

    if (val == 8){
      fill(10,20,255);
      rect(fornn.x,fornn.y,fornn.w,fornn.l);
      fill(255,255,255)
      textSize(100)
      text("The End!", 300, 700);
      text("Continue on to", 200, 900);
      text("Against Net Neutrality", 20, 1000);
    }
      if (val == 9) {
        background(100);
        fill(255,255,255);
        rect(fornn.x,fornn.y,fornn.w,fornn.l);
        textSize(40)
        fill(255,255,255);
        text("Against Net Neutrality", 350,560);
        fill(0,0,0);
        textSize(60);
        text("The Disadvantages of Net Neutrality", 10, 1000);

      }
         if (val == 10){
           inside2(data.text[6].lines[0],data.text[6].lines[1],data.text[6].lines[2],data.text[6].lines[3],data.text[6].lines[4]);
           textSize(40)
           fill(0,0,0)
           text("Companies Against Net Neutrality", 190, 650)
           image(img6, 100, 700, 800, 525);
            }

           if (val == 11){
             inside2(data.text[7].lines[0],data.text[7].lines[1],data.text[7].lines[2],data.text[7].lines[3],data.text[7].lines[4]);
             textSize(40)
             fill(0,0,0)
             text("Agruments Against Net Neutrality", 190, 650)
             image(img7, 100, 675, 900, 400);
              }

         if (val == 12){
           inside2(data.text[8].lines[0],data.text[8].lines[1],data.text[8].lines[2],data.text[8].lines[3],data.text[8].lines[4]);
           textSize(40)
           fill(0,0,0)
           text("Proposed New Laws", 190, 650)
           image(img8, 100, 675, 900, 400);
             }
        if (val == 13){
          inside2(data.text[9].lines[0],data.text[9].lines[1],data.text[9].lines[2],data.text[9].lines[3],data.text[9].lines[4]);
          textSize(40)
          fill(0,0,0)
          text("People's arguments against NN", 190, 650)
          image(img9, 100, 675, 900, 400);
            }
        if (val == 14){
          background(100);
          fill(10,20,255);
          rect(fornn.x,fornn.y,fornn.w,fornn.l);
          textSize(40)
          fill(255,255,255);
          text("Against Net Neutrality", 350,560)
          fill(255,255,255)
        textSize(200)
          text("The End!", 100, 1000);
    }
}
function inside(a,b,c,d,e){
  fill(255,255,255);
  rect(fornn.x,fornn.y,fornn.w,fornn.l);
  fill(0,0,0);
  textSize(17);
  text(a, 100, 1110);
  text(b, 100, 1110+25);
  text(c, 100, 1110+50);
  text(d, 100, 1110+75);
  text(e, 100, 1110+100);
}
function inside2(a,b,c,d,e){
  background(100);
  fill(255,255,255);
  rect(fornn.x,fornn.y,fornn.w,fornn.l);
  textSize(40)
  fill(255,255,255);
  text("Against Net Neutrality", 350,560)
  fill(0,0,0);
  textSize(17);
  text(a, 100, 1110);
  text(b, 100, 1110+25);
  text(c, 100, 1110+50);
  text(d, 100, 1110+75);
  text(e, 100, 1110+100);
}
function info(){

  textSize(40);
  fill(255,255,255);
  text("What is Net Neutrality?", 305, 60);
  textSize(18.5);
  fill(100, 255, 200)
  text("Net Neutrality is the idea that all data should be treated the same, and everybody should have equal access to that data.", 10, 100);
}
function dragMe(){
  if (mouseY > 1200){

if (drag < 816){
 fill(random(255), random(255), random(255));
 textSize(20);
  text("Drag Me!", drag ,1290);
  } else {
    drag = 32
    fill(0,0,0);
    textSize(20);
    text("Drag Me!", drag ,1290);
  }
} else {
}
      drag = drag + 3;
  }
