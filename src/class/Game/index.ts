import { Alert, ImageSourcePropType } from "react-native"
import { GameObject } from "../Object"
import { GameForm, ThemeOption } from "./GameForm"
import images from "../../images"
import { Goal } from "../Goal"

export class Game {
    theme: ThemeOption
    difficulty: number
    background: ImageSourcePropType

    objects: (GameObject | Goal)[] = []
    images = images.game[1]
    goals: ImageSourcePropType[] = []

    max_objects_index: number
    offsetY?: number

    reRender: () => void

    constructor(data: GameForm, reRender: () => void) {
        this.reRender = reRender
        this.theme = data.theme
        this.offsetY = data.offsetY
        this.difficulty = data.difficulty || 1

        this.max_objects_index = Object.entries(images.game[this.theme].objects).reduce(
            (maximum, [key]) => (Number(key) > maximum ? Number(key) : maximum),
            1
        )

        this.background = images.game[this.theme].backgrounds[1]

        for (let index = 0; index < this.difficulty * 1; index++) {
            this.addGoal()
        }

        for (let index = 0; index < this.difficulty * 100; index++) {
            this.addObject()
        }
    }

    private getRandomValidObjectImage() {
        const random_index = Math.ceil(Math.random() * this.max_objects_index)
        // @ts-ignore
        let random_image = this.images.objects[random_index]

        if (this.goals.includes(random_image)) {
            random_image = this.getRandomValidObjectImage()
        }

        return random_image
    }

    private addObject() {
        const object = new GameObject({ image: this.getRandomValidObjectImage(), offsetY: this.offsetY }, this.reRender)
        this.objects.push(object)
    }

    private addGoal() {
        const image = this.getRandomValidObjectImage()
        const object = new Goal({ image, offsetY: this.offsetY }, this.reRender)
        this.goals.push(image)
        this.objects.push(object)
    }

    getObjectsOverlapping(object: GameObject) {
        const overlapping = this.objects.filter((item) => {
            if (item === object) return false

            const itemRight = item.x + item.width
            const itemBottom = item.y + item.height
            const objectRight = object.x + object.width
            const objectBottom = object.y + object.height

            const overlapsX = item.x < objectRight && itemRight > object.x

            const overlapsY = item.y < objectBottom && itemBottom > object.y

            return overlapsX && overlapsY
        })

        return overlapping
    }

    onGoal(object: Goal) {
        object.onGoal()
    }

    onObjectPress(object: GameObject | Goal) {
        if (object instanceof Goal) this.onGoal(object)

        const overlapping = this.getObjectsOverlapping(object)
        const overlapped_goal = overlapping.find((item) => item instanceof Goal)
        if (overlapped_goal instanceof Goal) this.onGoal(overlapped_goal)
    }
}
