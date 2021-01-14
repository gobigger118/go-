<template>
  <div class="cartcontrol-wrapper">
    <div class="cartcontrol">
      <div class="icon-jia" @click="subCount(food)" v-if="food.count">
        <svg
          t="1610070876393"
          
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5187"
          width="20"
          height="20"
        >
          <path
            d="M537.6 933.0176c-225.8432 0-409.6-183.7568-409.6-409.6s183.7568-409.6 409.6-409.6 409.6 183.7568 409.6 409.6-183.7568 409.6-409.6 409.6z m0-768c-197.632 0-358.4 160.768-358.4 358.4s160.768 358.4 358.4 358.4c197.5808 0 358.4-160.768 358.4-358.4s-160.8192-358.4-358.4-358.4z"
            p-id="5188"
            fill="#1296db"
          ></path>
          <path
            d="M356.608 497.8176h361.9328v51.2H356.608z"
            p-id="5189"
            fill="#1296db"
          ></path>
        </svg>
      </div>
      <div class="cart-count" ><a :class='myval'>{{food.count}}</a></div>
      
      <div class="icon-addcircle" @click="addCount(food)" >
     
           <svg
          t="1610070947281"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5977"
          width="20"
          height="20"
        >
          <path
            d="M511.4481 66.2047C266.1325 66.2047 66.5426 265.7946 66.5426 511.1112c0 245.3176 199.5899 444.9065 444.9065 444.9065 245.3176 0 444.9065-199.5889 444.9065-444.9065C956.3556 265.7946 756.7667 66.2047 511.4481 66.2047zM511.4481 900.4032C296.789 900.4032 122.156 725.7723 122.156 511.1112 122.156 296.4511 296.789 121.8181 511.4481 121.8181c214.6601 0 389.2941 174.633 389.2941 389.2931C900.7421 725.7723 726.1082 900.4032 511.4481 900.4032zM678.2884 483.3044H539.2568319999999V344.270848c0-15.3692-12.4375-27.8057-27.8077-27.8057-15.3702 0-27.8067 12.4375-27.8067 27.8057v139.0336H344.61081600000006c-15.3723 0-27.8077 12.4375-27.8077 27.8067 0 15.3416 12.4365 27.8057 27.8077 27.8057h139.030528v139.0336c0 15.3416 12.4375 27.8057 27.8067 27.8057 15.3713 0 27.8077-12.4641 27.8077-27.8057V538.9168639999999h139.031552c15.3713 0 27.8077-12.4641 27.8077-27.8057C706.0961 495.7409 693.6596 483.3044 678.2884 483.3044z"
            fill="#1296db"
            p-id="5978"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
  mounted(){
    this.init()
  },
  props: ["food"],
  methods: {
    ...mapMutations(['INCREMENT_FOOD_COUNT','DECREMENT_FOOD_COUNT']),
    subCount(food) {
      this.DECREMENT_FOOD_COUNT({food})
    },
    addCount(food) {
      this.INCREMENT_FOOD_COUNT({food})
    },
  
    
  },
  //   computed: {

  // init(){

  //  if(this.$refs.myval.innerHTML<=0){
  //      this.$refs.myval.style.display="none";
  //  }
  //  return a;
  //   }
  //  },
};

</script>
<style lang="stylus">
@import '../../assets/mixins.styl';

.cartcontrol {
  font-size: 0;

  .cart-decrease {
    display: inline-block;
    padding: 63px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }

  .icon-jia {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: $green;

    &.move-enter-active, &.move-leave-active {
      transition: all 0.3s;
    }

    &.move-enter, &.move-leave-to {
      opacity: 0;
      transform: translateX(15px) rotate(180deg);
    }
  }
  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .icon-addcircle {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: $green;
  }
}

</style>