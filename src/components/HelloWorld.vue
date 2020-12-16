<template>
  <div>
    <Top></Top>
    <Serch></Serch>
    <Home></Home>
    <Carousel></Carousel>
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
