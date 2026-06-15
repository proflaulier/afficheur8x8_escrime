// A exploiter pour détection des touches
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // Remplacer "1" et "4" par les scores des joueurs
    max7219_matrix.displayTextAlignRight(
    "<- D",
    true
    )
    basic.pause(2000)
    // Remplacer "1" et "4" par les scores des joueurs
    max7219_matrix.displayTextAlignRight(
    "" + scoreGauche + " " + ScoreDroite,
    true
    )
})
// Modifier les scores selon message reçu
radio.onReceivedString(function (receivedString) {
    if (receivedString == "G") {
        scoreGauche += 1
        // Remplacer "1" et "4" par les scores des joueurs
        max7219_matrix.displayTextAlignRight(
        "" + scoreGauche + " " + ScoreDroite,
        true
        )
    }
    // Compléter le programme
    if (receivedString == "D") {
        ScoreDroite += 1
        // Remplacer "1" et "4" par les scores des joueurs
        max7219_matrix.displayTextAlignRight(
        "" + scoreGauche + " " + ScoreDroite,
        true
        )
    }
    // Réinitialisation des scores
    if (receivedString == "NULL") {
        ScoreDroite = 0
        ScoreDroite = 0
        // Remplacer "1" et "4" par les scores des joueurs
        max7219_matrix.displayTextAlignRight(
        "" + scoreGauche + " " + ScoreDroite,
        true
        )
    }
})
input.onPinPressed(TouchPin.P1, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // Remplacer "1" et "4" par les scores des joueurs
    max7219_matrix.displayTextAlignRight(
    "G ->",
    true
    )
    basic.pause(2000)
    // Remplacer "1" et "4" par les scores des joueurs
    max7219_matrix.displayTextAlignRight(
    "" + scoreGauche + " " + ScoreDroite,
    true
    )
})
let scoreGauche = 0
let ScoreDroite = 0
// Choisir le même canal radio que l'arbitre
radio.setGroup(1)
ScoreDroite = 0
scoreGauche = 0
music.setVolume(255)
// Câblage à réaliser :
// microbit <-> MAX7219
// 3.3V     <-> VCC (alimentation)
// GND      <-> GND (masse commune)
// 15       <-> DIN
// 16       <-> CS
// 13       <-> CLK
// Utiliser les sheilds à pinoches
// Puis connecter les 2 MAX7219 entre eux.
max7219_matrix.setup(
2,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
// Remplacer "1" et "4" par les scores des joueurs
max7219_matrix.displayTextAlignRight(
"" + scoreGauche + " " + ScoreDroite,
true
)
