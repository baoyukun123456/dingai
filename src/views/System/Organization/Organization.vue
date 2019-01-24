<template>
    <div>
        <daBreadcrumb></daBreadcrumb>
        <el-card>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="组织架构" name="first">
                    <el-row style="margin-bottom:15px;text-align:left">
                        <el-button type="primary" @click="structureVisible = true">添加</el-button>
                        <el-button type="danger" @click="delstructureIdsfn">删除</el-button>
                    </el-row>
                    <el-row class="margin-bottom">
                        <el-table
                                ref="multipleTable"
                                :data="structureData"
                                tooltip-effect="dark"
                                style="width: 100%"
                                class="mg-b"
                                border="true"
                                @selection-change="handleSelectionChange">
                            <el-table-column
                                    fixed
                                    type="selection"
                                    width="55">
                            </el-table-column>
                            <el-table-column
                                    prop="gongsibianma"
                                    label="公司编码"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    prop="gongsiname"
                                    label="公司名称"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    prop="parentname"
                                    label="父级公司"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="200">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="delstructure(scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </el-card>


        <!-- 新增弹窗 -->
        <el-dialog
        title="提示"
        :visible.sync="structureVisible"
        width="50%"
        :before-close="handleClose">
            <el-form :model="structureForm" size="small" label-width="130px">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="公司编码">
                            <el-input v-model="structureForm.nickname"></el-input>
                        </el-form-item>
                        <el-form-item label="父级公司">
                            <el-input v-model="structureForm.password"></el-input>
                        </el-form-item>
                        
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="公司名称">
                            <el-input v-model="structureForm.password"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="userVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="addstructurefn" size="small">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
import daBreadcrumb from "@/components/daBreadcrumb.vue";
export default {
    methods:{
        handleSelectionChange:function(val){
            this.delstructureIds=val.map(v=>{
                    return v.id
                })
        },
        addstructurefn:function(){
            // ajax
            this.structureVisible=false;
            this.$message('添加成功');
        },
        delstructure:function(val){
            this.$confirm('此操作将永久删除该数据, 是否继续?', '删除提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    console.log("在这删除数据val")
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                    return;
                });
        },
        delstructureIdsfn:function(){
            this.$confirm('此操作将永久删除该数据, 是否继续?', '删除提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    console.log("多个删除")
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                    return;
                });
        }
    },
    
    components:{
        daBreadcrumb,
    },
    data(){
      return {
          activeName:"first",
          structureVisible:false,
          structureForm:{},
          delstructureIds:[],
          structureData:[
              {
                  "gongsibianma":"1231231",
                  "gongsiname":"优逸客",
                  "parentname":"山西"
              },
              {
                  "gongsibianma":"1231231",
                  "gongsiname":"优逸客",
                  "parentname":"山西"
              },
              {
                  "gongsibianma":"1231231",
                  "gongsiname":"优逸客",
                  "parentname":"山西"
              },
              {
                  "gongsibianma":"1231231",
                  "gongsiname":"优逸客",
                  "parentname":"山西"
              }
          ]
      }  
    }

}
</script>


