const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "driver",
    category: "general_info",
    description: "How to install Xbox 360 drivers",

    run: async (client, message, args) => {
        const msg = await message.channel.send("Hey there! If you're having an issue with drivers check this guide out, you can also see the Gif attached below. <https://wooting.helpscoutdocs.com/article/26-wooting-doesnt-load-driver-yellow-triangle-in-device-manager>", {
            file: "./img/driver.gif" 
        });
    }
}

