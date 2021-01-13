<!--  -->
<template>
  <div>
    <headtop :title='address.name'>
      <template v-slot:lefticon>
        <span class="iconfont icon-dingwei"></span> 
       
      </template>
   
      <template v-slot:searchs>
        <a href="javascript:void(0)">
          <section class="e-serch">
            <form action="" method="post">
              <input class="e-serch-inp" type="text" value="" />
            </form>
            <div class="over-tag">
              <span class="iconfont icon-sousuo"></span>
              <span>搜索商店，和你想吃的一切~</span>
               
          
            </div>
          </section></a
        >
      </template>
       <template   v-slot:right-icon>
        <span ></span> 
         <svg t="1608861568891" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2488" width="20" height="20"><path d="M224 384h576l-288 320z" p-id="2489" fill="#f8f3f3"></path></svg>
      </template>
    </headtop>

    <!-- 头部 -->

    <!-- 导航 -->

 <swiper ref="mySwiper" :options="swiperOptions">

      <!-- <swiper-slide   >{{shopsList}}</swiper-slide> -->
      <swiper-slide v-for="categorys in categories" :key="categorys.index">
           <nav class="e-nav">
        <a
          href="javascript:void(0)"
          class="link_to_food"
          v-for="category in categorys"
          :key="category.id"
        >
          <div class="nav-kids">
            <img :src="imgBaseUrl + category.image_url" />
          </div>
          <span>{{ category.title }}</span>
        </a>
         </nav>
      </swiper-slide>
    </swiper>

   

    <!-- 广告图片 -->
    <section class="e-tu">
      <img class="e-tu1" src="./img/guanggao/图片1.png" alt="" />
      <img class="e-tu1" src="./img/guanggao/图片2.png" alt="" />
    </section>
    <!-- 广告图片 END -->
    <!-- 商家标题 -->
    <div class="f-div">
      <span class="f-font">—推荐商家—</span>
    </div>
    <!-- 商家标题 END-->
    <aside class="g-aside">
      <div class="g-aside-1">
        <p>
          综合排列<svg
            t="1608357802207"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3758"
            width="13"
            height="13"
          >
            <path
              d="M946.986 372.374L558.08 797.651a61.202 61.202 0 0 1-45.972 20.801 61.202 61.202 0 0 1-45.976-20.801L77.226 372.374c-18.985-20.052-24.852-49.279-15.04-75.093s33.493-43.84 61.014-46.292h777.494c27.627 2.347 51.412 20.265 61.226 46.187 9.92 25.92 4.054 55.038-14.934 75.198z"
              p-id="3759"
            ></path>
          </svg>
        </p>
      </div>

      <div class="g-aside-1">
        <p>距离最近</p>
      </div>

      <div class="g-aside-1">
        <p>销量最高</p>
      </div>
      <div class="g-aside-1">
        <p>
          筛选<svg
            t="1608358200886"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5827"
            width="18"
            height="18"
          >
            <path
              d="M522.184 1024a39.123 39.123 0 0 1-19.4-5.173l-215.34-149.38a40.093 40.093 0 0 1-17.137-32.334V366.986L10.023 41.712l8.407-21.664A35.567 35.567 0 0 1 50.763 0.002h751.105l20.37 38.476-13.257 19.077-249.29 309.43v617.892A39.123 39.123 0 0 1 520.568 1024zM333.357 823.856L495.024 937.67V344.352L721.358 64.668H111.227l222.13 279.684zM74.69 16.815z"
              fill=""
              p-id="5828"
            ></path>
            <path
              d="M722.975 452.669h258.667q32.333 0 32.333 32.333 0 32.334-32.333 32.334H722.975q-32.334 0-32.334-32.334 0-32.333 32.334-32.333zM722.975 630.503h258.667q32.333 0 32.333 32.333t-32.333 32.333H722.975q-32.334 0-32.334-32.333t32.334-32.333zM722.975 808.336h258.667q32.333 0 32.333 32.334 0 32.333-32.333 32.333H722.975q-32.334 0-32.334-32.333 0-32.334 32.334-32.334z"
              fill=""
              p-id="5829"
            ></path>
          </svg>
        </p>
      </div>
    </aside>

<goodsList></goodsList>
  <!-- <stars>  </stars> -->
    <!-- 底部样式 -->

  </div>
  
</template>

<script>
import Headtop from "../../components/Headtop/Headtop.vue";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import {mapState} from 'vuex';
import  goodsList from './goodsList'
// import  stars from './Stars'
export default {
  name: "",
  components: { 
    Headtop,
    Swiper,
    SwiperSlide,
    goodsList,
    // stars
     },

  directives: {
    swiper: directive
  },
  data() {
    return {
      imgBaseUrl: "https://fuss10.elemecdn.com",
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // loop: true,
        autoplay: true,
      },
    };
  },
  computed: {
    ...mapState(["address", "shopsList",]),
    categories() {
      let newFood = [...this.shopsList,...this.shopsList];
      let foodTypes2 = [];
      for (let i = 0, j = 0; i <= newFood.length; i += 8, j++) {
        foodTypes2[j] = newFood.splice(0, 10);
      }
      return foodTypes2;
    },
  },
};
</script>
<style lang='stylus'>
.Slide{
  height:50px
  }
  .link_to_food{
    color:#666
    }
@import '../../assets/GG.styl';
@import '../../assets/MT.styl';
@import '../../assets/OPEN.styl';
</style>