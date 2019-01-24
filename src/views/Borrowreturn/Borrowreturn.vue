<template>
    <div>
        <!-- 面包屑导航 -->
        <da-breadcrumb></da-breadcrumb>

        <el-dialog title="新增借用" :visible.sync="dialogVisible" width="80%">
            <Newborrow></Newborrow>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="quejie">确 定</el-button>
            </span>
        </el-dialog>

        <el-tabs v-model="activeName" border>
            <el-tab-pane label="借用归还" name="first" style="text-align:left;">
                <el-row>
                    <el-col :span="18">
                        <el-button type="primary" @click="dialogVisible = true">新增</el-button>
                        <el-button type="primary" @click="guihuan" style="margin:0px 10px;">归还</el-button>
                        <el-button type="primary">打印</el-button>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <el-input placeholder="请输入内容"  class="input-with-select">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </div>
                    </el-col>
                </el-row>
                <div style="width:10px;height:10px;"></div>
                <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" border>
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column label="借用时间" width="180">
                        <template slot-scope="scope">{{ scope.row.borrow_time|date('yyyy-MM-dd hh:mm:ss') }}</template>
                    </el-table-column>
                    <el-table-column label="归还时间" width="180">
                        <template slot-scope="scope">{{ scope.row.return_time|date('yyyy-MM-dd hh:mm:ss') }}</template>
                    </el-table-column>
                    <el-table-column prop="borrow_num" label="借用单号" width="120">
                    </el-table-column>
                    <el-table-column prop="borrow_name" label="借用人" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="asset_num" label="资产编号" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="asset_name" label="资产名称" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="money" label="金额" show-overflow-tooltip>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>


        <div style="width:10px;height:20px;"></div>

        <div class="block">
    <el-pagination
     :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="sizes, prev, pager, next"
      :total="100">
    </el-pagination>
  </div>


    </div>
</template>
<script>
import daBreadcrumb from "@/components/daBreadcrumb.vue";
import Newborrow from "./Newborrow.vue";
import { borrow } from "@/api/index.js";
export default {
    data() {
        return {
            dialogVisible: false,
            activeName: "first",
            formLabelAlign: {
                borrow_name: "",
                return_time: "",
                borrow_time: ""
            },
            tableData3: [],
            multipleSelection: [],
            jiajie: {}
        };
    },
    mounted: function() {
        borrow
            .getBorrow()
            .then(res => {
                this.tableData3 = res.data.data;
            })
            .catch(err => {
                this.$message.error(err);
            });
    },
    components: {
        daBreadcrumb,
        Newborrow
    },
    methods: {
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        guihuan() {
            if (this.multipleSelection.length == 0) {
                this.$message("请选择归还的资产");
            } else {
                this.$confirm("确定要归还资产吗, 是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                    .then(() => {
                        borrow.deleteBorrow(this.multipleSelection);
                        then(res => {
                            if (res.data.code == 200) {
                                this.$message({
                                    message: "归还成功!",
                                    type: "success"
                                });
                            }
                        }).catch(err => {
                            this.$message.error(err);
                        });
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消归还"
                        });
                    });
            }
        },
        quejie() {
            borrow
                .postBorrow(this.jiajie)
                .then(res => {
                    if (res.data.code == 200) {
                        this.dialogVisible = false;
                        this.$message({
                            message: "资产添加成功!",
                            type: "success"
                        });
                        borrow
                            .getBorrow()
                            .then(res => {
                                this.tableData3 = res.data.data;
                            })
                            .catch(err => {
                                this.$message.error(err);
                            });
                    }
                })
                .catch(err => {
                    this.$message.error(err);
                });
        }
    }
};
</script>
