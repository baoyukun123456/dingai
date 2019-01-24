<template>
  <div>
    <da-breadcrumb></da-breadcrumb>
    <div class="block" style="float:left">
      <span>处理日期 </span>
      <el-date-picker v-model="value4" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
    </div>
    <el-col :span="6">
      <div>

        <el-button type="primary" style="margin-left:-50px;margin-right:15px;" @click="open">
          <i class="el-icon-view"></i> 查询</el-button>

        <el-button type="primary" @click="dialogVisible = true">
          <i class="el-icon-upload2" size='small'></i> 导出</el-button>
      </div>
    </el-col>

    <el-table ref="multipleTable" :data="tableData5" tooltip-effect="dark" style="width: 100%;margin-top:60px;" border @selection-change="handleSelectionChange">
        
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
import daBreadcrumb from "@/components/daBreadcrumb.vue";
import { taxonomy } from "@/api";
export default {
    components: {
        daBreadcrumb
    },
    data() {
        return {
            pickerOptions2: {
                shortcuts: [
                    {
                        text: "最近一周",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 7
                            );
                            picker.$emit("pick", [start, end]);
                        }
                    },
                    {
                        text: "最近一个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 30
                            );
                            picker.$emit("pick", [start, end]);
                        }
                    },
                    {
                        text: "最近三个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 90
                            );
                            picker.$emit("pick", [start, end]);
                        }
                    }
                ]
            },
            value4: [
                new Date(2000, 10, 10, 10, 10),
                new Date(2000, 10, 11, 10, 10)
            ],
            value5: "",
            tableData5: [],
            tableData3: [],
            value4: ""
        };
    },
    mounted:function(){
        taxonomy.getTaxonomy()
        .then(res=>{
            console.log(res.data);
            this.tableData3 = res.data.data;
        })
        .catch(err=>{
            this.$message.error(err);
        })
    },
    methods: {
        open() {
            var xiao = this.value4[0].getTime();
            var da = this.value4[1].getTime();
            this.tableData5 = [];
            for (var i = 0; i < this.tableData3.length; i++) {
                console.log(this.tableData3[i].handle_time * 1);
                if (
                    this.tableData3[i].handle_time * 1 > xiao &&
                    this.tableData3[i].handle_time * 1 < da
                ) {
                    this.tableData5.push(this.tableData3[i]);
                }
            }
            if(this.tableData5.length==0){
              this.$message.error('未找到该时间范围内的处理资产');
            }
        }
    }
};
</script>