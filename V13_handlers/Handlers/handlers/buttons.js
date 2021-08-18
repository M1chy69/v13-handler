const glob = require("glob");
const path = require("path");

module.exports = async (client) => {
    const buttonCommandsFiles = glob.sync("./buttons/**/**/*.js");
    for (const file of buttonCommandsFiles) {
        const buttonCommand = require(path.resolve(file));
        client.buttons.set(buttonCommand.name, buttonCommand);
    }
}