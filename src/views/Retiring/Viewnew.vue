<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-row :gutter="20">
            <el-col :span="8">
                <el-form-item label="领用单号">
                    <el-input v-model="showcollardata.collar_number" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="领用时间">
                    <el-input v-model="showcollardata.collar_time" disabled="true"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="领用人">
                    <el-input v-model="showcollardata.personnel_name" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="部门">
                    <el-input v-model="showcollardata.department_name" disabled="true"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="领用公司">
                    <el-input v-model="showcollardata.company_name" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="预计退库">
                    <el-input v-model="showcollardata.expect_retreat" disabled="true"></el-input>
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
