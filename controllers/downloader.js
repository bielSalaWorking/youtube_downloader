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
        const formats = ytdl.filterFormats(info.formats, 'videoonly' );

        formats.map(format => qualityLabels.add(format.quality));
        
        return res.status(200).json(qualityLabels);
    }
    catch (error) {
        return res.status(422).json('no quality labels');
    }
}

     
exports.mainPage = (req,res ) => {
    res.render('index', {error: null});
}

/*
    1) Enter the url
    2) Validate the url
        2.1) if valid url
            2.1.2) get quality labels
            2.1.3) select quality labels
            2.1.4) send Quality label
            2.1.5) validate quality label
            2.1.6) if quality label is valid
                2.1-7) return downloaded video
        2.2) if not valid
            2.2.1) return error "url is not valid"

    
        

 */