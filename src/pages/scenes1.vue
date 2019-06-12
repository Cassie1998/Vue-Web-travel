<template>
    <div class="home">
        <mt-header fixed title="景点介绍">
            <router-link to="/home" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <form action="" v-on:submit.prevent="" @click="tosearch">
            <div style="clear:both;height:100%;" >

                <!--<mt-button icon="back" style="width:10%;float:left;" @click="goback"></mt-button>-->
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
        <div style="clear:both"><span style="float:left;margin-top:20px;font-size:18px">特色玩法</span></div>
        <div style="clear:both">
            <nav class="nav" @click.prevent>
                <div class="p" v-for="item1 in item1s" :class="{'show': item1.active}" @click="makeActive(item1,item1.id)">
                    <img :src="item1.url" style="height:120px;width:170px;margin-left:-30px;border-radius: 5px;"/>
                    <div style="width:100%;">
                        <span style="float:left;width:100%;font-family: 黑体;font-weight:bold;text-align: left;">{{item1.name}}</span>
                        <span style="float:left;">{{item1.review}}评论,{{item1.relative}}游记提及</span>
                        <span style="float:left;color: red;font-size: 12px;border:1px solid red;">{{item1.tag}}</span>
                    </div>
                </div>
            </nav>
        </div>
        <wrapper ref="wrapper" style="margin-top:0px;"></wrapper>
        <nav class="nav" @click.prevent>
            <p class="p1" v-for="item in items"  :class="{'show': item.active}" @click="makeActive(item,item.id)">{{item.name}}</p>
        </nav>
        <!--<mt-navbar class="nav" @click.prevent style="width:100%" v-model="selected1" >-->
        <!--&lt;!&ndash;<p class="p" v-for="arr in arrs" :class="{'show': arr.active}" @click="makeActive(arr,arr.id)">{{arr.name}}</p>&ndash;&gt;-->
        <!--<mt-tab-item id="1">全部</mt-tab-item>-->
        <!--<mt-tab-item id="2">博物馆</mt-tab-item>-->
        <!--<mt-tab-item id="3">京杭运河终点</mt-tab-item>-->
        <!--<mt-tab-item id="4">冷门西湖景</mt-tab-item>-->
        <!--</mt-navbar>-->
        <mt-tab-container v-model="selected1">
            <mt-tab-container-item id="1">
                <!--<graybutton ref="graybutton"></graybutton>-->
                <div v-for="item2 in item2s" :key="item2.id" style="margin-top:30px;"  @click="topages(item2)">
                    <div style="width:30%;height:75px;float:left;">
                        <img  :src="item2.url"  style="width:90px;height:90px;">
                    </div>
                    <div style="width:280px;height:75px;">
                        <div style="width:100%;">
                           <span style="float:left;font-size:16px;font-family: 黑体;">
                            {{item2.title}}
                            </span>
                        </div>
                        <span style="float:left;margin-top:5px;">{{item2.review}}评论,{{item2.relative}}游记提及</span>
                        <div style="float:left;">
                            <span style="float:left;color: red;font-size: 12px;border:1px solid red;margin-top:5px">{{item2.tag}}</span>
                            <span style="color:lightgray;font-size: 12px;border:0.5px solid transparent;margin-top:5px">{{item2.tag1}}</span>
                        </div>

                        <span style="float:left;margin-top:5px">位于{{item2.location}}/距你{{item2.distance}}</span>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item>
                <!--<graybutton ref="graybutton"></graybutton>-->
                <!--<mt-cell v-for="n in 4" :title="'测试 ' + n" />-->
            </mt-tab-container-item>
            <!--<mt-tab-container-item id="3">-->
            <!--<graybutton ref="graybutton"></graybutton>-->
            <!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
            <!--</mt-tab-container-item>-->
        </mt-tab-container>
    </div>
</template>

