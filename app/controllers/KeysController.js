import { AppState } from "../AppState.js"
import { keysServices } from "../services/KeysServices.js"

export class KeysController {

    constructor() {
        this.drawKeys()
        AppState.on('keyCount', this.drawKeys)
    }

    addKeys() {
        keysServices.keyCount()
    }


    drawKeys() {
        const keysElem = document.getElementById('key-count')
        keysElem.innerText = ''
        keysElem.innerText += AppState.keyCount
    }
}