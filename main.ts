basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 300) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 360)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S1, 360)
    } else {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 0)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S1, 0)
    }
    if (input.temperature() > 30) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 100)
    } else {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
    }
    if (pins.analogReadPin(AnalogPin.P0) < 300) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
})
