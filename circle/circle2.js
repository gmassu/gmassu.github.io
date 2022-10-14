
function setup() {
    createCanvas(600, 400)
    background(0)

}

px = 5
py = 5

vx = 5
vy = 5

radius=30
function draw() {

    background(0)

    px = px + vx
    py = py + vy

    if (px > 600 || px < 0)(vx = -vx)

    if (py > 400 ||py < 0)(vy = -vy)

     fill(100, 100, 0)
     ellipse(px+vx, py+vy, radius, radius);
}