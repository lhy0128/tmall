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
import { requseimgList } from '@/axios/api.js'
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
  created () {
    this.getImgList()
  },
  methods: {
    getImgList () {
      requseimgList().then(res => {
        // console.log(res)
        var imgList = JSON.parse(res.request.responseText)
        let imgLists = imgList.data
        // console.log(imgLists)
        if (res.data.code === 0) {
          alert('图片加载失败')
        } else {
          for (let index in imgLists) {
            this.imgList[index] = imgLists[index]
            // console.log(this.imgList[index].src)
          }
        }
      })
      console.log(this.imgList)
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
