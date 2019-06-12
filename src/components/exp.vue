<template>
    <div>
        <div style="clear:both"><span style="float:left;margin-top:5px;font-size:18px">游客心得</span></div>
        <div style="clear:both">
            <mt-button v-for="exp in exps" :key="exp.id" class="button1" style="background-size:100% 100%">
                <img style="position:relative;right:50px;bottom:50px;width:250px;height:80%" :src="exp.url">
                <span style="position:relative;right:50px;width:100%;height:20%;font-family: 黑体">{{exp.title}}</span>
            </mt-button>
            <mt-button v-for="exp1 in exps1" :key="exp1.id" class="button1" style="background-size:100% 100%">
                <img style="position:relative;right:50px;bottom:50px;width:250px;height:80%" :src="exp1.url">
                <span style="position:relative;right:50px;width:100%;height:20%;font-family: 黑体">{{exp1.title}}</span>
            </mt-button>
        </div>
    </div>

</template>

<script>
    import { Button} from 'mint-ui';
    export default {
        name: "exp",
        components:{
            [Button.name]:Button
        },
        data(){
            return{
                exps:[
                    {title:'三潭印月',url:'../../static/styy.jpg',touxiang:'../../static/touxiang1',name:'人民去哪玩日报'},
                    {title:'灵隐寺',url:'../../static/linyinsi.png'}
                ],
                exps1:[
                    {title:'超美甜品店',url:'../../static/tianpin.jpg'},
                    {title:'莫干山民宿',url:'../../static/moganshan.jpg'}
                ]
            }
        }
    }
</script>

<style scoped>
    .button1{
        float: left;
        width:49%;
        height:250px;
        margin:10px 2px 2px 1px;
        border-radius:20px;

    }
</style>
