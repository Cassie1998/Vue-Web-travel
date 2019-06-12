<template>
    <div>
        <!--<nav class="nav" @click.prevent>-->
            <!--<p class="p" v-for="item in items" :class="{'show': item.active}" @click="makeActive(item, $index)">{{item.name}}</p>-->
        <!--</nav>-->
        <!--<p>You chose <b>{{active}}</b></p>-->
        <nav class="nav" @click.prevent>
            <p class="p" v-for="item in items"  :class="{'show': item.active}" @click="makeActive(item,item.id)">{{item.name}}</p>
        </nav>

    </div>
</template>

<script>
    //import BScroll from 'better-scroll';
    import { Navbar, TabItem,Header,Button,Cell,Swipe, SwipeItem } from 'mint-ui';
    export default {
        name: "button",
        active:0,
        components:{
            [Button.name]:Button,
            [Header.name]:Header,
            [Navbar.name]:Navbar,
            [TabItem.name]:TabItem,
            [Cell.name]:Cell,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem
        },
        data: function () {
            return {
                id:'0',
                arr:[
                    "必体验",
                    "取景圣地",
                    "网红地打卡",
                    "情侣游",
                    "闺蜜行",
                    "自驾游",
                    "西湖",
                    "银泰",
                ],
                items:[
                    {id:'1',name:'必体验', active:false},
                    {id:'2',name:'取景圣地', active:false},
                    {id:'3',name:'网红地打卡', active:false},
                    {id:'4',name:'情侣游', active:false},
                    {id:'5',name:'闺蜜行', active:false},
                    {id:'6',name:'自驾游', active:false},
                    {id:'7',name:'西湖', active:false},
                    {id:'8',name:'银泰', active:false}
                ],
                pictures:[
                    {title:'西湖全攻略', url:'../../static/xihu.jpg'},
                    {title:'西湖全攻略', url:'../../static/xihu.jpg'},
                    {title:'西湖全攻略', url:'../../static/xihu.jpg'}
                ],
                picture1s:[
                    {title:'西湖全攻略', url:'../../static/xihu.jpg'},
                    {title:'西湖全攻略', url:'../../static/xihu.jpg'},
                    {title:'西湖全攻略', url:'../../static/xihu.jpg'}
                ]
            }
        },
        computed:{

        },
        methods:{
            makeActive:function(item,index){
                this.active=item.active;
                // console.log('123');
                // console.log(item);
                // console.log(index);
                // console.log('456');
                // for(var i=0; i<this.items.length;i++){
                //     this.items[i].active = false;
                // }
                if(index=='1'){
                    // console.log(this.items[index].active);
                    // this.items[index].active = true;
                    // console.log(this.items[index].active);
                    this.$router.push({path: '/discovery'})
                }
                if(index=='2'){
                    // console.log(this.items[index].active);
                    // this.items[index].active = true;
                    // console.log(this.items[index].active);
                    this.$router.push({path: '/d2'})
                }


            }
        },

    }
</script>

<style scoped>
    .home{
        width: 100%;
        height:30px;
        overflow:hidden;
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
    .p{
        text-align: center;
        font-size: 16px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding: 10px;
        margin: 5px;
    }
    #home p.active{
        color: #ffff00;
        background-color: #000000;
    }

</style>
