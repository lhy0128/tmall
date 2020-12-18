<template>
  <div>
    <!-- <Serch></Serch> -->
    <Carousel :imgList="imgList"></Carousel>
    <Card :title="title"></Card>
    <Card :title="title"></Card>
    <hr color="red">
  </div>
</template>

<script>
import Serch from '../headPart/Serch'
import Options from './Options'
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
      title: '节日甄选'
    }
  },
  components: {
    Options,
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
