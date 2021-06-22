const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "contact",
    aliases: ["c"],
    category: "general_info",
    description: "How to contact Wooting",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Hey there, as suggested, email social@wooting.io with the following information;\n\n**Name**:\n**Date the issue occurred**:\n**Description of the Issue**:\n**Steps taken**:\n**Order details (Order #, Address etc)**:\n**Serial number (Back of your Wooting)**:\n\n Please give Wooting a few days to respoond.`);
    }
}
