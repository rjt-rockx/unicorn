# discord-bot

A custom bot for the Unicorn Utterances community

## Prerequisites

Before you can use this bot, you need to have the following installed on your computer:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [PNPM](https://pnpm.io/) (version 7 or higher)

## Getting Started

To get started, follow these steps:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/unicorn-utterances/discord-bot.git
   ```

2. Navigate to the project directory:

   ```shell
   cd discord-bot
   ```

3. Install the dependencies using PNPM:

   ```shell
   pnpm install
   ```

4. Copy the `.env.example` file to `.env`:

   ```shell
   cp .env.example .env
   ```

5. Edit the `.env` file and set the `DISCORD_BOT_TOKEN` and `DISCORD_CLIENT_ID` environment variables to the values for your bot.

6. Update the database:

   ```shell
   pnpm db:update
   ```

7. Build the code:

   ```shell
   pnpm build
   ```

8. Start the bot:

   ```shell
   pnpm start
   ```

## Development

To develop this bot further, you can modify the code in the `src` directory. You can also modify the Prisma schema in the `prisma/schema.prisma` file.

After making changes, you need to rebuild the code using `pnpm build` and restart the bot using `pnpm start`.

## License

This template is licensed under the MIT License. See the `LICENSE` file for more information.
