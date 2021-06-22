const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "restore",
    aliases: ["re"],
    category: "general_info",
    description: "How to restore a Wooting",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Sometimes a quick restore can fix your Wooting, so here is how to restore: https://wooting.helpscoutdocs.com/article/39-how-to-create-a-wooting-keyboard-in-your-language`);
    }
}
