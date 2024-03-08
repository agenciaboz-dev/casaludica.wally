const images = {
    game: {
        [1]: {
            backgrounds: {
                [1]: require("../assets/game/1/background/1.webp"),
                [2]: require("../assets/game/1/background/2.webp"),
                [3]: require("../assets/game/1/background/3.webp"),
            },
            objectives: {
                [1]: { url: require("../assets/game/1/objectives/1.webp"), width: 60, height: 60 },
                [2]: { url: require("../assets/game/1/objectives/2.webp"), width: 60, height: 60 },
                [3]: { url: require("../assets/game/1/objectives/3.webp"), width: 60, height: 60 },
                [4]: { url: require("../assets/game/1/objectives/4.webp"), width: 60, height: 60 },
                [5]: { url: require("../assets/game/1/objectives/5.webp"), width: 60, height: 60 },
                [6]: { url: require("../assets/game/1/objectives/6.webp"), width: 60, height: 60 },
                [7]: { url: require("../assets/game/1/objectives/7.webp"), width: 60, height: 60 },
                [8]: { url: require("../assets/game/1/objectives/8.webp"), width: 60, height: 60 },
                [9]: { url: require("../assets/game/1/objectives/9.webp"), width: 60, height: 60 },
                [10]: { url: require("../assets/game/1/objectives/10.webp"), width: 60, height: 60 },
                [11]: { url: require("../assets/game/1/objectives/11.webp"), width: 60, height: 60 },
                [12]: { url: require("../assets/game/1/objectives/12.webp"), width: 60, height: 60 },
                [13]: { url: require("../assets/game/1/objectives/13.webp"), width: 60, height: 60 },
                [14]: { url: require("../assets/game/1/objectives/14.webp"), width: 60, height: 60 },
                [15]: { url: require("../assets/game/1/objectives/15.webp"), width: 60, height: 60 },
                [16]: { url: require("../assets/game/1/objectives/16.webp"), width: 60, height: 60 },
                [17]: { url: require("../assets/game/1/objectives/17.webp"), width: 60, height: 60 },
                [18]: { url: require("../assets/game/1/objectives/18.webp"), width: 60, height: 60 },
                [19]: { url: require("../assets/game/1/objectives/19.webp"), width: 60, height: 60 },
                [20]: { url: require("../assets/game/1/objectives/20.webp"), width: 60, height: 60 },
                [21]: { url: require("../assets/game/1/objectives/21.webp"), width: 60, height: 60 },
                [22]: { url: require("../assets/game/1/objectives/22.webp"), width: 60, height: 60 },
            },
            scenery: {
                [1]: { url: require("../assets/game/1/scenery/1.webp"), width: 60, height: 60 },
                [2]: { url: require("../assets/game/1/scenery/2.webp"), width: 60, height: 60 },
                [3]: { url: require("../assets/game/1/scenery/3.webp"), width: 60, height: 60 },
                [4]: { url: require("../assets/game/1/scenery/4.webp"), width: 60, height: 60 },
                [5]: { url: require("../assets/game/1/scenery/5.webp"), width: 60, height: 60 },
                [6]: { url: require("../assets/game/1/scenery/6.webp"), width: 60, height: 60 },
                [7]: { url: require("../assets/game/1/scenery/7.webp"), width: 60, height: 60 },
                [8]: { url: require("../assets/game/1/scenery/8.webp"), width: 60, height: 60 },
                [9]: { url: require("../assets/game/1/scenery/9.webp"), width: 60, height: 60 },
                [10]: { url: require("../assets/game/1/scenery/10.webp"), width: 60, height: 60 },
                [11]: { url: require("../assets/game/1/scenery/11.webp"), width: 60, height: 60 },
                [12]: { url: require("../assets/game/1/scenery/12.webp"), width: 60, height: 60 },
                [13]: { url: require("../assets/game/1/scenery/13.webp"), width: 60, height: 60 },
            },
            props: {
                [1]: { url: require("../assets/game/1/props/1.webp"), width: 60, height: 60 },
                [2]: { url: require("../assets/game/1/props/2.webp"), width: 60, height: 60 },
                [3]: { url: require("../assets/game/1/props/3.webp"), width: 60, height: 60 },
                [4]: { url: require("../assets/game/1/props/4.webp"), width: 60, height: 60 },
                [5]: { url: require("../assets/game/1/props/5.webp"), width: 60, height: 60 },
                [6]: { url: require("../assets/game/1/props/6.webp"), width: 60, height: 60 },
                [7]: { url: require("../assets/game/1/props/7.webp"), width: 60, height: 60 },
                [8]: { url: require("../assets/game/1/props/8.webp"), width: 60, height: 60 },
                [9]: { url: require("../assets/game/1/props/9.webp"), width: 60, height: 60 },
                [10]: { url: require("../assets/game/1/props/10.webp"), width: 60, height: 60 },
                [11]: { url: require("../assets/game/1/props/11.webp"), width: 60, height: 60 },
                [12]: { url: require("../assets/game/1/props/12.webp"), width: 60, height: 60 },
                [13]: { url: require("../assets/game/1/props/13.webp"), width: 60, height: 60 },
                [14]: { url: require("../assets/game/1/props/14.webp"), width: 60, height: 60 },
                [15]: { url: require("../assets/game/1/props/15.webp"), width: 60, height: 60 },
                [16]: { url: require("../assets/game/1/props/16.webp"), width: 60, height: 60 },
                [17]: { url: require("../assets/game/1/props/17.webp"), width: 60, height: 60 },
                [18]: { url: require("../assets/game/1/props/18.webp"), width: 60, height: 60 },
                [19]: { url: require("../assets/game/1/props/19.webp"), width: 60, height: 60 },
                [20]: { url: require("../assets/game/1/props/20.webp"), width: 60, height: 60 },
                [21]: { url: require("../assets/game/1/props/21.webp"), width: 60, height: 60 },
                [22]: { url: require("../assets/game/1/props/22.webp"), width: 60, height: 60 },
                [23]: { url: require("../assets/game/1/props/23.webp"), width: 60, height: 60 },
                [24]: { url: require("../assets/game/1/props/24.webp"), width: 60, height: 60 },
                [25]: { url: require("../assets/game/1/props/25.webp"), width: 60, height: 60 },
                [26]: { url: require("../assets/game/1/props/26.webp"), width: 60, height: 60 },
                [27]: { url: require("../assets/game/1/props/27.webp"), width: 60, height: 60 },
                [28]: { url: require("../assets/game/1/props/28.webp"), width: 60, height: 60 },
                [29]: { url: require("../assets/game/1/props/29.webp"), width: 60, height: 60 },
                [30]: { url: require("../assets/game/1/props/30.webp"), width: 60, height: 60 },
                [31]: { url: require("../assets/game/1/props/31.webp"), width: 60, height: 60 },
                [32]: { url: require("../assets/game/1/props/32.webp"), width: 60, height: 60 },
                [33]: { url: require("../assets/game/1/props/33.webp"), width: 60, height: 60 },
                [34]: { url: require("../assets/game/1/props/34.webp"), width: 60, height: 60 },
            },
        },
    },

    found: require("../assets/found.webp"),
    onPress: require("../assets/onPress.png"),
}

export default images
