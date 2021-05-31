input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index < 4; index++) {
        for (let a = 0; a <= 2; a++) {
            led.plot(4 + a, 1)
            led.plot(4 + a, 3)
            led.plot(3 + a, 0)
            led.plot(3 + a, 4)
            led.plot(2 + a, 2)
            led.plot(1 + a, 1)
            led.plot(1 + a, 3)
            led.plot(0 + a, 0)
            led.plot(0 + a, 4)
            led.plot(-1 + a, 2)
            led.plot(-2 + a, 1)
            led.plot(-2 + a, 3)
            basic.pause(500)
            led.unplot(4 + a, 1)
            led.unplot(4 + a, 3)
            led.unplot(3 + a, 0)
            led.unplot(3 + a, 4)
            led.unplot(2 + a, 2)
            led.unplot(1 + a, 1)
            led.unplot(1 + a, 3)
            led.unplot(0 + a, 0)
            led.unplot(0 + a, 4)
            led.unplot(-1 + a, 2)
            led.unplot(-2 + a, 1)
            led.unplot(-2 + a, 3)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        for (let a = 0; a <= 2; a++) {
            led.plot(-1 + a, 2)
            led.plot(0 + a, 2)
            led.plot(4 - a, 2)
            led.plot(5 - a, 2)
            basic.pause(100)
            led.unplot(-1 + a, 2)
            led.unplot(0 + a, 2)
            led.unplot(4 - a, 2)
            led.unplot(5 - a, 2)
        }
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 4; index++) {
        for (let a = 0; a <= 2; a++) {
            led.plot(0 - a, 1)
            led.plot(0 - a, 3)
            led.plot(1 - a, 0)
            led.plot(1 - a, 4)
            led.plot(2 - a, 2)
            led.plot(3 - a, 1)
            led.plot(3 - a, 3)
            led.plot(4 - a, 0)
            led.plot(4 - a, 4)
            led.plot(5 - a, 2)
            led.plot(6 - a, 1)
            led.plot(6 - a, 3)
            basic.pause(500)
            led.unplot(0 - a, 1)
            led.unplot(0 - a, 3)
            led.unplot(1 - a, 0)
            led.unplot(1 - a, 4)
            led.unplot(2 - a, 2)
            led.unplot(3 - a, 1)
            led.unplot(3 - a, 3)
            led.unplot(4 - a, 0)
            led.unplot(4 - a, 4)
            led.unplot(5 - a, 2)
            led.unplot(6 - a, 1)
            led.unplot(6 - a, 3)
        }
    }
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    for (let a = 0; a <= 2; a++) {
        led.plot(-1 + a, 2)
        led.plot(0 + a, 2)
        led.plot(4 - a, 2)
        led.plot(5 - a, 2)
        basic.pause(500)
        led.unplot(-1 + a, 2)
        led.unplot(0 + a, 2)
        led.unplot(4 - a, 2)
        led.unplot(5 - a, 2)
    }
})
