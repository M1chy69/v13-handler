const glob = require("glob");
const path = require("path");

module.exports = async (client) => {
    const commandsFiles = glob.sync("./commands/**/**/*.js");
    for (const file of commandsFiles) {
        const command = require(path.resolve(file));
        client.commands.set(command.name, command);
        const data = {
            name: command.name,
            description: command.description,
            options: command.options ? command.options : []
        }
        await client.application?.commands.create(data);
    }
}