import React from "react"
import { BackHandler, Platform, View, Image, TouchableOpacity, Text } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import { colors } from "../../style/colors"
import { ResultsBG } from "./ResultsBG"
import { buttonStyle } from "../../style/buttonStyle"
import { textStyle } from "../../style/textStyle"

interface ResultsPageProps {
    navigation: NavigationProp<any, any>
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", gap: 20, alignItems: "center", position: "relative" }}>
            <ResultsBG />
            <Image
                source={require("../../../assets/interface/titulo_resultado.webp")}
                style={{ width: 300, height: 200, top: 20, position: "absolute", resizeMode: "contain" }}
            />
            <View style={{ gap: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("home")} style={{ ...buttonStyle, backgroundColor: colors.orange }}>
                    <Text style={textStyle}>Voltar ao menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
