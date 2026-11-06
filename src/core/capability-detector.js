export async function detectCapabilities() {
    const isBrowser =
        typeof window !== "undefined" &&
        typeof document !== "undefined";

    const capabilities = {
        environment: {
            isBrowser,
        },

        runtimes: {
            chrome: {
                available: false,

                apis: {
                    languageModel: {
                        supported: false,
                        availability: "unavailable",
                    },
                },
            },
        },
    };

    // NativeMind currently supports browser execution only.
    if (!isBrowser) {
        return capabilities;
    }

    // Check whether the Prompt API exists.
    if (typeof globalThis.LanguageModel === "undefined") {
        return capabilities;
    }

    capabilities.runtimes.chrome.apis.languageModel.supported = true;

    try {
        const availability =
            await globalThis.LanguageModel.availability();

        capabilities.runtimes.chrome.apis.languageModel.availability =
            availability;

        capabilities.runtimes.chrome.available =
            availability !== "unavailable";
    } catch (error) {
        capabilities.runtimes.chrome.apis.languageModel.availability =
            "unknown";
    }

    return capabilities;
}
