const findQualityLabel = require("../utils/findQualityLabels");
const validateURL = () => {
    return async(req,res,next) => {
        const {URL} = req.query;
        if(!URL) return res.status(404).json('No URL found');
        const isValidUrl = await ytdl.validateURL(URL);

        return isValidUrl
        ? next()
        : res.status(422).json('Not a valid Url');
    }
}
module.exports = validateURL;