<template>
  <div style="text-align:left;">
    <el-form :label-position="right" label-width="80px" :model="formLabelAlign">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="清理单号">
            <el-input disabled placeholder="清理单号" v-model="formLabelAlign.order"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="清理日期">
            <el-col :span="24">
              <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.time" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="清理人">
            <el-input disabled placeholder="张三" v-model="formLabelAlign.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="清理说明">
        <el-input type="textarea" :rows="2" placeholder="请输入说明" v-model="formLabelAlign.instructions">
        </el-input>
      </el-form-item>
      <el-button @click="innerVisible = true">选择资产</el-button>
      <el-button type="danger" @click="del">删除</el-button>
    </el-form>

    <div style="width:10px;height:30px;"></div>

    <!-- 弹出框 -->
    <el-dialog style="text-align:center" title="资产" :visible.sync="innerVisible" append-to-body width="80%">
      <el-tabs v-model="activeName">
        <el-tab-pane label="选择资产" name="first">
          <el-input placeholder="请输入内容" class="input-with-select" style="width:50%;">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <div style="height:20px;width:20px;"></div>
          <!-- 表格 -->
          <el-table border :data="assetsData" ref="multipleTable" tooltip-effect="dark" @selection-change="handleSelectionChange" style="width: 100%">
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
          <!-- 分页 -->
          <div class="block" style="margin-top:20px;text-align:left;">
            <el-pagination :page-sizes="[5, 10, 20, 30]" :page-size="5" layout="sizes, prev, pager, next" :total="tableData.length">
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>

      <span slot="footer" class="dialog-footer">
        <el-button @click="innerVisible = false">取 消</el-button>
        <el-button type="primary" @click="selectscrap">确 定</el-button>
      </span>
    </el-dialog>

    <el-table :data="tableData2" border style="width: 100%" @selection-change="handleSelectionChange1" tooltip-effect="dark" ref="multipleTable1">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column fixed prop="bar_code" label="资产条码" width="200">
      </el-table-column>
      <el-table-column prop="name" label="资产名称" width="200">
      </el-table-column>
      <el-table-column prop="specification" label="规格型号" width="180">
      </el-table-column>
      <el-table-column prop="money" label="金额" width="150">
      </el-table-column>
      <el-table-column prop="company" label="使用公司" width="200">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { assets } from "@/api";
