const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "rightsideleds",
    aliases: ["right"],
    category: "general_info",
    description: "How to fix the right side leds not working",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Hey there! it has been brought to my attention you need a link for right side leds not working, here you go! :)\n\nhttps://wooting.helpscoutdocs.com/article/29-the-right-part-of-my-leds-go-out-sometimes`);
    }
}
