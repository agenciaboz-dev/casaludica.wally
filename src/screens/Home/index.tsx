import React from "react"
import { BackHandler, Platform, View, Image, TouchableOpacity, Text } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import constants from "expo-constants"
import { colors } from "../../style/colors"
import { HomeBG } from "./HomeBG"
import { buttonStyle } from "../../style/buttonStyle"
import { textStyle } from "../../style/textStyle"

interface HomeProps {
    navigation: NavigationProp<any, any>
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", gap: 20, alignItems: "center", position: "relative" }}>
            <HomeBG />
            <Image source={require("../../../assets/interface/titulo_principal.webp")} style={{ width: 300, height: 200, resizeMode: "contain" }} />
            <View style={{ gap: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("settings")} style={{ ...buttonStyle, backgroundColor: colors.orange }}>
                    <Text style={textStyle}>Jogar</Text>
                </TouchableOpacity>
                {Platform.OS != "ios" && (
                    <TouchableOpacity onPress={() => BackHandler.exitApp()} style={{ ...buttonStyle, backgroundColor: colors.red }}>
                        <Text style={textStyle}>Sair</Text>
                    </TouchableOpacity>
                )}
            </View>
            <Text style={{ ...textStyle, fontSize: 15, position: "absolute", bottom: 5 }}>Versão {constants.expoConfig?.version}</Text>
        </View>
    )
}
