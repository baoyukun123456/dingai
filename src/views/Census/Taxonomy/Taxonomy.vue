<template>
    <div>
        <da-breadcrumb></da-breadcrumb>
        <div style="float:left">
        <span>公司        </span>
        <el-select v-model="value33" multiple placeholder="请选择" style="margin-right:15px">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <span>部门        </span>
        <el-select
            v-model="value66"
            multiple
            collapse-tags
            placeholder="请选择">
            <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-button type="primary" @click="open" style="margin-left:15px">
          <i class="el-icon-view"></i> 查询</el-button>
        </div>
        <el-table ref="multipleTable" :data="tableData6" tooltip-effect="dark" style="width: 100%;margin-top:60px;" border @selection-change="handleSelectionChange">
        
          <el-table-column prop="handle_id" label="处理编号" width="150">
          </el-table-column>
          <el-table-column prop="handle_type" label="处理类型" width="120">
          </el-table-column>
          <el-table-column prop="user_id" label="处理人" width="120">
          </el-table-column>
          <el-table-column prop="handle_content" label="处理内容" width="120">
          </el-table-column>
          <el-table-column prop="gongsi" label="公司" width="120">
          </el-table-column>
          <el-table-column prop="bumen" label="部门" width="120">
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
import { taxonomy } from "@/api";
export default {
    components:{
        daBreadcrumb
    },
    data() {
      return {
        options: [{
          value: '阿里',
          label: '阿里'
        }, {
          value: '腾讯',
          label: '腾讯'
        }, {
          value: '京东',
          label: '京东'
        }, {
          value: '拼多多',
          label: '拼多多'
        }, {
          value: '蓝翔',
          label: '蓝翔'
        }],
        options2: [{
          value: '部门1',
          label: '部门1'
        }, {
          value: '部门2',
          label: '部门2'
        }, {
          value: '部门3',
          label: '部门3'
        }, {
          value: '部门4',
          label: '部门4'
        }, {
          value: '部门5',
          label: '部门5'
        }],
        tableData5: [],
        tableData6: [],
        value33: [],
        value66: [],
      }
    },
    mounted:function(){
        taxonomy.getTaxonomy()
        .then(res=>{
            console.log(res.data);
            this.tableData5 = res.data.data;
        })
        .catch(err=>{
            this.$message.error(err);
        })
    },
    methods: {
        open() {
            this.tableData6 = [];      
            for (var i = 0; i < this.tableData5.length; i++) {
                if (
                    this.tableData5[i].gongsi==this.value33 &&
                    this.tableData5[i].bumen==this.value66
                ) {
                    this.tableData6.push(this.tableData5[i]);
                }else {
                    this.$message.error('公司部门未匹配到');
                }
            }
            console.log(this.tableData6)
        }
    }
}
</script>