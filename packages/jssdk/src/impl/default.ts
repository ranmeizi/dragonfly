import { Controller, Options } from "../abstruct";

class DefaultImpl extends Controller {

    globalData = {}

    initialize(options: Options) {

    }
    track<T>(data: T) {
        const reqData = {
            ...this.globalData,
            ...data
        }
        
    }
    setGlobal() {

    }
    setAccount() {

    }
}

let instance

export default function adaptor() {
    if (!instance) {
        instance = new DefaultImpl()
    }

    return instance
}

// 收集信息