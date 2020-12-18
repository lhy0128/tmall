<template>
  <div>
    <!-- <Serch></Serch> -->
    <Carousel :imgList="imgList"></Carousel>

    <Details></Details>
    <hr color="red">
  </div>
</template>

<script>
import Serch from '../headPart/Serch'
import Options from './Options'
import Carousel from '../show/Carousel'
import Details from '../show/Details'
export default {
  name: 'Home',
  data () {
    return {
      imgList: [
        {id: 1, src: '../../assets/banner/banner1.jpg'},
        {id: 2, src: '../../assets/banner/banner2.jpg'},
        {id: 3, src: '../../assets/banner/banner3.jpg'},
        {id: 4, src: '../../assets/banner/banner4.jpg'}
      ]
    }
  },
  components: {
    Options,
    Carousel,
    Details,
    Serch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
