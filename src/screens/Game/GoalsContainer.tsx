import React from "react"
import { NavigationProp } from "@react-navigation/native"
import { Image, ImageBackground, View } from "react-native"
import { Game } from "../../class/Game"
import { Goal } from "../../class/Goal"
import images from "../../images"
import { GoalComponent } from "./GoalComponent"

interface GoalsContainerProps {
    navigation: NavigationProp<any, any>
    game: Game
}

export const GoalsContainer: React.FC<GoalsContainerProps> = ({ navigation, game }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: 100,
                pointerEvents: "none",
                padding: 20,
                zIndex: 999,
                elevation: 999,
            }}
        >
            <View
                style={{
                    gap: 20,
                    flexDirection: "row",
                    backgroundColor: "#c8c8c860",
                    borderColor: "yellow",
                    borderWidth: 2,
                    borderRadius: 50,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    padding: 10,
                    overflow: "scroll",
                }}
            >
                {game.objects
                    .filter((object) => object instanceof Goal)
                    .map((object, index) => (
                        <GoalComponent key={index} navigation={navigation} object={object as Goal} />
                    ))}
            </View>
        </View>
    )
}
