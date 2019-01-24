<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-row :gutter="20">
            <el-col :span="8">
                <el-form-item label="变更单号">
                    <el-input v-model="showcollardata.collar_number" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="联系方式">
                    <el-input v-model="showcollardata.expect_retreat" disabled="true"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="联系人">
                    <el-input v-model="showcollardata.personnel_name" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="负责人">
                    <el-input v-model="showcollardata.response_name" disabled="true"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="业务日期">
                    <el-input v-model="showcollardata.collar_time" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="维保到期">
                    <el-input v-model="showcollardata.expect_retreat" disabled="true"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="供应商">
                    <el-input v-model="showcollardata.promise_name" disabled="true"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="签字">
                    <el-input v-model="showcollardata.mark" disabled="true"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        </el-form>
    </div>
</template>
<script>
export default {
    props:{
        showcollardata:{
            default:function(){
                return {
                collar_number:"",
                collar_time:"",
                personnel_name:"",
                department_name:"",
                company_name:"",
                expect_retreat:""
                }
            }
        }
        }
}
</script>
