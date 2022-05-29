<template>



  <body class="js">

    <!-- Preloader -->
    <Loader v-if="load"/>
    <!-- End Preloader -->

    <!-- Header -->
    <header class="header shop">
      <!-- Topbar -->
      <div class="topbar">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-12 col-12">
              <!-- Top Left -->
              <div class="top-left">
                <ul class="list-main">
                  <li><i class="ti-headphone-alt"></i> +060 (800) 801-582</li>
                  <li><i class="ti-email"></i> support@shophub.com</li>
                </ul>
              </div>
              <!--/ End Top Left -->
            </div>
            <div class="col-lg-7 col-md-12 col-12">
              <!-- Top Right -->
              <div class="right-content">
                <ul class="list-main">
                  <li><i class="ti-location-pin"></i> Store location</li>
                  <li>
                    <i class="ti-alarm-clock"></i> <a href="#">Daily deal</a>
                  </li>
                  <li><i class="ti-user"></i> <a href="#">My account</a></li>
                  <li>
                    <i class="ti-power-off"></i><a href="login.html#">Login</a>
                  </li>
                </ul>
              </div>
              <!-- End Top Right -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Topbar -->
     
      <!-- Header Inner -->
      <div class="header-inner">
        <div class="container">
          <div class="cat-nav-head">
            <div class="row">
              <div class="col-lg-3">
                <div class="all-category">
                  <h3 class="cat-heading">
                    <i class="fa fa-bars" aria-hidden="true"></i>CATEGORIES
                  </h3>
                  <!-- <ul class="main-category">
                    <li>
                      <a href="#"
                        >New Arrivals
                        <i class="fa fa-angle-right" aria-hidden="true"></i
                      ></a>
                      <ul class="sub-category">
                        <li><a href="#">accessories</a></li>
                        <li><a href="#">best selling</a></li>
                        <li><a href="#">top 100 offer</a></li>
                        <li><a href="#">sunglass</a></li>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">man’s product</a></li>
                        <li><a href="#">ladies</a></li>
                        <li><a href="#">westrn dress</a></li>
                        <li><a href="#">denim </a></li>
                      </ul>
                    </li>
                    <li class="main-mega">
                      <a href="#"
                        >best selling
                        <i class="fa fa-angle-right" aria-hidden="true"></i
                      ></a>
                      <ul class="mega-menu">
                        <li class="single-menu">
                          <a href="#" class="title-link">Shop Kid's</a>
                          <div class="image">
                            <img
                              src="https://via.placeholder.com/225x155"
                              alt="#"
                            />
                          </div>
                          <div class="inner-link">
                            <a href="#">Kids Toys</a>
                            <a href="#">Kids Travel Car</a>
                            <a href="#">Kids Color Shape</a>
                            <a href="#">Kids Tent</a>
                          </div>
                        </li>
                        <li class="single-menu">
                          <a href="#" class="title-link">Shop Men's</a>
                          <div class="image">
                            <img
                              src="https://via.placeholder.com/225x155"
                              alt="#"
                            />
                          </div>
                          <div class="inner-link">
                            <a href="#">Watch</a>
                            <a href="#">T-shirt</a>
                            <a href="#">Hoodies</a>
                            <a href="#">Formal Pant</a>
                          </div>
                        </li>
                        <li class="single-menu">
                          <a href="#" class="title-link">Shop Women's</a>
                          <div class="image">
                            <img
                              src="https://via.placeholder.com/225x155"
                              alt="#"
                            />
                          </div>
                          <div class="inner-link">
                            <a href="#">Ladies Shirt</a>
                            <a href="#">Ladies Frog</a>
                            <a href="#">Ladies Sun Glass</a>
                            <a href="#">Ladies Watch</a>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li><a href="#">accessories</a></li>
                    <li><a href="#">top 100 offer</a></li>
                    <li><a href="#">sunglass</a></li>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">man’s product</a></li>
                    <li><a href="#">ladies</a></li>
                    <li><a href="#">westrn dress</a></li>
                    <li><a href="#">denim </a></li>
                  </ul> -->
                </div>
              </div>
              <div class="col-lg-9 col-12">
                <div class="menu-area">
                  <!-- Main Menu -->
                  <nav class="navbar navbar-expand-lg">
                    <div class="navbar-collapse">
                      <div class="nav-inner">
                        <ul class="nav main-menu menu navbar-nav">
                          <li class="active"><a href="#">Home</a></li>
                          <li><a href="#">Product</a></li>
                          <li><a href="#">Service</a></li>
                          <li>
                            <a href="#"
                              >Shop<i class="ti-angle-down"></i
                              ><span class="new">New</span></a
                            >
                            <ul class="dropdown">
                              <li><a href="cart.html">Cart</a></li>
                              <li><a href="checkout.html">Checkout</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Pages</a></li>
                          <li>
                            <a href="#">Blog<i class="ti-angle-down"></i></a>
                            <ul class="dropdown">
                              <li>
                                <a href="blog-single-sidebar.html"
                                  >Blog Single Sidebar</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <!--/ End Main Menu -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/ End Header Inner -->
    </header>
    <!--/ End Header -->

 <Nuxt/>

    <!-- Start Footer Area -->
    <footer class="footer">
      <!-- Footer Top -->
      <div class="footer-top section">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer about">
                <div class="logo">
                  <a href="index.html"
                    ><img src="images/logo2.png" alt="#"
                  /></a>
                </div>
                <p class="text">
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
                  tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p class="call">
                  Got Question? Call us 24/7<span
                    ><a href="tel:123456789">+0123 456 789</a></span
                  >
                </p>
              </div>
              <!-- End Single Widget -->
            </div>
            <div class="col-lg-2 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer links">
                <h4>Information</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Faq</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </div>
              <!-- End Single Widget -->
            </div>
            <div class="col-lg-2 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer links">
                <h4>Customer Service</h4>
                <ul>
                  <li><a href="#">Payment Methods</a></li>
                  <li><a href="#">Money-back</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
              <!-- End Single Widget -->
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer social">
                <h4>Get In Tuch</h4>
                <!-- Single Widget -->
                <div class="contact">
                  <ul>
                    <li>NO. 342 - London Oxford Street.</li>
                    <li>012 United Kingdom.</li>
                    <li>info@eshop.com</li>
                    <li>+032 3456 7890</li>
                  </ul>
                </div>
                <!-- End Single Widget -->
                <ul>
                  <li>
                    <a href="#"><i class="ti-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="ti-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="ti-flickr"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="ti-instagram"></i></a>
                  </li>
                </ul>
              </div>
              <!-- End Single Widget -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Footer Top -->
      <div class="copyright">
        <div class="container">
          <div class="inner">
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="left">
                  <p>
                    Copyright © 2020
                    <a href="http://www.wpthemesgrid.com" target="_blank"
                      >Wpthemesgrid</a
                    >
                    - All Rights Reserved.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="right">
                  <img src="images/payments.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- /End Footer Area -->
  </body>
</template>

<script>
import Loader from '../components/Loader.vue'
export default {
	name:'Dashboard',
	components:{
		Loader
	},
	data() {
		return{
			load:false
		}
	}
}
</script>