<script>
    import wrapper from '../components/wrapper.vue'
    import { Navbar, TabItem,Button,Field,Header,Swipe, SwipeItem,TabContainer, TabContainerItem,Cell,PaletteButton } from 'mint-ui';
    export default {
        name: "scenes1",
        components:{
            wrapper,
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
        data(){
            return{
                showIndex:null,
                selected1:'1',
                nowIndex: 0,
                dropdownActive: false,
                tabParams: ['综合排序', '全部商圈', '类型', '筛选'],
                dropParams: ['距离最近', '点评最多'],
                selected:'1',
                arr:[
                    "全部",
                    "必游top5",
                    "西湖必去景点",
                    "京杭运河终点",
                    "冷门西湖景",
                    "博物馆",
                    "创意园集中地",
                    "最美校园",
                ],
                items:[
                    {id:'1',name:'全部', active:false},
                    {id:'2',name:'必游top5', active:false},
                    {id:'3',name:'西湖必去景点', active:false},
                    {id:'4',name:'京杭运河终点', active:false},
                    {id:'5',name:'冷门西湖景', active:false},
                    {id:'6',name:'博物馆', active:false},
                    {id:'7',name:'创意园集中地', active:false},
                    {id:'8',name:'最美校园', active:false}
                ],
                item1s:[
                    {
                        id: '1', name: '文艺书店与咖啡馆', active: false,
                        url: '../../static/shudian.png',
                        review:'896',
                        relative:'152',
                        tag:'消磨时间的好去处'
                    },
                    {id:'2',name:'龙井问茶吃茶去', active:false,
                        url: '../../static/longjingcha.jpg',
                        review:'896',
                        relative:'152',
                        tag:'茶园风光'},
                    {id:'3',name:'睡仙境般的民宿', active:false,
                        url: '../../static/minsu.jpg',
                        review:'896',
                        relative:'152',
                        tag:'网红拍照民宿'},
                    {id:'4',name:'去横店影视城', active:false,
                        url: '../../static/hengdian.jpg',
                        review:'896',
                        relative:'152',
                        tag:'东方好莱坞'},
                    {id:'5',name:'一日穿越回宋城', active:false,
                        url: '../../static/songcheng1.jpg',
                        review:'896',
                        relative:'152',
                        tag:'穿越古今'},
                    {id:'6',name:'带娃就去这', active:false,
                        url: '../../static/youleyuan.jpg',
                        review:'896',
                        relative:'152',
                        tag:'乐园玩耍'},
                    {id:'7',name:'吃地道杭帮菜', active:false,
                        url: '../../static/hangbangcai1.jpg',
                        review:'896',
                        relative:'152',
                        tag:'杭帮老味道'}
                ],
                // items: [{
                //     url: '../../static/home1.jpg'
                // }, {
                //     url: '../../static/home2.jpg'
                // },
                //     {
                //         url: '../../static/home3.jpg'
                //     }
                // ],
                item2s: [
                    {
                        id:'1',
                        title:'西湖',
                        review:'1235',
                        relative:'20',
                        tag:'人气top2',
                        location:'西湖',
                        distance:'21km',
                        url: '../../static/xihu1.jpg'
                    }, {
                        id:'2',
                        title:'灵隐寺',
                        review:'5824',
                        relative:'20',
                        tag:'中国最早的佛教寺院',
                        location:'西湖',
                        distance:'25km',
                        url: '../../static/linyinsi.png'
                    },
                    {
                        id:'3',
                        title:'雷峰塔',
                        review:'5824',
                        relative:'20',
                        tag:'西湖地表之一',
                        location:'西湖',
                        distance:'21km',
                        url: '../../static/leifengta.jpg'
                    }
                ]
            }
        },
        methods:{
            goback(){
                this.$router.go(-1);
            },
            dropdown: function(){
                console.log(event.target.getAttribute('class'))
                if(event.target.getAttribute('class') === 'dropdownBtn') {
                    this.dropdownActive = !this.dropdownActive;
                }
            },
            tabToggle: function(index){
                this.nowIndex = index;
                if(index === 0){
                    return
                }else {
                    this.dropdownActive = false;
                }
            },
            makeActive:function(item,index){
                this.active=item.active;
                if(index=='1'){
                    this.$router.push({path: '/scenes1'})
                }
                if(index=='2'){
                    this.$router.push({path: '/scenesbi'})
                }


            },
            tosearch(){
                this.$router.push({path: '/search'});
            },
            // makeActive:function(item,index){
            //     this.active=item.active;
            //     console.log('123');
            //     console.log(item);
            //     console.log(index);
            //     console.log('456');
            //     // for(var i=0; i<this.items.length;i++){
            //     //     this.items[i].active = false;
            //     // }
            //     // var el=document.getElementsByClassName('listshow${index}')[0];
            //     // console.log(el.offsetTop);
            //     // if(this.showIndex==index){
            //     //     this.showIndex=null;
            //     // }else{
            //     //     this.showIndex=index;
            //     //     this.selected1=true;
            //     // }
            //     if(index=='1'){
            //         console.log(this.items[index].active);
            //         this.items[index].active = true;
            //         console.log(this.items[index].active);
            //     }
            //
            // }

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
        width: 100%;
        overflow:hidden;
    }
    .wrapper {

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wrapper>div {
        flex: 1;
        text-align: center;
        height: 36px;
        line-height: 36px;
    }
    .dropdownWrapper {
        /*margin-top: 36px;*/
        border: 1px solid #2C3E50;
        font-size: 14px;

    }
    .dropdownWrapper li {
        display: block;

    }

    .nav-item.active {
        background: #e3e3d3;
    }
    .dropdownBtn {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .nav-item {
        cursor: pointer;
    }
    .nav{
        padding: 0 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: middle;
        -ms-flex-align: middle;
        align-items: middle;
        overflow: auto;
    }
    .p1{
        text-align: center;
        font-size: 16px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding: 10px;
        margin: 5px;
        width:100px;
    }
    #home p1.active{
        color: #ffff00;
        background-color: #000000;
    }
    .p{

        width:200px;
        font-size: 16px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding: 10px;
        margin: 0px;

    }
    #home p.active{
        color: #ffff00;
        background-color: #000000;
    }
</style>
