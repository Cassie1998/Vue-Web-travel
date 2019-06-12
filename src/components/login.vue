<template>
  <div name="login" >

    <mt-header fixed title="登录"></mt-header>

    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>

    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button type="primary">登录</mt-button>

  </div>
</template>

<script>
    import { Navbar, TabItem,Button,Field,Header } from 'mint-ui';
export default {
  name: 'login',
    components: {
        [Navbar.name]:Navbar,
        [TabItem.name]:TabItem,
        [Button.name]:Button,
        [Field.name]:Field,
        [Header.name]:Header
    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    padding: 96px 15px 15px 15px;
    min-height: 100vh;
    font-size: 14px;
    background: #f2f2f2;
  }

</style>
