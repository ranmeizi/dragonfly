import { describe, expect, test, jest } from '@jest/globals';
import { Duration } from '../src/duration'

async function sleep(timeout: number) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    })
}

describe('duration test', () => {

    test("existed group name", () => {
        const duration = new Duration({ track: () => { } })

        const group = "test"

        duration.createGroup(group)


        expect(() => {
            duration.createGroup(group)
        }).toThrow()
    })

    // track调用测试
    test("track", async () => {

        const data = { key: 'mouseevent', ppp: 1 }

        const timeout = 1000

        const track = jest.fn((_data: any) => {
            // duretion 是number值嘛
            expect(typeof _data.duration).toBe('number')
            // data是否正确
            expect(_data).toMatchObject(data)
            // duration 误差
            expect(_data.duration).toBeGreaterThanOrEqual(timeout - 15)
            expect(_data.duration).toBeLessThanOrEqual(timeout + 15)
        })

        const duration = new Duration({ track: track })

        duration.createGroup("page")

        duration.groups.page.start(data)

        await sleep(timeout)

        duration.groups.page.end(data)


        // 有没有被调用
        expect(track).toBeCalled()
    })

    // 同样groupkey测试
    test("same key start", async () => {

        const data1 = { key: 'page1event', ppp: 1 }

        const data2 = { key: 'page2event', zzz: 2 }

        const timeout = 1000

        const track = jest.fn((_data: any) => {
            // duretion 是number值嘛
            expect(typeof _data.duration).toBe('number')
            // data是否正确
            expect(_data).toMatchObject(data1)
            // duration 误差
            expect(_data.duration).toBeGreaterThanOrEqual(timeout - 15)
            expect(_data.duration).toBeLessThanOrEqual(timeout + 15)
        })

        const duration = new Duration({ track: track })

        duration.createGroup("page")

        duration.groups.page.start(data1)

        await sleep(timeout)

        duration.groups.page.start(data2)


        // 有没有被调用
        expect(track).toBeCalled()
    })

    // end data测试
    test("end data test", () => {

        const data1 = { key: 'page1event', ppp: 1 }

        const data2 = { key: 'page1event', ppp: 2 }

        const track = jest.fn((_data: any) => {
            // data是否正确
            expect(_data).toMatchObject(data2)
        })

        const duration = new Duration({ track: track })

        duration.createGroup("page")

        duration.groups.page.start(data1)

        duration.groups.page.end(data2)
    })
})
