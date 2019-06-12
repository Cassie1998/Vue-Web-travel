<template>
    <div class="home">
        <mt-header fixed title="消息"></mt-header>
        <div style="width:100%;">
            <div style="list-style: none;width:33%;float:left;" v-for="item in items" :key="item.id">
                <img :src="item.url" style="width:24px;height:24px"/>
                <span style="float:left;width:100%">{{item.title}}</span>
            </div>
        </div>
        <div style="width:100%;margin-top: 20px;float:left;">
            <div v-for="list in lists" :key="list.id" style="margin-top:50px;"  @click="topages(list)">
                <div style="width:30%;height:75px;float:left;">
                    <img  :src="list.url"  style="width:75px;height:75px;border-radius: 90px">
                </div>
                <div style="width:80%;height:75px;">
                            <span style="width:100%;font-size:16px;font-family: 黑体;margin-left:-120px">
                                {{list.title}}
                            </span>
                    <span style="float:right;margin-right:-50px;font-size:12px;color: darkgray">{{list.time}}</span>
                    <div style="width:100%;margin-top:10px">
                        <span style="float:left;margin-left:5px;font-size:12px;color:darkgray ">{{list.message}}</span>
                    </div>

                </div>
            </div>
        </div>

        <lastbar ref="lastbar"></lastbar>
    </div>
</template>

<script>
    import lastbar from '../components/lastbar.vue'
    import { Navbar, TabItem,Button,Field,Header,Swipe, SwipeItem,TabContainer, TabContainerItem,Cell,PaletteButton } from 'mint-ui';
    export default {
        name: "messages",
        components:{
            lastbar,
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
                items:[
                    {title:'赞和收藏',url:'../../static/zan.png'},
                    {title:'新增关注',url:'../../static/guanzhu.png'},
                    {title:'评论和@',url:'../../static/pinglun.png'}
                ],
                lists:[
                    {title:'通知消息',url:'../../static/tongzhi.png',
                        message:'凭什么20岁后不配过儿童节？！',time:'18:08'},
                    {title:'糯米团团',url:'../../static/touxiang1.jpg',
                        message:'在吗',time:'05-25'},
                    {title:'草莓小面包',url:'../../static/touxiang2.jpg',
                        message:'西溪湿地真的不错！',time:'03-19'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
