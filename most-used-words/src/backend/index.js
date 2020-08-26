const { ipcMain } = require("electron");

ipcMain.on("process-subtitles", (event, paths) => {
    console.log(paths);

    event.reply("process-subtitles", [
        { name: "i", amount: 1234 },
        { name: "you", amount: 900 },
        { name: "he", amount: 345 },
        { name: "she", amount: 345 },
        { name: "hi", amount: 978 },
        { name: "bina", amount: 18 }
    ]);
});
