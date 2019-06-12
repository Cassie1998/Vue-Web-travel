<template>
    <div class="home">
        <mt-header fixed title="我的"></mt-header>
        <div v-for="item in items" :key="item.id" style="position:fixed;margin-left:-8px;padding-top:20px;margin-top:-20px;height:120px;width:100%;background-color:peachpuff"  @click="topages(item)">
            <div style="width:30%;height:75px;float:left;">
                <img  :src="item.url"  style="width:75px;height:75px;">
            </div>
            <div style="width:80%;height:75px;">
                <span style="width:100%;font-size:16px;font-family: 黑体;">
                    {{item.name}}
                </span>
                <div style="float:right;margin-right:-50px">
                    <span style="margin-right:20px">个人主页</span>
                    <img  src="../../static/more.png"  style="width:12px;height:12px">
                </div>

                <div style="width:100%;margin-top:20px;">
                    <span style="float:left;margin-left:25px;font-size:12px; ">{{item.follows}}</span>
                    <span style="float:left;margin-left:30px;font-size:12px; ">{{item.followers}}</span>
                    <span style="float:left;margin-left:28px;font-size:12px; ">{{item.visitors}}</span>
                </div>
                <div style="width:100%;margin-top:50px;">
                    <span style="float:left;margin-left:20px;font-size:12px; ">关注</span>
                    <span style="float:left;margin-left:20px;font-size:12px; ">粉丝</span>
                    <span style="float:left;margin-left:20px;font-size:12px; ">访客</span>
                </div>
            </div>
        </div>
        <div style="position: fixed;top:160px;width:100%">
            <mt-tab-container style="margin-top:20px" v-for="list in lists" :key="list.id">
                <mt-tab-container-item style="height:30px;margin-top:20px;border: lightgray" >
                    <img  :src="list.url"  style="width:24px;height:24px;float:left">
                    <span style="position:relative;left:-140px;text-align: left">{{list.title}}</span>
                    <img  src="../../static/more.png"  style="width:12px;height:12px;position: fixed;right:15px">
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <lastbar ref="lastbar"></lastbar>
    </div>

</template>

<script>
    import lastbar from '../components/lastbar.vue'
    //import Tabbar from '../components/Tabbar.vue'
    import { Navbar, TabItem,Cell,TabContainer, TabContainerItem,Button  } from 'mint-ui';
    export default {
        name: "mine",
        components: {
            lastbar,
            //Tabbar,
            [Navbar.name]:Navbar,
            [TabItem.name]:TabItem,
            [Cell.name]:Cell,
            [TabContainer.name]:TabContainer,
            [TabContainerItem.name]:TabContainerItem,
            [Button.name]:Button
        },
        data(){
            return{
                items:[
                    {name:'WWJ',url:'../../static/touxiang.jpg',
                        follows:'12',followers:'25',visitors:'190'
                    }
                ],
                lists:[
                    {title:'我的收藏',url:'../../static/shoucang-false.png'},
                    {title:'我的点赞',url:'../../static/dianzan-false.png'},
                    {title:'我的足迹',url:'../../static/zuji-false.png'},
                    {title:'我的随笔',url:'../../static/suibi-false.png'},
                    {title:'设置',url:'../../static/shezhi-false.png'}

                ]
            }
        }
    }
</script>

<style scoped>
    .home {
        padding-left:0px;
        height: auto;
        font-size: 14px;
        background: white;
        left:0;
        right:0;
        top: 0;
        bottom: 0;
    }
    body{
        background: gainsboro;
    }
</style>
