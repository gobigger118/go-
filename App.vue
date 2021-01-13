<template>
  <div id="app">
    <div class="view">
      <router-view />
    </div>
   <footerNAV    v-if="$route.meta.showFooter" />
  </div>
</template>
<script>
import footerNAV from "./components/footerNAV/footerNAV";
// import  {getAddress,getShopList,getFoodTypes} from './services/getDate'
export default {
  data(){
    return{
      // address:""
    }
  },
  components: {
    footerNAV

  },
  async mounted() {
      //dispatch可以在全项目任何一个组件被触发
      this.$store.dispatch('getAddressData')//触发函数，让数据在vue中存储
       this.$store.dispatch('getshop')//触发action中的数据请求函数，提交mutation注入state数据
        this.$store.dispatch('getGood')
        this.$store.dispatch('getShopInfo')
         this.$store.dispatch('getUserInfo')
        //  if(window.location.getItem('user_id')){
        //    this.$store.dispatch('getUserInfo')
        //  }
  //   //发送请求数据
  // let a= await getAddress('34.724384,113.8264385')
  // console.log(a)
  // let b=await getFoodTypes();
  // console.log(b)
  // let res=await getShopList('31.22967','121.4762')
  // console.log(res)
  }
}
</script>
<style lang="stylus">
// import { reqShopInfo } from './services/getDate'
@import '//at.alicdn.com/t/font_2277908_oct5v60kbpp.css';
@import '//at.alicdn.com/t/font_2277908_nox2qnqnce.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
