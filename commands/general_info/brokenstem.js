const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "brokenstem",
    aliases: ["stem"],
    category: "general_info",
    description: "Fixing a broken stem",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Hey there! it has been brought to my attention you need a link on how to remove a broken stem from a keycap, here you go! :) https://wooting.helpscoutdocs.com/article/50-my-switch-stem-is-stuck-inside-my-keycap`);
    }
}
