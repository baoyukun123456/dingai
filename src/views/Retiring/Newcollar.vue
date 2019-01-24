<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-tabs v-model="activeName">
            <el-tab-pane label="领用单" name="first">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="领用人">
                            <Borrower></Borrower>
                        </el-form-item>
                        <el-form-item label="领用公司">
                            <el-select v-model="jialingyong.b" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="领用时间">
                            <el-date-picker
                            v-model="jialingyong.a"
                            type="date"
                            placeholder="选择领用日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="领用部门">
                            <el-select v-model="jialingyong.c" placeholder="请选择">
                                <el-option
                                v-for="item in options1"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="名称">
                            <el-date-picker
                            v-model="jialingyong.d"
                            type="date"
                            placeholder="选择退库日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="存放地点">
                            <el-input v-model="formLabelAlign.region" placeholder="领用后存放地点"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="处理人">
                            <el-input v-model="formLabelAlign.region" placeholder="处理人"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="说明">
                            <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="领用说明"
                            v-model="formLabelAlign.name">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- 弹出框 -->
                <el-dialog
                    :visible.sync="innerVisible" title="选择资产"
                    style="text-align:center;" append-to-body
                    width="80%">
                    
                    
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="选择领用资产" name="first">
                            <el-input placeholder="请输入内容"  class="input-with-select" style="width:50%;float:left;">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                            <div style="height:20px;width:20px;"></div>
                            <!-- 表格展示开始 -->
                            <el-table
                                :data="tableData"
                                border ref="multipleTable"  tooltip-effect="dark" @selection-change="handleSelectionChange"
                                style="width: 100%">
                                <el-table-column
                                type="selection"
                                width="55" fixed>
                                </el-table-column>
                                <el-table-column
                                prop="bar_code"
                                label="资产条码"
                                width="150">
                                </el-table-column>
                                <el-table-column
                                prop="name"
                                label="资产名称"
                                width="120">
                                </el-table-column>
                                <el-table-column
                                prop="type_id"
                                label="资产类型"
                                width="120">
                                </el-table-column>
                                <el-table-column
                                prop="specification"
                                label="规格型号"
                                width="120">
                                </el-table-column>
                                <el-table-column
                                prop="sn"
                                label="产品序号"
                                width="300">
                                </el-table-column>
                                <el-table-column
                                prop="metering"
                                label="计量单位"
                                width="120">
                                </el-table-column>
                                <el-table-column
                                prop="money"
                                label="金额"
                                width="120">
                                </el-table-column>
                                <el-table-column
                                prop="company"
                                label="使用公司"
                                width="120">
                                </el-table-column>
                                
                            </el-table>
                            <!-- 表格展示结束 -->
                            <!-- 分页展示 -->
                            <div class="block" style="margin-top:20px;text-align:left;">
                                <el-pagination
                                :page-sizes="[5, 10, 20, 30]"
                                :page-size="5"
                                layout="sizes, prev, pager, next"
                                :total="tableData.length">
                                </el-pagination>
                            </div>
                            <!-- 分页展示结束 -->
                        </el-tab-pane>
                    </el-tabs>


                    <span slot="footer" class="dialog-footer">
                        <el-button @click="innerVisible = false">取 消</el-button>
                        <el-button type="primary" @click="xuanzezichan">确 定</el-button>
                    </span>
                </el-dialog>
                <!-- 弹窗结束 -->
                <div style="float:left;margin-bottom:20px;">
                    <el-button @click="innerVisible = true">领用资产</el-button>
                    <el-button type="danger" @click="shanchu">删除资产</el-button>
                </div>


                <el-table
                    :data="tableData2"
                    border
                    style="width: 100%" @selection-change="handleSelectionChange1" tooltip-effect="dark" ref="multipleTable1">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    fixed
                    prop="bar_code"
                    label="资产条码"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="资产名称"
                    width="300">
                    </el-table-column>
                    <el-table-column
                    prop="specification"
                    label="规格型号"
                    width="300">
                    </el-table-column>
                    <el-table-column
                    prop="money"
                    label="金额"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    prop="company"
                    label="使用公司"
                    width="200">
                    </el-table-column>
                </el-table>

            </el-tab-pane>
        </el-tabs>
        </el-form>
    </div>
