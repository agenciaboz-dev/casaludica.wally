import React from "react"
import { Modal, Pressable, Text, View } from "react-native"

interface ScoreModalProps {
    open: boolean
    onClose: () => void
}

export const ScoreModal: React.FC<ScoreModalProps> = ({ open, onClose }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={open} onRequestClose={onClose}>
            <View style={{}}>
                <Text style={{}}>Hello World!</Text>
                <Pressable style={{}} onPress={() => onClose()}>
                    <Text style={{}}>Hide Modal</Text>
                </Pressable>
            </View>
        </Modal>
    )
}
