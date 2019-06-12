<template>
    <div class="wrapper" >
        <div class="nav-item" :class='{active: index == nowIndex}' v-for='(tabItem,index) in tabParams' @click='tabToggle(index)'>
            <div>
                <span :class='{dropdownBtn: index ==0}'  @click='dropdown'>{{tabItem}}</span>
                <img :class='{dropdownBtn: index ==0}'  @click='dropdown' src="../../static/xiala.png" style="width:10%;" >
            </div>
            <ul class="dropdown-menu" v-if='index ==0'  v-show='dropdownActive'>
                <li style="width:100%" v-for='(dropitem, index) in dropParams' @click="goto(index)">{{dropitem}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wrapper",
        data() {
            return {
                selected1: false,
                nowIndex: 0,
                dropdownActive: false,
                tabParams: ['综合排序', '全部商圈', '类型', '筛选'],
                dropParams: ['综合排序', '点评最多'],
                selected: false,
            }
        },
        methods:{
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
            goto:function(index){
                console.log(index);
                if(index==0){
                    this.$router.push({path: '/scenes'})
                }
                if(index==1){
                    this.$router.push({path: '/scenes1'})
                }
            }
        }
    }
</script>

<style scoped>
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
    .nav-item{
        min-width: 100px;
        height: 40px;
        display: inline-block;
        vertical-align: middle;


    }
    .dropdown-menu {
        position: absolute;
        width:375px;
        z-index: 1000;
        min-width: 100px;
        padding: 5px 10px;
        margin: 2px 0 0;
        list-style: none;
        font-size: 14px;
        text-align: left;
        background-color: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    }

</style>
