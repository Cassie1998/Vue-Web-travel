<template>
    <div class="last">
        <mt-navbar>
            <mt-tab-item v-for="primelist in primelists" :key="primelist.id" :sel="selected">
                <img  :src="primelist.url" class="img1" slot="icon" @click="topages(primelist)">
                <span style="font-size:14px;text-align :center ;" >{{primelist.title}}</span>
            </mt-tab-item>
        </mt-navbar>
    </div>
</template>

<script>
    import { Navbar, TabItem,Button,Field,Header,Swipe, SwipeItem,TabContainer, TabContainerItem,Cell } from 'mint-ui';
    export default {
        name: "home",
        components: {
            [Navbar.name]:Navbar,
            [TabItem.name]:TabItem,
            [Button.name]:Button,
            [Field.name]:Field,
            [Header.name]:Header,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
            [TabContainer.name]:TabContainer,
            [TabContainerItem.name]:TabContainerItem,
            [Cell.name]:Cell
        },

        data () {
            return {
                selected:'home',
                shared1:'',
                shared2:'',
                shared3:'',
                shared4:'',
                showicon:false,
                active: 'tab-container1',
                primelists:[
                    {
                        id:'1',
                        name:'home',
                        title:'首页',
                        url:'../../static/home-false.png',
                        url1:"../../static/home-true.png"
                    },
                    {
                        id:'2',
                        name:'discovery',
                        title:'发现',
                        url:'../../static/faxian-false.png',
                        url1:'../../static/faxian-true.png'
                    },
                    {
                        id:'3',
                        name:'message',
                        title:'消息',
                        url:'../../static/xiaoxi-false.png',
                        url1:'../../static/xiaoxi-true.png'
                    },
                    {
                        id:'4',
                        name:'mine',
                        title:'我的',
                        url:'../../static/wode-false.png',
                        url1:'../../static/wode-true.png'
                    }
                ]
            }
        },
        computed:{
            bol: function(){
                console.log(sel);
                if(this.sel == this.page){
                    return true;
                }
                return false;
            }
        },
        methods:{
            topages:function(primelist){
                if(primelist.id==1) {
                    this.selected = primelist.name;
                    this.$router.push({path: '/home'})
                }
                else if(primelist.id==2){
                    this.selected = primelist.name;
                    this.$router.push({path: '/discovery'})
                }
                else if(primelist.id==3){
                    this.selected = primelist.name;
                    this.$router.push({path: '/messages'})
                }
                else if(primelist.id==4){
                    this.selected = primelist.name;
                    this.$router.push({path: '/mine'})
                }
            }
        }
    }
</script>

<style scoped>
    .last{
        position:fixed;
        bottom: 0;
        right:0;
        left:0;
    }
    .img2{
        display: none;
    }
    .on .img1{
        display: none;
    }
    .on .img2{
        display: block;
    }
</style>
