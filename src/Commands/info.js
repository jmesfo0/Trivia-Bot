import { MessageEmbed } from 'discord.js';
import Command from '../Structures/Command.js';

export default class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['inf', 'support', 'request', 'bug', 'feature'],
            description: 'Displays extra info related to Trivia Bot that might be useful',
            category: 'Utilities',
        });
    }

    async run(message, commands) {
        if (!this.validateCommands(message, commands)) {
            return;
        }
        const embed = new MessageEmbed()
            .setColor('#fb94d3')
            .setTitle("Hi, I'm Trivia Bot! 🧠")
            .setDescription(
                'My prefix is `!` \n A list of commands can be found by sending `!help` \n \n [**Support Server**](https://discord.gg/STaq3UDbqQ) Questions? Join if you need help!' +
                    "\n [**GitHub**](https://github.com/jmesfo0/Trivia-Bot) Are you a developer looking to support another fellow developer? Give me a star and I'll be eternally grateful!" +
                    '\n [**Bug Reports/Feature Requests**](https://github.com/jmesfo0/Trivia-Bot/issues) You can submit bug reports or request features here.'
            )
            .setThumbnail(this.client.user.displayAvatarURL())
            .setFooter({ text: 'Yours truly, Trivia Bot ❤️' })
            .setTimestamp();

        try {
            message.channel.send({ embeds: [embed] });
        } catch (e) {
            console.log(e);
            return;
        }
    }
}
