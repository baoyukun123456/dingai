
import axios from "axios"; 

//获取资产
function getRetiring(){
    return axios({
        method:"get",
        url:'/retiring'
    })
}

//添加资产
function postRetiring(data){
    return axios({
        method:"post",
        url:'/retiring',
        data:data
    })
}





export default {
    getRetiring,
    postRetiring,
}
