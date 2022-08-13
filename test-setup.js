module.exports = async function (globalConfig, projectConfig) {
  require("dotenv").config();
  // If running in CI mode, never use the proxy - otherwise, control using the DATAVERSEIFY_USEPROXY environment variable set in the .env file
  /*
  DATAVERSEIFY_USEPROXY=1
  DATAVERSEIFY_PROXY=https://127.0.0.1:8888
  */
  if (!globalConfig.ci && process.env["DATAVERSEIFY_USEPROXY"] === "1") {
    const httpProxy = process.env["DATAVERSEIFY_PROXY"];
    console.debug("Adding proxy:" + httpProxy);
    if (!httpProxy) {
      throw "To use a proxy, please set the environment variable DATAVERSEIFY_PROXY (E.g. https://127.0.0.1:8888)";
    }
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    process.env.https_proxy = httpProxy.replace("https:", "http:");
    process.env.http_proxy = httpProxy.replace("http:", "https:");
  }
};
