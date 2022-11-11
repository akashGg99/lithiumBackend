const axios=require("axios")


let memeList = async function(req,res){
    try{
        let option={
                method:"get",
                url:"https://api.imgflip.com/get_memes"
                }

        let result= await axios(option)
        res.send({output:result.data})
    }
    catch(err){
                res.status(500).send({msg:err.message})
    }
}


let createMeme = async function(req,res){
    try{
        let {tempelate_id,text0,text1,username,password}=req.query
        let option={
                    method:"get",
                    url:`https://api.imgflip.com/caption_image?tempelate_id=${tempelate_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
                  }
        
        let result= await axios(option)

        res.send({output:result.data})
    }
    catch(err){
        res.status(500).send({msg:err.message})
}
}


module.exports.memeList=memeList