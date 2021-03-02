const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');
const router = express.Router();


router.get('/', function (req, res) {
 res.sendFile(path.join(__dirname+'/public/index.html'));
});

router.get('/game/shoodaun.bin', function (req,res) {
    res.sendFile(path.join(__dirname+'/game/shoodaun.bin'));
});
router.get('/Ultimate%20Shoo-daun!!.data', function (req,res) {
    res.sendFile(path.join(__dirname+'/game/shoodaun.data'));
});
app.use('/', router);
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});