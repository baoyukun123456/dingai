import axios from "axios"; 

//获取
function getMonthly(){
    return axios({
        method:"get",
        url:'/statistics/monthly'
    })
}

export default {
    getMonthly
}