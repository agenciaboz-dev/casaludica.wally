import { Alert, Dimensions, ImageSourcePropType } from "react-native"
import { GameObject } from "../Element/Element"
import { GameForm, Stage, ThemeOption } from "./GameForm"
import images from "../../images"
import { Goal } from "../Goal/Goal"
import { Settings } from "../../contexts/settingsContext"
import { AVPlaybackSource, Audio } from "expo-av"
import { sounds } from "../../sounds"

const { width, height } = Dimensions.get("window")

export class Game {
    theme: ThemeOption
    background: ImageSourcePropType

    objects: (GameObject | Goal)[] = []
    images = images.game[1]
    goals: ImageSourcePropType[] = []

    filter?: { hex: string; opacity: number }

    settings: Settings

    reRender: () => void

    stage: Stage = 1
    misclicks = 0
    time = 0
    found = 0
    loading = true

    gang: {
        id: number
        x: number
        y: number
        width: number
        height: number
        images: { found: ImageSourcePropType; searching: ImageSourcePropType }
    }[] = []

    constructor(data: GameForm, reRender: () => void) {
        this.reRender = reRender
        this.theme = data.theme
        this.settings = data.settings
        this.stage = data.stage || 1

        this.background = this.images.backgrounds[this.stage]
        if (this.stage != 1) {
            this.filter = this.stage == 2 ? { hex: "#ff5b00", opacity: 0.32 } : { hex: "#0d2284", opacity: 0.42 }
        }

        this.gang.push(this.addGang())
        this.gang.push(this.addGang())
        // console.log(this.gang)

        for (let index = 0; index < data.settings.goals; index++) {
            this.addGoal()
        }

        for (let index = 0; index < data.settings.objects; index++) {
            this.addObject()
        }

        for (let index = 0; index < data.settings.scenery; index++) {
            this.addObject(true)
        }

        this.loading = false
        // console.log(`elements: ${data.settings.objects}`)
    }

    private getRandomValidImage(images: any, goal?: boolean) {
        const max_index = Object.entries(images).reduce((maximum, [key]) => (Number(key) > maximum ? Number(key) : maximum), 1)

        const random_index = Math.ceil(Math.random() * max_index)
        let random_image = images[random_index]

        if (goal && this.goals.includes(random_image)) {
            random_image = this.getRandomValidImage(images, true)
        }

        return random_image
    }

    private addObject(scenery?: boolean) {
        const image = this.getRandomValidImage(scenery ? this.images.scenery : this.images.props)
        const { x, y, z } = this.generatePos(this.settings.offsetBottom, this.settings.offsetTop, image.width, image.height)
        const object = new GameObject(
            { x, y, z, image: image.url, width: image.width, height: image.height, settings: this.settings, scenery },
            this.reRender
        )
        this.objects.push(object)
    }

    private addGoal() {
        const image = this.getRandomValidImage(this.images.objectives, true)
        const { x, y, z } = this.generatePos(this.settings.offsetBottom, this.settings.offsetTop, image.width, image.height)
        const object = new Goal({ x, y, z, image: image.url, width: image.width, height: image.height, settings: this.settings }, this.reRender)
        this.goals.push(image)
        this.objects.push(object)
    }

    private addGang() {
        const max_index = Object.entries(images.turma).reduce((maximum, [key]) => (Number(key) > maximum ? Number(key) : maximum), 1)

        let random_index = Math.ceil(Math.random() * max_index)
        // @ts-ignore
        let random_image = images.turma[random_index]

        let random_gangster = random_image as {
            searching_url: ImageSourcePropType
            found_url: ImageSourcePropType
            width: number
            height: number
        }

        let valid_index = false

        while (!valid_index) {
            if (this.gang.find((item) => item.id == random_index)) {
                random_index = Math.ceil(Math.random() * max_index)
            } else {
                valid_index = true
                //@ts-ignore
                random_gangster = images.turma[random_index]
            }
        }

        const { x, y } = this.generatePos(this.settings.offsetBottom, this.settings.offsetTop, random_gangster.width, random_gangster.height)
        const gangster: {
            x: number
            y: number
            width: number
            height: number
            id: number
            images: { found: ImageSourcePropType; searching: ImageSourcePropType }
        } = {
            id: random_index,
            x,
            y,
            images: { found: random_gangster.found_url, searching: random_gangster.searching_url },
            height: random_gangster.height,
            width: random_gangster.width,
        }

        return gangster
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

    async playSound(source: AVPlaybackSource) {
        const { sound } = await Audio.Sound.createAsync(source)
        await sound.playAsync()
        setTimeout(() => {
            sound.unloadAsync()
        }, 400)
    }

    onGoal(object: Goal) {
        if (!object.found) {
            object.onGoal()
            this.playSound(sounds.sfx.found)
            this.found += 1
        }
    }

    onObjectPress(object: GameObject | Goal) {
        if (object instanceof Goal) {
            this.onGoal(object)
            return
        }

        const overlapping = this.getObjectsOverlapping(object)
        const overlapped_goal = overlapping.find((item) => item instanceof Goal)
        if (overlapped_goal instanceof Goal && !overlapped_goal.found && overlapped_goal.elevation < object.elevation) {
            this.onGoal(overlapped_goal)
            return
        }

        this.misclicks += 1
        this.playSound(sounds.sfx.missclick)
        this.reRender()
    }

    generatePos(offsetBottom: number, offsetTop: number, object_width: number, object_height: number) {
        let validPosition = false
        let x = 0
        let y = 0

        while (!validPosition) {
            x = Math.random() * (width - object_width)
            y = Math.random() * (height - offsetTop * 2.3) + offsetBottom
            // if (y > height - offsetTop) {
            //     y = this.generateY(offsetBottom, offsetTop, object_height)
            // }

            validPosition = !this.gang.some((gangster) => {
                const itemRight = gangster.x + gangster.width
                const itemBottom = gangster.y + gangster.height
                const objectRight = x + object_width
                const objectBottom = y + object_height

                const overlapsX = gangster.x < objectRight && itemRight > x
                const overlapsY = gangster.y < objectBottom && itemBottom > y

                return overlapsX && overlapsY // Only return true if it overlaps in both x and y
            })
        }

        const z = Math.floor(height - y)
        return { x, y, z }
    }
}
