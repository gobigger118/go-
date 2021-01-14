<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <!-- 菜单对应的是食物分类列表-->
        <ul>
          <li
            class="menu-item"
            v-for="(goods, index) in shopGoods"
            :key="goods.index"
            @click="changeRightY(index)"
            :class="{ current: index == currentIndex }"
          >
            <span class="text bottom-border-1px">
              <img :src="goods.icon" class="icon" v-if="goods.icon" />
              {{ goods.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="foodsUl">
          <li
            class="food-list-hook"
            v-for="goods in shopGoods"
            :key="goods.index"
          >
            <h1 class="title">{{ goods.name }}</h1>
            <ul>
              <li
                class="food-item bottom-border-1px"
                v-for="food in goods.foods"
                :key="food.index"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.image" />
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <p class="desc">{{ food.description }}</p>
                  <div class="extra">
                    <span class="count">月售{{ food.sellCount }}份</span
                    ><span>好评率{{ food.rating }}%</span>
                  </div>
                  <div class="pryice">
                    <span class="now">￥{{ food.price }}</span>
                   

                  </div>
                 
                <CartControl :food='food'/>
            
                  </div>
              
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
       <ShopCart/>
  </div>
</template>
<script>
import { mapState } from "vuex";
import BScroll from "@better-scroll/core";
import CartControl from '../../../components/CartControl/CartControl';
import ShopCart from '../../../components/ShopCart/ShopCart';
export default {
  data() {
    return {
      currentIndex: 0,
      goodsbs: "",
      toplist: [],
      rightSrolly: 0,
      menubs: "",
    };
  },
  components: {
     ShopCart,
    CartControl
   

  },
  computed: {
    ...mapState(["shopGoods"]),
    //   currentIndex(){
    //     rightSrolly>0 this.rightSrolly<
    //     return index
    //   }
  },
  mounted() {
    this.$store.dispatch("getShopGoods", () => {
      this.$nextTick(() => {
        console.log(this.shopGoods[0]);
        this.menubs = new BScroll(".menu-wrapper", {
          click: true,
        });
        this.goodsbs = new BScroll(".foods-wrapper", {
          click: true,
          probeType:3
        });

        this.goodsbs.on("scroll", ({ y }) => {
          this.rightSrolly = Math.abs(y);
          this.toplist.forEach((item, index) => {
            if (
              this.rightSrolly > item &&
              this.rightSrolly < this.toplist[index + 1]
            ) {
              this.currentIndex = index;
            }
          });

          //改变菜单的位置
          // this.menubs.scrollToElement(要滚动道德元素，时间：800，x轴，0y轴，true)
          let lic = this.$ref.menuWrapper.querySelector(".current");
          this.menubs.scrollToElement(lic, 800, 0, true);
        });

        let top = 0;
        this.toplist.push(top);
        let lis = this.$refs.foodsUl.children;
        console.log(lis);
        Array.prototype.slice.call(lis).forEach((item) => {
          top = top + item.clientHeight;
          this.toplist.push(top);
        });
        console.log(this.toplist);
      });
    });
  },
  methods: {
    changeRightY(index) {
      this.currentIndex = index;
      let a = this.toplist[index]+5;
      //可以精准的确定点击的是哪一个菜单

      //控制右侧滚动即可
      //【0,goods[0].clientHeight,goods[0].clientHeight+goods[1].clientHeight】
      this.rightSrolly = a;
      console.log(a);
      //this.goodsbs.scrollTo(x轴不动,y轴向下滚动,滚动时间)
      this.goodsbs.scrollTo(0, -a, 200);
    },
  },
};
</script>


<style lang="stylus">
@import '../../../assets/mixins.styl';

.goods {
  display: flex;
  position: absolute;
  top: 210px;
  bottom: 46px;
  width: 100%;
  background: #fff;
  overflow: hidden;

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;

    .menu-item {
      display: table;
      height: 54px;
      width: 56px;
      padding: 0 12px;
      line-height: 14px;

      &.current {
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        color: $green;
        font-weight: 700;

        .text {
          border: none;
        }
      }

      .icon {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
      }

      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        bottom-border-1px(#ddd);
        font-size: 12px;
      }
    }
  }
}

.foods-wrapper {
  flex: 1;

  .title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
    background: #f3f5f7;
  }

  .food-item {
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    bottom-border-1px(#ddd);

    &:last-child {
      border: none;
      margin-bottom: 0;
    }

    .icon {
      flex: 0 0 57px;
      margin-right: 10px;
    }

    .content {
      flex: 1;

      .name {
        margin: 2px 0 8px 0;
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }

      .desc, .extra {
        line-height: 10px;
        font-size: 10px;
        color: rgb(147, 153, 159);
      }

      .desc {
        line-height: 12px;
        margin-bottom: 8px;
      }

      .extra {
        .count {
          margin-right: 12px;
        }
      }

      .price {
        font-weight: 700;
        line-height: 24px;

        .now {
          margin-right: 8px;
          font-size: 14px;
          color: rgb(240, 20, 20);
        }

        .old {
          text-decoration: line-through;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }

      .cartcontrol-wrapper {
        position: absolute;
        right: 0;
        bottom: 12px;
      }
    }
  }
}
</style>
