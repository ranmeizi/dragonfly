import { Controller } from './abstruct'

type TrackAdaptor = () => Controller

class Agent {
    controller?: Controller

    use(adaptor: TrackAdaptor) {
        this.controller = adaptor()
    }

    initialize = applyFn('initialize')
    track = applyFn('track')
    setGlobal = applyFn('setGlobal')
    setAccount = applyFn('setAccount')
    secstart = applyFn('secstart')
    secend = applyFn('secend')
}

function applyFn(name) {
    return function () {
        if (!this.controller || typeof this.controller[name] !== 'function') {
            return false
        }
        this.controller[name].apply(this.controller, arguments)
    }
}

export default new Agent()

