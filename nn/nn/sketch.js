function preload() {
  data = loadJSON("text.json");
}
var slider ={
  y: 1125,
  y2:1750
};

var fornn = {
  x: 0,
  y: 600,
  w: 1000,
  l: 500
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
}
function thingy(){
  noStroke();
  fill(100, 255, 200);
  ellipse(mouseX, mouseY, 50, 50);
  stroke(1)
  fill(0,0,0);
  textSize(20);
  text("Hello", mouseX-21, mouseY+5);
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
  slider.position( 35, 1125);
  slider.style('width', '950px');
}

function forNN(){
  var val = slider.value();
  if (val == 0 ){
    textSize(20);
    fill(255,255,255);
    text("Drag me!", 20, 1090);
    textSize(40);
    text("For Net Neutrality", 350,560);
  }
  if (val == 1) {
    fill(255,255,255);
    rect(fornn.x,fornn.y,fornn.w,fornn.l);
    fill(0,0,0);
    textSize(40);
    text("The Benefits of Net Neutrality", 250, 700);

  }
  if (val == 2) {
    textSize(40)
    fill(0,0,0)
    text("Laws", 400, 700)
inside(data.text[1].lines[1],data.text[1].lines[2],data.text[1].lines[3],data.text[1].lines[4],data.text[1].lines[5]);
        }

     if (val == 3){

       textSize(40)
       fill(0,0,0)
       text("Arguments in Favor", 400, 700)

       inside(data.text[2].lines[1],data.text[2].lines[2],data.text[2].lines[3],data.text[2].lines[4],data.text[2].lines[5]);

      }

       if (val == 4){

         textSize(40)
         fill(0,0,0)
         text("Examples of Net Neutrality", 400, 700)
         inside(data.text[3].lines[1],data.text[3].lines[2],data.text[3].lines[3],data.text[3].lines[4],data.text[3].lines[5]);

          }

     if (val == 5){
       textSize(40)
       fill(0,0,0)
       text("Companies in favor of Net Neutrality", 400, 700)
       inside(data.text[4].lines[1],data.text[4].lines[2],data.text[4].lines[3],data.text[4].lines[4],data.text[4].lines[5]);

        }
    if (val == 6){
      textSize(40)
      fill(0,0,0)
      text("Arguments in Favor", 400, 700)
      inside(data.text[5].lines[1],data.text[5].lines[2],data.text[5].lines[3],data.text[5].lines[4],data.text[5].lines[5]);

      }
    if (val == 7){
      fill(10,20,255);
      rect(fornn.x,fornn.y,fornn.w,fornn.l);
      fill(255,255,255)
    textSize(200)
      text("The End!", 20, 900);
}
      if (val == 8) {
        background(100);
        fill(255,255,255);
        rect(fornn.x,fornn.y,fornn.w,fornn.l);
        textSize(40)
        fill(255,255,255);
        text("Against Net Neutrality", 350,560)
          fill(0,0,0).
        text("The Disadvantages of Net Neutrality", 250, 700);

      }
      if (val == 9) {
        inside2(data.text[6].lines[1],data.text[6].lines[2],data.text[6].lines[3],data.text[6].lines[4],data.text[6].lines[5]);

        }

         if (val == 10){
           inside2(data.text[7].lines[1],data.text[7].lines[2],data.text[7].lines[3],data.text[7].lines[4],data.text[7].lines[5]);

            }

           if (val == 11){
             inside2(data.text[8].lines[1],data.text[8].lines[2],data.text[8].lines[3],data.text[8].lines[4],data.text[8].lines[5]);

              }

         if (val == 12){
           inside2(data.text[9].lines[1],data.text[9].lines[2],data.text[9].lines[3],data.text[9].lines[4],data.text[9].lines[5]);

             }
        if (val == 13){
          inside2(data.text[10].lines[1],data.text[10].lines[2],data.text[10].lines[3],data.text[10].lines[4],data.text[10].lines[5]);

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
          text("The End!", 20, 900);
    }
}
function inside(a,b,c,d,e){
  fill(random(255),random(255),0);
  rect(fornn.x,fornn.y,fornn.w,fornn.l);
  fill(0,0,0);
  textSize(17);
  text(a, 100, 910);
  text(b, 100, 910+25);
  text(c, 100, 910+50);
  text(d, 100, 910+75);
  text(e, 100, 910+100);
}
function inside2(a,b,c,d,e){
  background(100);
  fill(random(255),random(255),255);
  rect(fornn.x,fornn.y,fornn.w,fornn.l);
  textSize(40)
  fill(255,255,255);
  text("Against Net Neutrality", 350,560)
  fill(0,0,0);
  textSize(17);
  text(a, 100, 910);
  text(b, 100, 910+25);
  text(c, 100, 910+50);
  text(d, 100, 910+75);
  text(e, 100, 910+100);
}
function info(){

  textSize(40);
  fill(255,255,255);
  text("What is Net Neutrality?", 305, 60);
  textSize(18.5);
  fill(100, 255, 200)
  text("Net Neutrality is the idea that all data should be treated the same, and everybody should have equal access to that data.", 10, 100);
}
