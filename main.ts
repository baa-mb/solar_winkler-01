basic.showIcon(IconNames.Yes)
let zzz = 0
basic.forever(function () {
    zzz += 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showNumber(zzz)
    serial.writeValue("x", input.lightLevel())
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
