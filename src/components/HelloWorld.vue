<template>
  <div>
    <Top></Top>
    <Serch></Serch>
    <Home></Home>
    <Carousel :imgList="imgList"></Carousel>
    <Details></Details>
  </div>
</template>

<script>
import Home from '../view/topPart/HomePage'
import Serch from '../view/headPart/Serch'
import Carousel from '../view/show/Carousel'
import Top from '../view/topPart/Top'
import Details from '../view/show/Details'
export default {
  name: 'HelloWorld',
  data () {
    return {
      imgList: [
        {id: 1, src: 'https://img.alicdn.com/tfs/TB18X0B4AL0gK0jSZFAXXcA9pXa-750-291.jpg_Q90.jpg'},
        {id: 2, src: 'https://img.alicdn.com/tfs/TB1q_RR44v1gK0jSZFFXXb0sXXa-750-291.jpg_Q90.jpg'}
      ]
    }
  },

  components: {
    Home,
    Serch,
    Carousel,
    Top,
    Details
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
