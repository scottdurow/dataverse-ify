module.exports = async function (globalConfig, projectConfig) {
  const config = require("config");
  const configFile = config.get("nodewebapi");
  if (configFile.proxy && configFile.proxy.useproxy) {
    console.debug(
      "Adding fiddler trusted root certificate: Note: maxWorkers must be set to 1 in jest.config.js to allow Fiddler debugging",
    );
    // Note - maxWorkers must be set to 1 to allow custom root certs
    // Enable Fiddler - trust the fiddler root self-cert
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const sysWideCas = require("syswide-cas");
    sysWideCas.addCAs(".\\config\\FiddlerRoot.crt");

    process.env.https_proxy = configFile.proxy.httpProxy;
    process.env.http_proxy = configFile.proxy.httpProxy;
  }
};
