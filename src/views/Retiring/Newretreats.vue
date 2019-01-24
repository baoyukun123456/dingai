<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-tabs v-model="activeName">
                <el-tab-pane label="退库单" name="first">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="处理人">
                                <el-input
                                placeholder=""
                                v-model="input1"
                                :disabled="true">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="退库时间">
                                <el-date-picker
                                v-model="value1"
                                type="datetime"
                                placeholder="选择日期时间">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="退路仓库">
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="退库说明">
                                <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="退库说明"
                                v-model="textarea">
                                </el-input>
                    </el-form-item>

                    <div style="float:left;margin-bottom:20px;">
                        <el-button @click="innerVisible = true">选择资产</el-button>
                        <el-button type="danger" @click="shanchu">删除</el-button>
                    </div>




                    <!-- 退库选择资产的对话框开始 -->
                    <el-dialog
                    width="80%"
                    title="选择资产"
                    style="text-align:center;"
                    :visible.sync="innerVisible"
                    append-to-body>
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="选择退库资产" name="first">
                                <el-input placeholder="请输入内容" v-model="input5" class="input-with-select" style="width:50%;float:left;">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                            <div style="height:20px;width:20px;"></div>
                            



                            <el-table
                                :data="tableData"
                                border ref="multipleTable1"  tooltip-effect="dark" @selection-change="handleSelectionChange1"
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



                            <!-- <div class="block" style="margin-top:20px;text-align:left;">
                                <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage2"
                                :page-sizes="[5, 10, 20, 30]"
                                :page-size="5"
                                layout="sizes, prev, pager, next"
                                :total="tableData1.length">
                                </el-pagination>
                            </div> -->



                            </el-tab-pane>
                        </el-tabs>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="innerVisible = false">取 消</el-button>
                            <el-button type="primary" @click="xuanzezichan">确 定</el-button>
                        </span>
                    </el-dialog>
                    <!-- 退库选择资产的对话框结束 -->



                    <el-table
                        :data="tableData2"
                        border
                        style="width: 100%" @selection-change="handleSelectionChange" tooltip-effect="dark" ref="1">
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
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="specification"
                        label="规格型号"
                        width="180">
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
                        <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        </template>
                        </el-table-column>
                    </el-table>

                </el-tab-pane>
            </el-tabs>
        </el-form>     
    </div>
</template>
<script>
export default {
    data() {
      return {
        innerVisible:false,
        activeName: 'first',
        tableData2:[],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
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
        multipleSelection1: []
      }
    },
    methods:{
        xuanzezichan(){
            this.innerVisible=false;
            this.tableData2=this.multipleSelection1;
            console.log(this.multipleSelection1);
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
        this.multipleSelection = val.map(v=>{
            return v.id
        });
        },
        handleSelectionChange1(val) {
        // this.multipleSelection = val.map(v=>{
        //     return v.id
        // });
        this.multipleSelection1=val;
        },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        shanchu(){
          for(var i=0;i<this.tableData2.length;i++){
              for(var k=0;k<this.multipleSelection.length;k++){
                  if(this.tableData2[i].id==this.multipleSelection[k]){
                      this.tableData2.splice(i,1)
                  }
              }
          }
      }
    }
}
</script>
<style lang="less">

</style>

