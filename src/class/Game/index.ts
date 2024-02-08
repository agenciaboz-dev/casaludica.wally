import { ImageSourcePropType } from "react-native"
import { Object } from "../Object"
import { GameForm, ThemeOption } from "./GameForm"
import images from "../../screens/Gallery/images"

export class Game {
    theme: ThemeOption
    difficulty: number
    background: ImageSourcePropType
    
    objects: Object[] = []
    images = images.game[1]

    constructor(data: GameForm) {
        this.theme = data.theme
        this.difficulty = data.difficulty || 1

        this.background = images.game[this.theme].backgrounds[1]
    }

    addObject() {
        const object = new Object(this.images.objects[1])
        this.objects.push(object)
    }
}