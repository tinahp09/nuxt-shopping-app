<template>
  <div id="app">
    <h1>Hello this is index page in products</h1>
    <br />
    <h2>Seperate Numbers</h2>
    <br />
    <hr />
    <h3>{{ price | numDevider }}</h3>
    <button @click="toman">change price</button>
    <h3>------------------</h3>
    <div v-for="(item, index) in content" :key="index" class="mx-auto">
      <h3>
        {{ item.title }}
        <br />
        {{ item.price }}
      </h3>
      <hr/>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const data = await context.store.dispatch('products/getAllproducts')
    // console.log(data)
    return { content: data }
  },
  data() {
    return {
      price: 100000,
    }
  },
  methods: {
    toman() {
      this.price = this.$toman(this.price)
    },
  },
}
</script>