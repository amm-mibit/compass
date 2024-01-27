let Grad = 0
basic.forever(function () {
    Grad = input.compassHeading()
    if (Grad < 45) {
        basic.showString("N")
    } else if (Grad < 135) {
        basic.showString("O")
    } else if (Grad < 225) {
        basic.showString("S")
    } else if (Grad < 315) {
        basic.showString("W")
    }
})
