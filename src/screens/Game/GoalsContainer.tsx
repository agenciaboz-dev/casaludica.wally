import React from "react"
import { NavigationProp } from "@react-navigation/native"
import { Dimensions, FlatList, Image, ImageBackground, Text, TextStyle, View } from "react-native"
import { Game } from "../../class/Game/Game"
import { Goal } from "../../class/Goal/Goal"
import images from "../../images"
import { GoalComponent } from "./GoalComponent"
import { colors } from "../../style/colors"

interface GoalsContainerProps {
    game: Game
}

export const GoalsContainer: React.FC<GoalsContainerProps> = ({ game }) => {
    const textStyle: TextStyle = { fontFamily: "KGSecondChancesSolid", fontSize: 15, color: colors.white, textAlign: "center" }
    const { width } = Dimensions.get("window")
    return (
        <View
            style={{
                flexDirection: "row",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: game.settings.offsetBottom * 0.7,
                // pointerEvents: "none",
                padding: 10,
                zIndex: 999,
                elevation: 999,
            }}
        >
            <View style={{ position: "absolute", backgroundColor: colors.blue, padding: 10, borderRadius: 50, left: 150, right: 150, zIndex: 2 }}>
                <Text style={textStyle}>Objetivos</Text>
            </View>
            <View
                style={{
                    // gap: 5,
                    flexDirection: "row",
                    backgroundColor: "#ffffff80",
                    borderColor: colors.blue,
                    borderWidth: 4,
                    borderRadius: 25,
                    width: width - 20,
                    height: "100%",
                    alignItems: "flex-end",
                    overflow: "hidden",
                    justifyContent: "space-around",
                    padding: 10,
                }}
            >
                {/* <FlatList
                    data={game.objects.filter((object) => object instanceof Goal)}
                    renderItem={({ item, index }) => <GoalComponent key={index} object={item as Goal} />}
                    contentContainerStyle={{ gap: 7, alignItems: "center", padding: 10 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                /> */}
                {game.objects
                    .filter((object) => object instanceof Goal)
                    .map((item, index) => (
                        <GoalComponent key={index} object={item as Goal} />
                    ))}
            </View>
        </View>
    )
}
