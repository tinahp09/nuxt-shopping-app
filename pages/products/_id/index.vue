<template>
  <div class="singleProduct">
    <!-- Start Blog Single -->
    <section class="blog-single section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12">
            <div class="blog-single-main">
              <div class="row">
                <div class="col-12">
                  <div class="image">
                    <img :src="`${content.image}`" alt="#" />
                  </div>
                  <div class="blog-detail">
                    <h2 class="blog-title">
                      {{ content.title }}
                    </h2>
                    <div class="blog-meta">
                      <span class="author"
                        ><a href="#"><i class="fa fa-user"></i>By Admin</a
                        ><a href="#"
                          ><i class="fa fa-calendar"></i>Dec 24, 2018</a
                        ><a href="#"
                          ><i class="fa fa-comments"></i>Comment (15)</a
                        ></span
                      >
                    </div>
                    <div class="content">
                      <h5 class="my-5">
                        {{content.description}}
                      </h5>
                      <blockquote>
                        <i class="fa fa-quote-left"></i> 
                        <h6>This products price is <span style="color: #f7941d; font-size: 28px">{{content.price}}$</span> dollars</h6>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="comments">
                    <h3 class="comment-title">Comments (3)</h3>
                    <!-- Single Comment -->
                    <div class="single-comment">
                      <img src="https://via.placeholder.com/80x80" alt="#" />
                      <div class="content">
                        <h4>
                          Alisa harm <span>At 8:59 pm On Feb 28, 2018</span>
                        </h4>
                        <p>
                          Enthusiastically leverage existing premium quality
                          vectors with enterprise-wide innovation collaboration
                          Phosfluorescently leverage others enterprisee
                          Phosfluorescently leverage.
                        </p>
                        <div class="button">
                          <a href="#" class="btn"
                            ><i class="fa fa-reply" aria-hidden="true"></i
                            >Reply</a
                          >
                        </div>
                      </div>
                    </div>
                    <!-- End Single Comment -->
                    <!-- Single Comment -->
                    <div class="single-comment left">
                      <img src="https://via.placeholder.com/80x80" alt="#" />
                      <div class="content">
                        <h4>john deo <span>Feb 28, 2018 at 8:59 pm</span></h4>
                        <p>
                          Enthusiastically leverage existing premium quality
                          vectors with enterprise-wide innovation collaboration
                          Phosfluorescently leverage others enterprisee
                          Phosfluorescently leverage.
                        </p>
                        <div class="button">
                          <a href="#" class="btn"
                            ><i class="fa fa-reply" aria-hidden="true"></i
                            >Reply</a
                          >
                        </div>
                      </div>
                    </div>
                    <!-- End Single Comment -->
                    <!-- Single Comment -->
                    <div class="single-comment">
                      <img src="https://via.placeholder.com/80x80" alt="#" />
                      <div class="content">
                        <h4>megan mart <span>Feb 28, 2018 at 8:59 pm</span></h4>
                        <p>
                          Enthusiastically leverage existing premium quality
                          vectors with enterprise-wide innovation collaboration
                          Phosfluorescently leverage others enterprisee
                          Phosfluorescently leverage.
                        </p>
                        <div class="button">
                          <a href="#" class="btn"
                            ><i class="fa fa-reply" aria-hidden="true"></i
                            >Reply</a
                          >
                        </div>
                      </div>
                    </div>
                    <!-- End Single Comment -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="main-sidebar">
              <!-- Single Widget -->
              <div class="single-widget recent-post">
                <h3 class="title">Recent post</h3>
                <!-- Single Post -->
                <div v-for="item in products" :key="item.id" class="single-post">
                  <div class="image">
                    <img :src="`${item.image}`" alt="#" />
                  </div>
                  <div class="content">
                    <h5>
                      <a href="#">{{item.title}}</a>
                    </h5>
                    <ul class="comment">
                      <li>
                        <i class="fa fa-calendar" aria-hidden="true"></i>Jan 11,
                        2020
                      </li>
                      <li>
                        <i class="fa fa-commenting-o" aria-hidden="true"></i>35
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- End Single Post -->
              </div>
              <!--/ End Single Widget -->
              <!-- Single Widget -->
							<div class="single-widget newsletter">
								<h3 class="title">Newslatter</h3>
								<div class="letter-inner">
									<h4>Subscribe & get news <br> latest updates.</h4>
									<div class="form-inner">
										<input type="email" placeholder="Enter your email">
										<a href="#">Submit</a>
									</div>
								</div>
							</div>
							<!--/ End Single Widget -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ End Blog Single -->
  </div>
</template>


<script>
export default {
  layout: 'Dashboard',
  async asyncData(context) {
    const data = await context.store.dispatch('products/getSingleProduct', {
      id: context.route.params.id,
    })
    const recentProduct = await context.store.dispatch('products/getRecentProduct')
    console.log('Tina')
    console.log(recentProduct)
    return { content: data, products: recentProduct }
  },
}
</script>