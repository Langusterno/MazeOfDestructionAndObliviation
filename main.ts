let Seconds: Sprite = null
let Second = 0
forever(function () {
    while (Second < 59) {
        Second += 1
        Seconds = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 3 3 3 3 3 . 3 3 3 3 . 3 3 3 3 
            . 3 . . . . . 3 . . . . 3 . . . 
            . 3 . . . . . 3 . . . . 3 . . . 
            . 3 . . . . . 3 . . . . 3 . . . 
            . 3 3 3 3 3 . 3 3 3 3 . 3 . . . 
            . . . . . 3 . 3 . . . . 3 . . . 
            . . . . . 3 . 3 . . . . 3 . . . 
            . . . . . 3 . 3 . . . . 3 . . . 
            . 3 3 3 3 3 . 3 3 3 3 . 3 3 3 3 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
    }
    Second = 0
})
