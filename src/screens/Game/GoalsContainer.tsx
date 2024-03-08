import React from "react"
import { NavigationProp } from "@react-navigation/native"
import { Dimensions, FlatList, Image, ImageBackground, View } from "react-native"
import { Game } from "../../class/Game/Game"
import { Goal } from "../../class/Goal/Goal"
import images from "../../images"
import { GoalComponent } from "./GoalComponent"

interface GoalsContainerProps {
    game: Game
}

export const GoalsContainer: React.FC<GoalsContainerProps> = ({ game }) => {
    const { width } = Dimensions.get("window")
    return (
        <View
            style={{
                flexDirection: "row",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: game.settings.offsetBottom * 0.8,
                // pointerEvents: "none",
                padding: 20,
                zIndex: 999,
                elevation: 999,
            }}
        >
            <View
                style={{
                    gap: 0,
                    flexDirection: "row",
                    backgroundColor: "#c8c8c860",
                    borderColor: "yellow",
                    borderWidth: 2,
                    borderRadius: 1000,
                    width: width - 40,
                    height: "100%",
                    alignItems: "center",
                    overflow: "scroll",
                }}
            >
                <FlatList
                    data={game.objects.filter((object) => object instanceof Goal)}
                    renderItem={({ item, index }) => <GoalComponent key={index} object={item as Goal} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}
