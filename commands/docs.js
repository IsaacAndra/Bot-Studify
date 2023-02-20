const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js')

const row = new ActionRowBuilder()
.addComponents(
    new StringSelectMenuBuilder()
        .setCustomId("select")
        .setPlaceholder("Nenhuma linguagem selecionada")
        .addOptions({
            label: "Javascript",
            description: "Veja a documentaçao de Javascript",
            value: "javascript"
            },
            {
                label: "Python",
                description: "Veja a documentação de Python",
                value: "python"
            },
            {
                label: "C#",
                description: "Veja a documentação de C#",
                value: "csharp"
            },
            {
                label: "React",
                description: "Veja a documentação de React",
                value: "react"
            },
            {
                label: "Discord.js",
                description: "Veja a documentação de Discord.js",
                value: "discordjs"
            }
        )
)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentaçao da tecnologia que quiser"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das techs abaixo:", components: [row]})
    }
}