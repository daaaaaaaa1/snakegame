

class GamePlay {
    snake;
    apple;
    canvas;
    width;
    height;
    unitSize;

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

        this.snake = new Snake(0,0,0,1,unitSize,'black')

    }

    createApple() {
        let numberOfsquare = this.canvas.width / this.unitSize

        let locationX = Math.floor(Math.random() * (numberOfsquare))
        let locationY = Math.floor(Math.random() * (numberOfsquare))

        let x = locationX * this.unitSize
        let y = locationY * this.unitSize

        this.apple = new Apple(x, y, 'red')

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
    drawSnake(){
        for (let cell of this.snake.snakeBody){
            this.drawRect( this.snake.snakeColor,cell.x,cell.y,this.unitSize,this.unitSize)
        }
        
    }
}


const game = new GamePlay(600, 600, 'pink', 40)
game.drawBackGroud()
game.createApple()
game.drawApple()
game.drawSnake()




