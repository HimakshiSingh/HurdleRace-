class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
   
      form = new Form()
      form.display();
     }

      runner1=createSprite(100,200)
      runner1.addImage("doremon",doremon)
      runner1.scale=0.50
     // runner1.setCollider("circle", 0, 0);
     // runner1.debug = true;
      runner2=createSprite(300,200)
      runner2.addImage("nobita",nobita)
      runner2.scale=0.10
    
     // runner2.setCollider("circle", 0, 0);
     // runner2.debug = true;
    runners=[runner1,runner2]
  
 
  }

  play(){
    
    //var hurdle=new Hurdle(210,200);
   
    
    form.hide();
    Player.getPlayerInfo();
    player.getRunnersAtEnd();
    spawnObstacles();
    spawnObstacles1();
  
    if(allPlayers !== undefined){
  
     background("brown")
      image(track,-1000,300,displayWidth*30,displayHeight);
     
     
      var index = 0;

      //x and y position of the cars
      var y = 420;
      var x = -100;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = y + 290;
        //use data form the database to display the cars in y direction
        x = 800 - allPlayers[plr].distance;
        runners[index-1].x = x;
        runners[index-1].y = y;
        runners[index - 1].velocityY = 10;
        runners[index - 1].velocityY = 10;
        
        if(keyIsDown(UP_ARROW)){
          runners[index-1].y = runners[index-1].y-150;
          ellipse.y=runners[index-1].y

        
        }
        if (index === player.index) {
          // console.log("yes")
          stroke(10);
          fill("red");
          ellipse(x, y, 75, 75);
       
          camera.position.x = runners[index - 1].x;
          camera.position.y = runners[index - 1].y;
          player.x = x;
          player.y = y;
        }

}
    }

if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }
if(player.distance>=5600){
   
     gameState=2;
     player.rank+=1
     Player.updateRunnersAtEnd(player.rank)
    

     
  
   }
  
 drawSprites();
  }
  end(){
    game.update(2)
    console.log("gameEnded")
    console.log(player.rank)
  
  }
}


function spawnObstacles() {
  var i = 0;
  if (frameCount % 160 === 0) {
      i = i + 10
      var obstacle = createSprite(3500,700);

      obstacle.velocityX = -8;
      obstacle.addImage(hurdle);

      obstacle.scale = 0.50;
      obstacle.lifetime = 800;
      obstacle.setCollider("rectangle", -10, 0, 90, 150);
      obstacle.debug = false;
  }
}

function spawnObstacles1() {
  if (frameCount % 160 === 0) {
      var obstacle = createSprite(3500,990);
      obstacle.velocityX = -8;
      obstacle.addImage(hurdle);
      obstacle.scale = 0.50;
      obstacle.lifetime = 800;
      obstacle.setCollider("rectangle", -10, 0, 90, 150);
      obstacle.debug = false;

  }
}
