module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow) // filtrando as linhas válidas
                .map(removePunctuation) // removendo as pontuações (,?!.-)
                .map(removeTags) // removendo as tags
                .reduce(mergeRows) // juntando as linhas em um texto
                .split(" ") // transformando em arrays todas palavras separadas
                .map(word => word.toLowerCase()) // palavras repetidas
                .map(word => word.replace('"', ""));

            resolver(words);
        } catch (e) {
            reject(e);
        }
    });
};

function filterValidRow(row) {
    const notNumber = !parseInt(row.trim());
    const notEmpty = !!row.trim();
    const notInterval = !row.includes("-->");
    return notNumber && notEmpty && notInterval;
}

const removePunctuation = row => row.replace(/[,?!.-]/g, ""); //regex
const removeTags = row => row.replace(/(<[^>]+)>/gi, "").trim();
const mergeRows = (fullText, row) => `${fullText} ${row}`;
