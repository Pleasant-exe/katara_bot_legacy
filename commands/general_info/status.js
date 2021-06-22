const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "status",
    category: "general_info",
    description: "Wooting warranty",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Operational and ready to fire`);
    }
}
