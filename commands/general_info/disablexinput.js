const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "disablexinput",
    aliases: ["xinput"],
    category: "general_info",
    description: "How to disable Xinput",

    run: async (client, message, args) => {
        const msg = await message.channel.send("Hey there! it has been brought to my attention you need a link on how to disable Xinput, here you go! :) <https://wooting.helpscoutdocs.com/article/41-turn-off-xinput-xbox-controller>, you can also see in the image below where to find the option.", {
            file: "./img/xinput.png" 
        });
    }
}

