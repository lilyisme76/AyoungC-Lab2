var yellowBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 1,
    ySpeed: 1,
    colour: 'lightyellow',
    draw: function() {
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width - this.w) {
            this.xSpeed *= -1;
        }
        if (this.y < 0 || this.y > height - this.h) {
            this.ySpeed *= -1;
        }
    }
};

var orangeBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 2,
    ySpeed: 1,
    colour: 'orange',
    draw: function() {
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width - this.w) {
            this.xSpeed *= -1;
        }
        if (this.y < 0 || this.y > height - this.h) {
            this.ySpeed *= -1;
        }
    }
};

function setup() {
    createCanvas(720, 280);
}

function draw() {
    background('skyblue');
    yellowBrick.move();
    yellowBrick.draw();
    orangeBrick.move();
    orangeBrick.draw();
}