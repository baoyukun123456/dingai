<template>
    <div>
        <!-- 面包屑导航 -->
        <da-breadcrumb></da-breadcrumb>
        <!-- 弹出框 -->
        <el-dialog
            :visible.sync="outerVisible"
            width="80%">
            <Newcollar></Newcollar>
            <span slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">取 消</el-button>
                <el-button type="primary" @click="outerVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 弹窗结束 -->
        <el-tabs v-model="activeName">
            <el-tab-pane label="维保信息变更" name="first">
                <div style="float:left;">
                        <el-button plain @click="outerVisible = true">新增变更记录</el-button>
                        <el-button type="primary" style="margin:0px 10px;">打印</el-button>
                        <el-button type="primary">导出</el-button> 
                          <span style="margin-left: 10px;">处理日期 </span>
                          <el-date-picker style="width: 300px; margin-left: 10px;" v-model="value4" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                          </el-date-picker>
                        <el-button type="primary" style="margin-left: 10px;" @click="open">
                              <i class="el-icon-view"></i> 查询</el-button>
                </div>

                
                <div style="width:50px;height:60px"></div>
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%" @selection-change="handleSelectionChange" tooltip-effect="dark" ref="multipleTable">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    fixed
                    prop="mark"
                    label="签字"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    fixed
                    prop="collar_number"
                    label="变更单号"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="collar_time"
                    label="业务日期"
                    width="180">
                    <template slot-scope="scope">{{ scope.row.collar_time|date('yyyy-MM-dd hh:mm:ss') }}</template>

                    </el-table-column>
                    <el-table-column
                    prop="promise_name"
                    label="供应商"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="personnel_name"
                    label="联系人"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="expect_retreat"
                    label="联系方式"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="response_name"
                    label="负责人"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    prop="expect_retreat"
                    label="维保到期日"
                    width="180">
                    <template slot-scope="scope">{{ scope.row.expect_retreat|date('yyyy-MM-dd hh:mm:ss') }}</template>
                    </el-table-column>
                    <el-table-column
                    fixed="right"
                    label="操作"
                    width="150">
                    <template slot-scope="scope">
                        <el-button @click="showcollar(scope.row)" type="text" size="small">查看</el-button>
                    </template>
                    </el-table-column>
                </el-table>


                <div class="block">
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

            </el-tab-pane>


            <!-- 新增的查看对话框 -->
            <el-dialog
            title="维保信息变更"
            :visible.sync="newshowcollar"
            width="80%"
            :before-close="handleClose">
            <Viewnew :showcollardata="showcollardata"></Viewnew>
            <span slot="footer" class="dialog-footer">
                <el-button @click="newshowcollar = false">取 消</el-button>
                <el-button type="primary" @click="newshowcollar = false">确 定</el-button>
            </span>
            </el-dialog>
            <!-- 新增的查看对话框结束 -->

            <!-- 新增退库对话框 -->
            <el-dialog
            :visible.sync="dialogVisible"
            width="80%"
            :before-close="handleClose">
            <Newretreats></Newretreats>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
            </el-dialog>
            <!-- 新增退库对话框结束 -->
            <el-tab-pane label="实物信息变更" name="second">
                <div  class="between">
                    <div style="float:left;">
                        <el-button plain @click="outerVisible = true">新增变更记录</el-button>
                        <el-button type="primary" style="margin:0px 10px;">打印</el-button>
                        <el-button type="primary">导出</el-button> 
                          <span style="margin-left: 10px;">处理日期 </span>
                          <el-date-picker style="width: 300px; margin-left: 10px;" v-model="value4" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                          </el-date-picker>
                        <el-button type="primary" style="margin-left: 10px;" @click="open">
                              <i class="el-icon-view"></i> 查询</el-button>
                </div>
                    <div>
                </div>
                </div>
                
                <div style="width:50px;height:50px;"></div>

                <el-table
                    :data="tableData2"
                    border
                    style="width: 100%" @selection-change="handleSelectionChange" tooltip-effect="dark" ref="multipleTable">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    fixed
                    prop="retiring_number"
                    label="变更单号"
                    width="150">
                    </el-table-column>
                    
                    <el-table-column
                    prop="retiring_time"
                    label="业务日期"
                    width="200">
                    <template slot-scope="scope">{{ scope.row.retiring_time|date('yyyy-MM-dd hh:mm:ss') }}</template>
                    </el-table-column>
                    <el-table-column
                    prop="type_id"
                    label="资产类别"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="资产名称"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="local"
                    label="区域"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="warehouse_name"
                    label="存放地点"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="company_name"
                    label="使用公司"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="department_name"
                    label="使用部门"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="handle_name"
                    label="使用人"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="retiring_remarks"
                    label="备注"
                    width="300">
                    </el-table-column>
                    <el-table-column
                    fixed="right"
                    label="操作"
                    width="150">
                    <template slot-scope="scope">
                        <el-button @click="showRetiring(scope.row)" type="text" size="small">查看</el-button>
                    </template>
                    </el-table-column>
                </el-table>


                <!-- 新增退库查看 -->
                <el-dialog
                title="实物信息变更"
                :visible.sync="viewtuiku"
                width="80%"
                :before-close="handleClose">
                <Viewtui :showretiringdata="showretiringdata"></Viewtui>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="viewtuiku = false">取 消</el-button>
                    <el-button type="primary" @click="viewtuiku = false">确 定</el-button>
                </span>
                </el-dialog>
                <!-- 新增退库查看结束 -->


                <div class="block">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage2"
                    :page-sizes="[5, 10, 20, 30]"
                    :page-size="5"
                    layout="sizes, prev, pager, next"
                    :total="100">
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import daBreadcrumb from '@/components/daBreadcrumb.vue';
import Newcollar from './Newcollar.vue';
import Newretreats from './Newretreats.vue';
import Viewnew from './Viewnew.vue';
import Viewtui from './Viewtui.vue';
export default {
    data() {
      return {
        outerVisible: false,
        dialogVisible: false,
        newshowcollar:false,
        showcollardata:{},
        viewtuiku:false,
        showretiringdata:{},
        activeName: 'first',
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
        tableData: [
            {
                "id":1,
                "collar_number":"LY20180618003",
                "collar_time":"1529254718034",
                "type_id":"02",
                "name":"索尼手机",
                "personnel_name":"张三",
                "department_name":"研发部",
                "company_name":"康达",
                "expect_retreat":"1529254718039",
                "response_name":"王阳",
                "promise_name": "联想",
                "mark":"王阳"
            },
            {
                "id":3,
                "collar_number":"LY20180618012",
                "collar_time":"1529254718034",
                "personnel_name":"王五",
                "department_name":"研发部",
                "company_name":"康达",
                "expect_retreat":"1529254718034",
                "response_name":"王阳",
                "promise_name": "联想",
                "mark":"王阳"
            },
            {
                "id":4,
                "collar_number":"LY20180618009",
                "collar_time":"1529254718034",
                "personnel_name":"赵柳",
                "department_name":"研发部",
                "company_name":"康达",
                "expect_retreat":"1529254718034",
                "response_name":"王阳",
                "promise_name": "联想",
                "mark":"王阳"
            }
        ],
        tableData2:[
            {
                "retiring_id":1,
                "retiring_number":"TK20180618033",
                "retiring_time":"1529254718034",
                "handle_name":"张三",
                "warehouse_name":"北区仓库",
                "retiring_remarks":"资产退库，没有问题~~",
                "company_name":"康达",
                "type_id":"02",
                "name":"索尼手机",
                "department_name":"研发部",
                "local": "北京"
            },
            {
                "retiring_id":2,
                "retiring_number":"TK20180618012",
                "retiring_time":"1529254718034",
                "handle_name":"张伟",
                "warehouse_name":"北区仓库",
                "retiring_remarks":"资产退库，没有问题~~",
                "company_name":"康达",
                "type_id":"03",
                "name":"索尼相机",
                "department_name":"研发部",
                "local": "北京"
            },
            {
                "retiring_id":3,
                "retiring_number":"TK20180618004",
                "retiring_time":"1529254718034",
                "handle_name":"刘莉",
                "warehouse_name":"北区仓库",
                "retiring_remarks":"资产退库，没有问题~~",
                "company_name":"康达",
                "type_id":"04",
                "name":"索尼内存卡",
                "department_name":"研发部",
                "local": "北京"
            }
        ],
        multipleSelection: []
      };
    },
    components:{
        daBreadcrumb,Newcollar,Newretreats,Viewnew,Viewtui
    },
    methods: {
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
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      showcollar(row){
          this.showcollardata=row;
          this.newshowcollar=true;  
      },
      showRetiring(row){
          this.showretiringdata=row;
          this.viewtuiku=true;
      },
      open() {
            var xiao = this.value4[0].getTime();
            var da = this.value4[1].getTime();
            this.tableData5 = [];
            for (var i = 0; i < this.tableData.length; i++) {
                console.log(this.tableData[i].handle_time * 1);
                if (
                    this.tableData[i].handle_time * 1 > xiao &&
                    this.tableData[i].handle_time * 1 < da
                ) {
                    this.tableData5.push(this.tableData[i]);
                }
            }
            if(this.tableData5.length==0){
              this.$message.error('未找到该时间范围内的处理资产');
            }
        }
    }
}
</script>
<style lang="less" scoped>
     .between{
        display: flex;
        justify-content: space-between;
     }
</style>
