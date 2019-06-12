<template>
    <div class="home">
        <mt-header fixed title="杭州行"></mt-header>

        <!--<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">-->
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
        <div style="height:200px;width:100%">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in items" :key="item.id">
                    <img v-bind:src="item.url" class="img"/>
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div class="content">
            <mt-navbar v-model="selected">
                <mt-tab-item v-for="list in lists" :key="list.id" >
                    <img :src="list.url" class="img" slot="icon" @click="topages(list)">
                    <span style="font-size:14px;text-align :center ;">{{list.title}}</span>
                </mt-tab-item>
            </mt-navbar>
            <mt-navbar v-model="selected">
                <mt-tab-item v-for="list1 in list1s" :key="list1.id" >
                    <img :src="list1.url" class="img" slot="icon" @click="topages1(list1)">
                    <span style="font-size:14px;text-align :center ;">{{list1.title}}</span>
                </mt-tab-item>
            </mt-navbar>
        </div>

        <mt-navbar v-model="selected1" >
            <mt-tab-item id="1">怎么玩</mt-tab-item>
            <mt-tab-item id="2">住哪里</mt-tab-item>
            <mt-tab-item id="3">吃什么</mt-tab-item>
            <mt-tab-item id="4">买什么</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected1" >
            <mt-tab-container-item id="1">
                <div style="clear:both"><span style="float:left;margin-top:20px;font-size:18px">热门推荐</span></div>
                <ul style="list-style:none;clear:both;margin-left:0px;margin-top:20px;padding-left:0px;">
                    <li class="item border-bottom" v-for="item of items" :key="item.id">
                        <div class="item-img-wrapper">
                            <img :src="item.url" class="item-img">
                        </div>
                        <div class="item-info">
                            <p class="item-title">{{item.title}}</p>
                            <p class="item-desc">{{item.desc}}</p>
                        </div>
                    </li>
                </ul>
                <exp ref="exp"></exp>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <button1 ref="button1"></button1>
                <exp ref="exp"></exp>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <button2 ref="button2"></button2>
                <exp ref="exp"></exp>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <button3 ref="button3"></button3>
                <exp ref="exp"></exp>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-palette-button content="+" @click="ShouPup" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
                           direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
                           style="position:fixed;right:50px;bottom:100px;">
            <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
            <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
            <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
        </mt-palette-button>
        <mt-popup
                v-model="popupVisible"
                position="bottom" style="width:100%;height:auto;background-color: whitesmoke">
            <div style="width:100%;" >
            </div>
            <div style="width:100%;">
                <form action="/demo/demo_form.asp" style="background-color: white;height:500px;">
                    <span @click="quxiao" style="position:fixed;right:20px;top:20px;font-size: 16px;">取消</span>
                    <textarea type="text" style="width:100%;height:400px;margin-top:50px;margin-bottom:26px;float:left;border-color: transparent;font-size: 16px;" name="firstname" placeholder="发布随笔..."></textarea>
                    <br><br>
                    <mt-button @click="send" style="width:100%;position:fixed;left:0px;bottom:0px;background-color:#26a2ff;border-color: transparent;color:white;">发布</mt-button>
                </form>
            </div> 
        </mt-popup>
        <lastbar ref="lastbar"></lastbar>

    </div>


</template>