import { scrap } from "@/api";
export default {
  data() {
    return {
      formLabelAlign: {
        name: "",
        time: "",
        time: ""
      },
      assetsData: [],
      tableData2: [],
      delAssetsIds: [],
      activeName: "first",
      innerVisible: false,
      tableData: [
        {
          id: 1,
          bar_code: "03010001",
          name: "打印机",
          type_id: "02",
          specification: "索尼3000",
          sn: 49090343,
          metering: "台",
          money: 2980,
          company: "光威",
          department: "",
          purchase_time: "2018-06-08",
          user_id: 1001,
          manager_id: 102,
          address: "办公室北区",
          duration_use: "",
          source: "购入",
          remarks: "",
          image: "http://placeholder.qiniudn.com/200x200",
          supplier: "索尼赛格旗舰店",
          contacts: "张素芳",
          tell: 13131312323,
          expiry_time: "2019-06-08",
          explain: ""
        },
        {
          id: 2,
          bar_code: "03010011",
          name: "切纸机",
          type_id: "03",
          specification: "索尼3000",
          sn: 49090343,
          metering: "台",
          money: 280,
          company: "南京",
          department: "",
          purchase_time: "2018-06-07",
          user_id: 1001,
          manager_id: 102,
          address: "办公室北区",
          duration_use: "",
          source: "购入",
          remarks: "",
          image: "http://placeholder.qiniudn.com/200x200",
          supplier: "索尼赛格旗舰店",
          contacts: "张素芳",
          tell: 13131312323,
          expiry_time: "2019-06-08",
          explain: ""
        },
        {
          id: 3,
          bar_code: "03010013",
          name: "复印机",
          type_id: "03",
          specification: "索尼3000",
          sn: 49090343,
          metering: "台",
          money: 280,
          company: "南京",
          department: "",
          purchase_time: "2018-06-07",
          user_id: 1001,
          manager_id: 102,
          address: "办公室北区",
          duration_use: "",
          source: "购入",
          remarks: "",
          image: "http://placeholder.qiniudn.com/200x200",
          supplier: "索尼赛格旗舰店",
          contacts: "张素芳",
          tell: 13131312323,
          expiry_time: "2019-06-08",
          explain: ""
        },
        {
          id: 4,
          bar_code: "03010031",
          name: "电风扇",
          type_id: "03",
          specification: "索尼3000",
          sn: 49090343,
          metering: "台",
          money: 280,
          company: "南京",
          department: "",
          purchase_time: "2018-06-07",
          user_id: 1001,
          manager_id: 102,
          address: "办公室北区",
          duration_use: "",
          source: "购入",
          remarks: "",
          image: "http://placeholder.qiniudn.com/200x200",
          supplier: "索尼赛格旗舰店",
          contacts: "张素芳",
          tell: 13131312323,
          expiry_time: "2019-06-08",
          explain: ""
        },
        {
          id: 5,
          bar_code: "03010031",
          name: "电风扇",
          type_id: "03",
          specification: "索尼3000",
          sn: 49090343,
          metering: "台",
          money: 280,
          company: "南京",
          department: "",
          purchase_time: "2018-06-07",
          user_id: 1001,
          manager_id: 102,
          address: "办公室北区",
          duration_use: "12",
          source: "购入",
          remarks: "",
          image: "http://placeholder.qiniudn.com/200x200",
          supplier: "索尼赛格旗舰店",
          contacts: "张素芳",
          tell: 13131312323,
          expiry_time: "2019-06-08",
          explain: ""
        },
        {
          id: 6,
          bar_code: "03010031",
          name: "电风扇",
          type_id: "03",
          specification: "索尼3000",
          sn: 49090343,
          metering: "台",
          money: 280,
          company: "南京",
          department: "",
          purchase_time: "2018-06-07",
          user_id: 1001,
          manager_id: 102,
          address: "办公室北区",
          duration_use: "10",
          source: "购入",
          remarks: "",
          image: "http://placeholder.qiniudn.com/200x200",
          supplier: "索尼赛格旗舰店",
          contacts: "张素芳",
          tell: 13131312323,
          expiry_time: "2019-06-08",
          explain: ""
        },
        {
          id: 7,
          bar_code: "03010031",
          name: "电风扇",
          type_id: "03",
          specification: "索尼3000",
          sn: 49090343,
          metering: "台",
          money: 280,
          company: "南京",
          department: "",
          purchase_time: "2018-06-07",
          user_id: 1001,
          manager_id: 102,
          address: "办公室北区",
          duration_use: "",
          source: "购入",
          remarks: "",
          image: "http://placeholder.qiniudn.com/200x200",
          supplier: "索尼赛格旗舰店",
          contacts: "张素芳",
          tell: 13131312323,
          expiry_time: "2019-06-08",
          explain: ""
        },
        {
          id: 8,
          bar_code: "03010031",
          name: "电风扇",
          type_id: "03",
          specification: "索尼3000",
          sn: 49090343,
          metering: "台",
          money: 280,
          company: "南京",
          department: "",
          purchase_time: "2018-06-07",
          user_id: 1001,
          manager_id: 102,
          address: "办公室北区",
          duration_use: "",
          source: "购入",
          remarks: "",
          image: "http://placeholder.qiniudn.com/200x200",
          supplier: "索尼赛格旗舰店",
          contacts: "张素芳",
          tell: 13131312323,
          expiry_time: "2019-06-08",
          explain: ""
        },
        {
          id: 9,
          bar_code: "03010031",
          name: "电风扇",
          type_id: "03",
          specification: "索尼3000",
          sn: 49090343,
          metering: "台",
          money: 280,
          company: "南京",
          department: "",
          purchase_time: "2018-06-07",
          user_id: 1001,
          manager_id: 102,
          address: "办公室北区",
          duration_use: "",
          source: "购入",
          remarks: "",
          image: "http://placeholder.qiniudn.com/200x200",
          supplier: "索尼赛格旗舰店",
          contacts: "张素芳",
          tell: 13131312323,
          expiry_time: "2019-06-08",
          explain: ""
        },
        {
          id: 10,
          bar_code: "03010031",
          name: "电风扇",
          type_id: "03",
          specification: "索尼3000",
          sn: 49090343,
          metering: "台",
          money: 280,
          company: "南京",
          department: "",
          purchase_time: "2018-06-07",
          user_id: 1001,
          manager_id: 102,
          address: "办公室北区",
          duration_use: "",
          source: "购入",
          remarks: "",
          image: "http://placeholder.qiniudn.com/200x200",
          supplier: "索尼赛格旗舰店",
          contacts: "张素芳",
          tell: 13131312323,
          expiry_time: "2019-06-08",
          explain: ""
        },
        {
          id: 11,
          bar_code: "03010031",
          name: "电风扇",
          type_id: "03",
          specification: "索尼3000",
          sn: 49090343,
          metering: "台",
          money: 280,
          company: "南京",
          department: "",
          purchase_time: "2018-06-07",
          user_id: 1001,
          manager_id: 102,
          address: "办公室北区",
          duration_use: "",
          source: "购入",
          remarks: "",
          image: "http://placeholder.qiniudn.com/200x200",
          supplier: "索尼赛格旗舰店",
          contacts: "张素芳",
          tell: 13131312323,
          expiry_time: "2019-06-08",
          explain: ""
        }
      ],
      multipleSelection: [],
      multipleSelection1: []
    };
  },
  methods: {
    handleSelectionChange1(val) {
      this.multipleSelection1 = val.map(v => {
        return v.id;
      });
    },

    del() {
      for (var i = 0; i < this.tableData2.length; i++) {
        for (var j = 0; j < this.multipleSelection1.length; j++) {
          if (this.tableData2[i].id == this.multipleSelection1[j]) {
            this.tableData2.splice(i, 1);
          }
        }
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    selectscrap() {
      this.innerVisible = false;
      this.tableData2 = this.multipleSelection;
    }
  },
  mounted() {
    assets
      .getAssets()
      .then(res => {
        console.log(res.data);
        this.assetsData = res.data.data;
      })
      .catch(err => {
        this.$message.error(err);
      });
  }
};
</script>

<style lang="less" scoped>
</style>


