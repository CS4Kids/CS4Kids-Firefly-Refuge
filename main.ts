let optimalTemp = false
let optimalLightLevel = false
loops.everyInterval(500, function () {
    console.log('hello')
if (input.temperature() > 10 && input.temperature() < 34) {
        optimalTemp = true
    } else {
        optimalTemp = false
    }
    if (input.lightLevel() < 100) {
        optimalLightLevel = true
    } else {
        optimalLightLevel = false
    }
    if (optimalTemp == true && optimalLightLevel == true) {
        servos.P0.setAngle(90)
    } else {
        servos.P0.setAngle(45)
    }
})
