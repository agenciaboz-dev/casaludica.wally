import React from "react"
import { View, Image, ImageBackground } from "react-native"

interface HomeBGProps {}

export const HomeBG: React.FC<HomeBGProps> = ({}) => {
    return (
        <View style={{ flex: 1, position: "absolute", zIndex: -1 }}>
            <View
                style={{ flex: 1, position: "absolute", left: -220, top: -450, width: 450, height: 900, zIndex: -1, backgroundColor: "#ffffff80" }}
            ></View>
            <Image
                source={require("../../../assets/game/1/background/1.webp")}
                style={{ resizeMode: "cover", aspectRatio: 1, position: "absolute", left: -220, top: -450, width: 450, height: 900, zIndex: -2 }}
            />
            <Image
                source={require("../../../assets/interface/ludica_1.webp")}
                style={{ width: 215, height: 250, position: "absolute", right: 50, bottom: 50 }}
            />
            <Image
                source={require("../../../assets/interface/pilhantra_resultado_2.webp")}
                style={{ width: 100, height: 130, position: "absolute", left: 110, bottom: 140, transform: [{ rotate: "20deg" }] }}
            />
            <Image
                source={require("../../../assets/interface/ludico.webp")}
                style={{ width: 225, height: 250, position: "absolute", right: 40, top: 170 }}
            />
            <Image
                source={require("../../../assets/interface/ludicao.webp")}
                style={{ width: 140, height: 220, position: "absolute", left: 70, top: 200 }}
            />
        </View>
    )
}
