<template>
    <div id="app">
        <router-view/>
        <Nav></Nav>
    </div>
</template>
<script>
  import Nav from './components/BottomNav.vue'
  import { login,loginRefresh } from './api'

  export default {
    components:{
      Nav,
    },
    created() {
      // login({phone:'18844024442',password:'xixi12345'}).then(res=>{
      //   console.log(res)
      // });
      // loginRefresh().then(res=>{
      //   console.log(res)
      // })
    }
  }
</script>
<style lang="scss">
    html,body {
        width: 100%;
        height: 100%;
        background: #0d0d0d;
        overflow: hidden;
    }
    * {
        margin: 0;
        padding: 0;
    }
    #app {
        text-align: center;
        width: 100vw;
        height: 100vh;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    img {
        display: block;
        width: 100%;
    }
</style>
