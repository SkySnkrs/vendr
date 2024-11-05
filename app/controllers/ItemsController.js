import { AppState } from "../AppState.js"

export class ItemsController {
    constructor() {
        this.drawItems()
    }

    drawItems() {
        const Items = AppState.items
        let itemCards = ''

        Items.forEach(item => itemCards += item.displayCard)
        const itemDisplay = document.getElementById('item-cards')
        itemDisplay.innerHTML = itemCards
    }
}