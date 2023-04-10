import { Client, GatewayDispatchEvents, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import path from "path";
import { GatewayServer, SlashCreator } from "slash-create";

dotenv.config({ path: path.join(__dirname, "../.env") });

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
	shards: "auto",
});

const creator = new SlashCreator({
	applicationID: process.env.DISCORD_CLIENT_ID!,
	token: process.env.DISCORD_BOT_TOKEN!,
	client,
});

creator.on("warn", (message) => console.warn(message));
creator.on("error", (error) => console.error(error));
creator.on("synced", () => console.info("Commands synced!"));
creator.on("commandRun", (command, _, ctx) => {
	console.info(`${ctx.user.username}#${ctx.user.discriminator} (${ctx.user.id}) ran command ${command.commandName}`);
});
creator.on("commandRegister", (command) => console.info(`Registered command ${command.commandName}`));
creator.on("commandError", (command, error) => console.error(`Command ${command.commandName}:`, error));

creator
	.withServer(new GatewayServer((handler) => client.ws.on(GatewayDispatchEvents.InteractionCreate, handler)))
	.registerCommandsIn(path.join(__dirname, "commands"))
	.syncCommands({ syncPermissions: false });

client.login(process.env.DISCORD_BOT_TOKEN);
