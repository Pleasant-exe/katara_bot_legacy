//Bans a user and requires the perm to do this command

const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../global_functions.js");

module.exports = {
    name: "ban",
    category: "mod_tools",
    description: "bans a member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.find(c => c.name === "logs") || message.channel;

        if (message.deletable) message.delete();

        // No args
        if (!args[0]) {
            return message.reply("Why do you want to ban this member?")
                .then(m => m.delete(5000));
        }

        // No reason
        if (!args[1]) {
            return message.reply("Please provide a reason to ban.")
                .then(m => m.delete(5000));
        }

        // No author permissions
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("You do not have permissions to ban")
                .then(m => m.delete(5000));
        
        }
        // No bot permissions
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ I do not have permissions to ban")
                .then(m => m.delete(5000));
        }

        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No member found
        if (!toBan) {
            return message.reply("Couldn't find that member.")
                .then(m => m.delete(5000));
        }

        // Can't ban urself
        if (toBan.id === message.author.id) {
            return message.reply("You can't ban yourself you tool")
                .then(m => m.delete(5000));
        }

        // Check if the user's banable
        if (!toBan.bannable) {
            return message.reply("I cant ban them because they are better than me")
                .then(m => m.delete(5000));
        }
        
        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setThumbnail(toBan.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(stripIndents`**> baned member:** ${toBan} (${toBan.id})
            **> baned by:** ${message.member} (${message.member.id})
            **> Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()
            .setColor("GREEN")
            .setAuthor(`This verification becomes invalid after 30s.`)
            .setDescription(`Do you want to ban ${toBan}?`)

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Awaiting reaction 
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // Verification for ban
            if (emoji === "✅") {
                msg.delete();

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Error ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`ban canceled.`)
                    .then(m => m.delete(10000));
            }
        });
    }
};
