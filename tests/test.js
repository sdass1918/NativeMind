import { createNativeMind } from "../src/index.js";

const ai = createNativeMind();

console.log("Initial status: ", ai.status);

await ai.initialize();

console.log("After initialization:", ai.status);

await ai.destroy();

console.log("After destruction:", ai.status);
