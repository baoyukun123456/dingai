<template>
    <div>
        <!-- 面包屑导航 -->
        <da-breadcrumb></da-breadcrumb>
        <el-tabs v-model="activeName">
            <el-tab-pane label="维修管理" name="first">
                <!--主页面 按钮 -->
                <el-row style="text-align: left;">
                    <el-button @click="dialogVisible = true">新增</el-button>
                    <el-button type="danger" @click="open9" style="margin-left:10px">删除</el-button>
                    <el-button type="primary">打印</el-button>
                </el-row>

                <!-- 新增单 弹窗 -->
                <el-dialog title="维修管理" :visible.sync="dialogVisible" width="80%"  center>
                    <el-form :model="addAssetsForm" size="small" label-width="80px">
                        <el-tabs v-model="activeName" >
                            <el-tab-pane label="新增单" name="first">

                                <!-- 新增单表格 -->
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>维修单号</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="维修单号" v-model="addAssetsForm.bar_code" :disabled="true">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>业务日期</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-date-picker v-model="addAssetsForm.purchase_time" type="date" placeholder="选择日期">
                                                    </el-date-picker>

                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>处理人</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="处理人" v-model="addAssetsForm.contacts" :disabled="true">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>维修花费</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="" v-model="addAssetsForm.money">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>状态</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">

                                                    <el-select v-model="select" slot="prepend" placeholder="维修中">
                                                        <el-option label="维修中" value="1"></el-option>
                                                        <el-option label="已完成" value="2"></el-option>

                                                    </el-select>

                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>报修人</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="选择报修人" v-model="addAssetsForm.contacts">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="24">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="4">
                                                <div class="grid-content bg-purple">
                                                    <h3>维修内容</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="20">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input type="textarea" :rows="2" placeholder="维修内容" v-model="addAssetsForm.name">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="24">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="4">
                                                <div class="grid-content bg-purple">
                                                    <h3>备注</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="20">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="备注" v-model="addAssetsForm.specification">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                </el-row>

                                <!-- 选择资产 嵌套弹窗 -->
                                <el-dialog title="维修管理" :visible.sync="innerVisible" width="80%"  append-to-body center>
                                    <el-tabs v-model="activeName" >
                                        <el-tab-pane label="选择资产" name="first">
                                            <el-input placeholder="请输入内容"  class="input-with-select" style="width:50%;">
                                                <el-button slot="append" icon="el-icon-search"></el-button>
                                            </el-input>
                                            <div style="height:20px;width:20px;"></div>

                                            <!-- 选择资产表格展示开始 -->
                                            <el-table :data="tableData" border ref="multipleSelection" tooltip-effect="dark" @selection-change="handleSelectionChange" style="width: 100%">
                                                <el-table-column type="selection" width="55" fixed>
                                                </el-table-column>
                                                <el-table-column prop="bar_code" label="资产条码" width="150">
                                                </el-table-column>
                                                <el-table-column prop="name" label="资产名称" width="120">
                                                </el-table-column>
                                                <el-table-column prop="type_id" label="资产类型" width="120">
                                                </el-table-column>
                                                <el-table-column prop="specification" label="规格型号" width="120">
                                                </el-table-column>
                                                <el-table-column prop="sn" label="产品序号" width="300">
                                                </el-table-column>
                                                <el-table-column prop="metering" label="计量单位" width="120">
                                                </el-table-column>
                                                <el-table-column prop="money" label="金额" width="120">
                                                </el-table-column>
                                                <el-table-column prop="company" label="使用公司" width="120">
                                                </el-table-column>
                                            </el-table>
                                            <!-- 表格展示结束 -->

                                            <!-- 选择资产 分页展示 -->
                                            <div class="block" style="margin-top:20px;text-align: center">
                                                <el-pagination   :page-sizes="[5, 10, 20, 30]" :page-size="5" layout="sizes, prev, pager, next" :total="tableData.length">
                                                </el-pagination>
                                            </div>
                                            <!-- 分页展示结束 -->
                                        </el-tab-pane>
                                    </el-tabs>

                                    <!-- 选择资产嵌套表格按钮 -->
                                    <span slot="footer" class="dialog-footer">
                                        <el-button @click="innerVisible = false">取 消</el-button>
                                        <el-button type="primary" @click="open2">确 定</el-button>
                                    </span>
                                </el-dialog>

                                <!-- 选择资产按钮 -->
                                <el-row>
                                    <el-button @click="innerVisible = true">选择资产</el-button>
                                    <el-button @click="open8">删除</el-button>
                                </el-row>

                                <!-- 选择资产添加至表单 -->
                                <el-table :data="newData" border style="width: 100%;" tooltip-effect="dark" @selection-change="handleSelectionChange1">
                                    <el-table-column type="selection" width="55">
                                    </el-table-column>
                                    <el-table-column label="序号" width="120">
                                    </el-table-column>
                                    <el-table-column prop="ma" label="资产条码" show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column prop="name" label="资产名称" show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column prop="address" label="所属公司" show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column prop="city" label="当前所在公司" show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column prop="city" label="当前所有部门" show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column prop="name" label="当前使用人" show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column prop="province" label="存放地址" show-overflow-tooltip>
                                    </el-table-column>
                                </el-table>
                            </el-tab-pane>

                        </el-tabs>
                    </el-form>

                    <!-- 新增单按钮 -->
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="open3">确 定</el-button>
                    </span>
                </el-dialog>

                <!-- 主页面表格 -->
                <el-table ref="multipleTable" :data="tableData" border @selection-change="handleSelectionChange" tooltip-effect="dark" style="width: 100%;margin:20px 0">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column fixed prop="sn" label="序列号" width="150">
                    </el-table-column>
                    <el-table-column prop="bar_code" label="资产条码" width="150">
                    </el-table-column>
                    <el-table-column prop="name" label="资产名称" width="120">
                    </el-table-column>
                    <el-table-column prop="type_id" label="类型" width="120">
                    </el-table-column>
                    <el-table-column prop="specification" label="规格型号" width="120">
                    </el-table-column>
                    <el-table-column prop="company" label="所属公司" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="所属部门" width="120">
                    </el-table-column>
                    <el-table-column prop="source" label="来源" width="120">
                    </el-table-column>
                    <el-table-column prop="supplier" label="供应商" width="120">
                    </el-table-column>
                    <el-table-column prop="metering" label="计量单位" width="120">
                    </el-table-column>
                    <el-table-column prop="money" label="金额" width="120">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button @click="viewassetsf(scope.row)" type="text" size="small">查看</el-button>
                            <el-button @click="viewedit(scope.row)" type="text" size="small">修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <!-- 修改单 -->
                <el-form ref="form" :model="editAssetsForm" label-width="80px">
                    <el-dialog title="维修管理" :visible.sync="editorzc" width="80%"  center>
                        <el-tabs v-model="activeName" >
                            <el-tab-pane label="修改单" name="first">
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>维修单号</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="" v-model="editAssetsForm.bar_code" :disabled="true">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>业务日期</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-date-picker v-model="editAssetsForm.purchase_time" type="date" placeholder="选择日期">
                                                    </el-date-picker>

                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>处理人</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="处理人" v-model="editAssetsForm.contacts" :disabled="true">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>维修花费</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="" v-model="editAssetsForm.money">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>状态</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">

                                                    <el-select v-model="editAssetsForm.edit" slot="prepend" placeholder="维修中">
                                                        <el-option label="维修中" value="1"></el-option>
                                                        <el-option label="已完成" value="2"></el-option>

                                                    </el-select>

                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>报修人</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="选择报修人" v-model="editAssetsForm.contacts">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="24">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="4">
                                                <div class="grid-content bg-purple">
                                                    <h3>维修内容</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="20">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input type="textarea" :rows="2" placeholder="维修内容" v-model="editAssetsForm.name">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="24">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="4">
                                                <div class="grid-content bg-purple">
                                                    <h3>备注</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="20">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="备注" v-model="editAssetsForm.specification">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                </el-row>

                            </el-tab-pane>

                        </el-tabs>

                        <span slot="footer" class="dialog-footer">
                            <el-button @click="editorzc = false">取消</el-button>
                            <el-button @click="editAssetsSubmit">确定</el-button>
                        </span>
                    </el-dialog>
                </el-form>

                <!-- 查看单 -->
                <el-form ref="form" :model="viewdata" label-width="80px">
                    <el-dialog title="维修管理" :visible.sync="viewassets" width="80%"  center>
                        <el-tabs v-model="activeName" >
                            <el-tab-pane label="查看单" name="first">
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>维修单号</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="" v-model="viewdata.bar_code" :disabled="true">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>业务日期</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-date-picker v-model="viewdata.purchase_time" type="date" placeholder="选择日期" disabled>
                                                    </el-date-picker>

                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>处理人</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="处理人" v-model="viewdata.contacts" :disabled="true">
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>维修花费</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="" v-model="viewdata.money" disabled>
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>状态</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">

                                                    <el-select v-model="select" slot="prepend" placeholder="维修中" disabled>
                                                        <el-option label="维修中" value="1"></el-option>
                                                        <el-option label="已完成" value="2"></el-option>

                                                    </el-select>

                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="8">
                                                <div class="grid-content bg-purple">
                                                    <h3>报修人</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="选择报修人" v-model="viewdata.contacts" disabled>
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="24">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="4">
                                                <div class="grid-content bg-purple">
                                                    <h3>维修内容</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="20">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input type="textarea" :rows="2" placeholder="维修内容" v-model="viewdata.name" disabled>
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="24">
                                        <div class="grid-content bg-purple">
                                            <el-col :span="4">
                                                <div class="grid-content bg-purple">
                                                    <h3>备注</h3>
                                                </div>
                                            </el-col>
                                            <el-col :span="20">
                                                <div class="grid-content bg-purple-light">
                                                    <el-input placeholder="备注" v-model="viewdata.specification" disabled>
                                                    </el-input>
                                                </div>
                                            </el-col>
                                        </div>
                                    </el-col>
                                </el-row>

                            </el-tab-pane>

                        </el-tabs>

                        <span slot="footer" class="dialog-footer">
                            <el-button @click="viewassets = false">取 消</el-button>
                        </span>
                    </el-dialog>
                </el-form>

                <!-- 分页 -->
                <div class="block" >
                    <el-pagination    :page-sizes="[10, 20, 30]" :page-size="100" layout="sizes, prev, pager, next" :total="100">
                    </el-pagination>
                </div>
            </el-tab-pane>

        </el-tabs>

    </div>
