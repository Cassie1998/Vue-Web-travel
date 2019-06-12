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
        name: "button1",
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
                    {title:'杭州夕霞小筑', url:'../../static/jiudian1.jpg'},
                    {title:'朵邑小墅酒店', url:'../../static/jiudian2.jpg'},
                    {title:'喜舍精品酒店', url:'../../static/jiudian3.jpg'}
                ],
                picture1s:[
                    {title:'溪中溪度假酒店', url:'../../static/jiudian4.jpg'},
                    {title:'山舍酒店', url:'../../static/jiudian5.jpg'},
                    {title:'栖迟艺术酒店', url:'../../static/jiudian6.jpg'}
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
