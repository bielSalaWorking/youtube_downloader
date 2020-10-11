const path = require('path');
const ytdl = require('ytdl-core');

exports.downloader = async (req, res) => {
    try {
     const {URL, FORMAT} = req.query;
    
     const {videoDetails: {title}} = await ytdl.getInfo(URL);
    
     res.header('Content-Disposition',`attachment; filename=${title}.mp4`)   
        
         ytdl(URL, {
             format: 'mp4'
         }).pipe(res);

        res.send('this woorks')
    }
     catch (error) {
        return res.status(433).json(error)        
    }
}
exports.findQualityLabels = () => {
    try {
        const {URL} = req.query;
        const qualityLabels = new Set();

        const urlInfo = await ytdl.getInfo(URL);
        const videoFormats = ytdl.filterFormats(info.formats, 'videoonly' );

        formats.map(format => qualityLabels.add(format.quality));
        
        return res.status(200).json(qualityLabels);
    }
    catch (error) {
        return res.status(422).json('no quality labels');
    }
}

