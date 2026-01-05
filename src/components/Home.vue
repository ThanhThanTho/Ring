<template>
  <div class="home-page">
    <!-- Section 1: Hero Slider -->
    <section class="vc_section section-slider home-page-section-1">
      <div class="avo-slider style-1">
        <div class="slider-box">
          <div class="caption-box clearfix">
            <div class="slider-content">
              <p class="slider-subtitle">Welcome to</p>
              <div class="slider-hidden">
                <h3>MINELOG</h3>
              </div>
              <p class="slider-text">
                Grow your business with the best logistics company in Malaysia. Minelog offers integrated logistics services to meet your needs, from freight forwarding to warehousing, transportation and distribution.
              </p>
              <div class="btn-relative">
                <a href="/support">
                  Get Started
                  <img src="/vite.svg" alt="arrow" style="width: 24px; height: 24px; display: inline-block; margin-left: 8px;" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Search/Tracking Form -->
    <section class="vc_section home-page-section-2">
      <div class="vc_row">
        <div class="vc_col-sm-6">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <p>Track Your Shipment</p>
                </div>
              </div>
              <div class="wpb_raw_code wpb_content_element wpb_raw_html post-login">
                <div class="wpb_wrapper">
                  <div class="tracking-form">
                    <select>
                      <option>Select Service</option>
                      <option>Air Freight</option>
                      <option>Sea Freight</option>
                      <option>Road Transport</option>
                    </select>
                    <button type="button">Track</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vc_col-sm-6">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_raw_code wpb_content_element wpb_raw_html post-login">
                <div class="wpb_wrapper">
                  <div class="tracking-form">
                    <input type="text" placeholder="Enter Tracking Number" />
                    <a href="/support">Get a Quote</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Stats -->
    <section class="vc_section home-page-section-3">
      <div class="vc_row">
        <div class="vc_col-sm-6">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <span class="stat-number">60+</span>
                  <span class="stat-label">Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vc_col-sm-6">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <span class="stat-number">1000+</span>
                  <span class="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Services Grid -->
    <section class="vc_section home-page-section-4">
      <div class="vc_row">
        <div class="vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="vc_basic_grid vc_grid-container-wrapper vc_clearfix vc_grid-animation-none">
                <div class="vc_grid vc_row vc_grid-gutter-30px">
                  <div class="vc_grid-item" v-for="service in services" :key="service.id">
                    <div class="vc_grid-item-mini">
                      <div class="vc_gitem-animated-block">
                        <div class="vc_gitem-zone vc_gitem-zone-a">
                          <div class="service-image" :style="{ backgroundImage: `url(${service.image})` }"></div>
                        </div>
                        <div class="vc_gitem-zone vc_gitem-zone-b vc_gitem-is-link">
                          <div class="vc_custom_heading vc_gitem-post-data vc_gitem-post-data-source-post_title">
                            <h4>{{ service.title }}</h4>
                            <p>{{ service.description }}</p>
                          </div>
                          <a href="#" class="btn-link-text">View more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Insights/Testimonials Slider -->
    <section class="vc_section section-content vc_row-o-full-height vc_section-o-content-middle vc_section-flex home-page-section-5">
      <div class="vc_row">
        <div class="vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <h2>Latest Insights</h2>
              <div class="wpb_gallery_slides">
                <ul class="slides">
                  <li v-for="insight in insights" :key="insight.id">
                    <a href="#">
                      <img :src="insight.image" :alt="insight.title" />
                    </a>
                    <div>
                      <div class="content-box">
                        <label>{{ insight.category }}</label>
                        <h2><a href="#">{{ insight.title }}</a></h2>
                        <p>{{ insight.excerpt }}</p>
                        <a href="#" class="minelog-custom-read-link">Read More</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6: Testimonials Carousel -->
    <section class="vc_section home-page-section-6">
      <div class="vc_row">
        <div class="vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <h2>What Our Clients Say</h2>
                </div>
              </div>
              <div class="owl-carousel testimonials-carousel">
                <div class="testimonial-item" v-for="testimonial in testimonials" :key="testimonial.id">
                  <h2>{{ testimonial.number }}</h2>
                  <h2>{{ testimonial.title }}</h2>
                  <p>{{ testimonial.content }}</p>
                  <h5>{{ testimonial.name }}</h5>
                  <h6>{{ testimonial.position }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 7: Partners/Logos -->
    <section class="vc_section home-page-section-7">
      <div class="vc_row">
        <div class="vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="owl-carousel partners-carousel">
                <div class="partner-logo" v-for="partner in partners" :key="partner.id">
                  <img :src="partner.logo" :alt="partner.name" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 8: Contact Form -->
    <section class="vc_section home-page-section-8">
      <div class="vc_row">
        <div class="vc_col-sm-6">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="contact-image"></div>
            </div>
          </div>
        </div>
        <div class="vc_col-sm-6">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <h2>Get In Touch</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              <form class="contact-form">
                <div class="form-group">
                  <label>Name <em>*</em></label>
                  <input type="text" required />
                </div>
                <div class="form-group">
                  <label>Email <em>*</em></label>
                  <input type="email" required />
                </div>
                <div class="form-group">
                  <label>Phone</label>
                  <input type="tel" />
                </div>
                <div class="form-group">
                  <label>Message <em>*</em></label>
                  <textarea required></textarea>
                </div>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  { id: 1, title: 'Cold Chain Logistics', description: 'Temperature-controlled logistics solutions', image: '/vite.svg' },
  { id: 2, title: 'Air Freight', description: 'Fast and reliable air cargo services', image: '/vite.svg' },
  { id: 3, title: 'Sea Freight', description: 'Cost-effective ocean freight solutions', image: '/vite.svg' },
  { id: 4, title: 'Warehouse', description: 'Secure warehousing facilities', image: '/vite.svg' },
  { id: 5, title: 'Haulage & Transport', description: 'Comprehensive road transport services', image: '/vite.svg' },
  { id: 6, title: 'Customs Clearance', description: 'Expert customs clearance services', image: '/vite.svg' }
])

