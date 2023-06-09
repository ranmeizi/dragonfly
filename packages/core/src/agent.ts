import { Controller } from './abstruct'
import { Duration } from './duration'

type TrackAdaptor = () => Controller

class Agent {
    controller?: Controller

    use(impl: TrackAdaptor) {
        this.controller = impl()
    }

    initialize = applyFn('initialize')
    track = applyFn('track')
    setGlobal = applyFn('setGlobal')
    setAccount = applyFn('setAccount')

    duration = new Duration({
        track: this.track
    })
}

function applyFn(name: keyof Controller) {
    return function (this: Agent) {
        if (!this.controller || typeof this.controller[name] !== 'function') {
            return false
        }
        this.controller[name].apply(this.controller, arguments as any)
    }
}

export default new Agent()

