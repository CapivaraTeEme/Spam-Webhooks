const readline = require('readline');
const colors = require('colors');
const axios = require('axios');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function spamWebhook(webhook, message, threads) {
    for (let i = 0; i < threads; i++) {
        try {
            await axios.post(webhook, {
                content: message
            });
            console.log(colors.green(`[$] Mensaje enviado: ${message} (${i + 1}/${threads})`));
        } catch (error) {
            console.log(colors.red(`[x] Error al enviar el mensaje (${i + 1}/${threads}): ${error.message}`));
        }
    }
}

function startMenu() {
    console.log(colors.magenta(`
     ██████╗                           ███████╗██████╗ ███████╗                                   
     ██╔════╝██╗ █████╗ ██████╗        ██╔════╝██╔══██╗██╔════╝██╗                                
     ██║     ██║ ══╗██║ ██║   ██║█████╗█████╗  ██████╔╝█████╗  ╚═╝                                
     ██║     ██║ █████║ ██║   ██║╚════╝██╔══╝  ██╔══██╗██╔══╝  ██╗                                
     ╚██████╗██║ █████║ ██║   ██║      ███████╗██████╔╝██║     ╚═╝                                
      ╚═════╝╚═╝ ╚════╝ ╚═╝   ╚═╝      ╚══════╝╚═════╝ ╚═╝                                        

    ███████╗                              ██╗    ██╗
    ██╔════╝ ██████║ █████╗ ████╗ ███╗    ██║    ██║  ██████║  ██╗     ██║       ████║      ████║   ██║ ██╗
    ███████╗ ██╔═██║ ══╗██║ ██╔═██╔═██║   ██║ █╗ ██║ ████████║ ██║     ██║     ██╔═  ██║  ██╔═  ██║ ████╔═╝
    ╚════██║ ██████║ █████║ ██║ ██║ ██║   ██║███╗██║ ██╔═════╝ ██████║ ██████║ ██║   ██║  ██║   ██║ ██║██║
    ███████║ ██════╝ █████║ ██║ ██║ ██║   ╚███╔███╔╝ ╚██████║  ██████║ ██╔═██║   ████║      ████║   ██║ ██║
    ╚══════╝ ╚╝      ╚════╝ ╚═╝ ╚═╝ ╚═╝    ╚══╝╚══╝   ╚═════╝  ╚═════╝ ╚═╝ ╚═╝   ╚═══╝      ╚═══╝   ╚╝  ╚═╝
                              Clan-EBF: Spam Webhook
                  .gg/23mkRkGDJf | discord.gg/23mkRkGDJf
    `));

    rl.question(colors.magenta('(input) Put the Webhook: '), (webhook_https) => {
        console.log(colors.white(`Webhook URL: ${webhook_https}`));

        rl.question(colors.magenta('(input) Put the message: '), (message_spam) => {
            console.log(colors.white(`Message: ${message_spam}`));

            rl.question(colors.magenta('(input) Number of Threads: '), (thread_number) => {
                console.log(colors.white(`Threads: ${thread_number}`));

                spamWebhook(webhook_https, message_spam, parseInt(thread_number)).then(() => {
                    console.log(colors.green('\n[$] Spam Complete!.'));
                    rl.close();
                });
            });
        });
    });
}

startMenu();
