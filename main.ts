input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let Bird: game.LedSprite = null
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
let Obstacles: game.LedSprite[] = []
let Empty_obstacley = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index == Empty_obstacley) {
        Obstacles.push(game.createSprite(4, index))
    }
}
