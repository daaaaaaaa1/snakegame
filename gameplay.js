

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



        this.snake = new Snake(0, 0, 1, 0, unitSize, 'black')

        this.createApple();


    }

    createApple() {
        let numberOfsquare = this.canvas.width / this.unitSize


        let locationX = Math.floor(Math.random() * (numberOfsquare))
        let locationY = Math.floor(Math.random() * (numberOfsquare))

        let x = locationX * this.unitSize
        let y = locationY * this.unitSize

        let isAppleOnSnake = this.positionSnake(x, y)
        if (isAppleOnSnake == false) {
            this.apple = new Apple(x, y, 'red')

        } else {
            this.createApple();

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
            console.log(cell);
        }

    } 
    drawScore(){
        this.CanvasContext.font = "20px Arial";
        this.CanvasContext.fillStyle = "#00FF42";
        this.CanvasContext.fillText("Score: " + (this.snake.snakeBody.length - 1), this.canvas.width - 120, 20);
    }
    isSnakeBodyHit() {
        let snakHead = this.snake.snakeBody[0]
        for (let i = 2; i < this.snake.snakeBody.length; i++) {
            let cell = this.snake.snakeBody[i]
            if (cell.x == snakHead.x && cell.y == snakHead.y) {
                this.gameOver()
            }
        }
    }
   
    gameOver() {
        alert('ByeBye')
        window.stop()
    }
    isAppleEaten() {
        let snakHead = this.snake.snakeBody[0]
        let apple = this.apple
        if (snakHead.x == apple.x && snakHead.y == apple.y) {

            this.snake.eatApple()
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
    checkSnakeHitBorder() {
        let snakHead = this.snake.snakeBody[0]
        if (snakHead.y >= this.canvas.height) {
            snakHead.y = 0
        } else if (snakHead.y < 0) {
            snakHead.y = this.canvas.height
        } else if (snakHead.x >= this.canvas.width) {
            snakHead.x = 0
        } else if (snakHead.x < 0) {
            snakHead.x = this.canvas.width
        }



    }

    update() {
        this.snake.move();
        this.isSnakeBodyHit();
        this.isAppleEaten();
        this.checkSnakeHitBorder();
    }
    draw() {
        this.drawBackGroud();
        this.drawApple();
        this.drawSnake();
        this.drawScore()
    }
}










