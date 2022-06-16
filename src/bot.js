// OOP design highly inspired by https://github.com/MenuDocs/discord.js-template

import 'dotenv/config.js';
import MDClient from './Structures/MDClient.js';
import { AutoPoster } from 'topgg-autoposter';

const client = new MDClient({
    token: process.env.BOT_TOKEN,
    prefix: '$',
    owners: ['309536563161989120','809814323396214786'],
});

client.start();


