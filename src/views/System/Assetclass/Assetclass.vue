<template>
    <!-- 分类 -->
    <div>
        <daBreadcrumb></daBreadcrumb>
        <el-card class="box-card">
            <el-row>
                <el-col :span="4">
                    <el-button type="primary" @click="dialogVisible = true">新增</el-button>
                    <el-button @click="dialogVisible1 = true">上传</el-button>
                </el-col>
            </el-row>
            <!-- 资产分类列表 -->
            <el-tabs :tab-position="top" class="marmot">
                <el-tab-pane label="资产分类">
                    <!-- 表格 -->
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="num" label="编号" width="180">
                        </el-table-column>
                        <el-table-column prop="user" label="名称" width="180">
                        </el-table-column>
                        <el-table-column prop="month" label="月" width="180">
                        </el-table-column>
                        <el-table-column prop="father" label="父级">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>

        </el-card>
        <!-- 新增 -->
        <el-dialog title="新增" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-col :span="12">
                    <el-form-item label="编号">
                        <el-input v-model="formInline.num" placeholder="编号"></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item label="名称">
                        <el-input v-model="formInline.user" placeholder="名称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="年限">
                        <el-input v-model="formInline.month" placeholder="年限（月）"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="父级">
                        <el-select v-model="formInline.father" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="onSubmit">确 定</el-button>
                <!-- @click="onSubmit" -->
            </span>
        </el-dialog>

        <!-- 上传 -->
        <el-dialog title="上传" :visible.sync="dialogVisible1" width="30%" :before-close="handleClose1">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                <el-button type="primary">点击上传</el-button>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
import daBreadcrumb from "@/components/daBreadcrumb.vue";
export default {
  data() {
    return {
      tableData: [
        {
          num: "001",
          user: "打印机",
          month: "5月",
          father: "办公用品"
        }
      ],
      fileList: [],
      formInline: {
        num: "",
        user: "",
        month: "",
        father: ""
      },
      dialogVisible: false,
      dialogVisible1: false
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log();

    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClose1(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  },
  components: {
    daBreadcrumb
  }
};
</script>

<style lang="less" scoped>
.marmot {
  margin-bottom: 10px;
}
</style>



