<template>
  <body class="js">
    <!-- Start Contact -->
    <section id="contact-us" class="contact-us section">
      <div class="container">
        <div class="contact-head">
          <div class="row">
            <div class="col-lg-8 col-12">
              <div class="form-main">
                <div class="title">
                  <h4>Get in touch</h4>
                  <h3>Write us a message</h3>
                </div>
                <form class="form" method="post" action="mail/mail.php">
                  <div class="row">
                    <div class="col-lg-6 col-12">
                      <div class="form-group">
                        <label>Your Name<span>*</span></label>
                        <input name="name" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-12">
                      <div class="form-group">
                        <label>Your Subjects<span>*</span></label>
                        <input name="subject" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-12">
                      <div class="form-group">
                        <label>Your Email<span>*</span></label>
                        <input name="email" type="email" placeholder="" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-12">
                      <div class="form-group">
                        <label>Your Phone<span>*</span></label>
                        <input name="company_name" type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group message">
                        <label>your message<span>*</span></label>
                        <textarea name="message" placeholder=""></textarea>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group button">
                        <button type="submit" class="btn">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="single-head">
                <div class="single-info">
                  <i class="fa fa-phone"></i>
                  <h4 class="title">Call us Now:</h4>
                  <ul>
                    <li>+123 456-789-1120</li>
                    <li>+522 672-452-1120</li>
                  </ul>
                </div>
                <div class="single-info">
                  <i class="fa fa-envelope-open"></i>
                  <h4 class="title">Email:</h4>
                  <ul>
                    <li>
                      <a href="mailto:info@yourwebsite.com"
                        >info@yourwebsite.com</a
                      >
                    </li>
                    <li>
                      <a href="mailto:info@yourwebsite.com"
                        >support@yourwebsite.com</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="single-info">
                  <i class="fa fa-location-arrow"></i>
                  <h4 class="title">Our Address:</h4>
                  <ul>
                    <li>
                      KA-62/1, Travel Agency, 45 Grand Central Terminal, New
                      York.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ End Contact -->

    <!-- Map Section -->
    <div class="map-section">
      <div id="myMap"></div>
    </div>
    <!--/ End Map Section -->

    <!-- Start Shop Newsletter  -->
    <section class="shop-newsletter section">
      <div class="container">
        <div class="inner-top">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-12">
              <!-- Start Newsletter Inner -->
              <div class="inner">
                <h4>Newsletter</h4>
                <p>
                  Subscribe to our newsletter and get <span>10%</span> off your
                  first purchase
                </p>
                <form
                  action="mail/mail.php"
                  method="get"
                  target="_blank"
                  class="newsletter-inner"
                >
                  <input
                    name="EMAIL"
                    placeholder="Your email address"
                    required=""
                    type="email"
                  />
                  <button class="btn">Subscribe</button>
                </form>
              </div>
              <!-- End Newsletter Inner -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Shop Newsletter -->

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
export default {
  layout: 'Dashboard',
}
</script>