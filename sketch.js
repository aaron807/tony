var tony
var sun
var dre
var drems=[]
var gordy
var oot=0
var gamstoot=0

function preload(){
    dreImg=loadImage("images/dreSword.png")
    tonyImg=loadImage("images/tony.png");
    bgImg=loadImage("images/bg.png")
    sunImg=loadImage("images/sun.PNG")
    dedImg=loadImage("images/ded.png")
    gordImg=loadImage("images/Gordon-Brown.jpg")
    clayImg=loadImage("images/clay.png")
    yeImg=loadImage('images/ye.jpg')
    dogImg=loadImage('images/dog.png')
    quagImg=loadImage('images/quag.png')
    nigelImg=loadImage('images/neegil.jpg')


    //speed=loadSound('sounds/speed.mp3')
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  edges=createEdgeSprites();

  gordy = createSprite (350,650,10,10)
  gordy.addImage(gordImg)
  gordy.scale=0.3

  sun = createSprite(1320,160,100,100)
  sun.addImage(sunImg)
  sun.scale=0.8
  sun.setCollider('rectangle',0,0,100,100)

  tony = createSprite(300,300,10,10);
  tony.addImage(tonyImg);
  tony.scale=0.6



}
function draw(){

  oot = round(random(0,50))

  //sun.debug=true
  //gordy.debug=true
  sun.setCollider('circle',0,15,90)
  tony.setCollider('rectangle',0,30,190,370)
  gordy.setCollider('rectangle',0,0,550,550)

  if(gamstoot===0){
    background(bgImg);


    sun.visible=true
    tony.visible=true
    gordy.visible=true
    drems.visible=true
    spawnDre()
  }

  if(gamstoot===1){
    //if(oot===0){
      background(clayImg)
   // }

    sun.visible=false
    tony.visible=false
    gordy.visible=false
    dre.visible=false

    
  }
  if(gamstoot===2){
    if(oot===3){
      //background(yeImg)
    }
    else{
      background(nigelImg)
    }


    gordy.visible=false
    sun.visible=false
    dre.visible=false
    tony.visible=false
  }

  if(frameCount%900===0){
    gamstoot=2
  }

  if(keyDown('R')){
    gamstoot=0
  }

    if(keyDown("W")&&tony.y>100){
        tony.y+=-7
      }
      if(keyDown("S")&&tony.y<680){
        tony.y+=7
      }
      if(keyDown("A")&&tony.x>50){
        tony.x+=-7
      }
      if(keyDown("D")&&tony.x<1650){
        tony.x+=7
      }

      if(tony.isTouching(sun)){
        gordy.addImage(dogImg)
        gordy.scale=0.4
        tony.addImage(dedImg)
      }

      if(tony.isTouching(drems)){
        gamstoot=1
      }
      
      if (tony.isTouching(gordy)){
        tony.addImage(tonyImg)
        gordy.addImage(gordImg)
        gordy.scale=0.3
      }



    drawSprites()
}

function spawnDre(){
  if(frameCount%240===0){
    dre = createSprite(windowWidth,round(random(400,700)),10,10);
    dre.addImage(dreImg);
    dre.scale=0.5
    dre.velocityX=-14
    dre.setCollider('circle',0,0,260)

    drems.push(dre);
   //orangeFishGroup.add(orangeFish);
  }


}