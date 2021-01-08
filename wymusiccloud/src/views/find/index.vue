<template>
    <div>
        <div class="top-nav">
            <van-icon name="wap-nav" class="left-nav"/>
            <form action="/" class="search">
                <van-icon name="search"/>
                <input type="text" :placeholder="SearchValue">
            </form>
        </div>

        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(swiper,index) in Banners" :key="index">
                <img :src="swiper.pic" alt="">
            </van-swipe-item>
        </van-swipe>
        <van-swipe class="swipe-find-Ball" :loop="false" :width="75" :show-indicators="false">
            <van-swipe-item v-for="(swipeBall,index) in SwipeBalls" :key="index">
                <div class="ball-box"><img :src="swipeBall.iconUrl" alt=""></div>
                <p class="ball-name">{{swipeBall.name}}</p>
            </van-swipe-item>
        </van-swipe>
        <div class="title-box">
            <h3>推荐歌单</h3>
            <div class="more">查看更多</div>
        </div>
        <van-swipe class="swipe-recommend" :loop="false" :width="130" :show-indicators="false">
            <van-swipe-item v-for="(swipeRecommend,index) in RecommendSong" :key="index">
                <div class="img-box">
                    <img :src="swipeRecommend.picUrl" alt="">
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
  import {
    getSearchDefault,
    getBanners,
    getHomePageBall,
    getRecommend
  } from '../../api'

  export default {
    name: "index",
    data() {
      return {
        SearchValue: '',
        Banners: [],
        SwipeBalls: [],
        RecommendSong: [],
      }
    },
    created() {
      //搜索
      getSearchDefault().then(res => {
        this.SearchValue = res.data.realkeyword;
      });
      //banners
      getBanners({
        type: 2,
      }).then(res => {
        this.Banners = res.banners;
      });
      //发现栏目
      getHomePageBall().then(res => {
        this.SwipeBalls = res.data;
      });
      //获取用户每天推荐歌单
      getRecommend().then(res => {
        this.RecommendSong = res.recommend;
        console.log(res)
      });

    },
    methods: {}
  }
</script>

<style scoped lang="scss">
    .top-nav {
        width: 686px;
        display: flex;
        justify-content: space-between;

        & > .left-nav {
            color: $color;
            font-size: 54px;
            margin: 60px 0 0 32px;
        }
    }

    .search {
        width: 520px;
        height: 72px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 2rem;
        background: #202020;
        margin: 48px auto;

        & > input {
            width: auto;
            height: 100%;
            border-radius: 2rem;
            background: none;
            border: none;
            font-size: $font32;
            color: $color-hui;
            font-weight: 600;
            padding-left: 10px;

            &::-webkit-input-placeholder {
                color: $color-hui1;
            }
        }

        & > .van-icon {
            font-size: 30px;
            padding-left: 150px;
            color: $color-hui;
        }
    }

    .my-swipe {
        width: 686px;
        height: 268px;
        margin: 0 auto;
        border-radius: 15px;
    }

    .swipe-find-Ball {
        width: calc(100% - 32px);
        margin: 40px 0 0 32px;
        height: 150px;

        & .ball-box {
            width: 92px;
            height: 92px;
            border-radius: 50%;
            background: #2d2d2d;
        }

        & .ball-name {
            width: 98px;
            color: $color-hui;
            text-align: center;
            padding-top: 10px;
            font-size: $font16;
        }
    }

    .title-box {
        width: 686px;
        margin: 70px auto 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $color;

        & > h3 {
            font-size: 40px;
        }

        & > .more {
            width: 155px;
            height: 52px;
            border: 2px solid $color-hui1;
            font-size: $font28;
            line-height: 52px;
            text-align: center;
            border-radius: 50px;
        }
    }
    .swipe-recommend {
        width: calc(100% - 32px);
        height: 288px;
        margin-left: 32px;
        color: $color;
        & .img-box {
            width: 210px;
            height: 210px;
            border-radius: 15px;
            position: relative;
            overflow: hidden;
        }
        & .r-title {
            font-size: $font24;
        }
    }
</style>
