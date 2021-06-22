const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "keycap",
    aliases: ["cap"],
    category: "general_info",
    description: "Removing keycaps",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Hey there! it has been brought to my attention you need a link for safely removing keycaps, here you go! :)\nhttps://wooting.helpscoutdocs.com/article/35-how-to-safely-remove-the-keycaps`);
    }
}
