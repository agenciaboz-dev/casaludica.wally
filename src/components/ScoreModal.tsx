import React, { useEffect, useRef } from "react"
import { Animated, Image, Modal, Pressable, Text, TouchableOpacity, View } from "react-native"
import { Game } from "../class/Game/Game"
import { NavigationProp } from "@react-navigation/native"
import { buttonStyle } from "../style/buttonStyle"
import { textStyle } from "../style/textStyle"
import { colors } from "../style/colors"

interface ScoreModalProps {
    open: boolean
    onClose: () => void
    game: Game
    navigation: NavigationProp<any, any>
}

export const ScoreModal: React.FC<ScoreModalProps> = ({ open, onClose, game, navigation }) => {
    const elapsed_time = new Date(game.time).toLocaleTimeString("pt-br", { minute: "2-digit", second: "2-digit" })
    const backdropOpacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(backdropOpacity, {
            toValue: open ? 0.7 : 0,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }, [open, backdropOpacity])

    return (
        <Modal animationType="fade" transparent={true} visible={open} onRequestClose={onClose}>
            <Animated.View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: backdropOpacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.5)"],
                    }),
                }}
            >
                <View
                    style={{
                        borderColor: colors.blue,
                        borderWidth: 4,
                        borderRadius: 50,
                        height: 300,
                        width: 390,
                        position: "relative",
                    }}
                >
                    <Image
                        source={require("../../assets/interface/fundo.webp")}
                        style={{ position: "absolute", height: "100%", width: "100%", borderRadius: 50, resizeMode: "cover" }}
                    />
                    <View
                        style={{
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 20,
                            padding: 20,
                            position: "relative",
                        }}
                    >
                        {game.stage != 3 ? (
                            <Text style={{ fontSize: 40, fontFamily: "KGSecondChancesSketch", color: colors.blue }}>Muito bem!</Text>
                        ) : (
                            <Text style={{ fontSize: 40, fontFamily: "KGSecondChancesSketch", color: colors.blue }}>Parabéns!</Text>
                        )}
                        {game.stage != 3 ? (
                            <Text style={{ fontSize: 20, fontFamily: "KGSecondChancesSolid", color: colors.blue, textAlign: "center", width: 250 }}>
                                Você encontrou todos os objetivos deste cenário!
                            </Text>
                        ) : (
                            <Text style={{ fontSize: 20, fontFamily: "KGSecondChancesSolid", color: colors.blue, textAlign: "center", width: 250 }}>
                                Você completou todos os cenários!
                            </Text>
                        )}
                        {/* <Text>tempo: {elapsed_time}</Text>
                            <Text>erros: {game.misclicks}</Text> */}
                        <Image
                            source={require("../../assets/interface/pilhantra_carregando.webp")}
                            style={{ width: 80, height: 100, position: "absolute", left: 5, bottom: -15, resizeMode: "contain" }}
                        />
                        <Image
                            source={require("../../assets/interface/pilhantra_resultado_2.webp")}
                            style={{ width: 80, height: 100, position: "absolute", right: 5, bottom: -15, resizeMode: "contain" }}
                        />
                        {game.stage != 3 ? (
                            <TouchableOpacity style={{ ...buttonStyle, backgroundColor: colors.orange }} onPress={() => onClose()}>
                                <Text style={textStyle}>Avançar</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={{ ...buttonStyle, backgroundColor: colors.orange }} onPress={() => navigation.navigate("home")}>
                                <Text style={textStyle}>Sair</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </Animated.View>
        </Modal>
    )
}
