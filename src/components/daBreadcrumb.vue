<template>
    <div class="mianbao">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: v.path }" v-for="v in lists" :key="v.path">{{v.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            lists:""
        }
    },
    created:function(){
        this.lists=this.$route.matched;
        console.log(this.$route.matched);
    }
}
</script>
<style lang="less">
    .mianbao{
        padding-bottom: 20px;
    }
</style>

