/**
 * paparazi
 * 
 * 默认全开，传{}全关，自选开启
 */
import UA from "ua-device";

type Switch = {
    ua: boolean
}

export async function paparazzi(s:Switch) {
    const info = {}

    return info
}


// 获取位置

// 获取设备型号
export function ua() {
    return new UA(window.navigator.userAgent)
}