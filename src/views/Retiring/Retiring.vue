<template>
    <div>
        <!-- 面包屑导航 -->
        <da-breadcrumb></da-breadcrumb>
        <!-- 弹出框 -->
        <el-dialog title="新增领用" :visible.sync="outerVisible" width="80%">

            <Newcollar></Newcollar>

            <span slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">取 消</el-button>
                <el-button type="primary" @click="queling">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 弹窗结束 -->
        <el-tabs v-model="activeName">
            <el-tab-pane label="领用" name="first">
                <div style="float:left;">
                    <el-button plain @click="outerVisible = true">新增领用</el-button>
                    <!-- <el-button type="primary" style="margin:0px 10px;">打印</el-button> -->
                    <el-button type="primary">导出</el-button>
                </div>

                <div style="float: right;">
                    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <div style="width:50px;height:60px"></div>
                <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange" tooltip-effect="dark" ref="multipleTable">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column fixed prop="collar_number" label="领用单号" width="200">
                    </el-table-column>
                    <el-table-column prop="collar_time" label="领用时间" width="180">
                        <template slot-scope="scope">{{ scope.row.collar_time|date('yyyy-MM-dd hh:mm:ss') }}</template>

                    </el-table-column>
                    <el-table-column prop="personnel_name" label="领用人" width="120">
                    </el-table-column>
                    <el-table-column prop="department_name" label="领用部门" width="150">
                    </el-table-column>
                    <el-table-column prop="company_name" label="领用使用公司" width="150">
                    </el-table-column>
                    <el-table-column prop="expect_retreat" label="预计退库时间" width="180">
                        <template slot-scope="scope">{{ scope.row.expect_retreat|date('yyyy-MM-dd hh:mm:ss') }}</template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button @click="showcollar(scope.row)" type="text" size="small">查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <div class="block">
                    <el-pagination  :page-sizes="[5, 10, 20, 30]" :page-size="5" layout="sizes, prev, pager, next" :total="tableData.length">
                    </el-pagination>
                </div>

            </el-tab-pane>

            <!-- 新增的查看对话框 -->
            <el-dialog title="新增领用查看" :visible.sync="newshowcollar" width="80%" :before-close="handleClose">
                <Viewnew :showcollardata="showcollardata"></Viewnew>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="newshowcollar = false">取 消</el-button>
                    <el-button type="primary" @click="newshowcollar = false">确 定</el-button>
                </span>
            </el-dialog>
            <!-- 新增的查看对话框结束 -->

            <!-- 新增退库对话框 -->
            <el-dialog :visible.sync="dialogVisible" width="80%" title="新增退库" :before-close="handleClose">
                <Newretreats></Newretreats>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="quetui">确 定</el-button>
                </span>
            </el-dialog>
            <!-- 新增退库对话框结束 -->
            <el-tab-pane label="退库" name="second">
                <div style="float:left;">
                    <el-button plain @click="dialogVisible = true">新增退库</el-button>
                    <el-button type="primary">打印</el-button>
                    <el-button type="primary" @click="export2Excel">导出</el-button>
                </div>
                <div style="float: right;">
                    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>

                <div style="width:50px;height:50px;"></div>

                <el-table :data="tableData2" border style="width: 100%" @selection-change="handleSelectionChange" tooltip-effect="dark" ref="multipleTable" id="out-table1">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column fixed prop="retiring_number" label="退库单号" width="150">
                    </el-table-column>
                    <el-table-column prop="handle_name" label="退库处理人" width="120">
                    </el-table-column>
                    <el-table-column prop="retiring_time" label="退库时间" width="200">
                        <template slot-scope="scope">{{ scope.row.retiring_time|date('yyyy-MM-dd hh:mm:ss') }}</template>
                    </el-table-column>
                    <el-table-column prop="retiring_remarks" label="退库原因" width="300">
                    </el-table-column>
                    <el-table-column prop="warehouse_name" label="退库仓库" width="300">
                    </el-table-column>
                    <!-- <el-table-column fixed="right" label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button @click="showRetiring(scope.row)" type="text" size="small">查看</el-button>
                        </template>
                    </el-table-column> -->
                </el-table>

                <!-- 新增退库查看 -->
                <el-dialog title="查看新增退库" :visible.sync="viewtuiku" width="80%" :before-close="handleClose">
                    <Viewtui :showretiringdata="showretiringdata"></Viewtui>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="viewtuiku = false">取 消</el-button>
                        <el-button type="primary" @click="viewtuiku = false">确 定</el-button>
                    </span>
                </el-dialog>
                <!-- 新增退库查看结束 -->

                <div class="block">
                    <el-pagination  :page-sizes="[5, 10, 20, 30]" :page-size="5" layout="sizes, prev, pager, next" :total="100">
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import daBreadcrumb from "@/components/daBreadcrumb.vue";
import Newcollar from "./Newcollar.vue";
import Newretreats from "./Newretreats.vue";
import Viewnew from "./Viewnew.vue";
import Viewtui from "./Viewtui.vue";
import { collar } from "@/api";
import { retiring } from "@/api";
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
    data() {
        return {
            input5:"",
            outerVisible: false,
            dialogVisible: false,
            newshowcollar: false,
            showcollardata: {},
            viewtuiku: false,
            showretiringdata: {},
            activeName: "first",
            tableData: [],
            tableData2: [],
            multipleSelection: [],
            jialingyong:{},
            jiatuiku:{}
        };
    },
    mounted: function() {
        collar
            .getCollar()
            .then(res => {
                this.tableData = res.data.data;
            })
            .catch(err => {
                this.$message.error(err);
            });
        retiring
            .getRetiring()
            .then(res => {
                this.tableData2 = res.data.data;
            })
            .catch(err => {
                this.$message.error(err);
            });
    },
    components: {
        daBreadcrumb,
        Newcollar,
        Newretreats,
        Viewnew,
        Viewtui
    },
    methods: {
        export2Excel () {
         /* generate workbook object from table */
         var wb = XLSX.utils.table_to_book(document.querySelector('#out-table1'))
         /* get binary string as output */
         var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
         try {
             FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '退库资产.xlsx')
         } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
         return wbout
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleClose(done) {
            this.$confirm("确认关闭？")
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        },
        showcollar(row) {
            this.showcollardata = row;
            this.newshowcollar = true;
        },
        showRetiring(row) {
            this.showretiringdata = row;
            this.viewtuiku = true;
        },
        quetui(){
            this.dialogVisible = false
            retiring.postRetiring(this.jiatuiku)
            .then(res=>{
                if (res.data.code == 200) {
                    this.outerVisible = false;
                    this.$message({
                        message: "资产添加成功!",
                        type: "success"
                    });
                    retiring
            .getRetiring()
            .then(res => {
                this.tableData2 = res.data.data;
            })
            .catch(err => {
                this.$message.error(err);
            });
                }else {
                    this.$message({
                        message: "资产添加失败!",
                        type: "warning"
                    });
                }
            })
        },
        queling(){
            // this.outerVisible = false
            collar.postCollar(this.jialingyong)
            .then(res=>{
                if (res.data.code == 200) {
                    this.outerVisible = false;
                    this.$message({
                        message: "资产添加成功!",
                        type: "success"
                    });
                    collar
            .getCollar()
            .then(res => {
                this.tableData = res.data.data;
            })
            .catch(err => {
                this.$message.error(err);
            });
                }else {
                    this.$message({
                        message: "资产添加失败!",
                        type: "warning"
                    });
                }
            })
        }
    }
};
</script>
<style lang="less">
.el-input.is-disabled .el-input__inner{
    background: #fff;
    color: black;
}
</style>


