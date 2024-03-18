import React, { useEffect, useState } from "react"
import { NavigationProp } from "@react-navigation/native"
import { Dimensions, Image, Text, View } from "react-native"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

interface LoadingScreenProps {
    loading: boolean
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ loading }) => {
    const { width, height } = Dimensions.get("screen")
    const [currentWidth, setCurrentWidth] = useState(width)
    const [currentPRight, setCurrentPRight] = useState(80)
    const [currentELeft, setCurrentELeft] = useState(80)
    const [currentTLeft, setCurrentTLeft] = useState(40)

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    }

    const style = useAnimatedStyle(() => {
        return {
            width: withTiming(currentWidth, config),
        }
    })

    const animatePilhantra = useAnimatedStyle(() => {
        return {
            right: withTiming(currentPRight, config),
        }
    })

    const animateText = useAnimatedStyle(() => {
        return {
            left: withTiming(currentTLeft, config),
        }
    })

    const animateElectro = useAnimatedStyle(() => {
        return {
            left: withTiming(currentELeft, config),
        }
    })

    useEffect(() => {
        setCurrentWidth(loading ? width : 0)
        setCurrentPRight(loading ? 80 : width)
        setCurrentELeft(loading ? 80 : -240)
        setCurrentTLeft(loading ? 40 : -240)
    }, [loading])

    return (
        <Animated.View
            style={[
                {
                    backgroundColor: "white",
                    position: "absolute",
                    width,
                    height,
                    zIndex: 999,
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                },
                style,
            ]}
        >
            <Image source={require("../../assets/interface/fundo.webp")} style={{ position: "absolute", zIndex: -1 }} />
            <Animated.View style={[{ position: "absolute", top: 60, right: 80 }, animatePilhantra]}>
                <Image source={require("../../assets/interface/pilhantra_carregando.webp")} style={{ width: 150, height: 200 }} />
            </Animated.View>
            <Animated.View style={[{ position: "absolute", left: 40 }, animateText]}>
                <Text numberOfLines={1} style={{ fontSize: 40, fontFamily: "KGSecondChancesSketch" }}>
                    Carregando...
                </Text>
            </Animated.View>
            <Animated.View style={[{ position: "absolute", bottom: 20, left: 80 }, animateElectro]}>
                <Image source={require("../../assets/interface/eletro.webp")} style={{ width: 150, height: 290 }} />
            </Animated.View>
        </Animated.View>
    )
}
