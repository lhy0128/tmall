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
        {id: 1, src: 'https://img.alicdn.com/tfs/TB18X0B4AL0gK0jSZFAXXcA9pXa-750-291.jpg_Q90.jpg'},
        {id: 2, src: 'https://img.alicdn.com/tfs/TB1q_RR44v1gK0jSZFFXXb0sXXa-750-291.jpg_Q90.jpg'}
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
