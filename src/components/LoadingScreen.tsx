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

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    }

    const style = useAnimatedStyle(() => {
        return {
            width: withTiming(currentWidth, config),
        }
    })

    useEffect(() => {
        setCurrentWidth(loading ? width : 0)
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
            <Image
                source={require("../../assets/interface/pilhantra_carregando.webp")}
                style={{ position: "absolute", width: 150, height: 200, top: 60, right: 80 }}
            />
            <Text numberOfLines={1} style={{ fontSize: 40, fontFamily: "KGSecondChancesSketch" }}>
                Carregando...
            </Text>
            <Image
                source={require("../../assets/interface/eletro.webp")}
                style={{ position: "absolute", width: 150, height: 290, bottom: 20, left: 80 }}
            />
        </Animated.View>
    )
}
