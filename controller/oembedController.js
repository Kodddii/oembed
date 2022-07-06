const res = require("express/lib/response")
const axios = require("axios")

const oembed = async (req,res)=>{
    const reqURL = req.query.url
    const oembedURL = `https://iframe.ly/api/oembed?url=${reqURL}&api_key=${process.env.APIKEY}`
    await axios.get(oembedURL).then((response)=>{
        res.status(response.status).json(response.data)
    }).catch((err)=>{
        console.log("error is ",err)
    })
}

module.exports = {
    oembed
}