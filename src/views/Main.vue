<template>
    <el-container>
        <el-aside width="auto">

            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router="true">
                <!-- <img src="../assets/image/logo2.png" style="width:200px;"> -->
                <div style="color:#fff;position:relative;height:60px;" v-if="!isCollapse">
                    <i class="el-icon-logo" style="font-size:60px;position:absolute;left:20px;"></i>
                    <span style="font-size:22px;position:absolute;top:18px;left:85px;">丁艾资产</span>
                </div>
                <el-menu-item :index="`/main/${v.path}`" v-for="v in lists" :key="v.name" v-if="!v.children">
                    <i :class="v.meta.icon" style="color:#fff;"></i>
                    <span slot="title">{{v.meta.title}}</span>
                </el-menu-item>

                <el-submenu :index="`/main/${v.path}`" :key="v.name" v-else>
                    <template slot="title">
                        <i :class="v.meta.icon" style="color:#fff;"></i>
                        <span slot="title">{{v.meta.title}}</span>
                    </template>
                    <el-menu-item :index="`/main/${v.path}/${value.path}`" v-for="value in v.children" :key="value.name">
                    <i :class="value.meta.icon" style="color:#fff;"></i>
                    {{value.meta.title}}
                    </el-menu-item>
                </el-submenu>

            </el-menu>

        </el-aside>
        <el-container>
            <el-header>
                <div class="zhanshi" @click="isCollapse=!isCollapse">
                    <i class="el-icon-zhankai" :class="{zhuan:isCollapse}"></i>
                </div>

                <el-menu class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1">
                        <i class="el-icon-xiaoxi"></i>
                        消息</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-ren"></i>
                            管理员</template>
                        <el-menu-item index="2-1">
                            <i class="el-icon-xiugaimima"></i>
                            修改密码
                        </el-menu-item>
                        <el-menu-item index="2-2">
                            <i class="el-icon-xiugaiziliao"></i>
                            修改资料</el-menu-item>
                        <el-menu-item index="2-3">
                            <i class="el-icon-tuichudenglu"></i>
                            退出登录
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-bangzhu"></i>
                            帮助
                        </template>
                        <el-menu-item index="3-1">
                            <i class="el-icon-iconfontbangzhu"></i>
                            帮助手册
                        </el-menu-item>
                        <el-menu-item index="3-2">
                            <i class="el-icon-question"></i>
                            在线解答
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    data() {
        return {
            isCollapse: false,
            activeName: "first",
            labelPosition: "right",
            formLabelAlign: {
                name: "",
                region: "",
                type: ""
            }
        };
    },
    created: function() {
        this.lists = this.$router.options.routes[1].children;
    }
};
</script>
<style lang="less">
.el-container {
    height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
}
.el-menu--collapse {
    height: 100%;
}
.el-aside {
    height: 100%;
}
.el-header {
    border-bottom: 1px solid #e6e6e6;
    img {
        height: 60px;
    }
    .zhanshi {
        float: left;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        i {
            font-size: 24px;
            transition: all 0.5s;
        }
    }
    .el-menu {
        float: right;
        height: 59px;
    }
}
i.zhuan {
    transform: rotate(90deg);
}
.el-main {
    .anniu {
        float: left;
    }
    .sousuo {
        float: right;
    }
}
.jizong {
    display: flex;
    justify-content: space-between;
    .jiben {
        width: 30%;
        float: left;
        .el-select {
            width: 100%;
        }
    }
}
.jilast {
    display: flex;
    justify-content: space-between;
    .beizhu {
        width: 60%;
    }
    .zhaopian {
        width: 30%;
    }
}
.weibao {
    display: flex;
    justify-content: space-between;
    .weibao1 {
        width: 48%;
    }
}
</style>


