<template>
  <div>
    <!-- 面包屑导航 -->
    <da-breadcrumb></da-breadcrumb>

    <el-dialog title="新增" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
      <Scrap1></Scrap1>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addscrapSubmit">确 定</el-button>
      </span>
    </el-dialog>
    <el-tabs v-model="activeName">
      <el-tab-pane label="报废管理" name="first" style="text-align:left;">
        <el-row>
          <el-col :span="18">
            <el-button type="primary" @click="dialogVisible = true">新增</el-button>
            <el-button type="primary" @click="dialogVisible1 = true">还原</el-button>
            <el-button>打印</el-button>
          </el-col>

        </el-row>
        <div style="width:10px;height:20px;"></div>
        <el-table border ref="multipleTable" :data="scrapData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column prop="order" label="清理单号" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="清理日期" width="180">
            <template slot-scope="scope">{{ scope.row.time|date('yyyy-MM-dd') }}</template>
          </el-table-column>
          <el-table-column prop="name" label="清理人" width="120">
          </el-table-column>
          <el-table-column prop="instructions" label="清理说明" show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!-- 还原 -->
    <el-dialog title="还原" :visible.sync="dialogVisible1" width="50%" :before-close="handleClose">
      <!-- 还原表格 -->
      <el-table border ref="multipleTable" :data="scrapData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="order" label="清理单号" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="清理日期" width="180">
          <template slot-scope="scope">{{ scope.row.time|date('yyyy-MM-dd') }}</template>
        </el-table-column>
        <el-table-column prop="name" label="清理人" width="120">
        </el-table-column>
        <el-table-column prop="instructions" label="清理说明" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
import daBreadcrumb from "@/components/daBreadcrumb.vue";
import Scrap1 from "./Scrap1.vue";
import { scrap } from "@/api";
import { assets } from "@/api";
export default {
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      activeName: "first",
      formLabelAlign: [],
      scrapData: [],
      tableData3: [
        {
          id: 1,
          order: "bf1111",
          time: 13131312323,
          name: "张三",
          instructions: "不要了，报废"
        },
        {
          id: 2,
          order: "bf2222",
          time: 13131312323,
          name: "李四",
          instructions: "不要了，报废"
        },
        {
          id: 1,
          order: "bf3333",
          time: 13131312323,
          name: "王五",
          instructions: "不要了，报废"
        }
      ],
      multipleSelection: []
    };
  },
  components: {
    daBreadcrumb,
    Scrap1
  },
  mounted() {
    scrap.getScrap()
      .then(res => {
        this.scrapData = res.data.data;
      })
      .catch(err => {
        this.$message.error(err);
      });
  },
      
  methods: {
    addscrapSubmit() {
      this.dialogVisible = false;
      // ajax 提交 
      scrap.postScrap(this.formLabelAlign).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          console.log(111);
          this.$message({
            message: "资产添加成功!",
            type: "success"
          });
          scrap.getScrap()
            .then(res => {
              this.scrapData = res.data.data;
            })
            .catch(err => {
              this.$message.error(err);
            });
        } else {
          this.$message({
            message: "添加失败!",
            type: "warning"
          });
        }
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
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
    }
  }
};
</script>



