"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import "elastic-apm-node/start";
const secrets_1 = require("./util/secrets");
const elastic_apm_node_1 = __importDefault(require("elastic-apm-node"));
elastic_apm_node_1.default.start({
    // Add your APM configuration options here.
    // For example:
    secretToken: secrets_1.SECRET_TOKEN,
    serviceName: "typescript-app",
    serverUrl: "http://localhost:8200",
});
const errorhandler_1 = __importDefault(require("errorhandler"));
const app_1 = __importDefault(require("./app"));
// Import the APM module using CommonJS-style require.
/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === "development") {
    app_1.default.use(errorhandler_1.default());
}
/**
 * Start Express server.
 */
const server = app_1.default.listen(app_1.default.get("port"), () => {
    console.log("  App is running at http://localhost:%d in %s mode", app_1.default.get("port"), app_1.default.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;
//# sourceMappingURL=server.js.map