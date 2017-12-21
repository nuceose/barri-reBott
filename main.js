const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = (".");
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires : []})

bot.on('ready', () => {
    console.log("bot connected");
    bot.user.setGame('avec une barrière');
});

bot.login("Mzg2OTU5MDMxNzEwOTA4NDE2.DR2UpQ.chIIwCqFamaDL8nfWETmdhJ72lo");


  bot.on("guildMemberAdd", function(members){

     members.guild.channels.find("name", "accueil");

    members.addRole(members.guild.roles.find("name", "Nouvelle Barrière"));
  });


bot.on('message', message => {
    if (message.content === prefix + "yo"){
        message.channel.send("yo sale con" );

        console.log("Yo");
    }

    if (message.content.startsWith("/kick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " a bien été kick ce con :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }


    if (message.content === prefix + "regles") {
        var regles_embed = new Discord.RichEmbed()
            .setColor('#00E379')
            .addField("les regles sont :", "Nul n'est senser enfreindre les règles, c'est pour cela qu'elles sont établis ( et elles sont simples en plus) :")
            .addField(" - Le RESPECT  des autres, donc pas de trashtalk et autres insultes. Vous êtes en droit de vous mettre sur la gueule seulement dans le channel #distribution de pls", "- Ne pas SPAM PUB ,  on fait pas les cons à envoyer sa chaîne à tout va .")
            .addField("Et pour finir PRIEZ LA SAINTE BARRIÈRE COSMIQUE !!!")
        message.channel.sendEmbed(regles_embed);
        console.log("regles");
        }

})