</template>
<script>
// import Claimassets from './Claimassets.vue';
import Borrower from '../../components/Borrower.vue';
export default {
     data() {
      return {
        tableData2:[],
        innerVisible: false,
        activeName: 'first',
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        options: [{
          value: '选项1',
          label: '南京'
        }, {
          value: '选项5',
          label: '光伟'
        }],
        options1:[],
        value: '',
        tableData: [{
            "id":1,
            "bar_code":"03010001",
            "name":"打印机",
            "type_id":"02",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":2980,
            "company":"光威",
            "department":"",
            "purchase_time":"2018-06-08",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":""
        },
        {
            "id":2,
            "bar_code":"03010011",
            "name":"切纸机",
            "type_id":"03",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":280,
            "company":"南京",
            "department":"",
            "purchase_time":"2018-06-07",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":""
        },
        {
            "id":3,
            "bar_code":"03010013",
            "name":"复印机",
            "type_id":"03",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":280,
            "company":"南京",
            "department":"",
            "purchase_time":"2018-06-07",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":""
        },
        {
            "id":4,
            "bar_code":"03010031",
            "name":"电风扇",
            "type_id":"03",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":280,
            "company":"南京",
            "department":"",
            "purchase_time":"2018-06-07",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":""
        },
        {
            "id":5,
            "bar_code":"03010031",
            "name":"电风扇",
            "type_id":"03",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":280,
            "company":"南京",
            "department":"",
            "purchase_time":"2018-06-07",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"12",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":""
        },
        {
            "id":6,
            "bar_code":"03010031",
            "name":"电风扇",
            "type_id":"03",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":280,
            "company":"南京",
            "department":"",
            "purchase_time":"2018-06-07",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"10",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":""
        },
        {
            "id":7,
            "bar_code":"03010031",
            "name":"电风扇",
            "type_id":"03",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":280,
            "company":"南京",
            "department":"",
            "purchase_time":"2018-06-07",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":""
        },
        {
            "id":8,
            "bar_code":"03010031",
            "name":"电风扇",
            "type_id":"03",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":280,
            "company":"南京",
            "department":"",
            "purchase_time":"2018-06-07",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":""
        },
        {
            "id":9,
            "bar_code":"03010031",
            "name":"电风扇",
            "type_id":"03",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":280,
            "company":"南京",
            "department":"",
            "purchase_time":"2018-06-07",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":""
        },
        {
            "id":10,
            "bar_code":"03010031",
            "name":"电风扇",
            "type_id":"03",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":280,
            "company":"南京",
            "department":"",
            "purchase_time":"2018-06-07",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":""
        },
        {
            "id":11,
            "bar_code":"03010031",
            "name":"电风扇",
            "type_id":"03",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":280,
            "company":"南京",
            "department":"",
            "purchase_time":"2018-06-07",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":""
        }],
        multipleSelection: [],
        multipleSelection1: [],
        jialingyong:{
            a:"",
            b:"",
            c:"",
            d:"",
            e:""
        }
      };
    },
    components:{
        Borrower
    },
    methods:{
        xuanzezichan(){
            this.tableData2=this.multipleSelection;
            console.log(this.multipleSelection)
            this.innerVisible=false;
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
        this.multipleSelection=val;
      },
      handleSelectionChange1(val) {
          console.log(this.tableData2)
        this.multipleSelection1 = val.map(v=>{
            return v.id
        });
      },
      shanchu(){
          for(var i=0;i<this.tableData2.length;i++){
              for(var k=0;k<this.multipleSelection1.length;k++){
                  if(this.tableData2[i].id==this.multipleSelection1[k]){
                      this.tableData2.splice(i,1)
                  }
              }
          }
      }
    }
}
</script>
<style lang="less">
    .el-select{
        // width: 100%;
    }
    .el-date-picker{
        // width: 100%;
    }
</style>


