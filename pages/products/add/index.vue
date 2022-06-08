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
                </tr>
              </thead>
              <tbody>

                <tr v-for="item in content" :key="item.id">
                  <td class="td">
                    <!-- <img :src="`${item.image}`" alt="" /> -->
                  </td>
                  <td class="td">
                    {{ item.category }}
                  </td>
                  <td class="td">{{ item.price }}$</td>
                  <td class="total-amount" data-title="Total">
                    <span>$220.88</span>
                  </td>
                  <td class="total-amount" data-title="Total">
                    <NuxtLink to="/products/_id" style="color: blue"
                      >More</NuxtLink
                    >
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
                        <button class="btn">Apply</button>
                      </form>
                    </div>
                    <div class="checkbox">
                      
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