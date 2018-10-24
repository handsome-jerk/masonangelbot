const Discord = require("discord.js");
const client = new Discord.Client();

var pets = 0

// Set the prefix
let prefix = "Hey Masonbot, ";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.startsWith(prefix + "have a pet!")) {
 pets = pets + 1
    message.channel.send(`I got a pet! Masonbot has recieved ${pets} pets!`);
 } else
  if (message.content.startsWith(prefix + "working?")) {
    message.channel.send("All set!");
 } else
  if (message.content.startsWith(prefix + "what can you do?")) {
    message.channel.send("I can respond to this list of commands! (After the prefix Hey Masonbot, ) `[working?] [good job!] [have a pet!] [have a super pet!] [ur a good boye] [ur my daddy]`");
 } else
  if (message.content.startsWith(prefix + "good job!")) {
    message.channel.send(":3");
} else
  if (message.content.startsWith(prefix + "ur a good boye")) {
    message.channel.send("The goodest boye! uwu");
} else
  if (message.content.startsWith(prefix + "ur my daddy")) {
    message.channel.send("I'm the robot DILF");
} else
  if (message.content.startsWith(prefix + "have a super pet!")) {
 pets = pets + 5
    message.channel.send(`I got a super pet!!! :33 Masonbot has recieved ${pets} pets!`);
}
});

client.login("NTA0MjY1OTk4Njk5MDY5NDcw.DrCwCw.1yjerQW1qpuKDpoxUgR2qIe1WNc");