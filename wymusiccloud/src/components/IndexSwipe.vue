<template>
    <div>
        <div class="title-box">
            <h3>{{title}}</h3>
            <div class="more">更多<span> ></span></div>
        </div>
        <swiper ref="SwiperRecommend" class="swipe-recommend" :options="SwiperRecommend">
            <swiper-slide v-for="(swipeRecommend,index) in SongArray" v-if="index < 7" :key="index">
                <div class="img-box">
                    <div class="hot-box">
                        <van-icon name="like-o" class="icon"/>
                        <p>
                            {{swipeRecommend.playcount}}
                        </p>
                    </div>
                    <img :src="swipeRecommend.picUrl" alt="">
                </div>
                <p class="r-title">{{swipeRecommend.name}}</p>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  export default {
    name: "IndexSwipe",
    props:[
      'title',
      'SongArray',
    ],
    data() {
      return {
        SwiperRecommend: {
          slidesPerView: 3.1,
        }
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped lang="scss">
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
            padding: 8px 36px;
            border: 2px solid $color-hui1;
            font-size: $font28;
            text-align: center;
            border-radius: 50px;
            display: flex;

            & > span {
                padding-left: 10px;
            }
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

            & > .hot-box {
                position: absolute;
                padding-right: 15px;
                height: 30px;
                border-radius: 20px;
                background: rgba(103, 103, 103, .5);
                right: 10px;
                top: 10px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                color: $color;

                & > .icon {
                    font-size: $font18;
                    padding-left: 15px;
                }

                & > p {
                    padding-left: 10px;
                    font-size: $font24;
                }
            }
        }

        & .r-title {
            font-size: $font24;
            line-height: 40px;
            width: calc(100% - 40px);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
            -webkit-line-clamp: 2; /* 控制最多显示几行 */
            -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
            text-align: left;
        }
    }
</style>
