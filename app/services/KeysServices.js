import { AppState } from "../AppState.js";

class KeysServices {

    keyCount() {
        AppState.keyCount++
    }


}

export const keysServices = new KeysServices()