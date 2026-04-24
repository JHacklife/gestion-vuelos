# Configuración de variables de entorno

Este proyecto utiliza un archivo `.env` para almacenar credenciales y datos sensibles. Debes crear un archivo `.env` en la raíz del proyecto (si no existe) y definir las siguientes variables:

```
DISCORD_BOT_TOKEN=tu_token_aqui
DISCORD_GUILD_ID=tu_guild_id_aqui
WEBHOOK_LIBROS=tu_webhook_libros
WEBHOOK_SOLICITUDES=tu_webhook_solicitudes
WEBHOOK_REGISTROS=tu_webhook_registros
WEBHOOK_ASCENSOS=tu_webhook_ascensos
```

**Nunca subas tus credenciales reales al repositorio.**

```
air-force-gestion
├─ backend
│  ├─ config
│  │  └─ database.js
│  ├─ data
│  │  └─ ranks.json
│  ├─ models
│  │  ├─ Aeronave.js
│  │  ├─ LibroVuelo.js
│  │  ├─ Piloto.js
│  │  └─ Solicitud.js
│  ├─ routes
│  │  ├─ admin.js
│  │  ├─ aeronaves.js
│  │  ├─ auth.js
│  │  ├─ libros.js
│  │  ├─ pilotos.js
│  │  └─ solicitudes.js
│  ├─ server.js
│  ├─ uploads
│  │  ├─ aeronaves
│  │  │  ├─ 1775387028920-633902494.png
│  │  │  ├─ 1775387926673-486620689.png
│  │  │  ├─ 1775457126572-131445625.png
│  │  │  ├─ 1775457887827-797849534.png
│  │  │  ├─ 1775457972002-306948334.png
│  │  │  ├─ 1775458185220-879247354.png
│  │  │  └─ 1775519856693-912414411.png
│  │  ├─ nulcd
│  │  ├─ observaciones
│  │  │  ├─ 1775407812133-260655886.png
│  │  │  ├─ 1775418030548-999110097.png
│  │  │  ├─ 1775419556663-728760844.webp
│  │  │  ├─ 1775420782760-91931739.webp
│  │  │  ├─ 1775421483810-38522678.webp
│  │  │  ├─ 1775421965702-334928667.webp
│  │  │  ├─ 1775422409256-421569373.png
│  │  │  ├─ 1775504917170-891671030.png
│  │  │  ├─ 1775504917182-54531804.png
│  │  │  ├─ 1775505782034-845260440.png
│  │  │  └─ 1775535836125-920287454.png
│  │  ├─ pilotos
│  │  │  ├─ 1775386451465-275228627.webp
│  │  │  ├─ 1775386818271-402793727.jpg
│  │  │  ├─ 1775386864174-298208697.webp
│  │  │  ├─ 1775387445543-326505056.png
│  │  │  ├─ 1775387882838-141607177.png
│  │  │  ├─ 1775394985123-295623877.png
│  │  │  ├─ 1775452935366-607392921.png
│  │  │  ├─ 1775453690007-184024699.png
│  │  │  └─ 1775517424652-687891245.png
│  │  └─ ranks
│  │     ├─ 1775393959583-785372399.png
│  │     ├─ 1775394166437-921881570.png
│  │     ├─ 1775394309527-885653166.png
│  │     ├─ 1775394490077-30108945.png
│  │     ├─ 1775394558691-875561642.png
│  │     ├─ 1775417763175-307624218.png
│  │     ├─ 1775510900575-134214107.png
│  │     └─ 1775511033587-461929484.png
│  └─ utils
│     ├─ discord.js
│     └─ webhooks.js
├─ database
├─ frontend
│  ├─ admin.html
│  ├─ aeronaves.html
│  ├─ css
│  │  ├─ airforce-style.css
│  │  └─ styles.css
│  ├─ img
│  │  ├─ aetc.png
│  │  ├─ airforce.png
│  │  └─ lsaf.png
│  ├─ index.html
│  ├─ js
│  │  ├─ config.js
│  │  └─ main.js
│  ├─ libros-vuelo.html
│  ├─ pilotos-lista.html
│  ├─ pilotos.html
│  └─ solicitudes.html
├─ package-lock.json
├─ package.json
├─ test-bot.js
└─ test-discord.js

```