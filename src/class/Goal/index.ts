import { GameObject } from "../Object"
import { ObjectForm } from "../Object/ObjectForm"

export class Goal extends GameObject {
    found = false

    constructor(data: ObjectForm, reRender: () => void) {
        super(data, reRender)
    }

    onGoal() {
        this.found = true
        this.reRender()
    }
}
