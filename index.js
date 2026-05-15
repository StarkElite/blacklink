const qrcode = require("qrcode-terminal");
const QRCode = require("qrcode");
const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage"
        ]
    }
});

client.on("qr", async (qr) => {
    console.log("Gerando QR Code...");

    await QRCode.toFile("qrcode.png", qr);

    console.log("QR salvo em qrcode.png");
});

client.on("ready", () => {
console.log("🟢 BLACKLINK BOT ONLINE");
});

client.on("message", async (message) => {

    // IGNORA GRUPOS
    if (message.from.includes("@g.us")) return;

    const msg = message.body.toLowerCase().trim();
    const chat = await message.getChat();

    // ANTI-SPAM
    if (!global.lastMessages) {
        global.lastMessages = {};
    }

    const userId = message.from;
    const now = Date.now();

    if (
        global.lastMessages[userId] &&
        now - global.lastMessages[userId] < 1000
    ) {
        return;
    }

    global.lastMessages[userId] = now;


    // BOAS VINDAS
    if (!global.clientesRespondidos) {
        global.clientesRespondidos = new Set();
    }

    if (!global.clientesRespondidos.has(userId)) {

        global.clientesRespondidos.add(userId);

        await chat.sendMessage(

            "🤖 *BEM VINDO AO BLACKLINK*\n\n" +

            "🔥 Nosso sistema automático já está online.\n\n" +

            "📋 *COMO USAR O BOT:*\n\n" +

            "🛒 Para abrir o menu digite:\n" +
            "/menu\n\n" +

            "📦 Escolha a categoria desejada.\n\n" +

            "💳 Para finalizar um pedido utilize o link do Neurox no final de cada tabela.\n\n" +

            "⚡ Atendimento automático 24H."

        );

    }


    // MENU
    if (
        msg === "menu" ||
        msg === "/menu" ||
        msg === "oi"
    ) {

        await chat.sendMessage(
            "╔════════════════╗\n" +
            "🔥 *_BLACKLINK BOT_* 🔥\n" +
            "╚════════════════╝\n\n" +

            "📦 *_PRODUTOS DISPONÍVEIS_*\n\n" +

            "🌹 1 • _Cannabis_\n" +
            "🍫 2 • _Extrações_\n" +
            "🍬 3 • _Ecstasys_\n" +
            "🍭 4 • _LSD_\n\n" +

            "━━━━━━━━━━━━━━━\n" +
            "📋 *_COMANDOS_*\n" +
            "━━━━━━━━━━━━━━━\n\n" +

            "📌 _/menu_\n" +
            "❓ _/ajuda_\n" +
            "🚚 _/frete_\n" +
            "🛠️ _/suporte_\n\n" +

            "🛒 *_Digite o número ou nome do produto._*"
               );
    }


// AJUDA
if (
    msg === "/ajuda" ||
    msg === "ajuda"
) {

    chat.sendMessage(
        "❓ *_CENTRAL DE AJUDA_* ❓\n\n" +
        "📌 *_Use /menu para abrir o catálogo_*\n" +
        "📦 *_Digite o número do produto_*\n" +
        "🚚 *_Use /frete para informações de envio_*\n" +
        "🛠️ *_Use /suporte para atendimento_*"
    );
}

// FRETE
if (
    msg === "/frete" ||
    msg === "frete"
) {

    chat.sendMessage(
        "🚚 *_INFORMAÇÕES DE FRETE_* 🚚\n\n" +
        "📦 *_Envio rápido_*\n" +
        "📍 *_Atendimento BR_*\n" +
        "⏰ *_Prazo informado no atendimento._*"
    );
}

// SUPORTE
if (
    msg === "/suporte" ||
    msg === "suporte"
) {

    chat.sendMessage(
        "🛠️ *_SUPORTE BLACKLINK_* 🛠️\n\n" +
        "📲 *_Atendimento disponível_*\n" +
        "💬 *_Aguarde um administrador responder._*"
    );
}

// CANNABIS
if (
    msg === "1" ||
    msg === "/cannabis" ||
    msg === "cannabis"
) {

    chat.sendMessage(
        "🌹 *_PLANTAS DE CANNABIS_* 🌹\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🌺 *_LA ROSE_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/cf4Sssz\n\n" +

        "💐 _10 Gramas_\n" +
        "💰 _R$450,00_\n\n" +

        "💐 _25 Gramas_\n" +
        "💰 _R$1.000,00_\n\n" +

        "💐 _50 Gramas_\n" +
        "💰 _R$1.750,00_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🍀 *_MAC 1_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/TWqBYIO\n\n" +

        "🌿 _10 Gramas_\n" +
        "💰 _R$550,00_\n\n" +

        "🌿 _25 Gramas_\n" +
        "💰 _R$1.250,00_\n\n" +

        "🌿 _50 Gramas_\n" +
        "💰 _R$2.250,00_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "⭐ *_CLASSE A+ GOLD_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/jeVcBtg\n\n" +

        "🎁 _25 Gramas_\n" +
        "💰 _R$80,00_\n\n" +

        "🎁 _50 Gramas_\n" +
        "💰 _R$150,00_\n\n" +

        "🎁 _100 Gramas_\n" +
        "💰 _R$280,00_\n\n" +
        
        "🛒 *_PEDIDOS E PAGAMENTO:_*\n" +
        "https://wa.me/557388480568\n\n" +
        
        "━━━━━━━━━━━━━━━\n" +
        "🚚 *_FRETE SEDEX: R$150,00_*\n" +
        "━━━━━━━━━━━━━━━",
        {
            linkPreview: false
        }
    );
}

// EXTRAÇÕES
if (
    msg === "2" ||
    msg === "/extrações" ||
    msg === "extrações"
) {

    chat.sendMessage(
        "🍫 *_EXTRAÇÕES DE CANNABIS_* 🍫\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🍯 *_LIVE RESIN_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/mz2rqBc\n\n" +

        "🍬 _10 Gramas_\n" +
        "💰 _R$950,00_\n\n" +

        "🍬 _25 Gramas_\n" +
        "💰 _R$2.125,00_\n\n" +

        "🍬 _50 Gramas_\n" +
        "💰 _R$4.000,00_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🍏 *_GELO NUG GREEN APPLE_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/Tga1gSF\n\n" +

        "🍫 _10 Gramas_\n" +
        "💰 _R$700,00_\n\n" +

        "🍫 _25 Gramas_\n" +
        "💰 _R$1.625,00_\n\n" +

        "🍫 _50 Gramas_\n" +
        "💰 _R$3.000,00_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🌴 *_PAK TROPICANA HAZE_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/R0GJ0k5\n\n" +

        "🍪 _10 Gramas_\n" +
        "💰 _R$550,00_\n\n" +

        "🍪 _25 Gramas_\n" +
        "💰 _R$1.250,00_\n\n" +

        "🍪 _50 Gramas_\n" +
        "💰 _R$2.250,00_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🍷 *_PAK RED WINE_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/opdJKyA\n\n" +

        "🍩 _10 Gramas_\n" +
        "💰 _R$500,00_\n\n" +

        "🍩 _25 Gramas_\n" +
        "💰 _R$1.125,00_\n\n" +

        "🍩 _50 Gramas_\n" +
        "💰 _R$2.000,00_\n\n" +
        
        "🛒 *_PEDIDOS E PAGAMENTO:_*\n" +
        "https://wa.me/557388480568\n\n" +
        
        "━━━━━━━━━━━━━━━\n" +
        "🚚 *_FRETE SEDEX: R$150,00_*\n" +
        "━━━━━━━━━━━━━━━",
        {
            linkPreview: false
        }
    );
}

// ECSTASYS
if (
    msg === "3" ||
    msg === "/ecstasys" ||
    msg === "ecstasys"
) {

    chat.sendMessage(
        "🍬 *_ECSTASYS_* 🍬\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🍭 *_LINHA CLASSIC 300mg_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/UWtHFsU\n\n" +

        "🍕 _Pizza Hut MDA_\n" +
        "🦉 _Duolingo MDA_\n" +
        "🌿 _Mentos MDA_\n" +
        "🍓 _Morango MDA_\n\n" +

        "💰 *_VALORES PARA TODAS DE 300mg:_*\n\n" +

        "🍬 _25 unidades_\n" +
        "💰 _R$9,00 cada_\n\n" +

        "🍬 _50 unidades_\n" +
        "💰 _R$8,00 cada_\n\n" +

        "🍬 _100 unidades_\n" +
        "💰 _R$7,00 cada_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "❤️ *_LOVE 220mg MDA_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/Sq2Y2QY\n\n" +

        "💝 _25 unidades_\n" +
        "💰 _R$6,00 cada_\n\n" +

        "💝 _50 unidades_\n" +
        "💰 _R$5,50 cada_\n\n" +

        "💝 _100 unidades_\n" +
        "💰 _R$5,00 cada_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🍍 *_ABACAXI RJ LABS 300mg MDA_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/Wxq1Z7s\n\n" +

        "🍍 _25 unidades_\n" +
        "💰 _R$8,00 cada_\n\n" +

        "🍍 _50 unidades_\n" +
        "💰 _R$7,00 cada_\n\n" +

        "🍍 _100 unidades_\n" +
        "💰 _R$6,00 cada_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "💃 *_Q-DANCE 220mg MDMA_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/JTEwNxZ\n\n" +

        "✨ _25 unidades_\n" +
        "💰 _R$20,00 cada_\n\n" +

        "✨ _50 unidades_\n" +
        "💰 _R$18,00 cada_\n\n" +

        "✨ _100 unidades_\n" +
        "💰 _R$16,00 cada_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🤍 *_ECRU WHITE 250mg MDMA_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/udYMsau\n\n" +

        "🤍 _25 unidades_\n" +
        "💰 _R$28,00 cada_\n\n" +

        "🤍 _50 unidades_\n" +
        "💰 _R$26,00 cada_\n\n" +

        "🤍 _100 unidades_\n" +
        "💰 _R$24,00 cada_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🍯 *_MDMA ECRU_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/yBmemFn\n\n" +

        "🍯 _10 Gramas_\n" +
        "💰 _R$120,00 cada g_\n\n" +

        "🍯 _25 Gramas_\n" +
        "💰 _R$95,00 cada g_\n\n" +

        "🍯 _100 Gramas_\n" +
        "💰 _R$90,00 cada g_\n\n" +
        
        "🛒 *_PEDIDOS E PAGAMENTO:_*\n" +
        "https://wa.me/557388480568\n\n" +
        
        "━━━━━━━━━━━━━━━\n" +
        "🚚 *_FRETE SEDEX: R$150,00_*\n" +
        "━━━━━━━━━━━━━━━",
        {
            linkPreview: false
        }
    );
}

// LSD
if (
    msg === "4" ||
    msg === "/lsd" ||
    msg === "lsd"
) {

    chat.sendMessage(
        "🍭 *_LINHA HUNGARO_* 🍭\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🍍 *_ABACAXI 300ug_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/nWiKtch\n\n" +

        "🍬 _1 Card_\n" +
        "💰 _R$400,00_\n\n" +

        "🍬 _5 Cards_\n" +
        "💰 _R$370,00 cada_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🐷 *_FLYPIG 400ug_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/HCpHA6y\n\n" +

        "🍭 _1 Card_\n" +
        "💰 _R$500,00_\n\n" +

        "🍭 _5 Crads_\n" +
        "💰 _R$470,00 cada_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "✨ *_JESUS 500ug_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/Qta2Ub9\n\n" +

        "🍫 _1 Card_\n" +
        "💰 _R$600,00_\n\n" +

        "🍫 _5 Crads_\n" +
        "💰 _R$560,00 cada_\n\n" +

        "━━━━━━━━━━━━━━━\n" +
        "🎩 *_DR.SEUS CAT IN THE HAT 200ug_*\n" +
        "━━━━━━━━━━━━━━━\n\n" +

        "🖼️ *_MÍDIA:_*\n" +
        "https://imgur.com/a/pwjrMTW\n\n" +

        "🎁 _1 Card_\n" +
        "💰 _R$750,00_\n\n" +

        "🎁 _5 Cards_\n" +
        "💰 _R$720,00 cada_\n\n" +
        
        "🛒 *_PEDIDOS E PAGAMENTO:_*\n" +
        "https://wa.me/557388480568\n\n" +
        
        "━━━━━━━━━━━━━━━\n" +
        "🚚 *_FRETE LSD SEDEX: R$50,00_*\n" +
        "━━━━━━━━━━━━━━━",
                {
            linkPreview: false
        }
    );
}

});

client.initialize();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("BLACKLINK BOT ONLINE");
});

const path = require("path");

app.get("/qrcode", (req, res) => {
    const filePath = path.join(__dirname, "qrcode.png");

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send("QR Code ainda não foi gerado.");
        }
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor HTTP online");
});
