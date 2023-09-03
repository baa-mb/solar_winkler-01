basic.showIcon(IconNames.Yes)
let zzz = 0
basic.forever(function () {
    zzz += 1
    basic.showNumber(zzz)
    basic.pause(2000)
    serial.writeValue("x", input.lightLevel())
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
