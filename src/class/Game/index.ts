import { Alert, ImageSourcePropType } from "react-native"
import { GameObject } from "../Object"
import { GameForm, ThemeOption } from "./GameForm"
import images from "../../images"

export class Game {
    theme: ThemeOption
    difficulty: number
    background: ImageSourcePropType

    objects: GameObject[] = []
    images = images.game[1]
    goals: ImageSourcePropType[] = []

    max_objects_index: number

    constructor(data: GameForm) {
        this.theme = data.theme
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
        const object = new GameObject({ image: this.getRandomValidObjectImage() })
        this.objects.push(object)
    }

    private addGoal() {
        const image = this.getRandomValidObjectImage()
        const object = new GameObject({ image, goal: true })
        this.goals.push(image)
        this.objects.push(object)
    }

    getObjectsOverlapping(object: GameObject) {
        const overlapping = this.objects.filter((item) => {
            // Skip comparison with itself
            if (item === object) return false

            // Calculate the right and bottom edges of both objects
            const itemRight = item.x + item.width
            const itemBottom = item.y + item.height
            const objectRight = object.x + object.width
            const objectBottom = object.y + object.height

            // Check if there is an overlap on the x-axis
            const overlapsX = item.x < objectRight && itemRight > object.x

            // Check if there is an overlap on the y-axis
            const overlapsY = item.y < objectBottom && itemBottom > object.y

            // If both x and y overlap, we have an overlapping situation
            return overlapsX && overlapsY
        })

        return overlapping
    }

    onGoal(object: GameObject) {
        Alert.alert(`achou`)
        console.log("achou")
    }

    onObjectPress(object: GameObject) {
        if (object.goal) this.onGoal(object)

        const overlapping = this.getObjectsOverlapping(object)
        const overlapped_goal = overlapping.find((item) => item.goal)
        if (overlapped_goal) this.onGoal(overlapped_goal)
    }
}
