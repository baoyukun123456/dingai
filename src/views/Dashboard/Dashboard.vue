<template>
    <div>
        <da-breadcrumb></da-breadcrumb>
        <el-row :gutter="20" style="margin-bottom:20px;">
            <el-col :span="4" v-for="v in numarr" :key="v.title">
                <num-paner v-bind="v"></num-paner>
            </el-col>
        </el-row>

        <el-row :gutter="20" class="panel-row">
            <el-col :span="12">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>资产概况</span>
                    </div>
                    <el-row class="panel-progress">
                        <el-col :span="12">
                            <h4>在用</h4>
                            <el-progress type="circle" color="#668EFF" stroke-width="10" :percentage="46"></el-progress>
                        </el-col>
                        <el-col :span="12">
                            <h4>闲置</h4>
                            <el-progress type="circle" color="#5CEFA1" stroke-width="10" :percentage="54"></el-progress>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card" id="bbb">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                    </div>
                    <ve-pie :data="chartData" radius="30" width="100%" height="166px" :settings="chartSettings" :legend="{type: 'scroll', orient: 'vertical', right: 0,top: 20,bottom: 20}"></ve-pie>
                    <div class="fff"></div>
                </el-card>
            </el-col>
        </el-row>
        <!-- 第三部分 -->
        <el-row :gutter="20" class="panle">
            <el-card>
                <div style="text-align:left;">
                    <i class="el-icon-tongjibaobiao"></i>
                    <span>资产分类统计 </span>
                    <span style="font-size:12px;color:#999;">(点击每项可展开)</span>
                </div>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <template>
                            <ve-histogram :data="chartData2" :settings="chartSettings" :extend="extend"></ve-histogram>
                        </template>
                    </div>
                </el-col>
            </el-card>
        </el-row>
        <!-- 第四部分 -->
        <el-row :gutter="20" class="panel-row">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div class="header" style="margin-bottom:20px;padding:6px;box-sizing:border-box">
                            <span>
                                <i class="el-icon-tongjibaobiao"> </i>
                                耗材领用情况（点击每项可展开）
                            </span>
                        </div>
                        <el-row>
                            <el-col :span="24" style="margin-bottom:10px">
                                <el-row style="float:left">
                                    <el-button>数量</el-button>
                                    <el-button size="medium">金额</el-button>
                                </el-row>
                                <el-input v-model="input" placeholder="全部" style="width:200px;float:right"></el-input>
                            </el-col>
                            <el-col :span="24">
                                <el-radio-group v-model="radio3">
                                    <el-radio-button label="最近一年"></el-radio-button>
                                    <el-radio-button label="最近半年"></el-radio-button>
                                    <el-radio-button label="最近三个月"></el-radio-button>
                                </el-radio-group>
                            </el-col>
                            <el-col :span="24">
                                <template>
                                    <ve-histogram :data="chartData3" :settings="chartSettings"></ve-histogram>
                                </template>

                            </el-col>
                        </el-row>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div class="header" style="margin-bottom:20px;padding:6px;box-sizing:border-box">
                            <span>
                                <i class="el-icon-tongji"> </i>
                                资产使用情况（统计累计量）
                            </span>
                        </div>
                        <el-row>
                            <el-col :span="24" style="margin-bottom:10px">
                                <el-row style="float:left">
                                    <el-button style="margin-right:10px">数量</el-button>
                                    <el-button size="medium">金额</el-button>
                                </el-row>
                                <el-input v-model="input" placeholder="全部" style="width:200px;float:right"></el-input>
                            </el-col>
                            <el-col :span="24">
                                <el-radio-group v-model="radio3">
                                    <el-radio-button label="最近一年"></el-radio-button>
                                    <el-radio-button label="最近半年"></el-radio-button>
                                    <el-radio-button label="最近三个月"></el-radio-button>
                                </el-radio-group>
                            </el-col>
                            <el-col :span="24">
                                <template>
                                    <ve-histogram :data="chartData4" :settings="chartAettings"></ve-histogram>
                                </template>

                            </el-col>
                        </el-row>
                    </el-card>
                </div>
            </el-col>

        </el-row>
        <!-- 第五部分 -->
        <!-- <el-row :gutter="20" class="panle">
            <el-card class="box-card" style="height:500px">
                <div class="header" style="margin-bottom:20px;padding:6px;border-bottom:1px solid #ccc;box-sizing:border-box">
                    <span style="margin-right:10px">快捷操作</span>
                    <a href="" style="font-size:10px;color:#978EFF;text-decoration:underline">使用手册</a>
                </div>
                <el-row style="position:relative;top:50px;left:10%">
                    <div style=" width: 100px;  height:100px;border-radius:50%;border:1px solid #AAAAAA;position:relative;">
                        <div style=" width: 80px;  height:80px;border-radius:50%;border:1px solid #AAAAAA;position:absolute;top:50%;left:50%;margin-left:-40px;margin-top:-40px">
                            <div style="text-align:center;line-height:80px;color:#668EFF">
                                <p>1基础设置</p>
                            </div>
                        </div>
                        <div style="width:140px;height:2px;background:#668eff;position:absolute;transform: rotate(-12deg);top: 12px;left: 100%;"></div>
                        <div style="width:180px;height:2px;background:#668eff;position:absolute;transform: rotate(30deg);top: 120px;left: 100%;"></div>
                    </div>
                </el-row>
                <el-row style="width:360px;text-align:center;margin-bottom:10px;position:absolute;top:50%">
                    <el-button style="background:#668EFF;color:#ffffff">用户管理</el-button>
                    <el-button style="background:#668EFF;color:#ffffff">角色管理</el-button>
                    <el-button style="background:#668EFF;color:#ffffff">组织结构</el-button>
                    <el-button style="background:#668EFF;color:#ffffff">员工管理</el-button>
                </el-row>
                <el-row style="position: absolute;top:100px; left:400px;">
                    <div style=" width: 100px;  height:100px;border-radius:50%;border:1px solid #AAAAAA;position:relative;">
                        <div style=" width: 80px;  height:80px;border-radius:50%;border:1px solid #AAAAAA;position:absolute;top:50%;left:50%;margin-left:-40px;margin-top:-40px">
                            <div style="text-align:center;line-height:80px;color:#668EFF">
                                <p>2资产管理</p>
                            </div>
                        </div>

                    </div>
                </el-row>
                <el-row style=" position:absolute;right:0%;top:20%;">
                    <el-button style="background:#668EFF;color:#ffffff">资产分类</el-button>
                    <el-button style="background:#668EFF;color:#ffffff">区域</el-button>
                    <el-button style="background:#668EFF;color:#ffffff">标签模块</el-button>
                    <el-button style="background:#668EFF;color:#ffffff">资产编码</el-button>
                    <el-row>
                        <el-button style="background:#668EFF;color:#ffffff">资产入库</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">领用退库</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">借用归还</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">资产调拨</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">实物变更</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">维保变更</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">财务变更</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">维修登记</el-button>

                    </el-row>
                    <el-row>
                        <el-button style="background:#668EFF;color:#ffffff">清理报废</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">盘点管理</el-button>
                    </el-row>
                </el-row>
                <el-row style="position:relative;top:100px;left:390px">
                    <div style=" width: 100px;  height:100px;border-radius:50%;border:1px solid #AAAAAA;position:relative;">
                        <div style=" width: 80px;  height:80px;border-radius:50%;border:1px solid #AAAAAA;position:absolute;top:50%;left:50%;margin-left:-40px;margin-top:-40px">
                            <div style="text-align:center;line-height:80px;color:#668EFF">
                                <p>3耗材管理</p>
                            </div>
                        </div>

                    </div>
                </el-row>
                <el-row style=" position:absolute;right:-1%;top:60%;">
                    <el-button style="background:#668EFF;color:#ffffff">资产分类</el-button>
                    <el-button style="background:#668EFF;color:#ffffff">区域</el-button>
                    <el-button style="background:#668EFF;color:#ffffff">标签模块</el-button>
                    <el-button style="background:#668EFF;color:#ffffff">资产编码</el-button>
                    <el-row>
                        <el-button style="background:#668EFF;color:#ffffff">资产入库</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">领用退库</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">借用归还</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">资产调拨</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">实物变更</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">维保变更</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">财务变更</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">维修登记</el-button>

                    </el-row>
                    <el-row>
                        <el-button style="background:#668EFF;color:#ffffff">清理报废</el-button>
                        <el-button style="background:#668EFF;color:#ffffff">盘点管理</el-button>
                    </el-row>
                </el-row>

            </el-card>

        </el-row> -->

    </div>
