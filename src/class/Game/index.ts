import { ImageSourcePropType } from "react-native"
import { GameObject } from "../Object"
import { GameForm, ThemeOption } from "./GameForm"
import images from "../../images"

export class Game {
    theme: ThemeOption
    difficulty: number
    background: ImageSourcePropType

    objects: GameObject[] = []
    images = images.game[1]

    constructor(data: GameForm) {
        this.theme = data.theme
        this.difficulty = data.difficulty || 1

        this.background = images.game[this.theme].backgrounds[1]
    }

    addObject() {
        const object = new GameObject(this.images.objects[1])
        this.objects.push(object)
    }
}
