const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "social",
    aliases: ["twitter, facebook, twitch"],
    category: "general_info",
    description: "Wooting Socials",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Hey there! you can find our social links here.\n\nTwitter:<https://twitter.com/WootingKB>\n\nFacebook: <https://www.facebook.com/wootingkb>\nTwitch: <https://www.twitch.tv/wooting_live>`);
    }
}
