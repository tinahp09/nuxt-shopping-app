<template>
  <div class="container">
    <div class="section-title">
      <h2 class="mt-4">Best Selling</h2>
    </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      class="mx-auto"
      :interval="4000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="item in content" :key="item.id" class="mx-auto">
        <b-carousel-slide :img-src="`${item.image}`"> </b-carousel-slide>
      </div>
    </b-carousel>
    <!-- Start Product Area -->
    <div class="product-area section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h2>Trending Item</h2>
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
                      v-for="product in trending"
                      :key="product.id"
                      class="col-xl-3 col-lg-4 col-md-4 col-12"
                      style="
                        box-shadow: rgba(67 71 85 / 27%) 0 0 4px 0,
                          rgba(90 125 188 / 5%) 0 4px 16px 0;
                      "
                    >
                      <div class="single-product">
                        <div class="product-img">
                          <a href="product-details.html">
                            <img class="default-img" :src="`${product.image}`" />
                            <img class="hover-img" :src="`${product.image}`" />
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
                            <!-- <div class="product-action-2">
                              <NuxtLink :to="`/products/${product.id}`">More | </NuxtLink>
                            </div> -->
                            
                          </div>
                        </div>
                        <div
                          class="product-content text-center font-weight-bold"
                        >
                          <span style="font-size: 16px">{{
                            product.category
                          }}</span>

                          <div class="product-price">
                            <p class="price with-discount">{{ product.price }}$</p>
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
  </div>
</template>



<script>
export default {
  name: 'IndexPage',
  layout: 'Dashboard',
  async asyncData(context) {
    const data = await context.store.dispatch('products/bestSelling')
    const trendingItems = await context.store.dispatch(
      'products/getAllProducts'
    )
    // console.log(data)
    return { content: data, trending: trendingItems }
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
  width: 400px;
  height: 300px;
}
</style>






 <!-- 
    <no-ssr>
      <carousel>
        <div v-for="item in content" :key="item.id">
          <img :src="`${item.image}`" />
        </div>
      </carousel>
    </no-ssr> -->