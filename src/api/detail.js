import axios from "axios"; 

//获取
function getDetail(){
    return axios({
        method:"get",
        url:'/statistics/detail'
    })
}

export default {
    getDetail
}