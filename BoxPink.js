class BoxPink {

    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02
        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var angle = this.body,angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width,this.height);
        pop();
        strokeWeight(2);
        fill("pink");

    }
}