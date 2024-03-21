import React, { useContext } from "react"
import { View, Text, ViewStyle } from "react-native"
import { colors } from "../../style/colors"
import { textStyle } from "../../style/textStyle"
import ResultsContext from "../../contexts/resultsContext"
import { Stage } from "../../class/Game/GameForm"

interface StageResultProps {
    scene: string
    stage: Stage
}

export const StageResult: React.FC<StageResultProps> = ({ scene, stage }) => {
    const { results, setResults } = useContext(ResultsContext)

    const resultsContainerStyle: ViewStyle = {
        borderWidth: 2,
        borderColor: colors.blue,
        backgroundColor: colors.white,
        borderStyle: "solid",
        borderRadius: 50,
        paddingVertical: 10,
        width: 180,
    }

    return (
        <View style={{ gap: 10 }}>
            <Text style={{ ...textStyle, color: colors.blue, fontSize: 25 }}>Cenário: {scene}</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <View style={resultsContainerStyle}>
                    <Text style={{ ...textStyle, color: colors.blue, fontSize: 15 }}>Tempo: {results[stage].elapsed_time}</Text>
                </View>
                <View style={resultsContainerStyle}>
                    <Text style={{ ...textStyle, color: colors.blue, fontSize: 15 }}>Erros: {results[stage].errors}</Text>
                </View>
            </View>
        </View>
    )
}