</template>
<script>
import daBreadcrumb from "@/components/daBreadcrumb.vue";
import numPaner from "./Numpaner.vue";
export default {
    data() {
        (this.chartSettings = {
            radius: 63,
            offsetY: 80,
            center: ["10%", "10%"],
            labelLine: true
        }),
            (this.extend = {
                series: {
                    label: { show: true, position: "top" }
                }
            }),
            (this.chartAettings = {
                labelMap: {
                    PV: "访问用户",
                    Order: "下单用户"
                },
                legendName: {
                    访问用户: "访问用户 total: 10000"
                }
            });
        return {
            numarr:[
                {
                    title:"代签字人物",
                    num:52
                },
                {
                    title:"当月到期资产",
                    num:18
                },
                {
                    title:"维保到期资产",
                    num:28
                },
                {
                    title:"保修资产数",
                    num:65
                },
                {
                    title:"待确认调拨单",
                    num:48
                },
                {
                    title:"安全库存报警",
                    num:23
                }
            ],
            chartData: {
                columns: ["日期", "访问用户"],
                rows: [
                    { 日期: "1/1", 访问用户: 1393 },
                    { 日期: "1/2", 访问用户: 3530 },
                    { 日期: "1/3", 访问用户: 2923 },
                    { 日期: "1/4", 访问用户: 1723 },
                    { 日期: "1/5", 访问用户: 3792 },
                    { 日期: "1/6", 访问用户: 4593 }
                ]
            },
            chartData2: {
                columns: ["日期", "数量", "金额"],
                rows: [
                    {
                        日期: "土地房屋以及建筑物",
                        数量: 1393,
                        下单金额用户: 1093,
                        下单率: 0.32
                    },
                    { 日期: "1/2", 数量: 3530, 金额: 3230, 下单率: 0.26 },
                    { 日期: "1/3", 数量: 2923, 金额: 2623, 下单率: 0.76 },
                    { 日期: "1/4", 数量: 1723, 金额: 1423, 下单率: 0.49 },
                    { 日期: "1/5", 数量: 3792, 金额: 3492, 下单率: 0.323 },
                    { 日期: "1/6", 数量: 4593, 金额: 4293, 下单率: 0.78 }
                ]
            },
            chartData3: {
                columns: ["日期", "数量", "金额"],
                rows: [
                    { 日期: 201709, 数量: 1393, 金额: 1093, 下单率: 0.32 },
                    { 日期: 201711, 数量: 3530, 金额: 3230, 下单率: 0.26 },
                    { 日期: 201801, 数量: 2923, 金额: 2623, 下单率: 0.76 },
                    { 日期: 201803, 数量: 1723, 金额: 1423, 下单率: 0.49 },
                    { 日期: 201805, 数量: 3792, 金额: 3492, 下单率: 0.323 },
                    { 日期: 201809, 数量: 4593, 金额: 4293, 下单率: 0.78 }
                ]
            },
            chartData4: {
                columns: ["date", "数量", "金额"],
                rows: [
                    { date: "201709", 数量: 1393, 金额: 1093, OrderRate: 0.32 },
                    { date: "201711", 数量: 3530, 金额: 3230, OrderRate: 0.26 },
                    { date: "201801", 数量: 2923, 金额: 2623, OrderRate: 0.76 },
                    { date: "201803", 数量: 1723, 金额: 1423, OrderRate: 0.49 },
                    {
                        date: "201805",
                        数量: 3792,
                        金额: 3492,
                        OrderRate: 0.323
                    },
                    { date: "201807", 数量: 4593, 金额: 4293, OrderRate: 0.78 }
                ]
            }
        };
    },
    components: {
        daBreadcrumb,
        numPaner
    }
};
</script>
<style lang="less">
// .panel-row{
// 		margin:20px 0;
//     }
//     .panle{
//         padding-top: 20px;
//     }
//     .state-list{
//         margin-top:20px;
//     }

//     .state-list>li{
//         width:30.33333%;
//         margin:0px;
//         padding:0px;
//         margin-bottom: 40px;

//     }

//     ul{
//         margin:0px;
//         list-style:none;
//         padding:0;
//     }
//     ul.float-left >li{
//         float: left;
//     }

//     .el-button+.el-button {
//         margin-left:1px;
//     }

body {
    // background: #ecf0f5;
}
.grid-content {
    // margin-bottom: 20px;
    .ring-box {
        position: relative;
        .explain {
            position: absolute;
            left: 140px;
            top: 5px;
            display: inline-block;
            p {
                line-height: 30px;
                font-size: 14px;
                color: #666;
            }
        }
    }
}
.ve-pie {
    height: 130px !important;
}
.el-row {
    margin-bottom: 20px;
}
.bar {
    .el-col {
        margin-right: 30px;
    }
}
#ddd {
    height: 271px;
}
.fff{
    // background: #666;
    width: 100px;
    height: 40px;
}
</style>


