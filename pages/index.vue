<template>
  <div class="container">
    <h2 class="text-center my-2">
      {{ $t('products') }}{{ $t('best_selling') }}
    </h2>
   <button @click="bestSellingProducts">Tina</button>
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
  methods:{
    async bestSellingProducts() {
      const products = await this.$store.dispatch('products/getAllProducts')
      console.log(products)
    }
  }
}
</script>