//By now is only a test function, in production need to make a better error handling.
async function findQualityLabels(URL){
    const qualityLabels = new Set();
    const urlInfo = await ytdl.getInfo(URL);
    const videoFormats = ytdl.filterFormats(urlInfo.formats, 'videoonly' );

    return qualityLabels;
}

module.exports = findQualityLabels;