<script>
    import button1 from '../components/button1.vue'
    import button2 from '../components/button2.vue'
    import button3 from '../components/button3.vue'
    import exp from '../components/exp.vue'
    import lastbar from '../components/lastbar.vue'
    //import loadmore from '../components/loadmore.vue'
    import { MessageBox,Actionsheet,Navbar, Loadmore,TabItem,Button,Field,Header,Swipe, SwipeItem,TabContainer, TabContainerItem,Cell,PaletteButton,Popup } from 'mint-ui';
    export default {
        name: "home",

        components: {
            button1,
            button2,
            button3,
            lastbar,
            //loadmore,
            exp,
            [Actionsheet.name]:Actionsheet,
            [MessageBox.name]:MessageBox,
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
            [PaletteButton.name]:PaletteButton,
            [Popup.name]:Popup,
            [Field.name]:Field
        },
        data () {
            return {
                topStatus: '',
                popupVisible:false,
                selected:false,
                selected1:'1',
                active: 'tab-container1',
                items: [
                    {title:'春意浓，来西湖',desc:'欲把西湖比西子，淡妆浓抹总相宜',url: '../../static/xihu.jpg'},
                    {title:'三潭印，雷峰塔',desc:'游西湖必须景点',url: '../../static/xihubanner.jpg'},
                    {title:'亲子游，野生趣',desc:'小朋友对动物有着天生的好感和好奇',url: '../../static/zoo.jpg'}
                ],
                lists: [
                    {
                        id: '1',
                        title: '景点介绍',
                        url: '../../static/jingdian.png'
                    },
                    {
                        id: '2',
                        title: '线路建议',
                        url: '../../static/xianlu.png'
                    },
                    {
                        id: '3',
                        title: '自驾游攻略',
                        url: '../../static/zijiayou.png'
                    },
                    {
                        id: '4',
                        title: '酒店介绍',
                        url: '../../static/jiudian.png'
                    }
                ],
                list1s:[
                    {
                        id:'5',
                        title:'便捷出行',
                        url:'../../static/jiaotong.png'
                    },
                    {
                        id:'6',
                        title:'杭州美食',
                        url:'../../static/meishi.png'
                    },
                    {
                        id:'7',
                        title:'游客随笔',
                        url:'../../static/suibi.png'
                    },
                    {
                        id:'8',
                        title:'有问必答',
                        url:'../../static/wenda.png'
                    }
                ],
                exps:[
                    {title:'三潭印月',url:'../../static/styy.jpg'},
                    {title:'灵隐寺',url:'../../static/linyinsi.png'}
                ],

            }
        },
        methods:{
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadTop(){
                this.$refs.loadmore.onTopLoaded();
            },
            loadBottom() {
                this.allLoaded = true;// 若数据已全部获取完毕
                this.$refs.loadmore.onBottomLoaded();
            },
            topages:function(list){

                if(list.id==1) {
                    this.$router.push({path: '/scenes'})
                }
                else if(list.id==2) {
                    this.$router.push({path: '/scenes'})
                }
                else if(list.id==3) {
                    this.$router.push({path: '/scenes'})
                }
                else if(list.id==4) {
                    this.$router.push({path: '/scenes'})
                }

            },
            topages1:function(list1) {
                if(list1.id==5) {
                    this.$router.push({path: '/scenes'})
                }
                else if(list1.id==6) {
                    this.$router.push({path: '/meishi'})
                }
                else if(list1.id==7) {
                    this.$router.push({path: '/scenes'})
                }
                else if(list1.id==8) {
                    this.$router.push({path: '/scenes'})
                }
            },
            tosearch(){
                this.$router.push({path: '/search'});
            },
            main_log(val) {
                this.popupVisible = true
                console.log('main_log', val);
            },
            sub_log(val) {
                console.log('sub_log', val);
                this.$refs.target_1.collapse();
            },
            ShouPup() {
                this.popupVisible = true

            },
            quxiao(){
                MessageBox({
                    title: '提示',
                    message: '是否保存草稿?',
                    showCancelButton: true,
                    confirmButtonText:'保存',
                    cancelButtonText:'不保存 '
                }).then(action=>{
                    if(action == 'confirm'){
                        this.popupVisible=!this.popupVisible;
                        console.log('保存')
                    }else{
                        this.popupVisible=!this.popupVisible;
                        console.log('不保存')

                    }
                    }
                );
            }
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
    .img {
        width: 100%;
        height: 100%;

    }
    .content{
        /**宽度自适应**/
        position: relative;
    }
    .content li{
        /*float:left;*/

    }
    .item-img-wrapper{
        overflow: hidden;
        height: 0;
        padding-bottom: 33.9%
    }

    .item-img{
        width :100%;
        position:relative;
        float:left;
        margin-left:0px;
    }

    .item-info{
        padding: .1rem
    }

    .item-title{
        line-height :.54rem;
        font-size:16px;
        margin-left:0px;
        /*color :#212121l;*/

    }

    .item-desc{
        line-height :.4rem;
        font-size :12px;
        color :#616161;

    }
    input::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #aab2bd;
        /* placeholder字体大小  */
        font-size: 16px;
        /* placeholder位置  */

        vertical-align: top;
    }
    /* webkit+ */
    input::-moz-placeholder {    vertical-align: top;} /* ie */
    input::-ms-input-placeholder {    vertical-align: top;}


</style>
