import { useFocusEffect } from "@react-navigation/native"
import { AVPlaybackSource, Audio } from "expo-av"
import React from "react"

interface MusicWithEasingProps {
    source: AVPlaybackSource
    timeout?: number
    remount?: number
}

export const MusicWithEasing: React.FC<MusicWithEasingProps> = ({ source, remount, timeout = 0 }) => {
    const fadeOut = async (sound: Audio.Sound) => {
        let volume = 1
        const interval = setInterval(async () => {
            try {
                if (volume < 0) {
                    await sound?.unloadAsync()
                    clearInterval(interval)
                } else {
                    volume -= 0.1
                    if (volume >= 0) await sound.setVolumeAsync(volume)
                }
            } catch (error) {
                console.log(error)
            }
        }, 100)
    }

    const stopMusic = async (sound: Audio.Sound) => {
        await fadeOut(sound)
    }

    useFocusEffect(
        React.useCallback(() => {
            let sound: Audio.Sound
            setTimeout(() => {
                Audio.Sound.createAsync(source).then(async (result) => {
                    sound = result.sound
                    await sound.setIsLoopingAsync(true)
                    await sound.playAsync()
                })
            }, timeout)

            return async () => {
                if (sound) await stopMusic(sound)
            }
        }, [remount])
    )

    return null
}
