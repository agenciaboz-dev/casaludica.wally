import React, { useEffect, useState } from "react"
import { BackHandler, Platform, View, Image, TouchableOpacity, Text } from "react-native"
import { NavigationProp, useFocusEffect } from "@react-navigation/native"
import constants from "expo-constants"
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from "react-native-reanimated"
import { colors } from "../../style/colors"
import { HomeBG } from "./HomeBG"
import { buttonStyle } from "../../style/buttonStyle"
import { textStyle } from "../../style/textStyle"
import { Audio } from "expo-av"
import { sounds } from "../../sounds"
import { MusicWithEasing } from "../../components/MusicWithEasing"

interface HomeProps {
    navigation: NavigationProp<any, any>
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
    const scale = useSharedValue(1)

    React.useEffect(() => {
        scale.value = withRepeat(
            withTiming(1.1, { duration: 2000, easing: Easing.linear }),
            -1, // Repeat indefinitely
            true // Reverse the animation on each iteration for a smooth effect
        )
    }, [])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        }
    })

    return (
        <View style={{ flex: 1, justifyContent: "center", gap: 20, alignItems: "center", position: "relative" }}>
            <HomeBG />
            <Animated.Image
                source={require("../../../assets/interface/titulo_principal.webp")}
                style={[{ width: 300, height: 200, resizeMode: "contain" }, animatedStyle]}
            />
            <View style={{ gap: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("game")} style={{ ...buttonStyle, backgroundColor: colors.orange }}>
                    <Text style={textStyle}>Jogar</Text>
                </TouchableOpacity>
                {Platform.OS != "ios" && (
                    <TouchableOpacity onPress={() => BackHandler.exitApp()} style={{ ...buttonStyle, backgroundColor: colors.red }}>
                        <Text style={textStyle}>Sair</Text>
                    </TouchableOpacity>
                )}
            </View>
            <Text style={{ ...textStyle, fontSize: 15, position: "absolute", bottom: 5 }}>Versão {constants.expoConfig?.version}</Text>
            <MusicWithEasing source={sounds.main_menu.source} />
        </View>
    )
}
