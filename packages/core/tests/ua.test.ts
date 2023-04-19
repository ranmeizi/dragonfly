import { describe, expect, test, jest } from '@jest/globals';
import { ua } from '../src/paparazzi'


(global as any).window = {}

// 不是为了测试正确，只是运行一下看看结果而已

describe('switch test', () => {
    // Lenovo L79031
    test("", () => {
        const u = 'Mozilla/5.0 (Linux; Android 10; Lenovo L79031 Build/QKQ1.200510.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.149 Mobile Safari/537.36 AgentWeb/5.0.0  UCBrowser/11.6.4.950 agentweb/3.1.0';
        (window.navigator as any) = {
            userAgent: u
        }
        const res = ua()
        console.log(res)
        expect(res.device.model).toBe("L79031")
    })
})