</template>
<script>
import daBreadcrumb from "@/components/daBreadcrumb.vue";
import { assets } from "@/api";

export default {
    components: {
        daBreadcrumb
    },
    mounted() {
        assets
            .getAssets()
            .then(res => {
                this.tableData = res.data.data;
                // console.log(res.data.data)
            })
            .catch(err => {
                this.$message.error(err);
            });
    },
    methods: {
        open2() {
            this.innerVisible = false;
            this.newData = this.multipleSelection;
        },
        open3() {
            // this.innerVisible = false;
            // this.newData = this.multipleSelection;
            assets.postAssets(this.addAssetsForm).then(res => {
                if (res.data.code == 200) {
                    this.dialogVisible = false;
                    this.$message({
                        message: "资产添加成功!",
                        type: "success"
                    });
                    assets
                        .getAssets()
                        .then(res => {
                            this.assetsData = res.data.data;
                        })
                        .catch(err => {
                            this.$message.error(err);
                        });
                } else {
                    this.$message({
                        message: "资产添加失败!",
                        type: "warning"
                    });
                }
            });
        },
        open8() {
            if (this.multipleSelection1.length == 0) {
                this.$message({
                    type: "info",
                    message: "请选择你要删除的数据"
                });
            } else {
                for (var i = 0; i < this.newData.length; i++) {
                    for (var j = 0; j < this.multipleSelection1.length; j++) {
                        if (this.newData[i].id == this.multipleSelection1[j]) {
                            this.newData.splice(i, 1);
                        }
                    }
                }
            }
        },
        open9() {
            if (this.multipleSelection.length == 0) {
                this.$message({
                    type: "info",
                    message: "请选择你要删除的数据"
                });
                return;
            }
            this.$confirm("此操作将永久删除该资产信息, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    assets.deleteAssets(this.multipleSelection).then(res => {
                        if (res.data.code == 200) {
                            this.multipleSelection = [];
                            this.$message({
                                type: "success",
                                message: res.data.message
                            });
                            assets
                                .getAssets()
                                .then(res => {
                                    this.tableData = res.data.data;
                                })
                                .catch(err => {
                                    this.$message.error(err);
                                });
                        } else {
                            this.$message({
                                type: "info",
                                message: res.data.message
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
        handleSelectionChange1(val) {
            this.multipleSelection1 = val.map(v => {
                return v.id;
            });
        },
        editorzcf(row) {
            this.editorzc = true;
            this.editAssetsForm = JSON.parse(JSON.stringify(row));
        },
        editAssetsSubmit() {
            // ajax 提交  editAssetsForm
            var id = this.editAssetsForm.id;
            assets.putAssets(id, this.editAssetsSubmit).then(res => {
                if (res.data.code == 200) {
                    this.editorzc = false;
                    this.$message({
                        message: res.data.message,
                        type: "success"
                    });
                    assets
                        .getAssets()
                        .then(res => {
                            this.tableData = res.data.data;
                        })
                        .catch(err => {
                            this.$message.error(err);
                        });
                } else {
                    this.$message({
                        message: res.data.message,
                        type: "warning"
                    });
                }
            });
        },
        
        viewassetsf(row) {
            this.viewassets = true;
            this.viewdata = row;
            
        },
        viewedit(row) {
            this.editorzc = true;
            this.viewdata = row;
            
        }
    },
    data() {
        return {
            multipleSelection: [],
            multipleSelection1: [],
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                }
            },
            value1: "",
            value2: "",
            select: "",
            addAssetsForm: {},
            editorzc: false,
            viewassets: false,
            dialogVisible: false,
            innerVisible: false,
            activeName: "first",
            viewdata: {},
             editAssetsForm: {},
            newData: [],
            tableData: []
        };
    }
};
</script>
<style lang="less">
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
    margin: 10px;
}
.row-bg {
    padding: 10px 0;
}
.el-dialog--center .el-dialog__footer {
    text-align: right;
}
</style>
