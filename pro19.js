var car,car2,car3,car4 ;
var gamestate="play"
var weight
var button1,button2
,button3
,button4
var wall1,wall2,wall3,wall4,wall5,dy1,dy2,dy3,dy4,dy5;
var stopper1,stopper2,stopper3,stopper4,deformation,carweight1,speed;
var weight2,speed2;
var weight3,speed3, weight4,speed4;
var deformation1,deformation2,deformation3,deformation4;
var restartbutton1,restartbutton2,restartbutton3,restartbutton4







function setup() {
  createCanvas( 1536,754);

  weight=random(400,1300)
  speed=random(55,90)
  weight2=random(300,600)
  speed2=random(49,100)
  weight3=random(1000,1100)
  speed3=random(50,100)
  weight4=random(40,150)
  speed4=random(50,90)
  
 car=createSprite(200, 100, 50, 50);
 car.shapeColor=("green")
 car.visible=false;
 

 car2=createSprite(500, 100, 50, 50);
 car2.shapeColor=("yellow")
 car2.visible=false;

 car3=createSprite(800, 100, 50, 50);
 car3.shapeColor=("blue")
 car3.visible=false;

 car4=createSprite(1100, 100, 50, 50);
 car4.shapeColor=("white")
 car4.visible=false;

 button1=createSprite(200,30,30,30)
 button1.shapeColor=("red")

 button2=createSprite(500,30,30,30)
 button2.shapeColor=("red")

 button3=createSprite(800,30,30,30)
 button3.shapeColor=("red")

 button4=createSprite(1100,30,30,30)
 button4.shapeColor=("red")

 wall1=createSprite(100,350,10,800)
 wall1.visible=false;
 wall1.shapeColor=("black")

 wall2=createSprite(370,350,10,800)
 wall2.shapeColor=("black")
 wall2.visible=false;


 wall3=createSprite(630,350,10,800)
 wall3.visible=false;
 wall3.shapeColor=("black")

 wall4=createSprite(940,350,10,800)
 wall4.shapeColor=("black")
 wall4.visible=false;
                                                               
 wall5=createSprite(1230,350,10,800)
 wall5.shapeColor=("black")
 wall5.visible=false;

 stopper1=createSprite(235,700,200,20)
 stopper1.shapeColor=("red")

 stopper2=createSprite(500,700,200,20)
 stopper2.shapeColor=("red")

 stopper3=createSprite(785,700,200,20)
 stopper3.shapeColor=("red")

 stopper4=createSprite(1090,700,200,20)
 stopper4.shapeColor=("red")

 for(var i=0;i<800;i=i+70){
  dy1=createSprite(100,i,10,20)
  dy1.shapeColor=("yellow")
   }

   for(var i2=0;i2<800;i2=i2+70){
    dy2=createSprite(370,i2,10,20)
    dy2.shapeColor=("yellow")
     }

     for(var i3=0;i3<800;i3=i3+70){
      dy3=createSprite(630,i3,10,20)
      dy3.shapeColor=("yellow")
       }

       for(var i4=0;i4<800;i4=i4+70){
        dy4=createSprite(940,i4,10,20)
        dy4.shapeColor=("yellow")
         }

         for(var i5=0;i5<800;i5=i5+70){
          dy5=createSprite(1230,i5,10,20)
          dy5.shapeColor=("yellow")
           }

           restartbutton1=createSprite(230,350,30,30)
           restartbutton1.shapeColor=("green")
           restartbutton1.visible=false;

           restartbutton2=createSprite(500,350,30,30)
           restartbutton2.shapeColor=("green")
           restartbutton2.visible=false;

           restartbutton3=createSprite(785,350,30,30)
           restartbutton3.shapeColor=("green")
           restartbutton3.visible=false;

           restartbutton4=createSprite(1090,350,30,30)
           restartbutton4.shapeColor=("green")
           restartbutton4.visible=false;

          

           deformation1=0.5*weight*speed*speed%2250
           deformation2=0.5*weight2*speed2*speed%2250 
           deformation3=0.5*weight3*speed3*speed%2250 
           deformation4=0.5*weight4*speed4*speed%2250  
}

