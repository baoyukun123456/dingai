<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-row :gutter="20">
            <el-col :span="8">
                <el-form-item label="领用单号">
                    <el-input v-model="showretiringdata.retiring_number" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="领用时间">
                    <el-input v-model="showretiringdata.retiring_time" disabled="true"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="领用人">
                    <el-input v-model="showretiringdata.handle_name" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="部门">
                    <el-input v-model="showretiringdata.warehouse_name" disabled="true"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="领用公司">
                    <el-input v-model="showretiringdata.retiring_remarks" disabled="true"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        </el-form>
    </div>
</template>
<script>
export default {
    props:{
        showretiringdata:{
            default:function(){
                return {
                    retiring_number:"",
                    retiring_time:"",
                    handle_name:"",
                    warehouse_name:"",
                    retiring_remarks:""
                }
            }
        }
    }
}
</script>

