const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "warranty",
    aliases: ["warrenty"],
    category: "general_info",
    description: "Wooting warranty",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Your Wooting has a 2 year Warrenty inside and outside of the EU, read more here: https://wooting.io/warrantyreturn`);
    }
}
