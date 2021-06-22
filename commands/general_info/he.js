const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "he",
    aliases: ["halleffect"],
    category: "general_info",
    description: "Wooting HE Updates",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Test`);
    }
}
