const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "cookie",
    aliases: ["quinn"],
    category: "general_info",
    description: "One day....",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`No cookies for @195174881464156161`);
    }
}
