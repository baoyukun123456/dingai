<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">

        <el-tabs v-model="activeName">
            
      

                 
            </el-tab-pane>


                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="用户名">
                            <el-input  placeholder="用户名"  v-model="formLabelAlign.supplier" :disabled="view"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input  placeholder="密码"  v-model="formLabelAlign.tell" :disabled="view"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="姓名">
                            <el-input  placeholder="姓名"  v-model="formLabelAlign.contacts" :disabled="view"></el-input>
                        </el-form-item>
                        <el-radio v-model="radio" label="1">是否选择手工盘点</el-radio>
                    </el-col>
                </el-row>
               
    
            
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
         radio: '1',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      };
    },
    created:function(){
        // console.log(this);
        this.formLabelAlign=viewdata;
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
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

