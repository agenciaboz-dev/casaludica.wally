import React, { useEffect } from "react"
import { View, Image, ImageBackground } from "react-native"
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming } from "react-native-reanimated"
import images from "../../images"

interface HomeBGProps {}

export const HomeBG: React.FC<HomeBGProps> = ({}) => {
    const rotation1 = useSharedValue(0)
    const rotation2 = useSharedValue(0)

    useEffect(() => {
        rotation1.value = withRepeat(
            withSequence(withTiming(6, { duration: 1000 }), withTiming(-6, { duration: 3000 }), withTiming(0, { duration: 1000 })),
            -1, // Repeat indefinitely
            false // Do not reverse
        )
    }, [rotation1])

    const animatedStyle1 = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation1.value}deg` }],
        }
    })

    useEffect(() => {
        rotation2.value = withRepeat(
            withSequence(withTiming(-6, { duration: 1000 }), withTiming(6, { duration: 3000 }), withTiming(0, { duration: 1000 })),
            -1, // Repeat indefinitely
            false // Do not reverse
        )
    }, [rotation2])

    const animatedStyle2 = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation2.value}deg` }],
        }
    })

    return (
        <View style={{ flex: 1, position: "absolute", zIndex: -1 }}>
            <View
                style={{ flex: 1, position: "absolute", left: -220, top: -450, width: 450, height: 900, zIndex: -1, backgroundColor: "#ffffff80" }}
            ></View>
            <Image
                source={images.game[1].backgrounds[1]}
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
                    animatedStyle1,
                ]}
            />
            <Animated.Image
                source={require("../../../assets/interface/pilhantra_resultado_2.webp")}
                style={[
                    {
                        width: 100,
                        height: 130,
                        position: "absolute",
                        left: 110,
                        bottom: 140,
                        transform: [{ rotate: "20deg" }],
                    },
                    animatedStyle2,
                ]}
            />
            <Animated.Image
                source={require("../../../assets/interface/ludico.webp")}
                style={[
                    {
                        width: 225,
                        height: 250,
                        position: "absolute",
                        right: 40,
                        top: 170,
                    },
                    animatedStyle2,
                ]}
            />
            <Animated.Image
                source={require("../../../assets/interface/ludicao.webp")}
                style={[
                    {
                        width: 140,
                        height: 220,
                        position: "absolute",
                        left: 70,
                        top: 200,
                    },
                    animatedStyle1,
                ]}
            />
        </View>
    )
}
