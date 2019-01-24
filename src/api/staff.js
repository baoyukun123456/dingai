import axios from "axios"; 

//获取角色
function getStaff(){
    return axios({
        method:"get",
        url:'/system/staff'
    })
}
//添加角色
function postStaff(data){
    return axios({
        method:"post",
        url:'/system/staff',
        data:data
    })
}
//删除角色
function deleteStaff(ids){
    return axios({
        method:"delete",
        url:'/system/staff?id='+ids
    })
}
//编辑角色
function putStaff(id,data){
    return axios({
        method:"put",
        url:'/system/staff?id='+id,
        data:data
    })
}
export default {
    getStaff,
    postStaff,
    deleteStaff,
    putStaff
}
