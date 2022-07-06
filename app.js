require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express();
const port = 3000;
const requestMiddleware = (req, res, next) => { console.log( "ip:", req.ip, "domain:", req.rawHeaders[1], "method:", req.method, "Request URL:", req.originalUrl, "-", new Date() ); next(); };
const oembedRouter = require("./routes/oembed");
const res = require('express/lib/response');
const path = require('path')

//미들웨어
app.use(express.static('views'))
app.use(cors());
app.use(express.json());
app.use(requestMiddleware)
app.use("/", oembedRouter);

// 페이지 연결
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + "/views/htmlOembed.html"))
})

// 서버열기
app.listen(port,()=>{
    console.log(port, "server on")
})