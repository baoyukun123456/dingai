
import axios from "axios"; 

//获取借用
function getBorrow(){
    return axios({
        method:"get",
        url:'/borrow'
    })
}

//添加借用
function postBorrow(data){
    return axios({
        method:"post",
        url:'/borrow',
        data:data
    })
}

//修改借用
function putBorrow(data){
    return axios({
        method:"put",
        url:'/borrow',
        data:data
    })
}



export default {
    getBorrow,
    postBorrow,
    putBorrow
}
