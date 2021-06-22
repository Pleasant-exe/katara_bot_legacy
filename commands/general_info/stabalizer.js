const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "stabalizer",
    aliases: ["stabs, stabilizer"],
    category: "general_info",
    description: "Stabalizer info",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Hey there! it has been brought to my attention you need a link on how to safely remove stabilizers, here you go! :) \n\nhttps://wooting.helpscoutdocs.com/article/51-how-to-safely-remove-stabilizers`);
    }
}
