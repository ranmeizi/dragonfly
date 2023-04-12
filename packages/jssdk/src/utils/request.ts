export function ajax(url: string, data: string) {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.send(data)
}

export function beacon(url: string, data: string) {
    navigator.sendBeacon(url, data);
}