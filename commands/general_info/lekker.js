const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "lekker",
    category: "general_info",
    description: "Lekker info",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`What is the new switch? Well, its a new switch! We know you have lots of questions right now that youre dying to ask so please check the <#360835025547165697>, for more info and feel free to ask in <#576431499679629322>,\n\n__**Useful links**__\n\nLekker Page\n➥ <https://wooting.io/lekker>\n\nLekker  Blog\n➥ <https://blog.wooting.nl/introducing-the-lekker-switch/>\n\nWhat are hall-effect switches?\n➥ <https://blog.wooting.nl/what-are-hall-effect-keyboard-switches/>`);
    }
}
