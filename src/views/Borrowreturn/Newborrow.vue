<template>
    <div style="text-align:left;">
        <el-form :label-position="right" label-width="80px" :model="formLabelAlign">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="借用人">
                            <Borrower></Borrower>
                        </el-form-item>
                        <el-form-item label="借出时间">
                            <el-date-picker
                            v-model="formLabelAlign.borrow_time"
                            type="datetime"
                            placeholder="选择日期时间">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="预计归还">
                            <el-date-picker
                            v-model="formLabelAlign.yuji_time"
                            type="datetime"
                            placeholder="选择日期时间">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="实际归还">
                            <el-date-picker
                            v-model="formLabelAlign.return_time"
                            type="datetime"
                            placeholder="选择日期时间">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="处理人">
                            <el-input v-model="formLabelAlign.chuliname" disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="说明">
                            <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                            </el-input>
                </el-form-item>
                <el-button @click="innerVisible = true">选择资产</el-button>
                <el-button type="danger" @click="shanjie">删除</el-button>
            </el-form>
            
            <div style="width:10px;height:30px;"></div>

            <!-- 弹出框 -->
                <el-dialog
                    :visible.sync="innerVisible" append-to-body style="text-align:center;"
                    width="80%" title="选择借用">
                    
                    
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="选择借用资产" name="first">
                            <el-input placeholder="请输入内容" class="input-with-select" style="width:50%;float:left;">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                            <div style="height:50px;width:20px;"></div>
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
                                <!-- <el-table-column
                                fixed="right"
                                label="操作"
                                width="100">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="viewassetsf(scope.row)">查看</el-button>
                                    <el-button type="text" size="small"  @click="editorzcf(scope.row)">编辑</el-button>
                                </template>
                                </el-table-column> -->
                            </el-table>
                            <!-- 表格展示结束 -->
                            <!-- 分页展示 -->
                            <div class="block" style="margin-top:20px;text-align:left;">
                                <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage2"
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
                        <el-button type="primary" @click="xuanzejieyong">确 定</el-button>
                    </span>
                </el-dialog>
                <!-- 弹窗结束 -->



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
    </div>
</template>
<script>
import Borrower from '@/components/Borrower.vue';
export default {
    data(){
        return {
            formLabelAlign: {
                borrow_name: '',
                return_time: '',
                borrow_time: '',                
                yuji_time: '',
            },
            tableData2:[],
            activeName:"first",
            innerVisible:false,
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
    components:{
        Borrower
    },
    methods:{
       
      handleSelectionChange1(val) {
        this.multipleSelection1 = val.map(v=>{
            return v.id
        });
        // this.multipleSelection1=val;
      },
       
      handleSelectionChange(val) {
        // this.multipleSelection = val.map(v=>{
        //     return v.id
        // });
        this.multipleSelection=val;
      },
      xuanzejieyong(){
          this.innerVisible=false;
          this.tableData2=this.multipleSelection;
      },
      shanjie(){
          console.log(this.multipleSelection1);
          console.log(this.tableData2);
          for(var i=0;i<this.tableData2.length;i++){
              for(var j=0;j<this.multipleSelection1.length;j++){
                  if(this.tableData2[i].id==this.multipleSelection1[j]){
                    this.tableData2.splice(i,1);
                  }
              }
            
          }
      }
    }
}
</script>

