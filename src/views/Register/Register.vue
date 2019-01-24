<template>
    <div>
        <da-breadcrumb></da-breadcrumb>
        <el-tabs v-model="activeTabName">
            <el-tab-pane label="资产登记" name="register">
                <el-row class="card-margin20">
                    <el-col :span="12">
                        <el-button @click="addDialogVisible=true" style="float:left;">新增</el-button>
                        <el-button type="danger" @click="delAsset" style="float:left;">删除</el-button>

                        <!-- <el-dropdown split-button type="primary" style="margin-left:10px;float:left;">
                            导入/导出
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>下载导入模板</el-dropdown-item>
                                <el-dropdown-item>批量导入</el-dropdown-item>
                                <el-dropdown-item divided>导出资产</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown> -->
                        <el-button type="primary" style="margin-left:10px;float:left;" @click="export2Excel">导出</el-button>
                        <el-dropdown split-button type="primary" style="margin-left:10px;float:left;">
                            打印
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>打印资产标签</el-dropdown-item>
                                <el-dropdown-item divided>打印资产卡片</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                    <el-col :span="8" :offset="4">
                        <el-input placeholder="请输入内容" v-model="searchVal" class="input-with-select">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </el-col>
                </el-row>
                <el-table :data="assetsData" border style="width: 100%" @selection-change="handleSelectionChange" class="card-margin20" id="out-table">
                    <el-table-column fixed type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="bar_code" label="资产条码" width="150">
                    </el-table-column>
                    <el-table-column prop="name" label="资产名称" width="120">
                    </el-table-column>
                    <el-table-column prop="type_id" label="资产类别" width="80">
                    </el-table-column>
                    <el-table-column prop="specification" label="规格型号" width="120">
                    </el-table-column>
                    <el-table-column prop="sn" label="SN 号" width="120">
                    </el-table-column>
                    <el-table-column prop="tell" label="电话号" width="120">
                    </el-table-column>
                    <el-table-column prop="supplier" label="购买地方" width="120">
                    </el-table-column>
                    <el-table-column prop="metering" label="计量单位" width="80">
                    </el-table-column>
                    <el-table-column prop="purchase_time" label="购买时间" width="100">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button @click="showAsset(scope.row)" type="text" size="small">查看</el-button>
                            <el-button type="text" size="small" @click="editAsset(scope.row)">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-row>
                    <el-pagination  layout="sizes, prev, pager, next" :total="15" :page-sizes="[5,10,15,20]" :page-size="10">
                    </el-pagination>
                </el-row>
            </el-tab-pane>
        </el-tabs>

        <!-- 添加资产 弹窗 -->
        <el-dialog title="资产登记" :visible.sync="addDialogVisible" width="80%">
            <el-form :model="addAssetsForm" size="small" label-width="80px">
                <el-tabs tab-position="top">
                    <el-tab-pane label="基本信息">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="资产条码">
                                    <el-input v-model="addAssetsForm.bar_code" placeholder="自动生成" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="资产名称">
                                    <el-input v-model="addAssetsForm.name" placeholder="资产名称"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="资产类型">
                                    <el-select v-model="addAssetsForm.type_id" placeholder="请选择">
                                        <el-option value="beijing">北京
                                        </el-option>
                                        <el-option value="tianjin">天津
                                        </el-option>
                                        <el-option value="shanghai">上海
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="规格型号">
                                    <el-input v-model="addAssetsForm.specification" placeholder="规格型号"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="序列号">
                                    <el-input v-model="addAssetsForm.sn" placeholder="序列号"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="计量单位">
                                    <el-input v-model="addAssetsForm.metering" placeholder="计量单位"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="金额">
                                    <el-input v-model="addAssetsForm.money" placeholder="金额"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="使用公司">
                                    <el-select v-model="addAssetsForm.company" placeholder="请选择">
                                        <el-option :value="v" v-for="v in gongsibu">{{v}}
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="使用部门">
                                    <el-select v-model="addAssetsForm.department" placeholder="请选择">
                                        <el-option value="beijing" v-for="v in gongsibu">北京
                                        </el-option>
                                    </el-select> 
                                </el-form-item>
                            </el-col>
                            <el-col :span="16">
                                <el-form-item label="备注">
                                    <el-input type="textarea" v-model="addAssetsForm.remarks" placeholder="备注"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="使用部门">
                                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                        <img v-if="addAssetsForm.image" :src="addAssetsForm.image" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="维保信息">
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <el-form-item label="供应商">
                                    <el-input placeholder="供应商名称" v-model="addAssetsForm.supplier" ></el-input>
                                </el-form-item>
                                <el-form-item label="联系方式">
                                    <el-input placeholder="联系方式" v-model="addAssetsForm.tell" ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="联系人">
                                    <el-input placeholder="联系人" v-model="addAssetsForm.contacts" ></el-input>
                                </el-form-item>
                                <el-form-item label="维保到期">
                                    <el-date-picker style="" v-model="addAssetsForm.expiry_time" suffix-icon="el-icon-date" type="datetime" placeholder="选择日期时间" >
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="备注">
                            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="addAssetsForm.explain" >
                            </el-input>
                        </el-form-item>
                    </el-tab-pane>
                </el-tabs>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addAssetsSubmit">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 查看资产 弹窗 -->
        <el-dialog title="资产登记" :visible.sync="showDialogVisible" width="80%" class="show-assets">
            <el-form :model="showAssetsForm" size="small" label-width="80px" disabled="true">
                <el-tabs tab-position="top">
                    <el-tab-pane label="基本信息">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="资产条码">
                                    <el-input v-model="showAssetsForm.bar_code" placeholder="自动生成" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="资产名称">
                                    <el-input v-model="showAssetsForm.name" placeholder="资产名称" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="资产类型">
                                    <el-select v-model="showAssetsForm.type_id" disabled placeholder="请选择">
                                        <el-option value="beijing">北京
                                        </el-option>
                                        <el-option value="tianjin">天津
                                        </el-option>
                                        <el-option value="shanghai">上海
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="规格型号">
                                    <el-input v-model="showAssetsForm.specification" placeholder="规格型号" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="序列号">
                                    <el-input v-model="showAssetsForm.sn" placeholder="序列号" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="计量单位">
                                    <el-input v-model="showAssetsForm.metering" placeholder="计量单位" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="金额">
                                    <el-input v-model="showAssetsForm.money" placeholder="金额" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="使用公司">
                                    <el-select v-model="showAssetsForm.company" placeholder="请选择" disabled>
                                        <el-option value="beijing">北京
                                        </el-option>
                                        <el-option value="tianjin">天津
                                        </el-option>
                                        <el-option value="shanghai">上海
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="使用部门">
                                    <el-select v-model="showAssetsForm.department" placeholder="请选择" disabled>
                                        <el-option value="beijing">北京
                                        </el-option>
                                        <el-option value="tianjin">天津
                                        </el-option>
                                        <el-option value="shanghai">上海
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="16">
                                <el-form-item label="备注">
                                    <el-input type="textarea" v-model="showAssetsForm.remarks" placeholder="备注" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="使用部门">
                                    <div class="avatar-uploader">
                                        <img v-if="showAssetsForm.image" :src="showAssetsForm.image" class="avatar">
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="维保信息">

                        <el-row :gutter="20">
                            <el-col :span="12">
                                <el-form-item label="供应商">
                                    <el-input placeholder="供应商名称" v-model="showAssetsForm.supplier" ></el-input>
                                </el-form-item>
                                <el-form-item label="联系方式">
                                    <el-input placeholder="联系方式" v-model="showAssetsForm.tell" ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="联系人">
                                    <el-input placeholder="联系人" v-model="showAssetsForm.contacts" ></el-input>
                                </el-form-item>
                                <el-form-item label="维保到期">
                                    <el-date-picker style="" v-model="showAssetsForm.expiry_time" suffix-icon="el-icon-date" type="datetime" placeholder="选择日期时间" >
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="备注">
                            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="showAssetsForm.explain" >
                            </el-input>
                        </el-form-item>
                    </el-tab-pane>
                </el-tabs>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="showDialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>

        <!-- 编辑资产 弹窗 -->
        <el-dialog title="资产登记" :visible.sync="editDialogVisible" width="80%">
            <el-form :model="editAssetsForm" size="small" label-width="80px">
                <el-tabs tab-position="top">
                    <el-tab-pane label="基本信息">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="资产条码">
                                    <el-input v-model="editAssetsForm.bar_code" placeholder="自动生成" disabled></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="资产名称">
                                    <el-input v-model="editAssetsForm.name" placeholder="资产名称"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="资产类型">
                                    <el-select v-model="editAssetsForm.type_id" placeholder="请选择">
                                        <el-option value="beijing">北京
                                        </el-option>
                                        <el-option value="tianjin">天津
                                        </el-option>
                                        <el-option value="shanghai">上海
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="规格型号">
                                    <el-input v-model="editAssetsForm.specification" placeholder="规格型号"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="序列号">
                                    <el-input v-model="editAssetsForm.sn" placeholder="序列号"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="计量单位">
                                    <el-input v-model="editAssetsForm.metering" placeholder="计量单位"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="金额">
                                    <el-input v-model="editAssetsForm.money" placeholder="金额"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="使用公司">
                                    <el-select v-model="editAssetsForm.company" placeholder="请选择">
                                        <el-option value="beijing">北京
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="使用部门">
                                    <el-select v-model="editAssetsForm.department" placeholder="请选择">
                                        <el-option value="beijing">北京
                                        </el-option>
                                        <el-option value="tianjin">天津
                                        </el-option>
                                        <el-option value="shanghai">上海
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="16">
                                <el-form-item label="备注">
                                    <el-input type="textarea" v-model="editAssetsForm.remarks" placeholder="备注"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="使用部门">
                                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                        <img v-if="editAssetsForm.image" :src="editAssetsForm.image" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="维保信息">

                        <el-row :gutter="20">
                            <el-col :span="12">
                                <el-form-item label="供应商">
                                    <el-input placeholder="供应商名称" v-model="editAssetsForm.supplier" ></el-input>
                                </el-form-item>
                                <el-form-item label="联系方式">
                                    <el-input placeholder="联系方式" v-model="editAssetsForm.tell" ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="联系人">
                                    <el-input placeholder="联系人" v-model="editAssetsForm.contacts" ></el-input>
                                </el-form-item>
                                <el-form-item label="维保到期">
                                    <el-date-picker style="" v-model="editAssetsForm.expiry_time" suffix-icon="el-icon-date" type="datetime" placeholder="选择日期时间" >
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="备注">
                            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="editAssetsForm.explain" >
                            </el-input>
                        </el-form-item>
                    </el-tab-pane>
                </el-tabs>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="editAssetsSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import daBreadcrumb from "@/components/daBreadcrumb.vue";
