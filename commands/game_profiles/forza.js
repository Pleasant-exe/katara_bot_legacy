const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "forza",
    category: "game_profiles",
    description: "Forza game profile",
    run: async (client, message, args) => {
        const msg = await message.channel.send("Here is a profile for Forza, bear in mind this can change or be outdated! https://wooting.helpscoutdocs.com/article/53-forza-horizon-4\n\n`Profile Code: 17418694-c563-4d79-84be-7d6c08f7691d`");
    }
}
