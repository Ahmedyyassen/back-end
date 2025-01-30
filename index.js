require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8080
const cors = require('cors');
const app = express();
const qrcodeRouter = require('./routers/qrcode.routes')

app.use(cors());
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended : false}));

app.use('/qrcode', qrcodeRouter)



app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
