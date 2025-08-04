setcps(0.40)


$: stack(
  s("bd").struct("x ~ x [x x]").decay(0.1).bank("9000"),
  s("sd").struct("~ x ~ ~").room(0.4).decay(0.1).bank("9000"),
  s("hh").struct("[~ x ~ x]*2").room(0.5).gain(0.2).bank("9000")
)

let chords = chord(`<
Gm Cm Gm [Dm7 G7]
Cm Co Bb [Eo Am]
Dm Cm Dm [Ao Dm]
>`)

$: chords
.voicing()
.lpf(saw.range(300, 800))
.attack(0.4)
.sustain(0.25)
.release(.2)
.clip(0.8)
.delay(0.2)
.room(0.2)
.pan(sine.fast(4))

$: n(run(16))
.struct("[x@2 - [x -] x]*8")
.ply("<1 2 4 3>")
.set(chords)
.voicing()
.dec(saw.slow(2))
.gain(0.4)
.room(0.2)
.delay("0.2")

$: n("0*2 - 1*2 <- - - [3 5 2]>")
.set(chords)
.mode("root:a2")
.voicing()
.gain(2)

