const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "analognotworking",
    aliases: ["analog"],
    category: "general_info",
    description: "Analog not working",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Hey there! it has been brought to my attention you need a link for Analog not working, here you go! :) https://wooting.helpscoutdocs.com/article/38-analog-input-is-not-working`);
    }
}
