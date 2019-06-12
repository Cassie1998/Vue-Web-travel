<template>
    <div style="width:100%;">
        <mt-button class="button1" style="background-color: lightgray">
            品质联盟
        </mt-button>
        <mt-button class="button1" style="background-color: lightgray">
            满减优惠
        </mt-button>
        <mt-button class="button1" style="background-color: lightgray">
            配送费优惠
        </mt-button>
        <mt-button class="button1" style="background-color: lightgray">
            新店
        </mt-button>
    </div>
</template>

<script>
    import { Navbar, TabItem,Header,Button,Cell,Swipe, SwipeItem } from 'mint-ui';
    export default {
        name: "graybutton",
        components:{
            [Button.name]:Button,
            [Header.name]:Header,
            [Navbar.name]:Navbar,
            [TabItem.name]:TabItem,
            [Cell.name]:Cell,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem
        }
    }
</script>

<style scoped>
    .button1{
        float: left;
        width:24%;
        height:40px;
        margin:10px 2px 2px 1px;
        border-radius:5px;
        font-size: 12px;
    }
</style>
