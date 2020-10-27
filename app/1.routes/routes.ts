const express = require("express");
const router = express.Router();
const authorization = require('../../authorization');
const authentication = require("../../authentication");
const configuration = require("../../configuration");
import { Sequelize } from "sequelize/types";
import FacadeBase from "../../framework/facade/facadeBase";
import {ChannelFacade} from "../2.facade/channelFacade";
import { ChannelDto } from "../3.1 dtos/channelDto";
import { Channel } from "../4.1entities/channel";

// configuration, authentication, authorization,

router.get("/channels",configuration, authentication, authorization,function(req:any,res:any){
    console.log("inside channels123");
    let channelFacade = new ChannelFacade();
    let result = channelFacade.getAllChannels();
    res.send("You are on channels route");
});

router.get("/channels/:id", function(req:any,res:any){
    // let channelFacade = new ChannelFacade();
    // let result = channelFacade.get();
    // res.render(result,200);
    res.send("hello with id ");
});

router.post("/channels",function(req:any,res:any){
    console.log('inside channels');
    let channelFacade = new FacadeBase<Channel, ChannelDto>(Channel, ChannelDto);
    //Need to type cast to RequestModel

    let result = channelFacade.post(Channel, ChannelDto, req.body);
    res.send("success");
});

router.put("/channels/:id", configuration, authentication, authorization, function(req:any,res:any){
    let channelFacade = new FacadeBase<Channel, ChannelDto>(Channel, ChannelDto);
    //Need to type cast to RequestModel

    res.send("success");
});

router.delete("/channels/:id", configuration, authentication, authorization, function(req:any,res:any){
    let channelFacade = new FacadeBase<Channel, ChannelDto>(Channel, ChannelDto);
    //Need to type cast to RequestModel

    //let result = channelFacade.put(Channel, ChannelDto, 3, req.body);
    res.send("success");
});

module.exports = router;