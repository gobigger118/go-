export default {
  //计算总件数
  totleNum(state){
      //reduce遍历   要显示每一类产品总数的和
      //遍历 state.cartFoots 拿到cartFoods[0]count  可用map--或foreach-
      let totleCount = state.cartFoods.reduce((totle,curValue) => {
          return totle + curValue.count
      },0)
      return totleCount
  },
  //计算总价格
  totlePrice(state) {
      return state.cartFoods.reduce((totle,curValue) => totle + curValue.price*curValue.count,0)
  }
}