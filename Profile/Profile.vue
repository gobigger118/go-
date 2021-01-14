<!--  -->
<template>
 

  <div >
  <router-link to='/Register' 
    >
    <headtop title="我的" />
    
    <section class="host-1">
        <div class="host-img">
            <img class="host-text" src="./img/guanggao/图7.png" alt="">
           <h1  class="host-text-1" >
           登陆/注册<br>
      <p>登陆享受更多权益</p>
           </h1>
            </div>
           
            <!-- <div class="host-text"> <svg  t="1608370799152" class="icon" viewBox="0 0 1024 1024"
                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2195" width="12" height="12">
                    <path
                        d="M325.048 93.511l-60.030 59.435 357.181 359.631-360.184 356.603 59.522 59.93 420.207-416.043z"
                        p-id="2196"></path>
                </svg>   
           </div> -->
             </section>  
        </router-link>
 
    <!-- Host页面header部分END -->

<!-- 红包部分 -->
<div  class="host-hb" >
<div class="host-hb1">
  <a class="host-hb1-red" >6个</a>  <br>
  <a class="host-hb1-text">红包</a> 
</div>
<div class="host-hb1">
    <a class="host-hb1-green" >47个</a>  <br>
    <a class="host-hb1-text">金币</a> 

</div>
</div>
<!-- 红包部分END -->



<!--设置信息 -->
<div class="host-diz">
<p  class="host-diz-p1"> 我的地址</p>  
<svg    t="1608375828294" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="15" height="15"><path d="M325.048 93.511l-60.030 59.435 357.181 359.631-360.184 356.603 59.522 59.93 420.207-416.043z" p-id="1833"></path></svg>
</div>

<!-- 第二信息 -->
<div class="host-diz">
  
 
 <p  class="host-diz-p1"> 金币商城</p>  
 <svg    t="1608375828294" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="15" height="15"><path d="M325.048 93.511l-60.030 59.435 357.181 359.631-360.184 356.603 59.522 59.93 420.207-416.043z" p-id="1833"></path></svg>
 </div>
 <!-- 第三信息 -->
 <div class="host-diz">

 
 <p  class="host-diz-p1"> 我的客服</p>  
 <svg    t="1608375828294" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="15" height="15"><path d="M325.048 93.511l-60.030 59.435 357.181 359.631-360.184 356.603 59.522 59.93 420.207-416.043z" p-id="1833"></path></svg>
 </div>
<!-- 第三2信息 -->
 <div class="host-diz2">
    
 
 <p  class="host-diz-p1"> 下载吃了么APP</p>  
 
 </div>
<!-- 第三3信息 -->
 <div class="host-diz2">
  

 <p  class="host-diz-p1"> 规则中心</p>  
 <svg    t="1608375828294" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="15" height="15"><path d="M325.048 93.511l-60.030 59.435 357.181 359.631-360.184 356.603 59.522 59.93 420.207-416.043z" p-id="1833"></path></svg>
 </div>
<!--设置信息END -->
<!-- 超链接 -->
<div  class="host-clj">
    <a href="#">隐私政策</a>
</div>
<!-- 超链接END -->

  </div>




</template>

<script>
import Headtop  from '../../components/Headtop/Headtop'
export default {

  name: '',
  components:{
    Headtop
  }
}
</script>

<style scoped lang='stylus'>
.host-text{
  position:relative;
}
.host-text-1{
  font-size:0.865rem;
   position:absolute;
    top: 5.5625rem;
    left: 6.5625rem;
  color:#FFFFFF;
}
.host-text-1  p{
  font-size:0.5650rem; 
}
@import '../../assets/GG.styl'
@import '../../assets/MT.styl'
@import '../../assets/OPEN.styl'
</style>