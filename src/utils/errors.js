export class NativeMindError extends Error {
    constructor(message, code) {
        super(message);

        this.name = "NativeMindError"
        this.code = code;
    }
}
