<template>
  <div>
    <!-- <Serch></Serch> -->
    <Carousel :imgList="imgList"></Carousel>
    <Card :title="title1" :products="product1"></Card>
    <Card :title="title2" :products="product2"></Card>
    <hr color="red">
  </div>
</template>

<script>
// import { requseimgList } from '@/axios/api.js'
import Serch from '../headPart/Serch'
// import Options from './Options'
import Carousel from '../show/Carousel'
import Card from '../show/Card'
export default {
  name: 'Home',
  data () {
    return {
      imgList: [
        {id: 1, src: require('../../assets/banner/banner1.jpg')},
        {id: 2, src: require('../../assets/banner/banner2.jpg')},
        {id: 3, src: require('../../assets/banner/banner3.jpg')},
        {id: 4, src: require('../../assets/banner/banner4.jpg')}
      ],
      title1: '节日甄选',
      title2: '为他精选',
      product1: [
        {
          id: 1,
          name: 'PETITE STERLING',
          price: 1290,
          color: '银色',
          src: require('../../assets/clever/cle2.png')
        },
        {
          id: 2,
          name: 'PETITE MELROSE',
          price: 1290,
          color: '玫瑰金色',
          src: require('../../assets/clever/cle1.png')
        },
        {
          id: 3,
          name: 'PETITE ROSELYN',
          price: 1090,
          color: '玫瑰金色',
          src: require('../../assets/festival/fes1.png')
        },
        {
          id: 4,
          name: 'PETITE BRISTOL',
          price: 1190,
          color: '玫瑰金色',
          src: require('../../assets/clever/cle4.png')
        }
      ],
      product2: [
        {
          id: 5,
          name: 'CLASSIC SHEFFIELD',
          price: 1380,
          color: '玫瑰金色',
          src: require('../../assets/simple/1.png')
        },
        {
          id: 6,
          name: 'PETITE MELROSE',
          price: 1380,
          color: '玫瑰金色',
          src: require('../../assets/simple/2.png')
        },
        {
          id: 7,
          name: 'PETITE ROSELYN',
          price: 1690,
          color: '玫瑰金色',
          src: require('../../assets/simple/3.png')
        },
        {
          id: 8,
          name: 'PETITE BRISTOL',
          price: 1350,
          color: '玫瑰金色',
          src: require('../../assets/simple/4.png')
        }
      ]
    }
  },
  components: {
    // Options,
    Carousel,
    Card,
    Serch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

Card{
  float: left;
}
</style>
