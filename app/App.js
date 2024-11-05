import { AppState } from "./AppState.js"
import { ItemsController } from "./controllers/ItemsController.js"
import { KeysController } from "./controllers/KeysController.js"

class App {

  KeysController = new KeysController()
  ItemsController = new ItemsController()
  AppState = AppState
}

const app = new App()
// @ts-ignore
window.app = app
