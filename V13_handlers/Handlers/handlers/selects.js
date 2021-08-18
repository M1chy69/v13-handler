const glob = require("glob");
const path = require("path");

module.exports = async (client) => {
    const selectEventFiles = glob.sync("./selects/**/**/*.js");
    for (const file of selectEventFiles) {
        const selectEvent = require(path.resolve(file));
        client.selects.set(selectEvent.name, selectEvent);
    }
}