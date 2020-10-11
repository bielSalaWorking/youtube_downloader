const ytdl = require('ytdl-core');

const validateURL = () => {
    return async (req,res,next) => {
        const {URL} = req.query;
        const isValidUrl = await ytdl.validateURL(URL);
        
        isValidUrl ? next() : res.status(422).json('not a valid url');
    }
}

module.exports =  validateURL;