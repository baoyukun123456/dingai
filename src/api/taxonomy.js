import axios from "axios"; 

//获取
function getTaxonomy(){
    return axios({
        method:"get",
        url:'/statistics/taxonomy'
    })
}

export default {
    getTaxonomy
}