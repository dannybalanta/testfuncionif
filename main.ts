let a = 0
let b = 0
let c = 0
basic.forever(function () {
    a = 3
    b = 8
    c = 10
    if (a > b) {
        if (b < c) {
            basic.showNumber(c)
        } else {
            basic.showNumber(b)
        }
    } else if (a < c) {
        basic.showNumber(c)
    } else {
        basic.showNumber(a)
    }
})
