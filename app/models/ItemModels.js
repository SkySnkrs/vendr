export class ItemModels {
    constructor(data) {
        this.name = data.name
        this.rarity = data.rarity
        this.price = data.price
        this.odds = data.odds
        this.image = data.image
    }

    get displayCard() {
        return `
        <div class="p-3 bg-theme-color card g-2 col-md-3">
            <div class="card theme-card">
            <div class="text-center">
                <h3 class="p-2 mt-2">${this.name}</h3>
                <h5>ITEM RARITY</h5>
                <hr>
                <div class=" p-2">
                <img class="card-image" src="${this.image}" alt="">
                </div>
                <hr>
                <div class="p-2">
                <p>$${this.price}</p>
                <p>${this.odds}</p>
                </div>
            </div>
            </div>
        </div>`
    }
}