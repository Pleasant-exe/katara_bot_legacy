//Clears messages in the chat.

module.exports = {
    name: "clear",
    aliases: ["purge", "nuke"],
    category: "mod_tools",
    description: "clears the chat",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
    
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You cannot do that :tut:").then(m => m.delete(5000));
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("You need to specify the amount").then(m => m.delete(5000));
        }

        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("I can't delete them messages sorry").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Cleared \`${deleted.size}\` messages.`))
            .then(m => m.delete(5000))
            .catch(err => message.reply(`Error ${err}`));
            
    }
}