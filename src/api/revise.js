
import axios from "axios"; 

//获取资产
function getAssetinfo(){
    return axios({
        method:"get",
        url:'/assetinfo'
    })
}

///添加资产
function postAssetinfo(data){
    return axios({
        method:"post",
        url:'/assetinfo',
        data:data
    })
}



//获取资产
function getGuarantee(){
    return axios({
        method:"get",
        url:'/guarantee'
    })
}

///添加资产
function postGuarantee(data){
    return axios({
        method:"post",
        url:'/guarantee',
        data:data
    })
}

export default {

    getAssetinfo,
    postAssetinfo,
    getGuarantee,
    postGuarantee
}
