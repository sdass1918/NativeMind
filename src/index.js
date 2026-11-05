import { NativeMind } from "./core/native-mind.js"

export function createNativeMind(config = {}) {
    return new NativeMind(config);
}

export { NativeMind };
export { NativeMindError } from './utils/errors.js'
