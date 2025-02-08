var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 1,
    ySpeed: 1,
    colour: 'red',
    draw: function() {
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x <= 0 || this.x + this.w >= width) {
    this.xSpeed *= -1;
}
if (this.y <= 0 || this.y + this.h >= height) {
    this.ySpeed *= -1;
}

        }
    }
};

var blueBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 2,
    ySpeed: 1,
    colour: 'blue',
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
    redBrick = 
}

function draw() {
    background('grey'); // 잔상 제거를 위해 배경 먼저 그리기
    redBrick.move();
    redBrick.draw();
    blueBrick.move();
    blueBrick.draw();
}
