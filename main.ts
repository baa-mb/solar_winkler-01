basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    basic.showString("SOLAR")
    serial.writeValue("x", input.lightLevel())
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
