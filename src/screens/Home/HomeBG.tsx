import React, { useEffect } from "react"
import { View, Image, ImageBackground } from "react-native"
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming } from "react-native-reanimated"

interface HomeBGProps {}

export const HomeBG: React.FC<HomeBGProps> = ({}) => {
    const rotation = useSharedValue(0)

    useEffect(() => {
        rotation.value = withRepeat(
            withSequence(withTiming(3, { duration: 1000 }), withTiming(-3, { duration: 2000 }), withTiming(0, { duration: 1000 })),
            -1, // Repeat indefinitely
            false // Do not reverse
        )
    }, [rotation])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        }
    })

    return (
        <View style={{ flex: 1, position: "absolute", zIndex: -1 }}>
            <View
                style={{ flex: 1, position: "absolute", left: -220, top: -450, width: 450, height: 900, zIndex: -1, backgroundColor: "#ffffff80" }}
            ></View>
            <Image
                source={require("../../../assets/game/1/background/1.webp")}
                style={{ resizeMode: "cover", aspectRatio: 1, position: "absolute", left: -220, top: -450, width: 450, height: 900, zIndex: -2 }}
            />
            <Animated.Image
                source={require("../../../assets/interface/ludica_1.webp")}
                style={[
                    {
                        width: 215,
                        height: 250,
                        position: "absolute",
                        right: 50,
                        bottom: 50,
                    },
                    animatedStyle,
                ]}
            />
            <Image
                source={require("../../../assets/interface/pilhantra_resultado_2.webp")}
                style={{ width: 100, height: 130, position: "absolute", left: 110, bottom: 140, transform: [{ rotate: "20deg" }] }}
            />
            <Image
                source={require("../../../assets/interface/ludico.webp")}
                style={{ width: 225, height: 250, position: "absolute", right: 40, top: 170 }}
            />
            <Image
                source={require("../../../assets/interface/ludicao.webp")}
                style={{ width: 140, height: 220, position: "absolute", left: 70, top: 200 }}
            />
        </View>
    )
}
