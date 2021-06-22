//Tag system by @BigBrainAFK

module.exports = {
    name: "tag",
    aliases: [],
    category: "mod_tools",
    description: "Adds a useable tag to the bot",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You cannot do that :tut:").then(m => m.delete(5000));
		}

		const splitArgs = args.slice(1);
		const tagName = args.length >= 1 ? splitArgs.shift().toLowerCase() : '';
		const tagDescription = splitArgs.join(' ');

		switch (args[0]) {
			case 'list':
			   const tagString = [...client.availableTags.keys()].join(', ') || 'No tags set.';
			   return message.channel.send(`List of tags: ${tagString}`);
			   break;
			case 'delete':
			case 'remove':
				if (!tagName) return message.reply('Please specify a tag name.');

				const rowCount = await client.tags.destroy({ where: { name: tagName } });
				if (!rowCount) return message.reply('That tag did not exist.');
				
				client.availableTags.delete(tagName);
				return message.reply('Tag deleted.');				
				break;
			case 'edit':
			case 'modify':
				if (!tagName) return message.reply('Please specify a tag name.');
				if (!tagDescription) return message.reply('Please specify the tag content.');

				const affectedRows = await client.tags.update({ message: tagDescription }, { where: { name: tagName } });
				if (affectedRows > 0) {
					client.availableTags.set(tagName, tagDescription);
					return message.reply(`Tag ${tagName} was edited.`);
				}
				return message.reply(`Could not find a tag with name ${tagName}.`);
				break;
			case 'create':
			case 'add':
			case 'new':
				if (!tagName) return message.reply('Please specify a tag name.');
				if (!tagDescription) return message.reply('Please specify the tag content.');

				const existCheck = client.availableTags.get(tagName);

				if (existCheck) return message.reply('That tag already exists.');

				try {
					const tag = await client.tags.create({
						name: tagName,
						message: tagDescription,
					});

					client.availableTags.set(tagName, tagDescription);

					return message.reply(`Tag ${tag.name} added.`);
				}
				catch (e) {
					if (e.name === 'SequelizeUniqueConstraintError') {
						return message.reply('That tag already exists.');
					}
					return message.reply('Something went wrong with adding a tag.');
				}
				break;
			default:
				break;
		}
	}
}
