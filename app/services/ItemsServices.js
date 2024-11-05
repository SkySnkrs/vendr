import { AppState } from "../AppState.js";

class ItemsServices {

    getRandomSkin(skins) {
        const randomRoll = Math.random() * 100;
        console.log(`Random roll: ${randomRoll.toFixed(2)}`);

        let availableSkins;

        if (randomRoll >= 99) {
            availableSkins = skins.filter(skin => skin.rarity === "Covert");
        } else if (randomRoll >= 94) {
            availableSkins = skins.filter(skin => skin.rarity === "Classified");
        } else if (randomRoll >= 84) {
            availableSkins = skins.filter(skin => skin.rarity === "Restricted");
        } else if (randomRoll >= 67) {
            availableSkins = skins.filter(skin => skin.rarity === "Mil-Spec");
        } else {
            availableSkins = skins.filter(skin => skin.rarity === "Industrial");
        }

        const selectedSkin = availableSkins[Math.floor(Math.random() * availableSkins.length)];
        return selectedSkin;
    }


}

export const itemServices = new ItemsServices()