import React, { useContext, useEffect, useState } from "react"
import { NavigationProp } from "@react-navigation/native"
import { Dimensions, ImageBackground, Pressable, Text, View } from "react-native"
import { Game } from "../../class/Game/Game"
import { ObjectComponent } from "./ObjectComponent"
import { GoalsContainer } from "./GoalsContainer"
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
import ResultsContext, { Results } from "../../contexts/resultsContext"

interface GamePageProps {
    navigation: NavigationProp<any, any>
}

export const GamePage: React.FC<GamePageProps> = ({ navigation }) => {
    const { height, width } = Dimensions.get("screen")
    const { settings, setSettings } = useContext(SettingsContext)
    const { results, setResults } = useContext(ResultsContext)

    const [_, setReRender] = useState({})

    const triggerRerender = () => {
        setReRender({})
    }

    const game_settings: GameForm = { theme: 1, settings }

    const [game, setGame] = useState(new Game(game_settings, triggerRerender))
    const [scoreModal, setScoreModal] = useState(false)
    const [loading, setLoading] = useState(true)

    const reset = () => {
        setLoading(true)
        setTimeout(() => {
            const new_settings: GameForm = {
                ...game_settings,
                settings: {
                    ...game.settings,
                    objects: Math.floor(game.settings.objects * 1.1),
                },
                stage: 1,
            }
            setGame(new Game(new_settings, triggerRerender))
            setTimeout(() => setLoading(false), 1000)
        }, 1000)
    }

    const updateResults = (game: Game) => {
        let new_results: Results = {
            ...results,
        }

        new_results[game.stage] = {
            elapsed_time: new Date(game.time).toLocaleTimeString("pt-br", { minute: "2-digit", second: "2-digit" }),
            errors: game.misclicks,
        }
        setResults(new_results)
    }

    const nextStage = () => {
        updateResults(game)

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

    const showResults = () => {
        updateResults(game)

        setScoreModal(false)
        setLoading(true)
        setTimeout(() => {
            navigation.navigate("results")
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
            {game.objects.map((object, index) => (
                <ObjectComponent key={`${object.x}.${object.y}.${index}`} object={object} navigation={navigation} game={game} />
            ))}
            {game.gang.map((gangster) => (
                <Pressable
                    key={gangster.y}
                    pointerEvents="none"
                    style={{ position: "absolute", bottom: gangster.y, left: gangster.x, zIndex: gangster.y }}
                >
                    <Image
                        source={game.found ? gangster.images.found : gangster.images.searching}
                        style={{
                            height: gangster.height * 1.5,
                            width: gangster.width * 1.5,

                            resizeMode: "contain",
                        }}
                    />
                </Pressable>
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

            <ScoreModal onClose={game.stage != 3 ? nextStage : showResults} open={scoreModal} game={game} navigation={navigation} />
            <LoadingScreen loading={loading} />
        </ImageBackground>
    )
}
