// import "elastic-apm-node/start";
import { SECRET_TOKEN } from "./util/secrets";
import apm from "elastic-apm-node";

apm.start({
    // Add your APM configuration options here.
    // For example:
    secretToken: SECRET_TOKEN,
    serviceName: "typescript-app",
    serverUrl: "http://localhost:8200",
});

import errorHandler from "errorhandler";
import app from "./app";
// Import the APM module using CommonJS-style require.

/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}


/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;
