<template>
  <!-- Shopping Cart -->
  <div class="shopping-cart section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Shopping Summery -->
          <table class="table shopping-summery">
            <thead>
              <tr class="main-hading">
                <th>PRODUCT</th>
                <th>NAME</th>
                <th class="text-center">UNIT PRICE</th>
                <th class="text-center">QUANTITY</th>
                <th class="text-center">TOTAL</th>
                <th class="text-center">
                  <i class="ti-trash remove-icon"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in content" :key="item.id">
                <td class="image" data-title="No">
                  <img :src="`${item.image}`" alt="#" />
                </td>
                <td class="product-des" data-title="Description">
                  <p class="product-name"><a href="#">Women Dress</a></p>
                  <p class="product-des">
                    Maboriosam in a tonto nesciung eget distingy magndapibus.
                  </p>
                </td>
                <td class="price" data-title="Price"><span>$110.00 </span></td>
                <td class="qty" data-title="Qty">
                  <!-- Input Order -->
                  <div class="input-group">
                    <div class="button minus">
                      <button
                        type="button"
                        class="btn btn-primary btn-number"
                        @click="decrement"
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      v-model="counter"
                      type="text"
                      name="quant[1]"
                      class="input-number"
                      data-min="1"
                      data-max="100"
                      value="1"
                    />
                    <div class="button plus">
                      <button
                        type="button"
                        class="btn btn-primary btn-number"
                        @click="increment"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <!--/ End Input Order -->
                </td>
                <td class="total-amount" data-title="Total">
                  <span>$220.88</span>
                </td>
                <td class="action" data-title="Remove">
                  <a href="#"><i class="ti-trash remove-icon"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
          <!--/ End Shopping Summery -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <!-- Total Amount -->
          <div class="total-amount">
            <div class="row">
              <div class="col-lg-8 col-md-5 col-12">
                <div class="left">
                  <div class="coupon">
                    <form action="#" target="_blank">
                      <input name="Coupon" placeholder="Enter Your Coupon" />
                      <button class="btn">Apply</button>
                    </form>
                  </div>
                  <div class="checkbox">
                    <label class="checkbox-inline" for="2"
                      ><input id="2" name="news" type="checkbox" /> Shipping
                      (+10$)</label
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-7 col-12">
                <div class="right">
                  <ul>
                    <li>Cart Subtotal<span>$330.00</span></li>
                    <li>Shipping<span>Free</span></li>
                    <li>You Save<span>$20.00</span></li>
                    <li class="last">You Pay<span>$310.00</span></li>
                  </ul>
                  <div class="button5">
                    <a href="#" class="btn">Checkout</a>
                    <a href="#" class="btn">Continue shopping</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/ End Total Amount -->
        </div>
      </div>
    </div>
  </div>
  <!--/ End Shopping Cart -->
</template>
<script>
export default {
  layout:'Dashboard',
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      return this.counter++
    },
    decrement() {
      if (this.counter >= 1) {
        return this.counter--
      }
    },
  },
}
</script>