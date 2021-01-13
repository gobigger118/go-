//导入封装好的fetch模块
import fetch from "./fetch";
let baseUrl = "https://elm.cangdu.org"
//调用接口获取数据


//根据经纬度详细定位
export const getAddress = geohash => fetch (baseUrl + "/v2/pois/" + geohash);

//食品分类列表
export const getShops = () => fetch (baseUrl + "/v2/index_entry");

//获取商铺列表
export const getGoods = ({latitude,longitude}) => fetch (baseUrl + "/shopping/restaurants",{latitude,longitude});
// 请求餐馆详细信息
// 接口与接口文档一直，但是，请求到的数据是data.json的数据
// export const getShopInfo = () => fetch('/goods')
export const getShopInfo = () => fetch('/info')


/**
 * 获取商家信息(下列请求由mock拦截并返回 不需要代理)
 */
export const reqShopInfo = () => fetch(baseUrl + '/shopping/restaurant/1')
/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => fetch(baseUrl + '/ugc/v2/restaurants/restaurant_id/ratings')
/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => fetch(baseUrl + '/shopping/v2/menu')
// 验证码
export const getcaptchas=()=>fetch(baseUrl+'/v1/captchas',{},'POST')
export const getPwdLogin=({username,password,captcha_code})=>fetch(baseUrl+'/v2/login',{username,password,captcha_code},'POST')
export const getUser=()=>fetch('/v1/user',{user_id:window.localStorage.getItem('user_id')})