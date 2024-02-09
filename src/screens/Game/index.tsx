import React, { useEffect, useState } from "react"
import { NavigationProp } from "@react-navigation/native"
import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { Game } from "../../class/Game"
import { ObjectComponent } from "./ObjectComponent"
import { GoalsContainer } from "./GoalsContainer"

interface GamePageProps {
    navigation: NavigationProp<any, any>
}

export const GamePage: React.FC<GamePageProps> = ({ navigation }) => {
    const [_, setReRender] = useState({})

    const triggerRerender = () => {
        setReRender({})
    }
    const [game, setGame] = useState(new Game({ theme: 1 }, triggerRerender))

    const reset = () => {
        setGame(new Game({ theme: 1 }, triggerRerender))
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
            <GoalsContainer game={game} navigation={navigation} />
        </ImageBackground>
    )
}
