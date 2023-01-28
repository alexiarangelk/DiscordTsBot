import {
  SlashCommandBuilder,
  ChannelType,
  CommandInteraction,
  TextChannel
} from 'discord.js';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!')
    .addStringOption(option =>
      option.setName('input')
        .setDescription('The input to echo back')
        .setRequired(true)
        .setMaxLength(2000)
    )
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('The channel to echo into')
        .addChannelTypes(ChannelType.GuildText)
    ),
  async execute(interaction: CommandInteraction) {
    const input = interaction.options.get('input')?.value as string;
    const channel = interaction.options.get('channel')?.channel as TextChannel;
    if (channel) {
      await interaction.reply('Message sent');
      await channel.send(input);
    } else {
      await interaction.reply(input);
    }

  },
};