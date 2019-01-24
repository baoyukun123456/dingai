import axios from "axios"; 

//获取角色
function getRoles(){
    return axios({
        method:"get",
        url:'/system/role'
    })
}
//添加角色
function postRoles(data){
    return axios({
        method:"post",
        url:'/system/role',
        data:data
    })
}
//删除角色
function deleteRoles(ids){
    return axios({
        method:"delete",
        url:'/system/role?id='+ids
    })
}
//编辑角色
function putRoles(id,data){
    return axios({
        method:"put",
        url:'/system/role?id='+id,
        data:data
    })
}
export default {
    getRoles,
    postRoles,
    deleteRoles,
    putRoles
}
