const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "master",
    aliases: ["senpai"],
    category: "general_info",
    description: "How to restore a Wooting",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`MrPleasant_exe is my master OwO`);
    }
}
