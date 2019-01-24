<template>
    <div>
        <daBreadcrumb></daBreadcrumb>

        <el-tabs v-model="activeName">
            <el-tab-pane label="用户管理" name="first">
                <!-- 主页按钮 -->
                <el-row style=" text-align: left">
                    <el-button type="primary" @click="addDialogVisible = true">新增</el-button>
                    <el-button @click="delRoles">删除</el-button>
                    <el-button @click="authorizeFormVisible = true">角色授权</el-button>
                    <el-button @click="allotFormVisible = true">分配用户</el-button>
                </el-row>

                <!-- 主页表格 -->
                <el-table ref="multipleTable" :data="assetsData" tooltip-effect="dark" style="width: 100%;margin:20px 0;text-align: left" @selection-change="handleSelectionChange" border>
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="remarks" label="角色名" width="500px">
                    </el-table-column>
                    <el-table-column prop="role" label="备注" width="650px">
                    </el-table-column>
                </el-table>

                <!-- 主页分页 -->
                <div class="block" style=" text-align: center">
                    <el-pagination :page-sizes="[10, 20, 30]" :page-size="100" layout="sizes, prev, pager, next" :total="100">
                    </el-pagination>
                </div>

            </el-tab-pane>
        </el-tabs>

        <!-- 新增弹窗 -->
        <el-dialog title="新建角色" :visible.sync="addDialogVisible">
            <el-form :model="addAssetsForm">
                <el-form-item label="">
                    <el-col :span="4">
                        <div class="grid-content bg-purple">角色名</div>
                    </el-col>
                    <el-col :span="20">
                        <div class="grid-content bg-purple">
                            <el-input v-model="addAssetsForm.name" placeholder="角色名"></el-input>
                        </div>
                    </el-col>
                </el-form-item>
                <el-form-item label="">
                    <el-col :span="4">
                        <div class="grid-content bg-purple">备注</div>
                    </el-col>
                    <el-col :span="20">
                        <div class="grid-content bg-purple">
                            <el-input v-model="addAssetsForm.address" placeholder="备注"></el-input>
                        </div>
                    </el-col>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addAssetsSubmit">确 定</el-button>
            </div>
        </el-dialog>

        <!-- 角色授权弹窗 -->
        <el-dialog title="角色授权" :visible.sync="authorizeFormVisible">
            <el-form>
                <el-form-item label="">
                    <el-col :span="4">
                        <div class="grid-content bg-purple">角色名</div>
                    </el-col>
                    <el-col :span="20">
                        <div class="grid-content bg-purple" style="text-align: left;">
                            <el-form :inline="true" class="demo-form-inline">
                                <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </el-form>

                        </div>
                    </el-col>
                </el-form-item>
                <el-form-item label="">
                    <el-col :span="4">
                        <div class="grid-content bg-purple">授权</div>
                    </el-col>
                    <el-col :span="20">
                        <div class="grid-content bg-purple">
                            <el-tree :data="data2" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current>
                            </el-tree>
                        </div>
                    </el-col>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="authorizeFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="authorizeFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

        <!-- 分配用户 -->
        <el-dialog title="新建角色" :visible.sync="allotFormVisible">
            <el-form :model="form">
                <el-form-item label="">
                    <el-col :span="4">
                        <div class="grid-content bg-purple">角色名：</div>
                    </el-col>
                    <el-col :span="20">
                        <div class="grid-content bg-purple">
                            <el-input v-model="input" placeholder="角色名" disabled></el-input>
                        </div>
                    </el-col>
                </el-form-item>
                <el-form-item label="">
                    <el-col :span="4">
                        <div class="grid-content bg-purple">用户：</div>
                    </el-col>
                    <el-col :span="20">
                        <div class="grid-content bg-purple">
                            <el-autocomplete v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入内容" style="width:100%"></el-autocomplete>
                        </div>
                    </el-col>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="allotFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="allotFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import daBreadcrumb from "@/components/daBreadcrumb.vue";
import { roles } from "@/api";

export default {
    components: {
        daBreadcrumb
    },

    data() {
        return {
            activeName: "first",
            select: "",
            input: "",
            multipleTable: [],
            delAssetsIds: [],
            addAssetsForm: {},
            restaurants: [],
            state1: "",
            delAssetsIds: [],
            allotFormVisible: false,
            authorizeFormVisible: false,
            addDialogVisible: false,
            assetsData: [],
            form: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: ""
            },
            data2: [
                {
                    id: 1,
                    label: "首页"
                },
                {
                    id: 2,
                    label: "维修管理"
                },
                {
                    id: 3,
                    label: "报废管理"
                },
                {
                    id: 4,
                    label: "系统管理",
                    children: [
                        {
                            id: 6,
                            label: "角色管理"
                        },
                        {
                            id: 7,
                            label: "组织架构"
                        },
                        {
                            id: 8,
                            label: "用户管理"
                        }
                    ]
                },
                {
                    id: 5,
                    label: "系统管理",
                    children: [
                        {
                            id: 9,
                            label: "资产分类"
                        },
                        {
                            id: 10,
                            label: "角色管理"
                        },
                        {
                            id: 11,
                            label: "组织架构"
                        },
                        {
                            id: 12,
                            label: "用户管理"
                        },
                        {
                            id: 13,
                            label: "员工管理"
                        }
                    ]
                }
            ]
        };
    },
    mounted() {
        this.restaurants = this.loadAll();
        // http://localhost:8080
        // http://localhost:3000
        roles
            .getRoles()
            .then(res => {
                this.assetsData = res.data.data;
                // console.log(res.data.data)
            })
            .catch(err => {
                this.$message.error(err);
            });
    },
    methods: {
        addAssetsSubmit() {
            // ajax 提交  addAssetsForm
            roles.postRoles(this.addAssetsForm).then(res => {
                if (res.data.code == 200) {
                    this.addDialogVisible = false;
                    this.$message({
                        message: "资产添加成功!",
                        type: "success"
                    });
                    assets
                        .getRoles()
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
        delRoles() {
            if (this.delAssetsIds.length == 0) {
                this.$message({
                    message: "请选择要删除的数据!",
                    type: "info"
                });
                return;
            }
            this.$confirm("此操作将永久删除该条资产数据, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    roles.deleteRoles(this.delAssetsIds).then(res => {
                        if (res.data.code == 200) {
                            this.delAssetsIds = [];
                            this.$message({
                                type: "success",
                                message: res.data.message
                            });
                            roles
                                .getRoles()
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
        },

        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString
                ? restaurants.filter(this.createFilter(queryString))
                : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return restaurant => {
                return (
                    restaurant.value
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase()) === 0
                );
            };
        },
        loadAll() {
            return [{ value: "张三" }, { value: "李四" }];
        }
    }
};
</script>
<style>
</style>
