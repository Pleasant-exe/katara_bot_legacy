//Kicks a user and requires kick perm to use. 

const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "kick",
    category: "mod_tools",
    description: "Kicks member",
    usage: "<id | mention>",
    category: "mod_tools",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.find(c => c.name === "logs") || message.channel;


        if (message.deletable) message.delete();

        // No args
        if (!args[0]) {
            return message.reply("Who do you want to kick?")
                .then(m => m.delete(5000));
        }

        // No reason
        if (!args[1]) {
            return message.reply("You need to add why, eg: $kick @user reason")
                .then(m => m.delete(5000));
        }

        // No author permissions
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply("You do not have permissions to kick.")
                .then(m => m.delete(5000));
        }

        // No bot permissions
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.reply("I do not have permissions to kick.")
                .then(m => m.delete(5000));
        }

        const toKick = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No member found
        if (!toKick) {
            return message.reply("This member could not be found!")
                .then(m => m.delete(5000));
        }

        // Can't kick urself
        if (toKick.id === message.author.id) {
            return message.reply("You can't kick yourself you tool")
                .then(m => m.delete(5000));
        }

        // Check if the user's kickable
        if (!toKick.kickable) {
            return message.reply("I can't kick that person, they have a higher rank.")
                .then(m => m.delete(5000));
        }
                
        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setThumbnail(toKick.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(stripIndents`**> Kicked member:** ${toKick} (${toKick.id})
            **> Kicked by:** ${message.member} (${message.member.id})
            **> Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()
            .setColor("GREEN")
            .setAuthor(`This verification becomes invalid after 30s.`)
            .setDescription(`Do you want to kick ${toKick}?`)

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reaction collector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]); 

            // The verification stuffs
            if (emoji === "✅") {
                msg.delete();

                toKick.kick(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Could not kick member for unknown reason. ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`Kick canceled.`)
                    .then(m => m.delete(10000));
            }
        });
    }
};
