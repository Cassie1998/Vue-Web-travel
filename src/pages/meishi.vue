<template>
    <div class="home">
        <mt-header fixed title="杭州美食">
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
                        placeholder="搜索杭州美食"
                        @keyup.enter.native="search"
                        class="font-size-8"
                        style="width:100%;height:auto;float:right;z-index:0;"
                >
                </mt-search>
            </div>
        </form>
        <div style="clear:both"><span style="float:left;margin-top:20px;font-size:18px">大家都爱吃</span></div>
        <div style="clear:both">
            <nav class="nav" @click.prevent>
                <div class="p" v-for="item in items" :class="{'show': item.active}" @click="makeActive(item,item.id)">
                    <img :src="item.url" style="height:120px;width:170px;margin-left:-30px;border-radius: 5px;"/>
                    <div style="width:100%;">
                        <span style="float:left;width:100%;font-family: 黑体;font-weight:bold;text-align: left;">{{item.name}}</span>
                        <span style="float:left;">{{item.review}}评论,{{item.relative}}游记提及</span>
                        <span style="float:left;color: red;font-size: 12px;border:1px solid red;">{{item.tag}}</span>
                    </div>
                </div>
            </nav>
        </div>
        <wrapper ref="wrapper"></wrapper>
        <mt-tab-container>
            <mt-tab-container-item>
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
        </mt-tab-container>
    </div>
</template>

<script>
    import wrapper from '../components/wrapper.vue'
    import { Navbar, TabItem,Button,Field,Header,Swipe, SwipeItem,TabContainer, TabContainerItem,Cell,PaletteButton } from 'mint-ui';
    export default {
        name: "meishi",
        components: {
            wrapper,
            [Navbar.name]: Navbar,
            [TabItem.name]: TabItem,
            [Button.name]: Button,
            [Field.name]: Field,
            [Header.name]: Header,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [TabContainer.name]: TabContainer,
            [TabContainerItem.name]: TabContainerItem,
            [Cell.name]: Cell,
            [PaletteButton.name]: PaletteButton
        },
        data: function () {
            return {
                items:[
                    {
                        id: '1', name: '新白鹿(银泰城)', active: false,
                        url: '../../static/xinbailu.jpg',
                        review:'896',
                        relative:'152',
                        tag:'人气杭帮菜'
                    },
                    {id:'2',name:'杭州酒家(延安路店)', active:false,
                        url: '../../static/hangzhoujiujia.jpg',
                        review:'896',
                        relative:'152',
                        tag:'人气杭帮菜'},
                    {id:'3',name:'吴山烤禽店(吴山店)', active:false,
                        url: '../../static/wushankaoqindian.jpg',
                        review:'896',
                        relative:'152',
                        tag:'人气杭帮菜'},
                    {id:'4',name:'西湖国宾馆紫薇厅', active:false,
                        url: '../../static/guobingguan.jpg',
                        review:'896',
                        relative:'152',
                        tag:'人气杭帮菜'},
                    {id:'5',name:'胖子烧饼', active:false,
                        url: '../../static/pangzishaobing.jpeg',
                        review:'896',
                        relative:'152',
                        tag:'人气杭帮菜'},
                    {id:'6',name:'老头儿油爆虾', active:false,
                        url: '../../static/youbaoxia.jpg',
                        review:'896',
                        relative:'152',
                        tag:'人气杭帮菜'},
                    {id:'7',name:'舅一碗老汤面', active:false,
                        url: '../../static/laotangmian.jpg',
                        review:'896',
                        relative:'152',
                        tag:'人气杭帮菜'}
                ],
                item2s: [
                    {
                        id:'1',
                        title:'老头儿油爆虾',
                        review:'1235',
                        relative:'20',
                        tag:'人气杭帮菜',
                        location:'湘湖',
                        distance:'29km',
                        url: '../../static/youbaoxia.jpg'
                    }, {
                        id:'2',
                        title:'舅一碗老汤面',
                        review:'1779',
                        relative:'15',
                        tag:'必去top5',
                        tag1:'人气杭帮菜',
                        location:'西湖',
                        distance:'21km',
                        url: '../../static/laotangmian.jpg'
                    },
                    {
                        id:'3',
                        title:'胖子烧饼',
                        review:'5824',
                        relative:'20',
                        tag:'人气top3',
                        location:'西溪湿地',
                        distance:'28km',
                        url: '../../static/pangzishaobing.jpeg'
                    }
                ]
            }
        },
        methods:{
            goback(){
                this.$router.go(-1);
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
        width: 100%;
        overflow:hidden;
    }
    .nav{
        padding: 0 0px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: middle;
        -ms-flex-align: middle;
        align-items: middle;
        overflow: auto;

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
    .img{
        width:120px;
        height:90px;
        float:left;
        position:relative;
        left:10px;
        border-radius:20px;
    }
</style>
