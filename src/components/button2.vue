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
        name: "button2",
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
                    {title:'手工茶饼', url:'../../static/food1.jpg'},
                    {title:'茶人村(龙井路店)', url:'../../static/food2.jpg'},
                    {title:'新白鹿(银泰城)', url:'../../static/food3.jpeg'}
                ],
                picture1s:[
                    {title:'楼外楼(孤山路店)', url:'../../static/food4.jpg'},
                    {title:'奎元馆(解放路店)', url:'../../static/food5.jpg'},
                    {title:'咬不得高祖生煎', url:'../../static/food6.jpg'}
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
