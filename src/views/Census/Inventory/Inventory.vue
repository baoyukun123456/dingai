<template>
    <div>
        <da-breadcrumb></da-breadcrumb>

        <!-- 查看处理记录弹出框 -->
        <el-dialog
        title="查看"
            :visible.sync="viewassets"
            width="80%">
            <Newly view=true :formLabelAlign="multipleSelection"></Newly>
            <span slot="footer" class="dialog-footer">
                <el-button @click="viewassets = false">确定</el-button>
            </span>
        </el-dialog>


        <el-row style="text-align:left;">
            <el-col :span="8">
                <div>
                    
                    <el-button type="primary" @click="dialogVisible = true"> <i class="el-icon-upload2" size='small'></i>   导出</el-button>

                    <el-button type="primary" style="margin:0px 10px;" @click="open"> <i class="el-icon-view"></i>   查看处理记录</el-button>

                </div>
            </el-col>
            <el-col :span="8" :offset="8">
                <div>
                    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </el-col>
        </el-row>
        

        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%;margin-top:20px;" border center @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
          <el-table-column prop="handle_id" label="处理编号" width="150">
          </el-table-column>
          <el-table-column prop="handle_type" label="处理类型" width="120">
          </el-table-column>
          <el-table-column prop="user_id" label="处理人" width="120">
          </el-table-column>
          <el-table-column prop="handle_content" label="处理内容" width="120">
          </el-table-column>
          <el-table-column prop="handle_time" label="处理时间" width="300">
          </el-table-column>
          <el-table-column prop="assets_id" label="资产编码" width="120">
          </el-table-column>
          <el-table-column prop="createdAt" label="创建时间" width="120">
          </el-table-column>
          <el-table-column prop="upadtedAt" label="更新时间" width="120">
          </el-table-column>
        </el-table>
        <div class="block" style="margin-top:15px;">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[5, 5, 5, 5]"
            :page-size="5"
            layout="sizes, prev, pager, next"
            :total="15">
            </el-pagination>
        </div>

        
    </div>
</template>
<script>
import daBreadcrumb from '@/components/daBreadcrumb.vue'
import Newly from './Newly.vue';
import { detail } from "@/api";
export default {
    components:{
        daBreadcrumb,Newly       
    },
    data() {
      return {
        viewassets:false,
        tableData3: [],
        multipleSelection: [],
      }
    },
    mounted:function(){
        detail.getDetail()
        .then(res=>{
            console.log(res.data);
            this.tableData3 = res.data.data;
        })
        .catch(err=>{
            this.$message.error(err);
        })
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
      open() {
        if(this.multipleSelection.length==0){         
              this.$message({
                type: 'info',
                message: '请选择你要查看的数据'
            });
            
          } else if(this.multipleSelection.length>1){
              this.$message({
                  type: 'info',
                  message: '每次只能查看一条资产处理信息'
              });          
          }else{
            //  console.log(this.multipleSelection)
              this.viewassets=true
          }
      },
      
    },
}
</script>