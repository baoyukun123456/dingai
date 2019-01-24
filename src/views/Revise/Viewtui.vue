<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-row :gutter="20">
            <el-col :span="8">
                <el-form-item label="变更单号">
                    <el-input v-model="showretiringdata.retiring_number" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="业务日期">
                    <el-input v-model="showretiringdata.retiring_time" disabled="true"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8"> 
                <el-form-item label="使用人">
                    <el-input v-model="showretiringdata.handle_name" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="存放地点">
                    <el-input v-model="showretiringdata.warehouse_name" disabled="true"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="使用部门">
                    <el-input v-model="showretiringdata.department_name" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="资产类别">
                    <el-input v-model="showretiringdata.type_id" disabled="true"></el-input>
                </el-form-item>
            </el-col>
             <el-col :span="8">
                <el-form-item label="资产名称">
                    <el-input v-model="showretiringdata.name" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="showretiringdata.retiring_remarks" disabled="true"></el-input>
                </el-form-item>
            </el-col>
             <el-col :span="8">
                <el-form-item label="使用公司">
                    <el-input v-model="showretiringdata.company_name" disabled="true"></el-input>
                </el-form-item>
            </el-col>
             <el-col :span="8">
                <el-form-item label="区域">
                    <el-input v-model="showretiringdata.local" disabled="true"></el-input>
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

