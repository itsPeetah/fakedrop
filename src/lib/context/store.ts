export const GLOBAL_STORE: Map<string, any> = new Map()

export function getGlobal<T>(key: string, defaultValue?: T) {
    if (GLOBAL_STORE.has(key)) return GLOBAL_STORE.get(key) as T
    return defaultValue
}

export function setGlobal(key: string, value: any) {
    GLOBAL_STORE.set(key, value)
}