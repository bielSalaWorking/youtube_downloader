const {Router} = require('express');
const router = Router();
const downloadController = require('../controllers/downloader');
const validateQualityLabel = require('../middleware/validateQualityLabel');
const validateURL = require('../middleware/validateUrl');

router.get(
  '/download',
  validateQualityLabel(),
  validateURL(),
  downloadController.downloader
);
 router.get(
   '/qualityLabels',
   downloadController.qualityLabels
 )

module.exports = router;
