<template>
  <div>
    <div v-for="item in content" :key="item.id">
      <span style="color:red">Product description:</span>
      <p>{{item.description}}</p>
      <hr />
    </div>
  </div>
</template>


<script>
export default {
  async asyncData(context) {
    const data = await context.store.dispatch('products/getAllProducts')
    console.log(data)
    return { content: data }
  },
}
</script>