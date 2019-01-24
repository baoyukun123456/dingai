import axios from "axios"; 
//维修管理
//获取
function getRepair(){
    return axios({
        method:"get",
        url:'/repair'
    })
}

//添加
function postRepair(data){
    return axios({
        method:"post",
        url:'/repair',
        data:data
    })
}

//删除
function deleteRepair(ids){
    return axios({
        method:"delete",
        url:'/repair?id='+ids
    })
}


//编辑
function putRepair(id,data){
    return axios({
        method:"put",
        url:'/repair?id='+id,
        data:data
    })
}


export default {
    getRepair,
    postRepair,
    deleteRepair,
    putRepair
}