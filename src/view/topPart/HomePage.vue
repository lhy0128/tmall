<template>
  <div>
    <!-- <Serch></Serch> -->
    <Carousel :imgList="imgList" :fesimg="fesimg"></Carousel>
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
        // {id: 1, src: require('../../assets/banner/banner1.jpg')},
        // {id: 2, src: require('../../assets/banner/banner2.jpg')},
        // {id: 3, src: require('../../assets/banner/banner3.jpg')},
        // {id: 4, src: require('../../assets/banner/banner4.jpg')}
      ],
      title: '节日甄选',
      fesimg: [
        {id: 1, src: require('../../assets/festival/fes1.png')},
        {id: 2, src: require('../../assets/festival/fes2.png')},
        {id: 3, src: require('../../assets/festival/fes3.png')},
        {id: 4, src: require('../../assets/festival/fes4.png')}
      ]
    }
  },
  methods: {
    getImgList () {
      alert('111')
      this.$indicator.open({
        text: '加载中'
      })
      alert('jiazai')
      this.$http.get('imglist').then(res => {
        this.$indicator.close()
        if (res.data.code === 0) {
          this.$toast('加载轮播图失败')
        } else {
          this.imgList = res.data.data
        }
      })
    }
  },
  created () {
    alert('开始执行')
    this.getImgList()
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
