var path, boy, leftBoundary, rightBoundary;
var pathImg, boyAnimation;
var i;



function preload(){
pathImg = loadImage("path.png");
boyAnimation = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

 path = createSprite(200, 200);
 path.addImage(pathImg);
 path.scale = 1.2;
 path.velocityY = 4;

 
 boy = createSprite(200, 200)
 boy.addAnimation('running', boyAnimation)


// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(0,0,100,800);
rightBoundary.visible = false;
}


function draw() {
background(0);


  path.velocityY = 4;
 
// Menino se movendo no eixo X com o mouse

 boy.x = World.mouseX

 edges= createEdgeSprites();
 boy.collide(edges[3]);
 boy.collide(leftBoundary)
 boy.collide(rightBoundary)


 //Reiniciar o fundo
 if (path.y < 0){
  path.y = ground.height/25;
}




 drawSprites();

 
}
