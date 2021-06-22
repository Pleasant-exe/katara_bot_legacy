const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "keycap",
    category: "general_info",
    description: "Removing keycaps",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Hey there! it has been brought to my attention you need a link for making your own layout, here you go! :)\nhttps://wooting.helpscoutdocs.com/article/39-how-to-create-a-wooting-keyboard-in-your-language`);
    }
}
