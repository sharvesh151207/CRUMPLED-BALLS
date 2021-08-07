class Paper
{
    constructor(x,y,radius)
    {
        var  options=
        {
             isStatic : false,
             'retitution':0.3,
             'friction':0.5,
             'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        World.add(world,this.body);
    }
    display()
    {
        ellipseMode(RADIUS);
        fill("#54ff57");
        circle(this.body.position.x,this.body.position.y,this.radius);
    }
}