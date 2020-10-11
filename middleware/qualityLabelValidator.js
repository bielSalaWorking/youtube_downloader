
const validateQualityLabel = () => {
    return async (req,res,next) => {
       try {
            const {QUALITY_LABEL} = req.query;
            const qualityLabels = new Set();
            
            const urlInfo = await ytdl.getInfo(URL);
            const formats = ytdl.filterFormats(info.formats, 'videoonly' );

            formats.map(format => qualityLabels.add(format.quality));

            return formats.has(QUALITY_LABEL) 
            ? next()
            : res.status(404).json('label not  exists') 

        } catch (error) {
            res.status(422).json(error)
        }
        
    }
}
module.exports = validateQualityLabel;