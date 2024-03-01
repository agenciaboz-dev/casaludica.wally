import React, { useContext, useEffect, useState } from "react"
import { NavigationProp } from "@react-navigation/native"
import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { Game } from "../../class/Game/Game"
import { ObjectComponent } from "./ObjectComponent"
import { GoalsContainer } from "./GoalsContainer"
import { ScoreContainer } from "./ScoreContainer"
import SettingsContext from "../../contexts/settingsContext"
import { GameForm } from "../../class/Game/GameForm"

interface GamePageProps {
    navigation: NavigationProp<any, any>
}

export const GamePage: React.FC<GamePageProps> = ({ navigation }) => {
    const offsetY = 100
    const { settings, setSettings } = useContext(SettingsContext)

    const [_, setReRender] = useState({})

    const triggerRerender = () => {
        setReRender({})
    }

    const game_settings: GameForm = { theme: 1, offsetY, settings }

    const [game, setGame] = useState(new Game(game_settings, triggerRerender))

    const reset = () => {
        setGame(new Game(game_settings, triggerRerender))
    }

    useEffect(() => {
        // console.log(game)
    }, [game.objects])

    return (
        <ImageBackground style={{ flex: 1, position: "relative" }} source={game.background}>
            <TouchableOpacity onPress={reset} style={{ elevation: 999, zIndex: 999, width: 50, borderColor: "red", borderWidth: 1 }}>
                <Text>reset</Text>
            </TouchableOpacity>
            {game.objects.map((object, index) => (
                <ObjectComponent key={index} object={object} navigation={navigation} game={game} />
            ))}
            <GoalsContainer game={game} navigation={navigation} offsetY={offsetY} />
            <ScoreContainer game={game} navigation={navigation} />
        </ImageBackground>
    )
}
