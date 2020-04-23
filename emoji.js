
let img;
function preload() {
  img = loadImage('assets/heart.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 330, 80, 140,140);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
}

function draw(){

stroke(224, 224, 224);
strokeWeight(4);
line(400, 150, 500, 300);

stroke(224, 224, 224);
strokeWeight(4);
line(400, 150, 500, 150);

stroke(224, 224, 224);
strokeWeight(4);
line(280, 180, 400, 150);

stroke(224, 224, 224);
strokeWeight(4);
line(280, 180, 400, 300);

stroke(224, 224, 224);
strokeWeight(4);
line(280, 180, 200, 300);

stroke(224, 224, 224);
strokeWeight(4);
line(600, 180, 200, 300);

stroke(255, 0, 0);
strokeWeight(4);
fill(0, 0, 255);
textSize(48);
text("👏", 200, 300);

textSize(44);
text('🥰', 280, 180);

textSize(112);
text('❤️', 400, 150);

textSize(16);
text('👌', 500, 150);

textSize(68);
text('😍', 600, 180);

textSize(28);
text('🎉', 680, 270);

textSize(52);
text('😭', 650, 490);

textSize(72);
text('😷', 400, 550);

textSize(16);
text('🤬', 200, 400);

textSize(12);
text('🤷', 300, 300);

textSize(15);
text('🙏', 300, 300);

textSize(48);
text('✨', 400, 300);

textSize(40);
text('🔥', 500, 300);

textSize(20);
text('👩‍💻', 600, 300);

textSize(44);
text('💐', 700, 370);

textSize(32);
text('⭐', 550, 550);

textSize(88);
text('👍', 550, 410);

textSize(52);
text('🦠', 250, 500);

textSize(52);
text('💡', 320, 420);

textSize(28);
text('🥺', 430, 420);
}
