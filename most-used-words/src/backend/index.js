const { ipcMain } = require("electron");

const pathsToRows = require("./pathsToRow");
const preparaData = require("./preparaData");
const groupWords = require("./groupWords");

ipcMain.on("process-subtitles", (event, paths) => {
    pathsToRows(paths)
        .then(rows => preparaData(rows))
        .then(words => groupWords(words))
        .then(groupedWords => event.reply("process-subtitles", groupedWords));
});
