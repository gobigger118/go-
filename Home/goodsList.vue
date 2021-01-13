<template>
  <div class="msite_shop_list">
    <div class="shop_header">
      <i class="iconfont icon-xuanxiang"></i>
      <span class="shop_header_title">附近商家</span>
    </div>
    <div class="shop_container">
      <ul class="shop_list">
        <li
          class="shop_li border-1px"
          v-for="good in goodsList"
          :key="good.id"
        >
         <router-link to='/shop' 
    >
          <a >
            <div class="shop_left">
              <img
                class="shop_img"
                :src="baseImgUrl+good.image_path"
              />
            </div>
            <div class="shop_right">
              <section class="shop_detail_header">
                <h4 class="shop_title ellipsis">{{good.name}}</h4>
                <ul class="shop_detail_ul">

                  <li
                    class="supports"
                    v-for="sup in good.supports"
                    :key="sup.id"
                  >{{sup.icon_name}}</li>
                </ul>
              </section>
              <!-- 将会抽取一个评分组件 -->
              <Star :rating='good.rating'></Star>
              <section class="shop_distance">
                <p class="shop_delivery_msg">
                  <span>¥20起送</span>
                  <span class="segmentation">/</span>
                  <span>{{good.piecewise_agent_fee.tips}}</span>
                </p>
              </section>
            </div>
          </a>
            </router-link>
        </li>

      </ul>
      <!-- {{goodsList}} -->
    </div>
  </div>
</template>
<script>
// 导入state辅助函数mapState
import { mapState } from 'vuex'

// 导入组件
import Star from './Stars'
export default {

  data() {
    return {
      baseImgUrl: '//elm.cangdu.org/img/'
    }
  },
  async mounted() {
    let rs = await this.goodsList;
    console.log(rs);
  },
  computed: {
    // 借助辅助函数拿到商铺列表
    ...mapState(['goodsList'])
  },
  // 将导入的组件注册到配置对象
  components: {
    Star
  }
}
</script>

<style lang="stylus" >
@import '../../assets/mixins.styl';
@import '../../assets/goodList.styl';
</style>