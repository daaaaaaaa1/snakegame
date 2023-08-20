

class GamePlay {
    snake;
    apple;
    canvas;
    width;
    height;
    unitSize;
    hasApple;

    constructor(width, height, canvasColor, unitSize) {
        this.apple = new Apple(3, 4, 'red');

        this.canvas = document.getElementById('gameCanvas');
        this.CanvasContext = gameCanvas.getContext('2d');

        this.canvas.width = width;
        this.canvas.height = height;

        this.width = width
        this.height = height
        this.canvasColor = canvasColor
        this.unitSize = unitSize

        this.hasApple = false

        this.snake = new Snake(0, 0, 0, 1, unitSize, 'black')

    }

    createApple() {
        let numberOfsquare = this.canvas.width / this.unitSize

        while (this.hasApple == false) {
            let locationX = Math.floor(Math.random() * (numberOfsquare))
            let locationY = Math.floor(Math.random() * (numberOfsquare))

            let x = locationX * this.unitSize
            let y = locationY * this.unitSize

           let isAppleOnSnake = this.positionSnake()
            if (isAppleOnSnake == false){
                this.apple = new Apple(x, y, 'red')
                this.hasApple = true
            }
        }



    }
    drawRect(color, x, y, Width, Height) {
        this.CanvasContext.fillStyle = color
        this.CanvasContext.fillRect(x, y, Width, Height)
    }

    drawBackGroud() {
        this.drawRect(this.canvasColor, 0, 0, this.width, this.height)

    }

    drawApple() {
        let x = this.apple.x
        let y = this.apple.y

        this.drawRect(this.apple.color, x, y, this.unitSize, this.unitSize)

    }
    drawSnake() {
        for (let cell of this.snake.snakeBody) {
            this.drawRect(this.snake.snakeColor, cell.x, cell.y, this.unitSize, this.unitSize);
            console.log('gfasdfaf');
            console.log(cell);
        }

    }
    draw() {
        this.drawBackGroud();
        this.drawApple();
        this.drawSnake();

    }
    isSnakeBodyHit() {

    }
    isAppleEaten() {
        let head = this.snake.snakeBody[0]
        let apple = this.apple
        if (head.x == apple.x && head.y == apple.y) {
            this.eatApple()
            this.createApple()
        }
    }
    positionSnake(inputX, inputY) {
        for (let cell of this.snake.snakeBody) {
            if (cell.x == inputX && cell.y == inputY) {
                return true;
            }
        }
        return false;
    }

    update() {
        this.createApple();
        this.snake.move();
        this.isSnakeBodyHit();
        this.isAppleEaten();
    }
}


const game = new GamePlay(600, 600, 'pink', 40)
game.createApple();
game.draw();
game.snake.move();
game.snake.move();
game.update();
game.snake.turnRight()
game.snake.eatApple();
for (let i = 0; i < 10; i++) {
    game.snake.move();
}

game.draw();








