basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(2000)
    basic.showString("SOLAR")
    serial.writeValue("x", input.lightLevel())
})
