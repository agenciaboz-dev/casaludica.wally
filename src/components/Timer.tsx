import React, { useEffect, useState } from "react"
import { NavigationProp } from "@react-navigation/native"
import { Text, View } from "react-native"
import { Game } from "../class/Game/Game"
import { Goal } from "../class/Goal/Goal"
import { colors } from "../style/colors"

interface TimerProps {
    game: Game
}

export const Timer: React.FC<TimerProps> = ({ game }) => {
    const [time, setTime] = useState("00:00")
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        setPaused(false)
        setTime("00:00")
    }, [game])

    useEffect(() => {
        if (game.found == game.goals.length) {
            setPaused(true)
        }
    }, [game.found])

    useEffect(() => {
        if (!paused) {
            const timer = setInterval(() => {
                game.time += 1000
                const date = new Date(game.time)
                setTime(date.toLocaleTimeString("pt-br", { minute: "2-digit", second: "2-digit" }))
            }, 1000)

            return () => {
                clearInterval(timer)
            }
        }
    }, [game, paused])

    return (
        <View style={{ flex: 1, alignItems: "center", zIndex: 999, pointerEvents: "none" }}>
            <View
                style={{
                    backgroundColor: "#ffffff80",
                    borderColor: colors.blue,
                    borderWidth: 4,
                    borderRadius: 10,
                    padding: 5,
                    width: 90,
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={{ fontWeight: "bold", color: colors.blue }}>{time}</Text>
            </View>
        </View>
    )
}
