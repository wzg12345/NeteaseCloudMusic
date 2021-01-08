<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item v-for="(nav,index) in tabbars" :key="index" @click="onRouter(index,nav.name)">
                <span>{{nav.title}}</span>
                <template #icon="props">
                    <van-icon class-prefix="my-icon" :name="nav.imgName"/>
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
  import '../assets/css/iconfont.css'
  export default {
    name: "BottomNav",
    data() {
      return {
        active: 0,
        tabbars:[
          {
            name:'/',
            title:'发现',
            imgName:'faxian',
          },
          {
            name:'Video',
            title:'视频',
            imgName:'ziyuan',
          },
          {
            name:'Mine',
            title:'我的',
            imgName:'yinle',
          },
          {
            name:'Friend',
            title:'云村',
            imgName:'pengyou',
          },
          {
            name:'Center',
            title:'账号',
            imgName:'tubiao_zhanghao',
          }
        ]
      }
    },
    methods: {
        onRouter(index,name){
            this.$router.push(name).catch(err => err);
        }
    },
  }
</script>

<style scoped lang="scss">

    .van-tabbar {
        background: #141415;
        height: 100px;
    }
    .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
        border-width: 0;
    }
    .van-tabbar-item {
        color: #727272;
        font-size: 18px;
    }
    .van-tabbar-item--active {
        background: #141415;
        color: #ffffff;
    }

</style>
