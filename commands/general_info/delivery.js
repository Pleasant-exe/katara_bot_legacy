const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "delivery",
    aliases: ["shipping"],
    category: "general_info",
    description: "rediects user to check shipping info",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Please check <#517576648242233345> for regular updates`);
    }
}
