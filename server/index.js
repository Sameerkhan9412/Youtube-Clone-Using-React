const express=require("express");
const ytdl = require('ytdl-core');
require("dotenv").config();
const app=express();
const PORT=process.env.PORT;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to my Webapp");
})


app.get("/download",async(req,res)=>{
    try {
        let { url,itemQuality } = req.query;
        const info = await ytdl.getInfo(url);
        const format = ytdl.chooseFormat(info.formats, { quality: itemQuality });
        const title = info.videoDetails.title;
        res.setHeader(
          "Content-Disposition",
          `attachment; filename*=UTF-8''${encodeURIComponent(title)}.mp4`
        );
        ytdl(url, { format }).pipe(res);
      } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
      }
})

app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`);
})