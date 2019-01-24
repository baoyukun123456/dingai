<template>
    <div>
        <el-input placeholder="请点击选择" v-model="yuangongming" class="input-with-select" disabled="true">
            <el-button slot="append" icon="el-icon-xuanze" @click="jieyong"></el-button>
        </el-input>

        <!-- 一级对话框 -->
        <el-dialog title="借用人" :visible.sync="dialogVisible" width="80%" :before-close="handleClose" append-to-body style="text-align:center;">
            <el-button type="primary" style="float:left;" @click="tianjia">添加员工</el-button>
            <el-input placeholder="输入员工名或者id" v-model="input5" class="input-with-select" style="float:right; width:50%;">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <div style="width:100px; height:50px;"></div>

            <!-- 表格开始 -->
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed prop="idcard" label="员工id" width="150">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="gongsi" label="公司" width="120">
                </el-table-column>
                <el-table-column prop="bumen" label="部门" width="120">
                </el-table-column>
                <el-table-column prop="shouji" label="手机号" width="300">
                </el-table-column>
                <el-table-column prop="youxiang" label="邮箱" width="120">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="xuanzeni(scope.row)" type="text" size="small">选择</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 表格结束 -->

            <!-- <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span> -->
        </el-dialog>
        <!-- 一级对话框结束 -->

        <!-- 添加员工的对话框 -->
        <el-dialog title="添加员工" :visible.sync="tianjiakuang" width="80%" :before-close="handleClose" append-to-body style="text-align:center;">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="名字">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input v-model="formLabelAlign.shouji"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="公司">
                        <el-input v-model="formLabelAlign.gongsi"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="formLabelAlign.youxiang"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="部门">
                        <el-input v-model="formLabelAlign.bumen"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="tianjiakuang = false">取 消</el-button>
                <el-button type="primary" @click="quedingtianjia">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 添加员工的对话框结束 -->
    </div>
</template>
<script>
export default {
    methods: {
        jieyong() {
            this.dialogVisible = true;
        },
        tianjia() {
            this.tianjiakuang = true;
        },
        quedingtianjia(){
            if(this.formLabelAlign.name==""){
                this.$message('姓名必须要填写');
                return ;
            }
            this.tianjiakuang = false;
            this.tableData.push(this.formLabelAlign);
            this.formLabelAlign={
                name: '',
                idcard: '',
                shouji: '',
                youxiang: '',
                gongsi: '',
                bumen: ''
            }
        },
        xuanzeni(row){
            
            this.yuangongming=row.name;
            this.dialogVisible=false;
        }
    },
    data() {
        return {
            yuangongming:"",
            formLabelAlign: {
                name: '',
                idcard: '',
                shouji: '',
                youxiang: '',
                gongsi: '',
                bumen: ''
            },
            tianjiakuang: false,
            dialogVisible: false,
            tableData: [
                {
                    idcard: "11111",
                    name: "王小虎淡定",
                    gongsi: "优逸客",
                    bumen: "实训不",
                    shouji: "16516416513215",
                    youxiang: "1651515@126.com"
                },
                {
                    idcard: "11111",
                    name: "王淡定",
                    gongsi: "优逸客",
                    bumen: "实训不",
                    shouji: "16516416513215",
                    youxiang: "1651515@126.com"
                },
                {
                    idcard: "11111",
                    name: "阿斯顿",
                    gongsi: "优逸客",
                    bumen: "实训不",
                    shouji: "16516416513215",
                    youxiang: "1651515@126.com"
                },
                {
                    idcard: "11111",
                    name: "的滴答声",
                    gongsi: "优逸客",
                    bumen: "实训不",
                    shouji: "16516416513215",
                    youxiang: "1651515@126.com"
                }
            ]
        };
    }
};
</script>

