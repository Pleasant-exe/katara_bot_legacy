const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "switchchoice",
    category: "general_info",
    description: "Switch choices",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Choosing the perfect switch is important and a hard choice! To help with your choice check out our guide here.  \n\nhttps://wooting.helpscoutdocs.com/article/52-what-switch-is-right-for-me`);
    }
}
