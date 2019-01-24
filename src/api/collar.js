import axios from "axios"; 

//获取资产
function getCollar(){
    return axios({
        method:"get",
        url:'/collar'
    })
}

//添加资产
function postCollar(data){
    return axios({
        method:"post",
        url:'/collar',
        data:data
    })
}

export default {
    getCollar,
    postCollar,
}
