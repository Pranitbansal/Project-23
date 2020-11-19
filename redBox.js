class Box{
    constructor(x, y, width, height) {
        var options= {
            'restitution': 0,
            isStatic: false
        }
        this.redbox=Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height=height;
        World.add(world,this.redbox)
    }

    display() {
        var pos=this.redbox.position;

        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
};