const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "warframe",
    aliases: ["wf"],
    category: "game_profiles",
    description: "Warframe",
    run: async (client, message, args) => {
        const msg = await message.channel.send("Hey Tenno, here is a profile to become a stealth god! (May need updating)\n\nhttps://wooting.helpscoutdocs.com/article/16-restore-the-wooting \n\n`Profile Code: 17845533-c6df-4715-8f32-292c62587074`");
    }
}





