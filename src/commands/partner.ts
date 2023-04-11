import { CommandContext, CommandOptionType, SlashCommand, SlashCreator } from "slash-create";

import database from "../classes/database";

export default class Partner extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "partner",
			description: "Add, remove and manage partners for the community.",
			options: [
				{
					type: CommandOptionType.SUB_COMMAND,
					name: "add",
					description: "Add partners to the community",
					options: [
						{
							type: CommandOptionType.USER,
							name: "user",
							description: "The user to add as a partner",
							required: true,
						},
					],
				},
				{
					type: CommandOptionType.SUB_COMMAND,
					name: "remove",
					description: "Remove partners from the community",
					options: [
						{
							type: CommandOptionType.USER,
							name: "user",
							description: "The user to remove as a partner",
							required: true,
						},
					],
				},
				{
					type: CommandOptionType.SUB_COMMAND,
					name: "list",
					description: "List all partners in the community",
				},
			],
		});
	}

	async run(ctx: CommandContext) {
		await ctx.defer();
		if (ctx.options.add?.user) {
			await database.partner.create({
				data: {
					userId: ctx.options.add.user,
				},
			});
			return ctx.send({
				embeds: [
					{
						title: "Partner added",
						description: `Added <@${ctx.options.add.user}> as a partner.`,
					},
				],
			});
		}

		if (ctx.options.remove?.user) {
			await database.partner.delete({
				where: {
					userId: ctx.options.remove.user,
				},
			});
			return ctx.send({
				embeds: [
					{
						title: "Partner removed",
						description: `Removed <@${ctx.options.remove.user}> as a partner.`,
					},
				],
			});
		}

		if (ctx.options.list) {
			const partners = await database.partner.findMany();
			if (partners.length === 0) {
				return ctx.send({
					embeds: [
						{
							title: "No partners",
							description: "There are no partners in the community.",
						},
					],
				});
			}
			const partnerMentions = partners.map((partner) => `<@${partner.userId}>`);
			return ctx.send({
				embeds: [
					{
						title: "Partners",
						description: partnerMentions.join(", "),
					},
				],
			});
		}
	}
}