const insights = ref([
  { id: 1, category: 'Logistics', title: 'Latest Trends in Supply Chain', excerpt: 'Exploring the latest trends and innovations...', image: '/vite.svg' },
  { id: 2, category: 'Industry', title: 'Future of Logistics', excerpt: 'How technology is transforming logistics...', image: '/vite.svg' }
])

const testimonials = ref([
  { id: 1, number: '01', title: 'Excellent Service', content: 'MINELOG provided exceptional service throughout our partnership.', name: 'John Doe', position: 'CEO, Company Name' },
  { id: 2, number: '02', title: 'Reliable Partner', content: 'We trust MINELOG for all our logistics needs.', name: 'Jane Smith', position: 'Operations Manager' }
])

const partners = ref([
  { id: 1, name: 'Partner 1', logo: '/vite.svg' },
  { id: 2, name: 'Partner 2', logo: '/vite.svg' },
  { id: 3, name: 'Partner 3', logo: '/vite.svg' }
])
</script>

<style scoped>
/* Import CSS từ HTML structure */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

.home-page {
  width: 100%;
}

/* Section 1: Hero */
.home-page-section-1 {
  background: linear-gradient(135deg, #026937 0%, #014625 100%);
  min-height: 550px;
  position: relative;
  padding: 0;
}

.home-page-section-1 .avo-slider {
  height: 550px;
}

.home-page-section-1 .slider-box {
  padding: 0;
  margin: 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 150px 80px 50px;
  height: 100%;
  display: flex;
  align-items: center;
}

.home-page-section-1 .caption-box {
  height: 261px;
  padding: 0px !important;
}

.home-page-section-1 .slider-subtitle {
  font-family: "Poppins" !important;
  font-size: 50px;
  font-weight: 400;
  line-height: 70px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: unset;
  color: #fff;
  height: 70px;
  margin: 0;
}

.home-page-section-1 .slider-hidden h3 {
  font-family: "Poppins" !important;
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  margin: 8px 0 10px 0;
  height: 70px;
}

.home-page-section-1 .slider-text {
  font-family: "Poppins" !important;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  margin-left: 0px;
  width: 550px;
  max-width: 100%;
  padding-top: 20px;
  padding-bottom: 20px !important;
  margin: 0px !important;
}

.home-page-section-1 .btn-relative a {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  color: #FBFBFB;
  background: unset;
  border: unset;
  padding: 0px;
  text-decoration: none;
}

.home-page-section-1 .btn-relative a:hover {
  background: unset;
  color: #fff;
}

/* Section 2: Tracking */
.home-page-section-2 {
  background: linear-gradient(135deg, #026937 0%, #014625 100%);
  min-height: 245px;
  padding: 40px 0;
  display: flex;
  align-items: center;
}

.home-page-section-2 .vc_row {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
}

.home-page-section-2 .vc_column-inner {
  height: 100%;
  display: flex;
  align-items: center;
}

.home-page-section-2 .vc_column-inner .wpb_wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
}

.home-page-section-2 p {
  color: #FFFFFF;
  font-family: "Poppins";
  font-size: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;
  font-weight: 400;
}

.tracking-form {
  border: 1px solid #FFFFFF;
  border-radius: 12px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  background: transparent;
  transition: all 0.3s;
  overflow: hidden;
}

.tracking-form:hover {
  background-color: #FF9900;
  border-color: #FF9900;
}

.tracking-form select,
.tracking-form input[type="text"] {
  flex: 1;
  height: 60px;
  background: #FFFFFF;
  border: none;
  border-radius: 8px 0px 0px 8px;
  padding: 0 15px;
  font-size: 16px;
  font-family: 'Poppins';
  color: #333;
  outline: none;
}

.tracking-form select {
  cursor: pointer;
}

.tracking-form input[type="text"]::placeholder {
  color: #999;
}

.tracking-form button {
  height: 60px;
  padding: 0 30px;
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  background: transparent;
  color: #FFFFFF !important;
  border: none;
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;
  white-space: nowrap;
}

.tracking-form a {
  height: 60px;
  padding: 0 30px;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 60px;
  color: #FFFFFF;
  text-decoration: none;
  display: block;
  white-space: nowrap;
}

/* Section 3: Stats */
.home-page-section-3 {
  padding: 60px 25px;
  background: #fff;
}

.home-page-section-3 .vc_row {
  max-width: 1200px;
  margin: 0 auto;
}

.home-page-section-3 .wpb_wrapper {
  text-align: center;
}

.home-page-section-3 .stat-number {
  font-family: "Poppins";
  font-size: 60px;
  font-weight: 600;
  line-height: 84px;
  letter-spacing: 0em;
  text-align: center;
  color: #026937;
  display: block;
  margin-bottom: 10px;
}

.home-page-section-3 .stat-label {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  display: block;
  color: #697F75;
  margin-left: 0;
}

/* Section 4: Services */
.home-page-section-4 {
  padding: 80px 70px;
  background: #fff;
}

.home-page-section-4 .vc_row {
  max-width: 1200px;
  margin: 0 auto;
}

.home-page-section-4 .vc_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.home-page-section-4 .vc_grid-item {
  margin-bottom: 0;
}

.vc_gitem-animated-block {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s, box-shadow 0.3s;
}

.vc_gitem-animated-block:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.service-image {
  height: 324px;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #f0f0f0;
}

.service-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.65) 100%);
}

