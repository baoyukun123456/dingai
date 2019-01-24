
import axios from "axios"; 

//获取资产
function getUser(){
    return axios({
        method:"get",
        url:'/system/user'
    })
}

//添加资产
function postUser(data){
    return axios({
        method:"post",
        url:'/system/user',
        data:data
    })
}



//编辑资产
function putUser(id,data){
    return axios({
        method:"put",
        url:'/system/user?id='+id,
        data:data
    })
}


export default {
    getUser,
    postUser,
    putUser
}
