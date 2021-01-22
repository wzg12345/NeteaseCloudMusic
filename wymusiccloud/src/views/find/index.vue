<template>
    <div>
        <div class="top-nav">
            <van-icon name="wap-nav" class="left-nav"/>
            <form action="/" class="search">
                <van-icon name="search"/>
                <input
                        type="text"
                        :placeholder="SearchValue"
                        :style="{width:text(SearchValue)}"
                >
            </form>
        </div>
        <swiper ref="SwiperBanner" class="swiper-banner" :options="SwiperBanners">
            <swiper-slide v-for="(swiper,index) in Banners" :key="index"><img :src="swiper.pic" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <swiper ref="SwiperBall" class="swipe-find-Ball" :options="SwiperBalls">
            <swiper-slide v-for="(swipeBall,index) in SwipeBalls" :key="index">
                <div class="ball-box"><img :src="swipeBall.iconUrl" alt=""></div>
                <p class="ball-name">{{swipeBall.name}}</p>
            </swiper-slide>
            <!--<div class="swiper-pagination" slot="pagination"></div>-->
        </swiper>
        <IndexSwiper :title='SongTitle[0]' :song-array="SongArry.RecommendSong" ></IndexSwiper>
        <IndexSwiper :title='SongTitle[1]' :song-array="SongArry.PersonAlized" ></IndexSwiper>
    </div>
</template>

<script>
  import {
    getSearchDefault,
    getBanners,
    getHomePageBall,
    getRecommend,
    personalized,
    personal_fm,
    Related,
    Recommend
  } from '../../api'
  import IndexSwiper from '../../components/IndexSwipe'

  export default {
    name: "index",
    components: {
      IndexSwiper
    },
    data() {
      return {
        SearchValue: '',
        Banners: [],
        SwipeBalls: [],
        SongTitle: ['每日推荐','推荐歌单'],
        SongArry: {
          RecommendSong:[],
          PersonAlized:[],
        },
        SwiperBanners: {
          autoplay: {// 自动滑动
            delay: 1000, //1秒切换一次
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination'
          },
        },
        SwiperBalls: {
          slidesPerView: 5.2,
        },

      }
    },
    created() {
      //搜索
      getSearchDefault().then(res => {
        // console.log(res);
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
        this.SongArry.RecommendSong = res.recommend;
        // console.log(res);
        this.SongArry.RecommendSong.forEach((index, item, arr) => {
          if (index.playcount.toString().length >= 5) {
            if (index.playcount.toString().length >= 9) {
              index.playcount = (index.playcount / 100000000).toFixed(2) + '亿';
            } else {
              index.playcount = (index.playcount / 10000).toFixed(1) + '万';
            }
          } else {
            return index.playcount
          }
        })
      });

      //推荐歌单
      personalized({
        limit:7,
      }).then(res => {
        this.SongArry.PersonAlized = res.result;
        this.SongArry.PersonAlized.forEach((index, item, arr) => {
          index.playcount = index.playCount;
          if (index.playcount.toString().length >= 5) {
            if (index.playcount.toString().length >= 9) {
              index.playcount = (index.playcount / 100000000).toFixed(2) + '亿';
            } else {
              index.playcount = (index.playcount / 10000).toFixed(0) + '万';
            }
          } else {
            return index.playcount
          }
        })
      });

      Recommend({
        order:'hot'
      }).then(res => {
        let id = res.playlists[Math.random() * res.playlists.length | 0].id;
        console.log(res.playlists[Math.random() * res.playlists.length | 0].id);
        Related({
          id:id
        }).then(res=>{
          console.log(res);
        })
      });
    },
    computed: {
      text() {
        return function (value) {
          if (value == '' || value == 0) {
            return '100%'
          } else {
            // console.log(String(value).length);
            return String(value).length * 32 / 75 + 'rem'
          }
        }
      }
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
        align-items: center;
        justify-content: center;
        border-radius: 200px;
        background: #202020;
        margin: 48px auto;

        & > input {
            height: 100%;
            border-radius: 2rem;
            background: none;
            border: none;
            font-size: $font32;
            color: $color-hui;
            font-weight: 600;
            padding: 0 10px;

            &::-webkit-input-placeholder {
                color: $color-hui1;
            }
        }

        & > .van-icon {
            font-size: 30px;
            color: $color-hui;
        }
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


    .swiper-banner {
        width: 686px;
        height: 268px;
        margin: 0 auto;
        border-radius: 15px;
    }

</style>
