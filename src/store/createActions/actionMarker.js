export const actionMarker = (type, payload, cb) => {
    return {
        type,
        payload,
        cb
    }
}