export type Options = {
    uploadUrl: string
}

// 埋点
export abstract class Controller {
    private sections: Record<string, SectionEvent> = {}

    // 初始化函数
    abstract initialize(options: Options): void

    // 埋点
    abstract track<T>(data: T): void

    // 设置全局数据,会随着track记录发送
    abstract setGlobal(): void

    // 设置用户数据,会随着track记录发送
    abstract setAccount(): void

    secstart<T>(key: string, data: T) {

    }

    secend(key: string) {

    }
}

class SectionEvent {
    private name: string
    private data: any

    start(key: string, data: any) {

    }

    end(key: string, data: any) {

    }
}