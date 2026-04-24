const fetch = require('node-fetch');

const token = process.env.DISCORD_TOKEN || '';
const guildId = '1455443549037531254';

async function test() {
    const url = `https://discord.com/api/v10/guilds/${guildId}/roles`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bot ${token}`,
            }
        });
        console.log('Status:', response.status);
        const roles = await response.json();
        console.log('Roles en el servidor:');
        roles.forEach(role => {
            console.log(`ID: ${role.id} - Nombre: ${role.name} - Posición: ${role.position}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

test();const fetch = require('node-fetch');

const token = process.env.DISCORD_TOKEN || '';
const guildId = '1455443549037531254';

async function test() {
    const url = `https://discord.com/api/v10/guilds/${guildId}/roles`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bot ${token}`,
            }
        });
        console.log('Status:', response.status);
        const roles = await response.json();
        console.log('Roles en el servidor:');
        roles.forEach(role => {
            console.log(`ID: ${role.id} - Nombre: ${role.name} - Posición: ${role.position}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

test();