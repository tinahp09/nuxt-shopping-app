<template>
  <div class="container">
    <div class="section-title">
      <h2 class="my-5">Best Selling</h2>
    </div>

    <no-ssr>
      <carousel>
        <div v-for="item in content" :key="item.id">
          <img :src="`${item.image}`" />
        </div>
      </carousel>
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'Dashboard',
  async asyncData(context) {
    const data = await context.store.dispatch('products/bestSelling')
    // console.log(data)
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
img {
  width: 300px;
  height: 350px;
  padding: 20px;
}
</style>