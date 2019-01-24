<template>
    <div class="num_bg">
        <h5>{{title}}</h5>
        <p>{{num}}</p>
    </div>
</template>
<script>
export default {
    props:['title','num']
}
</script>
<style lang="less">
.num_bg{
    background: #668eff url(./images/well-overlay.png) center bottom no-repeat;
    border-radius: 4px;
    padding: 20px 20px;
    height: 94px;
    text-align: left;
    color: #fff;
    box-sizing: border-box;
    
    p{
        margin-top: 15px;
        font-weight: 700;
        font-size: 22px;
    }
}
</style>

