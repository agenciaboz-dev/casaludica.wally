import React from "react"
import { BackHandler, Dimensions, Platform, View, Image, ImageBackground, TouchableOpacity, Text, TextStyle } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import constants from "expo-constants"
import { colors } from "../../style/colors"

interface HomeProps {
    navigation: NavigationProp<any, any>
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
    const buttonStyle = { paddingVertical: 10, paddingHorizontal: 25, borderRadius: 15 }
    const textStyle: TextStyle = { fontFamily: "KGSecondChancesSolid", fontSize: 20, color: colors.white, textAlign: "center" }

    return (
        <View style={{ flex: 1, justifyContent: "center", gap: 20, alignItems: "center" }}>
            <Image source={require("../../../assets/interface/titulo_principal.webp")} style={{ width: 300, height: 200 }} />
            <View style={{ gap: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("settings")} style={{ ...buttonStyle, backgroundColor: colors.orange }}>
                    <Text style={textStyle}>Jogar</Text>
                </TouchableOpacity>
                {Platform.OS != "ios" && (
                    <TouchableOpacity onPress={() => BackHandler.exitApp()} style={{ ...buttonStyle, backgroundColor: colors.red }}>
                        <Text style={textStyle}>Sair</Text>
                    </TouchableOpacity>
                )}
            </View>
            <Text style={{ ...textStyle, color: colors.blue, fontSize: 15, position: "absolute", bottom: 5 }}>
                Versão {constants.expoConfig?.version}
            </Text>
        </View>
    )
}
