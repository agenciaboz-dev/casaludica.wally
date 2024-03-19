import React from "react"
import { View, Image, TouchableOpacity, Text } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import { colors } from "../../style/colors"
import { ResultsBG } from "./ResultsBG"
import { buttonStyle } from "../../style/buttonStyle"
import { textStyle } from "../../style/textStyle"
import { StageResult } from "./StageResult"

interface ResultsPageProps {
    navigation: NavigationProp<any, any>
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", gap: 20, alignItems: "center", position: "relative" }}>
            <ResultsBG />
            <Image
                source={require("../../../assets/interface/titulo_resultado.webp")}
                style={{ width: 300, height: 200, top: 0, position: "absolute", resizeMode: "contain" }}
            />

            <View style={{ gap: 20, position: "absolute", top: 145 }}>
                <StageResult scene="Manhã" stage={1} />
                <StageResult scene="Tarde" stage={2} />
                <StageResult scene="Noite" stage={3} />
            </View>

            <Image
                source={require("../../../assets/interface/balao.webp")}
                style={{ width: 270, height: 180, bottom: 160, right: 0, resizeMode: "contain", position: "absolute", zIndex: -1 }}
            />
            <Text style={{ ...textStyle, color: colors.blue, fontSize: 15, width: 180, position: "absolute", bottom: 205, right: 40 }}>
                Mandou bem! Jogue novamente se acha que consegue fazer melhor!
            </Text>

            <View style={{ position: "absolute", bottom: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate("home")} style={{ ...buttonStyle, backgroundColor: colors.orange }}>
                    <Text style={textStyle}>Voltar ao menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}