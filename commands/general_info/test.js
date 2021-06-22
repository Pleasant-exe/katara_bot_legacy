const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "test",
    category: "general_info",
    description: "Tests the bot",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Testing....`);

        msg.edit(`Successful!`);
    }
}

