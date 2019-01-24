<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">

        <el-tabs v-model="activeName">
            
            <el-tab-pane label="处理记录" name="first">
                
                <el-row :gutter="20">
                    <el-col :span="12">
                        
                        <el-form-item label="处理编号">
                            <el-input placeholder="自动生成" v-model="formLabelAlign[0].handle_id" :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="处理类型">
                            <el-input placeholder="规格型号" v-model="formLabelAlign[0].handle_type" :disabled="view"></el-input>
                        </el-form-item>
                        <el-form-item label="处理人">
                            <el-input placeholder="金额" v-model="formLabelAlign[0].user_id" :disabled="view"></el-input>
                        </el-form-item>
                        <el-form-item label="处理内容">
                            <el-input placeholder="金额" v-model="formLabelAlign[0].handle_content" :disabled="view"></el-input>
                        </el-form-item>
                        
                        
                         
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="资产编码">
                            <el-input  placeholder="资产名称"  v-model="formLabelAlign[0].assets_id" :disabled="view"></el-input>
                        </el-form-item>
                        <el-form-item label="处理时间">
                            <el-date-picker style="width:100%;"
                            v-model="formLabelAlign[0].handle_time" suffix-icon="el-icon-date"
                            type="datetime"
                            placeholder="选择日期时间" :disabled="view">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="创建日期">
                            <el-date-picker style="width:100%;"
                            v-model="formLabelAlign[0].createdAt" suffix-icon="el-icon-date"
                            type="datetime"
                            placeholder="选择日期时间" :disabled="view">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="更新日期">
                            <el-date-picker style="width:100%;"
                            v-model="formLabelAlign[0].upadtedAt" suffix-icon="el-icon-date"
                            type="datetime"
                            placeholder="选择日期时间" :disabled="view">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-tab-pane>


            
        </el-tabs>
        </el-form> 
    </div>
</template>
<script>
  export default {
    props:{
        view:{
            default:function(){
                return false;
            }
        },
        formLabelAlign:{
            default:()=>{
                return {
                name: '',
                bar_code: '',
                type_id: '',
                specification: '',
                sn: '',
                metering: '',
                money: '',
                company: '',
                department: '',
                purchase_time: '',
                user_id: '',
                manager_id: '',
                warehouse_id: '',
                duration_use: '',
                source: '',
                remarks: '',
                supplier: '',
                contacts: '',
                tell: '',
                explain: '',
                image: '',
                status: '',
                expiry_time: ''
                }
            }
        }
    },
    data() {
      return {
        activeName: 'first',
        labelPosition: 'right',
        imageUrl: '',
        value: ''
      };
    },
    created:function(){       
        this.formLabelAlign=multipleSelection;
        console.log(this.formLabelAlign);
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    }
  };
</script>











<style lang="less">
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

