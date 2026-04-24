const fetch = require('node-fetch');

const token = process.env.DISCORD_TOKEN || '';
const guildId = '1455443549037531254';
const userId = '334547304835186700';
const roleId = '1455957335909335205';

const url = `https://discord.com/api/v10/guilds/${guildId}/members/${userId}/roles/${roleId}`;

async function test() {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `Bot ${token}`,
                'Content-Type': 'application/json',
            }
        });
        console.log('Status:', response.status);
        const text = await response.text();
        console.log('Respuesta:', text);
    } catch (error) {
        console.error('Error:', error);
    }
}

test();const fetch = require('node-fetch');

const token = process.env.DISCORD_TOKEN || '';
const guildId = '1455443549037531254';
const userId = '334547304835186700';
const roleId = '1455957335909335205';

const url = `https://discord.com/api/v10/guilds/${guildId}/members/${userId}/roles/${roleId}`;

async function test() {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `Bot ${token}`,
                'Content-Type': 'application/json',
            }
        });
        console.log('Status:', response.status);
        const text = await response.text();
        console.log('Respuesta:', text);
    } catch (error) {
        console.error('Error:', error);
    }
}

test();