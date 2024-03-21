import React, { useEffect } from "react"
import { View, TouchableOpacity, Text, BackHandler } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import { colors } from "../../style/colors"
import { ResultsBG } from "./ResultsBG"
import { buttonStyle } from "../../style/buttonStyle"
import { textStyle } from "../../style/textStyle"
import { StageResult } from "./StageResult"
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from "react-native-reanimated"

interface ResultsPageProps {
    navigation: NavigationProp<any, any>
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ navigation }) => {
    const scale = useSharedValue(1)

    useEffect(() => {
        scale.value = withRepeat(
            withTiming(1.1, { duration: 2000, easing: Easing.linear }),
            -1, // Repeat animation indefinitely
            true // Reverse the animation on each iteration for a smooth effect
        )

        // Code below prevents the hardware back button leading back to already finished game
        const backAction = () => {
            navigation.navigate("home")
            return true
        }

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)

        return () => backHandler.remove()
    }, [navigation])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        }
    })

    return (
        <View style={{ flex: 1, justifyContent: "center", gap: 20, alignItems: "center", position: "relative" }}>
            <ResultsBG />
            <Animated.Image
                source={require("../../../assets/interface/titulo_resultado.webp")}
                style={[{ width: 300, height: 200, top: 0, position: "absolute", resizeMode: "contain" }, animatedStyle]}
            />

            <View style={{ gap: 20, position: "absolute", top: 145 }}>
                <StageResult scene="Manhã" stage={1} />
                <StageResult scene="Tarde" stage={2} />
                <StageResult scene="Noite" stage={3} />
            </View>

            <View style={{ position: "absolute", bottom: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate("home")} style={{ ...buttonStyle, backgroundColor: colors.orange }}>
                    <Text style={textStyle}>Voltar ao menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
