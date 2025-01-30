const { json } = require('express');
const qrcode = require('qrcode');

let final;

const creatQRcode =  (req, res) => {
    try {
        const facke = req.body.facke;
        final = req.body.real;
        qrcode.toDataURL(facke, (err, dataUrl) => {
        if (err) {
            return res.status(500).json({ error: 'Error generating QR code' });
         }         
       res.status(200).json({ qrcode: dataUrl })
      });
    } catch (error) {
        req.status(500).json({ error: error.message });
    }
}



const getQRcode = (req, res) => {
         const { id }  = req.params;
         if (!id) {
             return res.status(400).json({ error: 'Invalid link' });
         }
         res.render("redirectPage", {id: id});
}

module.exports = { creatQRcode, getQRcode };