function draw() {
  background("lightgreen");  
  if(gamestate==="play"){
    car.visible=true;
    car2.visible=true;
    car3.visible=true;
    car4.visible=true;
    wall1.visible=true;
    wall2.visible=true;
    wall3.visible=true;
    wall4.visible=true;
    wall5.visible=true;

    car.y=100;
    car.shapeColor=("green")
    car2.shapeColor=("yellow")
    car3.shapeColor=("blue")
    car4.shapeColor=("white")
    car2.y=100;
    car3.y=100;
    car4.y=100;
    restartbutton1.visible=false;
    restartbutton3.visible=false;
    restartbutton2.visible=false;
    restartbutton4.visible=false;


  
  textSize(50)
  stroke("red")
  strokeWeight(10)
  fill("blue")
  text("PRESS RED BUTTON TO LAUNCH THE CAR",200,350)
  

  console.log(deformation1)
  }


  drawSprites();

  car.collide(stopper1)
  car2.collide(stopper2)
  car3.collide(stopper3)
  car4.collide(stopper4)

  if(mousePressedOver(button1)){
gamestate="carstart1"

  }

if(gamestate==="carstart1"){
car.velocityY=speed;

}

if(mousePressedOver(button2)){
  gamestate="carstart2"
  
    }
  
  if(gamestate==="carstart2"){
  car2.velocityY=speed2;
  }

  if(mousePressedOver(button3)){
    gamestate="carstart3"
    
      }
    
    if(gamestate==="carstart3"){
    car3.velocityY=speed3;
    }

    if(mousePressedOver(button4)){
      gamestate="carstart4"
      
        }
      
      if(gamestate==="carstart4"){
      car4.velocityY=speed4;
      }

if(car.y>stopper1.y){
car.velocityY=0
}

if(car2.y>stopper2.y){
  car2.velocityY=0
  }

  if(car3.y>stopper3.y){
    car3.velocityY=0
    }

    if(car4.y>stopper4.y){
      car4.velocityY=0
      }

      if(deformation1>180&&car.y>stopper1.y){
        car.shapeColor=("red")
        
        restartbutton1.visible=true; 
        stroke("black")
        strokeWeight(10)
        textSize(40)
        fill("orange")
        text("DANGER",170,300)

        textSize(30)
        fill("green")
        text("TRY AGAIN",170,450)


         }
        
 if(deformation1<180&&deformation1>80&&car.y>stopper1.y){
  car.shapeColor=("yellow")
  
  restartbutton1.visible=true; 
  stroke("green")
  strokeWeight(10)
  textSize(40)
  fill("yellow")
  text("SAFE",170,300)

  textSize(30)
  fill("green")
  text("TRY AGAIN",170,450)
   }

   if(deformation1<80&&car.y>stopper1.y){
    car.shapeColor=("green")
    
    restartbutton1.visible=true; 
    stroke("blue")
    strokeWeight(10)
    textSize(40)
    fill("yellow")
    text("perfect",170,300)

    textSize(30)
    fill("green")
    text("TRY AGAIN",170,450)
     }

     if(deformation2>180&&car2.y>stopper2.y){
      car2.shapeColor=("red")
      
      restartbutton2.visible=true; 
      stroke("black")
      strokeWeight(10)
      textSize(40)
      fill("orange")
      text("DANGER",430,300)

      textSize(30)
      fill("green")
      text("TRY AGAIN",430,450)
       }
      
if(deformation2<180&&deformation2>80&&car2.y>stopper2.y){
car2.shapeColor=("yellow")
restartbutton2.visible=true; 

stroke("green")
strokeWeight(10)
textSize(40)
fill("yellow")
text("SAFE",430,300)

textSize(30)
fill("green")
text("TRY AGAIN",430,450)
 }

 if(deformation2<80&&car2.y>stopper2.y){
  car2.shapeColor=("green")
  restartbutton2.visible=true; 
  
  stroke("blue")
  strokeWeight(10)
  textSize(40)
  fill("yellow")
  text("perfect",430,300)

  textSize(30)
  fill("green")
  text("TRY AGAIN",430,450)
   }

   if(deformation3>180&&car3.y>stopper3.y){
    car3.shapeColor=("red")
    
    restartbutton3.visible=true; 
    stroke("black")
    strokeWeight(10)
    textSize(40)
    fill("orange")
    text("DANGER",720,300)

    textSize(30)
    fill("green")
    text("TRY AGAIN",720,450)
     }
    
if(deformation3<180&&deformation3>80&&car3.y>stopper3.y){
car3.shapeColor=("yellow")
restartbutton3.visible=true; 

stroke("green")
strokeWeight(10)
textSize(40)
fill("yellow")
text("SAFE",720,300)

textSize(30)
fill("green")
text("TRY AGAIN",720,450)
}

if(deformation3<80&&car3.y>stopper3.y){
car3.shapeColor=("green")
restartbutton3.visible=true; 

stroke("blue")
strokeWeight(10)
textSize(40)
fill("yellow")
text("perfect",720,300)

textSize(30)
fill("green")
text("TRY AGAIN",720,450)
 }

 if(deformation4>180&&car4.y>stopper4.y){
  car4.shapeColor=("red")
  restartbutton4.visible=true; 
  
  stroke("black")
  strokeWeight(10)
  textSize(40)
  fill("orange")
  text("DANGER",1025,300)

  textSize(30)
  fill("green")
  text("TRY AGAIN",1025,450)
   }
  
if(deformation4<180&&deformation4>80&&car4.y>stopper4.y){
car4.shapeColor=("yellow")
restartbutton4.visible=true; 

stroke("green")
strokeWeight(10)
textSize(40)
fill("yellow")
text("SAFE",1025,300)

textSize(30)
fill("green")
text("TRY AGAIN",1025,450)
}

if(deformation4<80&&car4.y>stopper4.y){
car4.shapeColor=("green")
restartbutton4.visible=true; 

stroke("blue")
strokeWeight(10)
textSize(40)
fill("yellow")
text("perfect",1025,300)

textSize(30)
fill("green")
text("TRY AGAIN",1025,450)
}

if(mousePressedOver( restartbutton1)||mousePressedOver( restartbutton2)||mousePressedOver( restartbutton3)||mousePressedOver( restartbutton4)){
gamestate="play"
}
}