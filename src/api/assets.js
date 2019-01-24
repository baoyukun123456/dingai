
import axios from "axios"; 

//获取资产
function getAssets(){
    return axios({
        method:"get",
        url:'/assets'
    })
}

//添加资产
function postAssets(data){
    return axios({
        method:"post",
        url:'/assets',
        data:data
    })
}

//删除资产
function deleteAssets(ids){
    return axios({
        method:"delete",
        url:'/assets?id='+ids
    })
}


//编辑资产
function putAssets(id,data){
    return axios({
        method:"put",
        url:'/assets?id='+id,
        data:data
    })
}


export default {
    getAssets,
    postAssets,
    deleteAssets,
    putAssets
}
