let isBind = false

type ErrorInfo = {
    // 文件名
    filename: string
    // 行号
    lineno: number
    // 列号
    colno: number
    // message
    message: string
    // 调用栈
    stack: string
}

type Listener = (info: ErrorInfo) => void

export function errorListener(fn: Listener) {
    if (isBind) {
        return
    }
    if (!(typeof fn === 'function')) {
        return
    }

    window.addEventListener('error', function (evt: ErrorEvent) {
        const {
            filename,
            lineno,
            colno,
            message,
            error: { stack }
        } = evt

        fn.call(null, {
            filename,
            lineno,
            colno,
            message,
            stack
        })
    })

    isBind = true
}