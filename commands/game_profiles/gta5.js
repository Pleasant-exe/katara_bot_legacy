const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "gta5",
    aliases: ["gtav"],
    category: "game_profiles",
    description: "GTA game profile",
    run: async (client, message, args) => {
        const msg = await message.channel.send("Here is a profile for GTA5, bear in mind this can change or be outdated! https://wooting.helpscoutdocs.com/article/33-grand-theft-auto-5-gta5-analog-profile \n\n`Profile Code: 43d052e1-d607-c636-2f95-d5e4edc0539f`");
    }
}
