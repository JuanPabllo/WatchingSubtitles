const { ipcMain } = require("electron");

const pathsToRows = require("./pathsToRow");

ipcMain.on("process-subtitles", (event, paths) => {
    pathsToRows(paths)
        .then(rows => console.log(rows))
        .then(() => {
            event.reply("process-subtitles", [
                { name: "i", amount: 1234 },
                { name: "you", amount: 900 },
                { name: "he", amount: 345 },
                { name: "she", amount: 345 },
                { name: "hi", amount: 978 },
                { name: "bina", amount: 18 }
            ]);
        });
});
