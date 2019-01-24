<template>
    <div>
        <h3 style="margin: -40px 30px 0 0; line-height: 24px;
    font-size: 18px;">维保信息表更</h3>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <!-- <el-tab-pane label="维保信息变更" name="first"> -->
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="变更单号">
                            <el-input v-model="formLabelAlign.name" placeholder="变更单号"></el-input>
                        </el-form-item>
                        <el-form-item label="负责人">
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
                    <el-col :span="8">
                        <el-form-item label="业务日期">
                            <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="选择业务日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="供应商">
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
                    <el-col :span="8">
                        <el-form-item label="维保到期">
                            <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="选择维保到期日">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="联系人">
                            <el-input v-model="formLabelAlign.region" placeholder="联系人"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="签字">
                            <el-input v-model="formLabelAlign.region" placeholder="签字"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="联系方式">
                            <el-input v-model="formLabelAlign.region" placeholder="联系方式"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- 弹出框 -->
                <el-dialog
                    :visible.sync="innerVisible" append-to-body
                    width="80%">
                    
                    <Claimassets></Claimassets>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="innerVisible = false">取 消</el-button>
                        <el-button type="primary" @click="innerVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
                <!-- 弹窗结束 -->
                <!-- <div style="float:left;margin-bottom:20px;">
                    <el-button @click="innerVisible = true">领用资产</el-button>
                </div>


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
                    prop="date"
                    label="资产条码"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="资产名称"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="province"
                    label="规格型号"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="金额"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    prop="city"
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
                </el-table> -->

            </el-tab-pane>
        </el-tabs>
        </el-form>
    </div>
</template>
<script>
import Claimassets from './Claimassets.vue';
export default {
     data() {
      return {
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
        value: ''
      };
    },
    components:{
        Claimassets
    }
}
</script>
<style lang="less">
    .el-select{
        width: 100%;
    }
    .el-date-picker{
        width: 100%;
    }
</style>


