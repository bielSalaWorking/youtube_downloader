//TODO: Need to handle exceptions and errors (By now this simple controller only give the possibilite to download video only)
//TODO: Need to put the quality label selected and the correct format in order to download it (by now default format is mp4)
//FIXME: filename depends on the video title but most of the cases is to long
//FIXME: not mp4 all the download depend if only audio or audio-video

const path = require('path');
const ytdl = require('ytdl-core');
const findQualityLabels = require("../utils/findQualityLabels")

exports.downloader = async (req, res) => {
    try {
     const {URL, qualityLabel} = req.query;
     const {videoDetails: {title}} = await ytdl.getInfo(URL);
     //This line attach a header to the response to download the video
     res.header('Content-Disposition',`attachment; filename=${title.toString().trim()}.mp4`)
      ytdl(URL, {
             format: 'mp4'
      }).pipe(res);
    }
     catch (error) {
        return res.status(433).json(error)
    }
 }
 exports.qualityLabels = async (req, res) => {
     try {
         const {URL} = req.query;
         const qualityLabels = await findQualityLabels(URL);

         return res.status(200).send(qualityLabels);
     }
     catch (error) {
         return res.status(422).json(error.message);
      }
 }
