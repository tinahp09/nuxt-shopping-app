<template>
  <!-- Start Product Area -->
  <div class="product-area section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Products</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="product-info">
            <div id="myTabContent" class="tab-content">
              <!-- Start Single Tab -->
              <div id="man" class="tab-pane fade show active" role="tabpanel">
                <div class="tab-single">
                  <div class="row">
                    <div
                      v-for="item in content"
                      :key="item.id"
                      class="col-xl-3 col-lg-4 col-md-4 col-12"
                      style="
                        box-shadow: rgba(67 71 85 / 27%) 0 0 4px 0,
                          rgba(90 125 188 / 5%) 0 4px 16px 0;
                      "
                    >
                      <div class="single-product">
                        <div class="product-img">
                          <a href="product-details.html">
                            <img class="default-img" :src="`${item.image}`" />
                            <img class="hover-img" :src="`${item.image}`" />
                          </a>
                          <div class="button-head">
                            <div class="product-action">
                              <a
                                data-toggle="modal"
                                data-target="#exampleModal"
                                title="Quick View"
                                href="#"
                                ><i class="ti-eye"></i
                                ><span>Quick Shop</span></a
                              >
                              <a title="Wishlist" href="#"
                                ><i class="ti-heart"></i
                                ><span>Add to Wishlist</span></a
                              >
                              <a title="Compare" href="#"
                                ><i class="ti-bar-chart-alt"></i
                                ><span>Add to Compare</span></a
                              >
                            </div>
                            <div class="product-action-2">
                              <NuxtLink :to="`/products/${item.id}`"
                                >More |
                              </NuxtLink>
                              <a @click.prevent="addProduct(item)"
                                >Add to cart</a
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          class="product-content text-center font-weight-bold"
                        >
                          <span style="font-size: 16px">{{
                            item.category
                          }}</span>

                          <div class="product-price">
                            <p class="price with-discount">{{ item.price }}$</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--/ End Single Tab -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Product Area -->
</template>

<script>
export default {
  name: 'Cart',
  layout: 'Dashboard',
  async asyncData(context) {
    const data = await context.store.dispatch('products/getAllProducts')
    // console.log(data)

    return { content: data }
  },
  data() {
    return {
      cartArray: [],
    }
  },
  computed: {
    // ...mapState([ 'productsList' ]),
  },
  methods: {
    async addProduct(product) {
      const cartInfo = (await this.$cookies.get('cartInfo')) ?? []
      console.log('product: ', product)
      console.log(cartInfo)
      const findIndexOfItem = await cartInfo.findIndex(
        (item) => item.productId === product.id
      )
      console.log('find index: ', findIndexOfItem)

      if (findIndexOfItem >= 0) {
        cartInfo[findIndexOfItem].quantity =
          cartInfo[findIndexOfItem].quantity + 1
      } else {
        const data = {
          productId: product.id,
          quantity: 1,
          image: product.image,
          price: product.price,
          title: product.title,
          category: product.category
        }
        cartInfo.push(data)
      }

      this.$cookies.set('cartInfo', cartInfo)
      await this.$store.dispatch('products/addToCart', cartInfo)
      this.$swal('added to cart')
    },
  },
}
</script>
<style scoped>
.product-img img {
  height: 250px !important;
  width: 300px !important;
  padding: 20px;
}
</style>