//接口集合
import Http from './http'

export const login = p => Http.get('/login/cellphone',p);//获取每日推荐歌单

export const loginRefresh = () => Http.get('/login/refresh');//获取每日推荐歌单

export const getSearchDefault = () => Http.get('/search/default');//获取默认搜索

export const getBanners = p => Http.get('/banner',p);//获取发现banner

export const getHomePageBall = () => Http.get('/homepage/dragon/ball');//首页-发现-圆形图标入口列表

export const getHomePage = () => Http.get('/homepage/block/page');//首页-发现-所有数据

export const getRecommend = () => Http.get('/recommend/resource');//获取每日推荐歌单









