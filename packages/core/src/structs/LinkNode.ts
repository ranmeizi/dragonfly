/**
 * （实验）
 * 这里 linknode 用来留存页面访问记录，这个要求非常苛刻，请务必设计好页面名称
 * 存储一个当前LinkNode的引用，并使用prev
 * 
 * 这里有4种操作，但不只限于浏览器history，
 * 比如
 * 1. 打开弹窗再产品来看也可以算作一种push，关闭弹窗可以看作一种pop。
 * 2. 设想一下，我们不用router，使用state更新画面，那么如果可以返回的切换就算一种push，否则算作replace
 * 提供LinkNode和默认方法修改关系，但也可以自己操作节点
 * ## push
 * 创建新node prev指向之curr，更新curr
 * ## pop
 * curr指向curr.prev
 * ## replace
 * 创建新node,prev指向curr.prev,更新curr
 * ## back(n) 返回前n页,这个比较少见,也不知道对不对,慎用把
 * curr指向执行n次的curr.prev
 * 
 * 然后可以使用curr来获取页面关系
 */
export class LinkNode {
    val: string // 值
    prev: LinkNode | null = null

    constructor(val: string) {
        this.val = val
    }
}
/** 修改函数 */

export function push(val: string): boolean {
    const node = new LinkNode(val)
    node.prev = curr
    curr = node

    return true
}

export function pop(): boolean {
    if (curr?.prev) {
        curr = curr.prev
        return true
    }

    return false
}

export function replace(val:string): boolean {
    const node = new LinkNode(val)

    if (curr) {
        node.prev = curr
        curr = node
        return true
    }

    return false
}

export function back(n: number): boolean {
    if (!curr) {
        return false
    }
    if (n === 0) {
        return true
    }

    const prev = curr?.prev

    if (!prev) {
        return true
    } else {
        // 执行修改
        curr = curr.prev
        return back(n - 1)
    }
}

export let curr: LinkNode | null = null

/** history 监听 */