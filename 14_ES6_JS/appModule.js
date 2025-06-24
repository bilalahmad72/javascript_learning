// Module Import File

// default import
import multiply from "./mathOperationsModule.js";

/// named imports
import { add, subtract } from "./mathOperationsModule.js";

console.log("Using default import for multiply:", multiply(2, 3));
console.log("Using named import for add:", add(5, 3));
