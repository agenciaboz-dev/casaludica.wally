import React, { useContext, useEffect, useState } from "react"
import { NavigationProp } from "@react-navigation/native"
import { Dimensions, ImageBackground, Pressable, Text, TouchableOpacity, View } from "react-native"
import { Game } from "../../class/Game/Game"
import { ObjectComponent } from "./ObjectComponent"
import { GoalsContainer } from "./GoalsContainer"
import { ScoreContainer } from "./ScoreContainer"
import SettingsContext from "../../contexts/settingsContext"
import { GameForm } from "../../class/Game/GameForm"
import { Filter } from "../../components/Filter"
import { Timer } from "../../components/Timer"
import { ScoreModal } from "../../components/ScoreModal"
import { LoadingScreen } from "../../components/LoadingScreen"
import { buttonStyle } from "../../style/buttonStyle"
import { textStyle } from "../../style/textStyle"
import { colors } from "../../style/colors"
import { Image } from "expo-image"

interface GamePageProps {
    navigation: NavigationProp<any, any>
}

export const GamePage: React.FC<GamePageProps> = ({ navigation }) => {
    const { height, width } = Dimensions.get("screen")
    const { settings, setSettings } = useContext(SettingsContext)

    const [_, setReRender] = useState({})

    const triggerRerender = () => {
        setReRender({})
    }

    const game_settings: GameForm = { theme: 1, settings }

    const [game, setGame] = useState(new Game(game_settings, triggerRerender))
    const [scoreModal, setScoreModal] = useState(false)
    const [loading, setLoading] = useState(true)

    const reset = () => {
        setGame(new Game({ ...game_settings, stage: game.stage }, triggerRerender))
    }

    const nextStage = () => {
        setScoreModal(false)
        setLoading(true)
        setTimeout(() => {
            const new_settings: GameForm = {
                ...game_settings,
                settings: {
                    ...game.settings,
                    objects: Math.floor(game.settings.objects * 1.1),
                },
                stage: game.stage + 1,
            }
            setGame(new Game(new_settings, triggerRerender))
            setTimeout(() => setLoading(false), 1000)
        }, 1000)
    }

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    useEffect(() => {
        if (game.found == game.goals.length) {
            setScoreModal(true)
        }
    }, [game.found])

    return (
        <ImageBackground
            style={{ flex: 1, position: "relative" }}
            imageStyle={{
                resizeMode: "cover",
                aspectRatio: 1,
            }}
            source={game.background}
        >
            <View style={{ flexDirection: "row", flex: 1, position: "absolute", top: 10, left: 10, right: 10, zIndex: 999 }}>
                <Pressable style={{ ...buttonStyle, backgroundColor: colors.orange, width: "36%" }} onPress={() => navigation.navigate("home")}>
                    <Text style={textStyle}>Sair</Text>
                </Pressable>
                <Timer game={game} />
                <Pressable onPress={reset} style={{ ...buttonStyle, backgroundColor: colors.orange, width: "36%", paddingHorizontal: 0 }}>
                    <Text style={textStyle}>Reiniciar</Text>
                </Pressable>
            </View>
            {/* <ScoreContainer game={game} /> */}
            {game.objects.map((object, index) => (
                <ObjectComponent key={`${object.x}.${object.y}.${index}`} object={object} navigation={navigation} game={game} />
            ))}
            {game.gang.map((gangster) => (
                <Image
                    key={gangster.y}
                    source={game.found ? gangster.images.found : gangster.images.searching}
                    style={{
                        height: gangster.height,
                        width: gangster.width,
                        position: "absolute",
                        bottom: gangster.y,
                        left: gangster.x,
                        zIndex: gangster.y,
                    }}
                />
            ))}
            {game.filter && <Filter hex={game.filter.hex} opacity={game.filter.opacity} />}
            <GoalsContainer game={game} />
            <View
                style={{
                    position: "absolute",
                    width,
                    bottom: game.settings.offsetBottom,
                    top: game.settings.offsetTop,
                }}
            ></View>

            <ScoreModal onClose={nextStage} open={scoreModal} game={game} navigation={navigation} />
            <LoadingScreen loading={loading} />
        </ImageBackground>
    )
}
