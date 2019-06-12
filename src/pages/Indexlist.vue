<template>
    <div class="home">
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
        <mt-index-list>
            <mt-index-section index="A">
                <mt-cell title="Aaron"></mt-cell>
                <mt-cell title="Alden"></mt-cell>
                <mt-cell title="Austin"></mt-cell>
            </mt-index-section>
            <mt-index-section index="H">
                <mt-cell title="河坊街"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
            <mt-index-section index="S">
                <mt-cell title="三潭印月"></mt-cell>
            </mt-index-section>
            <mt-index-section index="X">
                <mt-cell title="西湖"></mt-cell>
                <mt-cell title="西溪湿地"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>

</template>

<script>
    import {IndexList, IndexSection} from 'mint-ui';
    export default {
        name: "Indexlist",
        component:{
            [IndexList.name]:IndexList,
            [IndexSection.name]:IndexSection
        },
        data:{
            searchValue:''
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
</style>