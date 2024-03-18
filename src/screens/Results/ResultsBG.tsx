import React from "react"
import { View, Image, ImageBackground } from "react-native"

interface ResultsBGProps {}

export const ResultsBG: React.FC<ResultsBGProps> = ({}) => {
    return (
        <View style={{ flex: 1, position: "absolute", zIndex: -1 }}>
            <View
                style={{ flex: 1, position: "absolute", left: -220, top: -450, width: 450, height: 900, zIndex: -1, backgroundColor: "#ffffff80" }}
            ></View>
            <Image
                source={require("../../../assets/interface/fundo.webp")}
                style={{ resizeMode: "cover", aspectRatio: 1, position: "absolute", left: -220, top: -450, width: 450, height: 900, zIndex: -2 }}
            />
            <Image
                source={require("../../../assets/interface/ludica_2.webp")}
                style={{ width: 250, height: 300, position: "absolute", right: 20, bottom: -420, resizeMode: "contain" }}
            />
            <Image
                source={require("../../../assets/interface/ovos.webp")}
                style={{ width: 150, height: 200, position: "absolute", right: -250, bottom: -420, resizeMode: "contain" }}
            />
        </View>
    )
}
