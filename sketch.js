var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  
   pathImg = loadImage("path.png");

   boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","jake4.PNG","Jake5.png");
 
 
}

function setup(){
  
  createCanvas(400,400);
 
 path = createSprite(200,400,40,50);
 path.addImage(pathImg);
 path.velocityY = 3;
 path.scale = 1;

 boy = createSprite(300,300,30,30);
 boy.addAnimation("running", boyImg);
 boy.scale=0.5; 
  
//crie um limite à esquerda
leftBoundary = createSprite(30,0,100,800);
leftBoundary.visible = false;

//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary = createSprite(380,0,100,800);
rightBoundary.visible = false;

//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background("black");
  path.velocityY = 4;
  boy.x = mouseX


  // mover o menino com o mouse usando mouseX


  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);

  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
