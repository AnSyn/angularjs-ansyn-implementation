const appConfig = require('../app/assets/config/app.config.json');
const fs = require('fs');
if (appConfig) {
    appConfig.coreConfig.noInitialSearch = true;
    fs.writeFileSync("./app/assets/config/app.config.json", JSON.stringify(appConfig), 'utf8');
    console.log("🤩🤩🤩");
} else {
    console.warn('no config file!!! 🤨');
}