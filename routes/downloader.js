const express = require('express');
const router = express.Router();
const downloadController = require('../controllers/downloader');
const {validateUrl, validateFORMAT} = require('../middleware/urlValidation');


router.get(
  '/download',
  validateFORMAT(),
  //validateUrl(),
  downloadController.downloader
);

module.exports = router;