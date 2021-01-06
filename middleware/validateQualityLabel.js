const validateQualityLabel = () => {
    return async(req,res,next) => {
        const {URL, qualityLabel} = req.query;

        if(!qualityLabel) return res.status(404).json('No Quality label selected');
        const qualityLabels = await findQualityLabels(URL);

        return qualityLabels.has(qualityLabel)
        ? next()
        :  res.status(404).json(`Quality label ${qualityLabel} not found`); 
    }
}
module.exports = validateQualityLabel;