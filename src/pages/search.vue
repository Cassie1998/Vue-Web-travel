<template>
    <div class="home">
        <!--<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">-->
        <form action="" v-on:submit.prevent="" style="position:fixed;top:10px;width:100%">
            <div style="clear:both;height:100%;" >
                <mt-search
                        v-model="searchValue"
                        cancel-text=""
                        placeholder="西湖"
                        @keyup.enter.native="search"
                        class="font-size-8"
                        style="float:left;width:88%;height:auto;position:relative;z-index:0;"
                        :result.sync="filterResult"
                >
                </mt-search>
                <div style="width:12%;float:right;margin-top:15px;" @click="goback">
                    <span >取消</span>
                </div>

            </div>
        </form>
        <div style="clear:both">
            <span style="float:left;margin-top:20px;font-size:16px;font-weight:bold;">历史纪录</span>
            <div style="width:100%;float:left">
                <span class="span1">西溪湿地</span>
                <span class="span1">雷峰塔</span>
            </div>
        </div>
        <div style="clear:both">
            <mt-navbar v-model="selected" >
                <mt-tab-item id="1">热搜</mt-tab-item>
                <mt-tab-item id="2">热门话题</mt-tab-item>
                <mt-tab-item id="3">杭州热榜</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected" >
                <mt-tab-container-item id="1">
                    <span class="span2">西湖<img style="margin-left:5px;" src="../../static/huomiao.png"></span>
                    <span class="span1">西溪湿地</span>
                    <span class="span1">雷峰塔</span>
                    <span class="span1">三潭印月</span>
                    <span class="span1">杭州乐园</span>
                    <span class="span2">六月去哪<img style="margin-left:5px;" src="../../static/huomiao.png"></span>
                    <span class="span1">杭帮菜</span>
                    <span class="span1">亲子游</span>
                    <span class="span2">端午热门玩法<img style="margin-left:5px;" src="../../static/huomiao.png"></span>
                    <span class="span1">宋城</span>
                    <span class="span1">银泰</span>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <ul style="list-style:none;">
                        <li>
                            <span style="width:40%;left:-10px;position: relative"><img style="margin-right:10px;" src="../../static/huati.png">杭州地标去哪拍</span>
                            <span style="float:left;width:40%"><img style="margin-right:10px;" src="../../static/huati.png">杭州地标去哪拍</span>
                            <span style="float:right;font-weight: bold;font-size: 16px">1</span>
                        </li>
                        <li >
                            <span style="width:40%;left:-10px;position: relative"><img style="margin-right:10px;" src="../../static/huati.png">杭州地标去哪拍</span>
                            <span style="float:left;width:40%"><img style="margin-right:10px;" src="../../static/huati.png">杭州地标去哪拍</span>
                            <span style="float:right;font-weight: bold;font-size: 16px">3</span>
                        </li>
                        <li >
                            <span style="width:40%;left:-10px;position: relative"><img style="margin-right:10px;" src="../../static/huati.png">杭州地标去哪拍</span>
                            <span style="float:left;width:40%"><img style="margin-right:10px;" src="../../static/huati.png">杭州地标去哪拍</span>
                            <span style="float:right;font-weight: bold;font-size: 16px">5</span>
                        </li>
                        <li >
                            <span style="width:40%;left:-10px;position: relative"><img style="margin-right:10px;" src="../../static/huati.png">杭州地标去哪拍</span>
                            <span style="float:left;width:40%"><img style="margin-right:10px;" src="../../static/huati.png">杭州地标去哪拍</span>
                            <span style="float:right;font-weight: bold;font-size: 16px">7</span>
                        </li>
                    </ul>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <span class="span2">西湖<img style="margin-left:5px;" src="../../static/huomiao.png"></span>
                    <span class="span1">西溪湿地</span>
                    <span class="span1">雷峰塔</span>
                    <span class="span1">三潭印月</span>
                    <span class="span1">杭州乐园</span>
                    <span class="span2">六月去哪<img style="margin-left:5px;" src="../../static/huomiao.png"></span>
                    <span class="span1">杭帮菜</span>
                    <span class="span1">亲子游</span>
                    <span class="span2">端午热门玩法<img style="margin-left:5px;" src="../../static/huomiao.png"></span>
                    <span class="span1">宋城</span>
                    <span class="span1">银泰</span>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
    import {Search,Navbar,TabItem,TabContainer,TabContainerItem} from 'mint-ui';
    export default {
        name: "search",
        component:{
            [Search.name]:Search,
            [Navbar.name]:Navbar,
            [TabItem.name]:TabItem,
            [TabContainer.name]:TabContainer,
            [TabContainerItem.name]:TabContainerItem
        },
        data(){
            return{
                selected:'1',
                searchValue:'',
                defaultResult: [
                    '河坊街',
                    '杭州乐园',
                    '钱塘江',
                    '杭州动物园',
                    '西溪湿地',
                    '断桥',
                    '灵隐寺',
                    '银泰',
                    '西湖',
                    '雷峰塔',
                    '三潭印月',
                    '宋城',
                    'Plum',
                    'Pear',
                    'Peanut',
                    ''
                ]
            }
        },
        computed: {
            filterResult() {
                return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
            }
        },
        methods:{
            goback() {
                this.$router.go(-1);
            }
        }

    }
</script>

<style scoped>
    .home {
        padding-bottom: 0px;
        height: auto;
        font-size: 14px;
        background: white;
        left:0;
        right:0;
        top: 0;
        bottom: 0;
    }
    .span1{
        background-color:lightgray;
        height:30px;
        margin:10px 5px 5px;
        padding:15px 10px 10px;
        width:intrinsic;
        width: -moz-max-content;
        width: -webkit-max-content;
        display:inline-block;
        border-radius: 5px;
        float:left;
    }
    .span2{
        background-color:peachpuff;
        height:30px;
        margin:10px 5px 5px;
        padding:15px 10px 10px;
        width:intrinsic;
        width: -moz-max-content;
        width: -webkit-max-content;
        display:inline-block;
        border-radius: 5px;
        float:left;
    }
</style>