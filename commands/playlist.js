const { SlashCommandBuilder } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist de estudos"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/album/6SYv7HJ2WSBwWfkeYkMccA?si=N-Cb6Y0wRV2AcPH-LPn_SA")
    }
}