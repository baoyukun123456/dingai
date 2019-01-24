<template>
    <div>
        <h3 style="margin: -40px 30px 0 0; line-height: 24px;
    font-size: 18px;">实物信息表更</h3>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <!-- <el-tab-pane label="实物信息变更" name="first"> -->
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="变更单号">
                                <el-input
                                placeholder=""
                                v-model="input1"
                                >
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="业务日期">
                                <el-date-picker
                                v-model="value1"
                                type="datetime"
                                placeholder="选择业务日期">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="资产类别">
                                <el-input
                                placeholder=""
                                v-model="input1"
                                >
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="资产名称">
                                <el-input
                                placeholder=""
                                v-model="input1"
                                >
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                        <el-form-item label="区域">
                                <el-input
                                placeholder=""
                                v-model="input1"
                                >
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="存放地点">
                                <el-input
                                placeholder=""
                                v-model="input1"
                                >
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="使用公司">
                                <el-input
                                placeholder=""
                                v-model="input1"
                                >
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                        <el-form-item label="使用部门">
                                <el-input
                                placeholder=""
                                v-model="input1"
                                >
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="领用人">
                                <el-input
                                placeholder=""
                                v-model="input1"
                                >
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="备注">
                                <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="备注"
                                v-model="textarea">
                                </el-input>
                    </el-form-item>

                    <!-- <div style="float:left;margin-bottom:20px;">
                        <el-button @click="innerVisible = true">选择资产</el-button>
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
export default {
    data() {
      return {
        activeName: 'first',
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
      }
    }
}
</script>
<style lang="less">

</style>

