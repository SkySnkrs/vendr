import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  keyCount = 0

  items = []
}

export const AppState = createObservableProxy(new ObservableAppState())