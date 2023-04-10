import { CommandContext, SlashCommand, SlashCreator } from "slash-create";

export default class Ping extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "ping",
			description: "Ping the bot",
		});
	}

	async run(ctx: CommandContext) {
		await ctx.defer();
		const embed = {
			title: "Pong!",
			description: `API Latency is ${Math.round(this.creator.client.ws.ping)}ms`,
		};
		return ctx.send({ embeds: [embed] });
	}
}
