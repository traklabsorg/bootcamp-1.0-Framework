import * as dotenv from "dotenv";
import { AppConstants } from "./framework/constants/appConstants";

var request = require("request")
require('dotenv').config()


module.exports = function configuration(req:any,res:any,next:any){
    let ac = new AppConstants();
    let referrer = req[ac.REFERER];
    let authorization_token_with_bearer = req.headers['Authorization'] ==null? req.headers['authorization'] : req.headers['Authorization'];

    //'Content-Type' : process.env.CONTENT_TYPE
    console.log("inside configuration middleware 2")
    var configHeaders = {
        'Referer':referrer,
        'Content-Type':process.env.CONTENT_TYPE,
        'Authorization' : authorization_token_with_bearer
    };

    const configUri = process.env.CONFIGURATION_URL;
    var options = {
        url: configUri,
        headers : configHeaders
    };

    request(options,(error:any,res:any,body:any)=>{
            if(!error && res.statusCode==200){
                console.log("inside request");
                const data = JSON.parse(body);
                const authority = data.authority;
                // const authority = "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_Nl7rkrtXL";
                // req['configuration']['authority'] = authority;
                req.authority = authority;
                console.log(authority);
                next();
        }
    })
}