import React, { useEffect } from 'react'
import { NavigationProp } from '@react-navigation/native'
import {ImageBackground, View} from 'react-native'
import images from '../Gallery/images'
import { Game } from '../../class/Game'

interface GamePageProps {
    navigation: NavigationProp<any, any>
    
}

export const GamePage: React.FC<GamePageProps> = ({ navigation }) => {
    const game = new Game({ theme: 1 })
    
    useEffect(() => {

    }, [])
    
    return (
        <ImageBackground style={{flex: 1}} source={game.background}>
            
        </ImageBackground>
    )
}