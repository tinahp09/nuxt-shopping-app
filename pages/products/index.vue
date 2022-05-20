<template>
  <div id="app">
    <h1>Hello this is index page in products</h1>
    <br />
    <h2>Seperate Numbers</h2>
    <br />
    <hr />
    <h3>{{ price | numDevider }}</h3>
    <button @click="toman">change price</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100000,
    }
  },
  methods: {
    toman() {
     this.price =this.$toman(this.price)
    },
  },
}
</script>