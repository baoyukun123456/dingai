<template>
    <div>
        <daBreadcrumb></daBreadcrumb>
        <el-row :gutter="20">
            <el-col :span="6">

                <!-- <el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange">

                </el-tree> -->

            </el-col>
            <el-col :span="24" style="text-align:left;">
                <el-button type="primary" @click="zengjia">增加</el-button>
                <el-button type="danger" @click="del" style="margin:0px 20px;">删除</el-button>
                <!-- <el-dropdown split-button type="primary" style="margin:0px 20px;">
                    编辑
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click="del">删除</el-dropdown-item>
                        <el-dropdown-item>解绑微信</el-dropdown-item>
                        <el-dropdown-item>员工编码规则</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown> -->
                <el-dropdown split-button type="primary">
                    导入/导出
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>批量导入</el-dropdown-item>
                        <el-dropdown-item>批量修改</el-dropdown-item>
                        <el-dropdown-item>导出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-input placeholder="姓名或工号" v-model="input5" class="input-with-select" style="float:right;width:25%;">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>

                <!-- 表格展示开始 -->
                <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%;margin-top:20px;" @selection-change="handleSelectionChange" border>
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column label="关联微信" width="120">
                        <template slot-scope="scope">
                            <span v-if="!scope.row.wechats">未关联</span>
                            <span v-else>已关联</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="staff_name" label="员工姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="staff_num" label="员工编号" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="gongsi" label="公司" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="shouji" label="手机号" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="bumen" label="部门" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="youxiang" label="邮箱" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="state" label="状态" show-overflow-tooltip>
                        <template slot-scope="scope">
                            <span v-if="scope.row.state">在职</span>
                            <span v-else>离职</span>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="xiugai(scope.row)">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- 表格展示结束 -->
            </el-col>
        </el-row>

        <!-- 增加员工对话框 -->
        <el-dialog title="添加员工" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">

            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="名字">
                    <el-input v-model="formLabelAlign.staff_name"></el-input>
                </el-form-item>
                <el-form-item label="工号">
                    <el-input v-model="formLabelAlign.staff_num"></el-input>
                </el-form-item>
                <el-form-item label="公司">
                    <el-select v-model="formLabelAlign.gongsi" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="部门">
                    <el-select v-model="formLabelAlign.bumen" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="手机">
                    <el-input v-model="formLabelAlign.shouji"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="formLabelAlign.youxiang"></el-input>
                </el-form-item>
                <el-form-item label="在职状态">
                    <el-select v-model="formLabelAlign.state" placeholder="请选择">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="zengyuan">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 增加员工对话框结束 -->

        <!-- 修改员工对话框 -->
        <el-dialog title="修改信息" :visible.sync="dialogVisible1" width="30%" :before-close="handleClose">

            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="名字">
                    <el-input v-model="formLabelAlign.staff_name"></el-input>
                </el-form-item>
                <el-form-item label="工号">
                    <el-input v-model="formLabelAlign.staff_num"></el-input>
                </el-form-item>
                <el-form-item label="公司">
                    <el-select v-model="formLabelAlign.gongsi" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="部门">
                    <el-select v-model="formLabelAlign.bumen" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="手机">
                    <el-input v-model="formLabelAlign.shouji"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="formLabelAlign.youxiang"></el-input>
                </el-form-item>
                <el-form-item label="在职状态">
                    <el-select v-model="formLabelAlign.state" placeholder="请选择">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="gaiyuan">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 修改员工对话框结束 -->
    </div>
</template>
<script>
import daBreadcrumb from "@/components/daBreadcrumb.vue";
import { staff } from "@/api";
export default {
    components: {
        daBreadcrumb
    },
    data() {
        return {
            props: {
                label: "name",
                children: "zones"
            },
            count: 1,
            options2: [
                {
                    value: true,
                    label: "在职"
                },
                {
                    value: false,
                    label: "离职"
                }
            ],
            options: [
                {
                    value: "选项1",
                    label: "黄金糕"
                },
                {
                    value: "选项2",
                    label: "双皮奶"
                },
                {
                    value: "选项3",
                    label: "蚵仔煎"
                },
                {
                    value: "选项4",
                    label: "龙须面"
                },
                {
                    value: "选项5",
                    label: "北京烤鸭"
                }
            ],
            value: "",
            formLabelAlign: {
                staff_num: "",
                staff_name: "",
                gongsi: "",
                bumen: "",
                shouji: "",
                youxiang: "",
                state: ""
            },
            dialogVisible: false,
            dialogVisible1: false,
            tableData3: [],
            multipleSelection: []
        };
    },
    mounted: function() {
        staff
            .getStaff()
            .then(res => {
                this.tableData3 = res.data.data;
            })
            .catch(err => {
                this.$message.error(err);
            });
    },
    methods: {
        handleSelectionChange(val) {
            console.log(val);
            this.multipleSelection = val;
        },
        del() {
            console.log(this.multipleSelection);
            if (this.multipleSelection.length == 0) {
                this.$message.error("请选择你要删除的内容");
                return;
            }
            this.$confirm("此操作将永久删除这些数据, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    staff.deleteStaff(this.multipleSelection).then(res => {
                        if (res.data.code == 200) {
                            this.$message({
                                type: "success",
                                message: "删除成功!"
                            });
                        } else {
                            this.$message({
                                type: "info",
                                message: "删除失败哎"
                            });
                        }
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        },
        xiugai(val) {
            this.formLabelAlign = val;
            this.dialogVisible1 = true;
        },
        zengjia() {
            this.dialogVisible = true;
            this.formLabelAlign = {
                staff_num: "",
                staff_name: "",
                gongsi: "",
                bumen: "",
                shouji: "",
                youxiang: "",
                state: ""
            };
        },
        loadNode(node, resolve) {
            if (node.level === 0) {
                return resolve([{ name: "region1" }, { name: "region2" }]);
            }
            if (node.level > 3) return resolve([]);

            var hasChild;
            if (node.data.name === "region1") {
                hasChild = true;
            } else if (node.data.name === "region2") {
                hasChild = false;
            } else {
                hasChild = Math.random() > 0.5;
            }

            setTimeout(() => {
                var data;
                if (hasChild) {
                    data = [
                        {
                            name: "zone" + this.count++
                        },
                        {
                            name: "zone" + this.count++
                        }
                    ];
                } else {
                    data = [];
                }

                resolve(data);
            }, 500);
        },
        zengyuan() {
            this.dialogVisible = false;
            staff
                .postStaff(this.formLabelAlign)
                .then(res => {
                    if (res.data.code == 200) {
                        this.$message({
                            type: "success",
                            message: "添加成功!"
                        });
                    } else {
                        this.$message({
                            type: "success",
                            message: "添加失败!"
                        });
                    }
                })
                .catch(err => {
                    this.$message({
                        type: "success",
                        message: "添加失败!"
                    });
                });
        },
        gaiyuan() {
            staff
                .putStaff(this.formLabelAlign)
                .then(res => {
                    if (res.data.code == 200) {
                        this.dialogVisible1 = false;
                        this.$message({
                            type: "success",
                            message: "修改成功!"
                        });
                    } else {
                        this.$message({
                            type: "success",
                            message: "修改失败!"
                        });
                    }
                })
                .catch(err => {
                    this.$message({
                        type: "success",
                        message: "修改失败!"
                    });
                });
        }
    }
};
</script>
<style lang="less">
.el-select {
    width: 100%;
}
</style>
