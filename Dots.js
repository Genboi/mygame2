class Dots{
    constructor(){
        this.x=random(50,1000);
        this.y=random(50,1000);
        this.dot=createSprite(this.x,this.y,20,20);
        var r=random(0,255);
        var g=random(0,255);
        var b=random(0,255);
        this.dot.shapeColor=rgb(r,g,b);
    }
    display()
    {
        
        this.x=random(0,10);
        this.y=random(50,1000);
        drawSprites();
    }



}