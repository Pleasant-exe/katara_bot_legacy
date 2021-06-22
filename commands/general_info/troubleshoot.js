const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "troubleshoot",
    category: "general_info",
    description: "rediects user to check shipping info",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Here are a few links that might help you troubleshoot. \n\nhttps://wooting.helpscoutdocs.com/category/14-wooting-keyboard`);
    }
}
