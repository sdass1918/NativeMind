import { DEFAULT_CONFIG } from "../constants/defaults.js";
import { NativeMindError } from "../utils/errors.js";
import { detectCapabilities } from "./capability-detector.js";

export class NativeMind {
    constructor(config = {}) {
        this.config = {
            ...DEFAULT_CONFIG,
            ...config,
            privacy: {
                ...DEFAULT_CONFIG.privacy,
                ...config.privacy
            }
        }
        this.status = "uninitialized";
        this.capabilities = null;
    }
    async initialize() {
        if (this.status === "ready") return;
        if (this.status === "destroyed") {
            throw new NativeMindError("Cannot initialize a destroyed NativeMind instance.", "INSTANCE_DESTROYED");
        }
        this.status = "initializing";

        try {
            this.capabilities = await detectCapabilities();

            this.status = "ready";
        } catch (error) {
            this.status = "error";
            throw error;
        }
    }

    async destroy() {
        if (this.status === "destroyed") {
            return;
        }

        // Runtime cleanup will be implemented here.

        this.status = "destroyed";
    }
}
