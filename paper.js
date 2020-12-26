class Paper{
    constructor(x,y){ 
        var option ={ 
            restitution:0.3, 
            friction: 0.5, 
            density: 1.2 
        }
        this.body = Bodies.circle(x,y,30,option); 
        World.add(world,this.body); 
        this.image = loadImage("paper.png"); 
    }
    display(){ 
       var angle = this.body.angle;
       push(); 
       translate(this.body.position.x, this.body.position.y) 
       rotate(angle);  
       imageMode(CENTER); 
        fill("red"); 
        image(this.image,0,0,70,70); 
        pop(); 
    }
 }
