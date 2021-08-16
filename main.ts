input.onButtonPressed(Button.A, function () {
    led.unplot(car, 4)
    car += -1
    led.plot(car, 4)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(car, 4)
    car += 1
    led.plot(car, 4)
})
let obstacle1 = 0
let obstacle2 = 0
let car = 0
let lives = 5
let score = 0
car = 2
basic.clearScreen()
led.plot(car, 4)
basic.forever(function () {
    basic.pause(200)
    if (lives <= 0) {
        basic.clearScreen()
        basic.pause(500)
        basic.showString("GAME OVER")
        basic.showString("SCORE")
        basic.showString("" + (game.score()))
    } else {
        obstacle2 = randint(0, 4)
        led.plot(obstacle2, 0)
        basic.pause(100)
        led.unplot(obstacle2, 0)
        led.plot(obstacle2, 1)
        basic.pause(100)
        led.unplot(obstacle2, 1)
        led.plot(obstacle2, 2)
        basic.pause(100)
        led.unplot(obstacle2, 2)
        led.plot(obstacle2, 3)
        basic.pause(100)
        led.unplot(obstacle2, 3)
        led.plot(obstacle2, 4)
        basic.pause(100)
        led.unplot(obstacle2, 4)
        if (obstacle2 == car) {
            lives += -1
            led.plot(car, 4)
        } else {
            score += 1
        }
    }
})
basic.forever(function () {
    if (lives <= 0) {
        basic.clearScreen()
        basic.pause(500)
        basic.showString("GAME OVER")
        basic.showString("SCORE")
        basic.showString("" + (game.score()))
    } else {
        obstacle1 = randint(0, 4)
        led.plot(obstacle1, 0)
        basic.pause(100)
        led.unplot(obstacle1, 0)
        led.plot(obstacle1, 1)
        basic.pause(100)
        led.unplot(obstacle1, 1)
        led.plot(obstacle1, 2)
        basic.pause(100)
        led.unplot(obstacle1, 2)
        led.plot(obstacle1, 3)
        basic.pause(100)
        led.unplot(obstacle1, 3)
        led.plot(obstacle1, 4)
        basic.pause(100)
        led.unplot(obstacle1, 4)
        if (obstacle1 == car) {
            lives += -1
            led.plot(car, 4)
        } else {
            score += 1
        }
        basic.pause(100)
    }
})
basic.forever(function () {
    if (car > 4) {
        basic.clearScreen()
        led.plot(4, 4)
        car = 4
    }
    if (car < 0) {
        basic.clearScreen()
        led.plot(0, 4)
        car = 0
    }
})
