import React from "react"
import { View, Image, Text } from "react-native"
import { textStyle } from "../../style/textStyle"
import { colors } from "../../style/colors"

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
                style={{ width: 240, height: 280, position: "absolute", right: 25, bottom: -420, resizeMode: "contain" }}
            />
            <View style={{ position: "absolute", bottom: -250, left: -60 }}>
                <Image
                    source={require("../../../assets/interface/balao.webp")}
                    style={{ width: 260, height: 180, resizeMode: "contain", zIndex: -1 }}
                />
                <View
                    style={{
                        position: "absolute",
                        width: 260,
                        height: 165,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            ...textStyle,
                            color: colors.blue,
                            fontSize: 15,
                            textAlign: "center",
                            width: 180,
                        }}
                    >
                        Mandou bem! Jogue novamente se acha que consegue fazer melhor!
                    </Text>
                </View>
            </View>
            <Image
                source={require("../../../assets/interface/ovos.webp")}
                style={{ width: 150, height: 200, position: "absolute", right: -250, bottom: -420, resizeMode: "contain" }}
            />
        </View>
    )
}
