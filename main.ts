let length: number = 18
let pasek: neopixel.Strip = neopixel.create(DigitalPin.P8, length, NeoPixelMode.RGB)
let speed: number = 10 // Rychlost při spuštění microbitu
let maxSpeed: number = 99 // Maximální dosažitelná rychlost
let minSpeed: number = 1 // Minimální rychlost
let spindirect = 1

pasek.showRainbow()

basic.forever(function () {
    pasek.rotate(spindirect)
    whaleysans.showNumber(speed)
    pasek.show()

    let delay = Math.max(10, 100 - speed) // Vyšší speed = kratší delay
    basic.pause(delay)

    // Zrychlení (tlačítko B)
    if (input.buttonIsPressed(Button.B)) {
        speed = Math.min(speed + 1, maxSpeed) // Zvýšení rychlosti
        whaleysans.showNumber(speed) // Zobrazení rychlosti na displeji
        basic.pause(400) // První prodleva před dalšími, kratšími prodlevami
        while (input.buttonIsPressed(Button.B)) {
            speed = Math.min(speed + 1, maxSpeed) // Další zvýšení rychlosti
            whaleysans.showNumber(speed)
            basic.pause(100) // Další, následující prodlevy po první prodlevě
        }
    }

    // Zpomalení (tlačítko A)
    if (input.buttonIsPressed(Button.A)) {
        speed = Math.max(speed - 1, minSpeed) // Snížení rychlosti
        whaleysans.showNumber(speed)
        basic.pause(400)
        while (input.buttonIsPressed(Button.A)) {
            speed = Math.max(speed - 1, minSpeed)
            whaleysans.showNumber(speed)
            basic.pause(100)
        }
    }

})