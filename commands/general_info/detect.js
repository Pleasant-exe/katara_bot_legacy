const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "detect",
    category: "general_info",
    description: "Wootility won't detect the Wooting",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Hey there! Here is a guide to diagnose Wootility not detecting your keyboard.\n\nhttps://wooting.helpscoutdocs.com/article/70-issue-wootility-doesnt-detect-my-wooting-keyboard`);
    }
}
