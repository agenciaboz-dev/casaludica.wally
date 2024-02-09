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
        this.difficulty = data.difficulty || 10

        this.background = images.game[this.theme].backgrounds[1]

        for (let index = 0; index < this.difficulty * 10; index++) {
            this.addObject()
        }
        this.addGoal()
    }

    addObject() {
        const object = new GameObject({ image: this.images.objects[1] })
        this.objects.push(object)
    }

    addGoal() {
        const object = new GameObject({ image: this.images.objects[2], goal: true })
        this.objects.push(object)
    }
}
