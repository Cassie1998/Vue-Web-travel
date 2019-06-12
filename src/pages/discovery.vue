<template>
    <div class="home">
        <mt-header fixed title="杭州行"></mt-header>
            <form action="" v-on:submit.prevent="" @click="tosearch">
                <div style="clear:both;height:100%;" >
                    <mt-search
                            v-model="searchValue"
                            cancel-text="取消"
                            placeholder="西湖"
                            @keyup.enter.native="search"
                            class="font-size-8"
                            style="width:100%;height:auto;position:relative;z-index:0;"
                    >
                    </mt-search>
                </div>
            </form>
            <mybutton ref="mybutton"></mybutton>
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
                <exp ref="exp"></exp>
            </div>
        <lastbar ref="lastbar"></lastbar>
    </div>
</template>

<script>
    import mybutton from '../components/mybutton.vue'
    import lastbar from '../components/lastbar.vue'
    import exp from '../components/exp.vue'
    //import Tabbar from '../components/Tabbar.vue'
    import { Navbar, Loadmore,TabItem,Button,Field,Header,Swipe, SwipeItem,TabContainer, TabContainerItem,Cell,PaletteButton } from 'mint-ui';
    export default {
        name: "discovery",
        components: {
            lastbar,
            exp,
            //Tabbar,
            mybutton,
            [Loadmore.name]:Loadmore,
            [Navbar.name]:Navbar,
            [TabItem.name]:TabItem,
            [Button.name]:Button,
            [Field.name]:Field,
            [Header.name]:Header,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
            [TabContainer.name]:TabContainer,
            [TabContainerItem.name]:TabContainerItem,
            [Cell.name]:Cell,
            [PaletteButton.name]:PaletteButton
        },
        data: function () {
            return {
                pictures: [
                    {title: '首游必打卡', url: '../../static/linyinsi.png'},
                    {title: '网红拍照地', url: '../../static/wanghong.jpg'},
                    {title: '杭州周边游', url: '../../static/zhoubian.jpg'}
                ],
                picture1s: [
                    {title: '探西湖之美', url: '../../static/xihu.jpg'},
                    {title: '地道杭帮菜', url: '../../static/hangbangcai.jpg'},
                    {title: '精选酒店榜', url: '../../static/jiudian7.jpg'}
                ]
            }
        },
        methods:{
            loadTop() {
                this.$refs.loadmore.onTopLoaded();
            },
            loadBottom() {
                this.allLoaded = true;// 若数据已全部获取完毕
                this.$refs.loadmore.onBottomLoaded();
            },
            tosearch(){
                this.$router.push({path: '/search'});
            },
        }
    }
</script>

<style scoped>
    .home {
        padding-bottom: 100px;
        height: auto;
        font-size: 14px;
        background: white;
        left:0;
        right:0;
        top: 0;
        bottom: 0;

    }
    .button{
        width:30%;
        height: 140px;
        margin:1px 2px 2px 1px;
        outline: none;
        border-radius:20px;
    }
    .img1{
        width:120px;
        height:90px;
        float:left;
        position:relative;
        left:10px;
        border-radius:10px;
    }
</style>
