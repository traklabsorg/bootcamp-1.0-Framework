
var request = require("request");
require('dotenv').config()

async function requester1(options:any){

    return await new Promise((resolve:any,reject:any)=>{
        request(options, (error:any,response:any,body:any)=>{
            let data = JSON.parse(body);
            if(!error && response.statusCode==200 && data.length!=0){
                console.log(data.length);
                console.log(typeof data);
                resolve(body);
            }
            else {
                throw new Error("Something went wrong");
            }
        })
    })
}


module.exports = function authorizeToken(req:any, res:any, next:any){
    console.log("authorization middleware worked");
    let operationVerb = "Create";
    let featureName = "Smartup_Channels";
    let claims = "";

    try{
        let platform_claim_url = process.env.PLATFORM_CLAIM_URL;
        // let platform_claim_url = process.env.PLATFORM_LOCAL_URL;
        let url = "";
        // let email = req.data.email;
        // let siteUrl = req.data.host;
        //take host from req.referer
        if(operationVerb!=null && featureName!=null)
        {
            console.log("In url if block");
            url += process.env.EMAIL as string + "/" + process.env.SITE_URL as string + "/" + process.env.MODULE_NAME as string+
                    "/" + operationVerb + "/" + featureName;
            // url += "aayush@trakinvest.com/" + "localhost:3005/" + "SmartUp"+
            //     "/" + operationVerb + "/" + featureName;
            // console.log("url if block   " + url);
        }
        else
        {
            console.log("In url else block");
            if(process.env.MODULE_NAME!=null)
            {
                url += process.env.EMAIL + "/" + process.env.SITE_URL + "/" + process.env.MODULE_NAME;
            }
            else
            {
                url += process.env.EMAIL + "/" + process.env.SITE_URL;
            }
        }
        platform_claim_url +=url;
        console.log("claim url       " +platform_claim_url);

        // let AuthorizationHeaders = {
        //     "Special-Key": process.env.SPECIAL_KEY as string,
        //     "Content-Type" : process.env.CONTENT_TYPE as string,
        //     "Referer" : process.env.REFERER as string
        // }

        //Provided conrete values for now, later will loaded from request

        let AuthorizationHeaders = {
            "Content-Type" : "application/json"
        }

        let options = {
            url: platform_claim_url,
            headers: AuthorizationHeaders
        }

        let result = requester1(options)
            .then((res)=>{
                console.log(res);
                next();
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    catch(e){
        // console.log("error  " + e);
        // throw new Error("Something went wrong");
        res.status(400).send("error");
    }

}


//https://platform.antronsys.com/v1/Authorize/GetClaims/aayush@trakinvest.com/smartup.trakinvest.com/SmartUp/Create/Smartup_Channels