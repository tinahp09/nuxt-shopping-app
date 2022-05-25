<template>
  <div>
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
              
                  <!-- <tr v-for="item in content" :key="item.id">
                    <td class="image" data-title="No">
                      <img src="https://via.placeholder.com/100x100" alt="#" />
                    </td>
                    <td class="product-des" data-title="Description">
                      {{item.price}}
                    </td>
                    <td class="price" data-title="Price">
                      <span>$110.00 </span>
                    </td>
                    <td class="qty" data-title="Qty">
                    
                      <div class="input-group">
                        <div class="button minus">
                          <button
                            type="button"
                            class="btn btn-primary btn-number"
                            disabled="disabled"
                            data-type="minus"
                            data-field="quant[1]"
                          >
                            <i class="ti-minus"></i>
                          </button>
                        </div>
                        <input
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
                            data-type="plus"
                            data-field="quant[1]"
                          >
                            <i class="ti-plus"></i>
                          </button>
                        </div>
                      </div>
                     
                    </td>
                    <td class="total-amount" data-title="Total">
                      <span>$220.88</span>
                    </td>
                    <td class="action" data-title="Remove">
                      <a href="#"><i class="ti-trash remove-icon"></i></a>
                    </td>
                  </tr> -->





              <tr v-for="(index,item) in content" :key="index">
                  <td class="price">
                      {{item.price}}
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
                        ><input name="news" id="2" type="checkbox" /> Shipping
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
  </div>
</template>

<script>
export default {
  name: 'Cart',
  layout: 'Dashboard',
  async asyncData(context) {
    const data = await context.store.dispatch('products/getAllProducts')
    console.log(data)
    return { content: data }
  },
}
</script>