.vc_gitem-zone-b {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  color: #fff;
  transition: all 0.3s;
}

.vc_gitem-animated-block:hover .vc_gitem-zone-b {
  bottom: 0;
}

.vc_gitem-zone-b h4 {
  color: #FBFBFB !important;
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 10px 0;
}

.vc_gitem-zone-b p {
  color: #FBFBFB !important;
  font-family: 'Poppins';
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
}

.btn-link-text {
  color: #FF9900;
  text-decoration: none;
  font-weight: 600;
  margin-top: 10px;
  display: inline-block;
  transition: color 0.3s;
}

.btn-link-text:hover {
  color: #fff;
}

/* Section 5: Insights */
.home-page-section-5 {
  background-color: #014625;
  min-height: 820px;
  padding: 80px 70px 60px;
}

.home-page-section-5 .vc_row {
  max-width: 1200px;
  margin: 0 auto;
}

.home-page-section-5 h2 {
  color: #FFF;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 140%;
  margin-bottom: 40px;
}

.home-page-section-5 .slides {
  list-style: none;
  padding: 0;
  margin: 0;
}

.home-page-section-5 .slides li {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}

.home-page-section-5 .slides img {
  width: 50%;
  height: 470px;
  object-fit: cover;
}

.content-box {
  width: 50%;
  padding: 71px 20px 20px;
}

.content-box label {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #0D100F;
}

.content-box h2 a {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 140%;
  color: #0D100F;
  text-decoration: none;
}

.content-box p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #4F5F58;
  margin-top: 12px;
}

.minelog-custom-read-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  width: 147px;
  height: 40px;
  background: #FF9900;
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #FFFFFF;
  margin-top: 40px;
  text-decoration: none;
}

/* Section 6: Testimonials */
.home-page-section-6 {
  padding: 89px 70px 100px;
  background-color: #E5E9E7;
}

.home-page-section-6 .vc_row {
  max-width: 1200px;
  margin: 0 auto;
}

.home-page-section-6 h2 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 140%;
  color: #026937;
  margin-bottom: 40px;
  text-align: center;
}

.testimonials-carousel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.testimonial-item {
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 8px rgb(0 0 0 / 12%);
  padding: 40px 30px;
  min-height: 550px;
}

.testimonial-item h2:first-child {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 140%;
  color: #026937;
  margin: 0 0 20px 0;
}

.testimonial-item h2:nth-child(2) {
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  color: #026937;
  min-height: 102px;
  margin: 0 0 36px 0;
}

.testimonial-item p {
  padding: 36px 0px;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  min-height: 250px;
  color: #0D100F;
  margin: 0;
}

.testimonial-item h5 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #0D100F;
  margin: 0;
}

