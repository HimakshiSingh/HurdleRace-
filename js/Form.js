class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset=createButton("restart")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    
  }

  display(){
    background(backgroundImg)
   
     var title = createElement('h2')
     let col = color(255,255,255);
    title.html("Hurdle Race");
    title.style('font-size', '30px');
    title.style('color', col)
    title.position(90, 370);

    this.input.position(90, 440);
    this.button.position(220, 480);
    this.reset.position(displayWidth-100,20)
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.style('font-size', '30px');
      this.greeting.style('color', col)
      this.greeting.position(100,460);
     
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
 
    })

  }
}
