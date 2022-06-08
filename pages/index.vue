<template>
  <div class="container">
    <h2 class="text-center mt-4" style="color: #f7941d">
      Best Selling Products
    </h2>
    <div class="mx-auto" style="width: 50%; height: auto">
      <b-carousel
        id="carousel"
        v-model="slide"
        :interval="35000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <div v-for="item in content" :key="item.id">
          <b-carousel-slide
            :img-src="`${item.image}`"
          ></b-carousel-slide>
        </div>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'Dashboard',
  async asyncData(context) {
    const data = await context.store.dispatch('products/getAllProducts')
    console.log(data)
    return { content: data }
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>
<style scoped>
#carousel {
  margin: 0 auto;
}
</style>