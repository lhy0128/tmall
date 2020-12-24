<template>
  <div>
    <div class="all">
      <div class="back">
        <img src="../../assets/more.jpg" style="width:100%;height:100%">
        <div class="center">
          <h1>曜目流光 叠戴新趣</h1>
          <h3>打造经典隽永灵感组合</h3>
        </div>
      </div>
      <div class="right">
        <h2>年度心意 此刻臻献</h2>
        <h4>活动时间：12月18日-1月3日</h4>
        <h4>* 全场满1000减100，满1790减250，满2190减350</h4>
        <h4>* 项链、戒指、耳环赠星愿礼盒；手表、手镯赠红丝带礼盒；购ICONIC系列及套装赠香氛蜡烛</h4>
        <h4>* 指定戒指/手表/手镯享免费刻印，详询客服</h4>
        <h4>* 12期花呗免息</h4>
        <h4>温馨提示：赠品数量有限，加购可查看赠品；结算时输入折扣码享满减优惠</h4>
      </div>
      <Card :title="title1" :products="product1"></Card>
      <Card :title="title2" :products="product2"></Card>
      <br>
    </div>
  </div>
</template>

<script>
import Card from '../show/Card'
// import store from '../store/index'
export default {
  name: 'more',
  data () {
    return {
      title1: '戒指',
      title2: '手镯',
      product1: [
        {
          id: 9,
          name: 'ELAN RING',
          price: 490,
          color: '玫瑰金色',
          src: require('../../assets/ring/1.png')
        },
        {
          id: 10,
          name: 'ELAN DUAL RING',
          price: 590,
          color: '玫瑰金色',
          src: require('../../assets/ring/2.png')
        },
        {
          id: 11,
          name: 'ELAN TRIAD RING',
          price: 690,
          color: '玫瑰金色',
          src: require('../../assets/ring/3.png')
        },
        {
          id: 12,
          name: 'CLASSIC RING',
          price: 390,
          color: '玫瑰金色',
          src: require('../../assets/ring/4.png')
        },
        {
          id: 13,
          name: 'CLASSIC RING SATIN WHITE',
          price: 490,
          color: '玫瑰金色/绸缎白',
          src: require('../../assets/ring/5.png')
        },
        {
          id: 14,
          name: 'CLASSIC RING SATIN WHITEL',
          price: 490,
          color: '银色/绸缎白',
          src: require('../../assets/ring/6.png')
        },
        {
          id: 15,
          name: 'CLASSIC RING DUSTY ROSE',
          price: 490,
          color: '玫瑰金色/蔷薇粉',
          src: require('../../assets/ring/7.png')
        },
        {
          id: 16,
          name: 'CLASSIC RING DESERT SAND',
          price: 490,
          color: '玫瑰金色/晨雾灰',
          src: require('../../assets/ring/8.png')
        }
      ],
      product2: [
        {
          id: 17,
          name: 'ELAN BRACELET',
          price: 690,
          color: '玫瑰金色',
          src: require('../../assets/hand/1.png')
        },
        {
          id: 18,
          name: 'CLASSIC BRACELET',
          price: 590,
          color: '玫瑰金色',
          src: require('../../assets/hand/2.png')
        },
        {
          id: 19,
          name: 'CLASSIC SLIM BRACELET SATIN WHITE',
          price: 690,
          color: '玫瑰金色/绸缎白',
          src: require('../../assets/hand/3.png')
        },
        {
          id: 20,
          name: 'CLASSIC BRACELET CHERRY BLUSH',
          price: 690,
          color: '玫瑰金色',
          src: require('../../assets/hand/4.png')
        }
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all{
  overflow-x: hidden;
  width: 100%;
}
.right{
 /* //margin: 0 auto; */
 text-align: center;
 font-family: 宋体;
}
.back{
  background: url('');
  /* width: 100%; */
  height: 500px;
  z-index: 1;
}
.center{
  position:absolute;
  color: white;
  top: 250px;
  left: 16%;
  /* width: 100%; */
  z-index: 2;
}
</style>
