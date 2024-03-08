import React, { useEffect, useState } from "react"
import { NavigationProp } from "@react-navigation/native"
import { Text, View } from "react-native"
import { Game } from "../class/Game/Game"

interface TimerProps {
    game: Game
}

export const Timer: React.FC<TimerProps> = ({ game }) => {
    const [time, setTime] = useState("")

    const formatTime = useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime()
            const elapsed_time = now - game.started_time
            game.time = elapsed_time
            const date = new Date(elapsed_time)
            setTime(date.toLocaleTimeString("pt-br", { minute: "2-digit", second: "2-digit" }))
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [game])

    return (
        <View style={{ flex: 1, alignItems: "center", zIndex: 999 }}>
            <View
                style={{
                    backgroundColor: "#c8c8c860",
                    borderColor: "yellow",
                    borderWidth: 2,
                    borderRadius: 100,
                    padding: 5,
                    width: 70,
                    alignItems: "center",
                }}
            >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>{time}</Text>
            </View>
        </View>
    )
}