import { assets } from "@/api";
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
    data: function() {
        return {
            gongsibu:[],
            activeTabName: "register",
            searchVal: "",
            addDialogVisible: false,
            showDialogVisible: false,
            editDialogVisible: false,
            addAssetsForm: {
                company:""
            },
            showAssetsForm: {},
            editAssetsForm: {},
            delAssetsIds: [],
            assetsData: [],
            gongsi:""
        };
    },
    mounted() {
        assets
            .getAssets()
            .then(res => {
                this.assetsData = res.data.data;
                var arr=[];
                for(var i=0;i<res.data.data.length;i++){
                    console.log(arr);
                    if(arr.indexOf(res.data.data[i].company)==-1){
                        arr.push(res.data.data[i].company)
                    }
                }
                this.gongsibu=arr;
            })
            .catch(err => {
                this.$message.error(err);
            });
        
    },
    methods: {
        export2Excel () {
         /* generate workbook object from table */
         var wb = XLSX.utils.table_to_book(document.querySelector('#out-table'))
         /* get binary string as output */
         var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
         try {
             FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '打印资产.xlsx')
         } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
         return wbout
        },


        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === "image/jpeg";
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error("上传头像图片只能是 JPG 格式!");
            }
            if (!isLt2M) {
                this.$message.error("上传头像图片大小不能超过 2MB!");
            }
            return isJPG && isLt2M;
        },
        addAssetsSubmit() {
            // ajax 提交  addAssetsForm
            assets.postAssets(this.addAssetsForm).then(res => {
                if (res.data.code == 200) {
                    this.addDialogVisible = false;
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
        editAssetsSubmit() {
            // ajax 提交  editAssetsForm
            var id = this.editAssetsForm.id;
            assets.putAssets(id, this.editAssetsSubmit).then(res => {
                if (res.data.code == 200) {
                    this.editDialogVisible = false;
                    this.$message({
                        message: res.data.message,
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
                        message: res.data.message,
                        type: "warning"
                    });
                }
            });
        },
        showAsset(row) {
            this.showDialogVisible = true;
            this.showAssetsForm = row;
        },
        editAsset(row) {
            this.editDialogVisible = true;
            this.editAssetsForm = JSON.parse(JSON.stringify(row));
        },
        delAsset() {
            if (this.delAssetsIds.length == 0) {
                this.$message({
                    message: "请选择要删除的数据!",
                    type: "warning"
                });
                return;
            }
            this.$confirm("此操作将永久删除该条资产数据, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    assets.deleteAssets(this.delAssetsIds).then(res => {
                        if (res.data.code == 200) {
                            this.delAssetsIds = [];
                            this.$message({
                                type: "success",
                                message: res.data.message
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
        handleSelectionChange(val) {
            this.delAssetsIds = val.map(v => {
                return v.id;
            });
        }
    },
    components: {
        daBreadcrumb
    }
};
</script>
<style lang="less">
.avatar-uploader {
    max-width: 200px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
}
.avatar {
    width: 100%;
    height: 100px;
    display: block;
}
.card-margin20 {
    margin-bottom: 20px;
}
.show-assets .el-input input,
.show-assets .el-textarea textarea {
    background-color: #fff !important;
    color: #333 !important;
    cursor: default !important;
}
</style>


