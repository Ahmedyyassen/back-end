const express = require('express');
const { creatQRcode, getQRcode } = require('../controller/qrcode.controller');

const router = express.Router();

router.route('/').post(creatQRcode)
                

router.route('/:id').get(getQRcode)

module.exports = router;