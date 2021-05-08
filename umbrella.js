class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true,
        }

        this.umbrella=Bodies.circle(x,y,50,options);
        this.radius=50;
        World.add(world,this.umbrella);
        this.image=loadImage("images/Walking Frame/walking_1.png");
    }
    display(){
        fill("blue");
        imageMode(CENTER);
        image(this.image,this.umbrella.position.x,this.umbrella.position.y+70,300,300);
    }
}