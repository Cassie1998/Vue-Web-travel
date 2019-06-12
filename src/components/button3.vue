<template>
    <div>
        <mt-tab-container>
            <mt-tab-item style="width:30%" v-for="picture in pictures" :key="picture.id" >
                <img :src="picture.url" class="img1"  @click="topages(picture)">
                <span style="float:left;font-size:14px;text-align :center ;margin-left:20px;margin-top:18px;">{{picture.title}}</span>
            </mt-tab-item>
        </mt-tab-container>
        <mt-tab-container>
            <mt-tab-item v-for="picture1 in picture1s" :key="picture1.id" >
                <img :src="picture1.url" class="img1">
                <span style="float:left;font-size:14px;text-align :center ;margin-left:20px;margin-top:18px;">{{picture1.title}}</span>
            </mt-tab-item>
        </mt-tab-container>
    </div>

</template>

<script>
    import { Navbar, TabItem,Header,Button,Cell,Swipe, SwipeItem } from 'mint-ui';
    export default {
        name: "button3",
        components:{
            [Button.name]:Button,
            [Header.name]:Header,
            [Navbar.name]:Navbar,
            [TabItem.name]:TabItem,
            [Cell.name]:Cell,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem
        },
        data(){
            return{
                pictures:[
                    {title:'河坊街', url:'../../static/buy1.jpg'},
                    {title:'南宋御街', url:'../../static/buy2.jpg'},
                    {title:'银泰百货(武林店)', url:'../../static/buy3.jpg'}
                ],
                picture1s:[
                    {title:'杭州大厦购物城', url:'../../static/buy4.jpg'},
                    {title:'万象城', url:'../../static/buy5.jpg'},
                    {title:'钟书阁', url:'../../static/buy6.jpg'}
                ]
            }

        }
    }
</script>

<style scoped>
    .img1{
        width:120px;
        height:90px;
        float:left;
        position:relative;
        left:10px;
        border-radius:10px;
    }
</style>