.testimonial-item h6 {
  font-weight: 300 !important;
  font-family: 'Poppins';
  font-style: normal;
  font-size: 16px;
  line-height: 140%;
  color: #0D100F;
  min-height: 50px;
  margin: 0;
}

/* Section 7: Partners */
.home-page-section-7 {
  padding: 31px 35px 31px 50px;
  background: #fff;
}

.partners-carousel {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}

.partner-logo img {
  height: 140px;
  width: auto;
  object-fit: contain;
}

/* Section 8: Contact */
.home-page-section-8 {
  min-height: 650px;
}

.home-page-section-8 .vc_row {
  display: flex;
  height: 100%;
  min-height: 650px;
}

.home-page-section-8 .vc_col-sm-6:first-child .vc_column-inner {
  padding: 0;
  height: 650px;
  min-height: 650px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f0f0f0;
}

.home-page-section-8 .vc_col-sm-6:nth-child(2) {
  background-color: #026937;
  padding: 60px 80px;
  min-height: 650px;
  display: flex;
  align-items: center;
}

.home-page-section-8 .vc_col-sm-6:nth-child(2) .vc_column-inner {
  width: 100%;
}

.home-page-section-8 h2 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 140%;
  color: #FFFFFF;
  margin: 0 0 20px 0;
}

.home-page-section-8 p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #E5E9E7;
  margin: 0 0 30px 0;
}

.contact-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  color: #E5E9E7 !important;
  font-family: 'Poppins' !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 14px !important;
  line-height: 140% !important;
  margin-bottom: 5px !important;
  display: block;
}

.form-group label em {
  color: #F1B24A;
  font-size: 14px;
  font-style: normal;
}

.form-group input,
.form-group textarea {
  width: 100% !important;
  margin: 0px !important;
  max-width: 100% !important;
  height: 49px !important;
  border: 1px solid #CAD3CF;
  border-radius: 8px;
  padding: 10px;
  font-family: 'Poppins';
  font-size: 16px;
}

.form-group textarea {
  height: 110px !important;
  resize: vertical;
}

.contact-form input[type="submit"] {
  width: 30%;
  margin: 40px auto 0 !important;
  display: block;
  background: #FF9900 !important;
  border-radius: 8px;
  border: unset;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
  height: 60px !important;
}

.contact-form input[type="submit"]:hover {
  background: #e68900 !important;
}

/* Responsive */
@media (min-width: 601px) and (max-width: 1005px) {
  .home-page-section-1 .slider-box {
    margin-left: 40px !important;
  }
}

@media (min-width: 601px) and (max-width: 1005px) {
  .home-page-section-1 .slider-box {
    padding: 120px 40px 40px;
  }
}

@media only screen and (max-width: 600px) {
  .home-page-section-1 {
    min-height: 450px;
  }

  .home-page-section-1 .slider-box {
    padding: 100px 20px 40px !important;
  }

  .home-page-section-1 .slider-subtitle,
  .home-page-section-1 .slider-hidden h3 {
    font-size: 34px !important;
    line-height: 50px !important;
  }

  .home-page-section-1 .slider-text {
    font-size: 16px !important;
    max-width: 100% !important;
    width: 100% !important;
  }

  .home-page-section-2 {
    min-height: auto !important;
    padding: 30px 0 !important;
  }

  .home-page-section-2 .vc_row {
    padding: 0 16px;
  }

  .home-page-section-2 .vc_col-sm-6 {
    margin-bottom: 20px;
  }

  .home-page-section-2 .tracking-form {
    flex-direction: column;
    border-radius: 8px;
  }

  .home-page-section-2 .tracking-form select,
  .home-page-section-2 .tracking-form input[type="text"] {
    height: 50px !important;
    font-size: 14px !important;
    width: 100% !important;
    border-radius: 8px 8px 0 0;
    border-right: none;
  }

  .home-page-section-2 .tracking-form button,
  .home-page-section-2 .tracking-form a {
    height: 50px !important;
    font-size: 16px !important;
    width: 100% !important;
    border-radius: 0 0 8px 8px;
    line-height: 50px;
  }

  .home-page-section-3 {
    padding: 40px 16px;
  }

  .home-page-section-3 .stat-number {
    font-size: 40px;
    line-height: 50px;
  }

  .home-page-section-4 {
    padding: 40px 16px !important;
  }

  .home-page-section-5 {
    padding: 40px 16px !important;
    min-height: auto !important;
  }

  .home-page-section-6 {
    padding: 40px 16px 60px !important;
  }

  .home-page-section-8 {
    height: unset !important;
  }

  .home-page-section-8 .vc_col-sm-6:first-child .vc_column-inner {
    height: 350px !important;
  }

  .home-page-section-8 .vc_col-sm-6:nth-child(2) {
    padding: 40px 16px !important;
    height: unset !important;
  }
}
</style>
