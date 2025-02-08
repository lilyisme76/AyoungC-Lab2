class Mover {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.vx = random(-3, 3);
        this.vy = random(-3, 3);
        this.size = random(30, 50);
        this.color = color(random(255), random(255), random(255));
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;

        // 벽에 닿으면 반대로 이동
        if (this.x <= 0 || this.x >= width) this.vx *= -1;
        if (this.y <= 0 || this.y >= height) this.vy *= -1;
    }

    display() {
        fill(this.color);
        stroke(255);
        ellipse(this.x, this.y, this.size);
    }

    changeColor() {
        this.color = color(random(255), random(255), random(255));
    }
}

class Bouncer {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.vx = random(-4, 4);
        this.vy = random(-4, 4);
        this.size = random(40, 60);
        this.color = color(random(255), random(255), random(255));
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;

        // 튕길 때 가속
        if (this.x <= 0 || this.x >= width) this.vx *= -1.1;
        if (this.y <= 0 || this.y >= height) this.vy *= -1.1;
    }

    display() {
        fill(this.color);
        stroke(255);
        rect(this.x, this.y, this.size, this.size);
    }

    changeColor() {
        this.color = color(random(255), random(255), random(255));
    }
}

class Follower {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.size = 50;
        this.color = color(255, 255, 0);
    }

    followMouse() {
        this.x = lerp(this.x, mouseX, 0.05);
        this.y = lerp(this.y, mouseY, 0.05);
    }

    display() {
        fill(this.color);
        stroke(0);
        ellipse(this.x, this.y, this.size);
    }
}

let movers = [];
let bouncers = [];
let follower;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 5; i++) {
        movers.push(new Mover());
        bouncers.push(new Bouncer());
    }

    follower = new Follower();
}

function draw() {
    background(30);

    for (let mover of movers) {
        mover.move();
        mover.display();
    }

    for (let bouncer of bouncers) {
        bouncer.move();
        bouncer.display();
    }

    follower.followMouse();
    follower.display();
}

function mousePressed() {
    for (let mover of movers) {
        mover.vx = random(-5, 5);
        mover.vy = random(-5, 5);
        mover.changeColor();
    }

    for (let bouncer of bouncers) {
        bouncer.vx = random(-6, 6);
        bouncer.vy = random(-6, 6);
        bouncer.changeColor();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
