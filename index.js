const game = new GamePlay(400, 400, 'pink', 40)


window.onload = () => {
    setInterval(() => {
        game.update()

        game.draw()

    }, 150)
    
}
window.addEventListener("keydown", (event) =>{
    if (event.keyCode == 37){
        game.snake.turnLeft()
    }else if (event.keyCode == 38){
        game.snake.turnUp()
    }else if (event.keyCode == 39){
        game.snake.turnRight()
    }else if (event.keyCode == 40){
        game.snake.turnDown()
    }

})
