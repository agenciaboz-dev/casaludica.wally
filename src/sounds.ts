export const sounds = {
    main_menu: { source: require("../assets/sounds/soundtracks/mainmenu.mp3") },
    scenary: {
        [1]: {
            [1]: require("../assets/sounds/soundtracks/morning1.mp3"),
            [2]: require("../assets/sounds/soundtracks/morning2.mp3"),
        },
        [2]: {
            [1]: require("../assets/sounds/soundtracks/afternoon1.mp3"),
            [2]: require("../assets/sounds/soundtracks/afternoon2.mp3"),
        },
        [3]: {
            [1]: require("../assets/sounds/soundtracks/night1.mp3"),
            [2]: require("../assets/sounds/soundtracks/night2.mp3"),
        },
    },
    results: require("../assets/sounds/soundtracks/results.mp3"),
}
