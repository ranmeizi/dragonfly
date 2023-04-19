/**
 * paparazi
 * 
 * 默认全开，传{}全关，自选开启
 */
import UA from "ua-device";

type Switch = {
    ua: boolean
}

export async function all(s: Switch) {
    const info = {}

    return info
}

/**
 * 获取浏览器
 */
export function ua() {
    return new UA(window.navigator.userAgent)
}

/**
 * 获取屏幕
 */
export function screen() {
    const {
        innerWidth,
        innerHeight,
        outerWidth,
        outerHeight,
    } = window

    const {
        width: screenWidth,
        height: screenHeight
    } = window.screen
    return {
        innerWidth,
        innerHeight,
        outerWidth,
        outerHeight,
        screenWidth,
        screenHeight
    }
}

/**
 * 获取语言
 */
export function lang() {
    return {
        language: window?.navigator?.language,
        languages: window?.navigator?.languages
    }
}