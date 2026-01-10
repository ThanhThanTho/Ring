<template>
  <div class="home-page">
    <!-- Section 1: Hero (ảnh slider + chữ đổi riêng) -->
    <section class="vc_section section-slider home-page-section-1">
      <div
        class="hero-slider"
        @mousedown="onHeroPointerDown"
        @mouseup="onHeroPointerUp"
        @mouseleave="onHeroPointerLeave"
        @touchstart.passive="onHeroPointerDown"
        @touchend.passive="onHeroPointerUp"
      >
        <transition name="hero-image-fade">
          <div
            class="hero-image-layer"
            :key="heroImageIndex"
            :style="{ backgroundImage: `url(${heroImages[heroImageIndex]})` }"
          ></div>
        </transition>
        <div class="hero-overlay">
          <div class="slider-box">
            <div class="caption-box clearfix">
              <div class="slider-content">
                <h3 class="hero-heading-prefix">All-in-one logistics for</h3>
                <transition name="hero-text-fade" mode="out-in">
                  <h2
                    class="hero-heading-main"
                    :key="heroWordIndex"
                  >
                    {{ heroWords[heroWordIndex] }}
                  </h2>
                </transition>
                <p class="slider-text">
                  Minelog is a One-Stop Total Logistics Solution Provider, focused on customer
                  needs.
                </p>
                <div class="btn-relative">
                  <router-link to="/support">
                    Get Started
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- Dots hiển thị index slide hiện tại -->
          <div class="hero-slider-controls">
            <div class="hero-dots">
              <button
                v-for="(image, index) in heroImages"
                :key="index"
                type="button"
                class="dot"
                :class="{ active: index === heroImageIndex }"
                @click="onHeroDotClick(index)"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Services & Solutions -->
    <section class="vc_section home-page-section-4">
      <div class="vc_row wpb_row vc_row-fluid">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <h2>Services &amp; Solutions</h2>
                  <p>Our comprehensive logistics services and solutions will streamline your operations,
                    maximize efficiency, and drive business growth.</p>
                </div>
              </div>

              <div class="vc_grid-container-wrapper vc_clearfix">
                <div class="vc_grid vc_row vc_grid-gutter-30px">
                  <!-- Hàng 1: 3 services -->
                  <div class="vc_grid-item vc_col-sm-4" v-for="service in services.slice(0, 3)" :key="service.id">
                    <div class="vc_grid-item-mini">
                      <div class="vc_gitem-animated-block">
                        <div class="vc_gitem-zone vc_gitem-zone-a">
                          <div class="service-image" :style="{ backgroundImage: `url(${service.image})` }"></div>
                        </div>
                        <div class="vc_gitem-zone vc_gitem-zone-b">
                          <div class="vc_custom_heading vc_gitem-post-data">
                            <h4>{{ service.title }}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Hàng 2: 2 services căn giữa -->
                <div class="vc_grid vc_row vc_grid-gutter-30px vc_grid-row-2">
                  <div class="vc_grid-item vc_col-sm-4" v-for="service in services.slice(3, 5)" :key="service.id">
                    <div class="vc_grid-item-mini">
                      <div class="vc_gitem-animated-block">
                        <div class="vc_gitem-zone vc_gitem-zone-a">
                          <div class="service-image" :style="{ backgroundImage: `url(${service.image})` }"></div>
                        </div>
                        <div class="vc_gitem-zone vc_gitem-zone-b">
                          <div class="vc_custom_heading vc_gitem-post-data">
                            <h4>{{ service.title }}</h4>
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
      </div>
    </section>

    <!-- Section 7: Associations & Partners -->
    <section class="vc_section home-page-section-7">
      <div class="container">
        <div class="wsite-section-elements">
          <!-- Associations -->
          <h2 class="wsite-content-title">
            <a href="#">We proudly represent prestigious logistics associations</a>
          </h2>
          
          <div class="wsite-multicol">
            <div class="wsite-multicol-table-wrap">
              <div class="associations-logos">
                <div 
                  v-for="(logo, index) in associationsLogos" 
                  :key="index"
                  class="logo-item"
                >
                  <a :href="logo.link || '#'">
                    <img :src="logo.image" :alt="logo.alt || 'Logo'" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="wsite-spacer"></div>

          <!-- Partners -->
          <h2 class="wsite-content-title">
            We earned trust from our strategic partners
          </h2>

          <div class="wsite-spacer-small"></div>

          <div class="wsite-multicol">
            <div class="wsite-multicol-table-wrap">
              <div class="partners-logos">
                <div 
                  v-for="(logo, index) in partnersLogos" 
                  :key="index"
                  class="logo-item"
                >
                  <a :href="logo.link || '#'">
                    <img :src="logo.image" :alt="logo.alt || 'Logo'" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="wsite-spacer-hr"></div>
          <hr class="styled-hr" />
          <div class="wsite-spacer-hr"></div>

          <div class="wsite-multicol">
            <div class="wsite-multicol-table-wrap">
              <div class="partners-logos">
                <div 
                  v-for="(logo, index) in partnersLogosRow2" 
                  :key="index"
                  class="logo-item"
                >
                  <a :href="logo.link || '#'">
                    <img :src="logo.image" :alt="logo.alt || 'Logo'" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Markets: Thị trường -->
    <section class="vc_section home-page-section-markets">
      <div class="container">
        <div class="markets-content">
          <h2 class="markets-heading">Thị trường</h2>
          <p class="markets-description">
            Real Logistics tự hào làm việc với các công ty lớn trên khắp Châu Á - Thái Bình Dương, Châu Âu, Bắc Mỹ và nhiều nơi khác. Chúng tôi vận chuyển hàng hóa đến hơn 120 quốc gia và hơn 300 địa điểm, giúp kết nối các thị trường toàn cầu và phát triển công ty nhờ vào dịch vụ logistics đáng tin cậy và hiệu quả.
          </p>
          
          <div class="markets-map-container">
            <!-- Map image -->
            <div class="markets-map-image">
              <img 
                src="https://reallogistics.vn/_ipx/f_webp/images/home/home-market-desktop.webp" 
                alt="markets map" 
                loading="lazy"
                class="map-img"
              />
            </div>
            
            <!-- SVG lines overlay -->
            <div class="markets-map-lines">
              <svg width="269" height="145" viewBox="0 0 269 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M268 144.332C256 126.832 106 -16.168 0.5 2.832" stroke="#EE921D" stroke-width="2" stroke-dasharray="3 3"></path>
              </svg>
              <svg width="264" height="34" viewBox="0 0 264 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M263 7.33301C247 -4.66707 52 2.83317 0.5 32.8332" stroke="#EE921D" stroke-width="2" stroke-dasharray="3 3"></path>
              </svg>
              <svg width="23" height="64" viewBox="0 0 23 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 63.3335C17.5 44.8336 -20.5 -1.66651 18.5 1.83375" stroke="#EE921D" stroke-width="2" stroke-dasharray="3 3"></path>
              </svg>
              <svg width="464" height="190" viewBox="0 0 464 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 188.833C55.5 24.333 277 -23.1669 463.5 12.3333" stroke="#EE921D" stroke-width="4" stroke-dasharray="8 8"></path>
              </svg>
              <svg width="625" height="120" viewBox="0 0 625 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M623.5 118.834C603 84.8341 195 -57.6661 0.5 28.3337" stroke="#EE921D" stroke-width="2" stroke-dasharray="3 3"></path>
              </svg>
              <svg width="90" height="120" viewBox="0 0 90 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M85.5003 119.334C99.5002 93.3342 55.9999 3.83398 1 1.83398" stroke="#EE921D" stroke-width="2" stroke-dasharray="3 3"></path>
              </svg>
              <svg width="471" height="127" viewBox="0 0 471 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 124.832C172 -66.3342 353 19.3316 470 39.3321" stroke="#EE921D" stroke-width="4" stroke-dasharray="8 8"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Services & Solutions - chỉ 5 services
const services = ref([
  { id: 1, title: 'Sea Freight', image: '/images/sea-freight.png' },
  { id: 2, title: 'Air Freight', image: '/images/air-freight.png' },
  { id: 3, title: 'Land Freight', image: '/images/land-freight.jpg' },
  { id: 4, title: 'Custom Clearance', image: '/images/customer-clearance.jpg' },
  { id: 5, title: 'Warehouse', image: '/images/warehouse.png' }
])

// Hero: 5 ảnh slide + chữ thay đổi riêng (chữ nằm lớp trên ảnh)
const heroImages = ref([
  '/images/home-slider-1.webp',
  '/images/home-slider-2.jpg',
  '/images/home-slider-1.webp',
  '/images/home-slider-2.jpg',
  '/images/home-slider-1.webp'
])

const heroWords = ref([
  'FMCG.',
  'rubber gloves.',
  'industrial products.',
  'auto parts.',
  'household products.',
  'renewable energy products.',
  'commodity.'
])
const heroWordIndex = ref(0)
const HERO_TEXT_INTERVAL = 3000
let heroTextIntervalId

const heroImageIndex = ref(0)
const HERO_IMAGE_INTERVAL = 6000
let heroImageIntervalId

// Insights tạm để nguyên (section 5)
const insights = ref([
  { id: 1, category: 'Logistics', title: 'Latest Trends in Supply Chain', excerpt: 'Exploring the latest trends and innovations...', image: '/vite.svg' },
  { id: 2, category: 'Industry', title: 'Future of Logistics', excerpt: 'How technology is transforming logistics...', image: '/vite.svg' }
])

const testimonials = ref([
  { id: 1, number: '01', title: 'Excellent Service', content: 'MINELOG provided exceptional service throughout our partnership.', name: 'John Doe', position: 'CEO, Company Name' },
  { id: 2, number: '02', title: 'Reliable Partner', content: 'We trust MINELOG for all our logistics needs.', name: 'Jane Smith', position: 'Operations Manager' }
])

// Associations logos (5 logos)
const associationsLogos = ref([
  { image: '/images/carrier-logo-build-001_orig.png', link: '#' },
  { image: '/images/carrier-logo-build-002_orig.png', link: '#' },
  { image: '/images/carrier-logo-build-003_orig.png', link: '#' },
  { image: '/images/carrier-logo-build-005_orig.png', link: '#' },
])

// Partners logos row 1 (shuffled)
const partnersLogos = ref([
  { image: '/images/untitled-007_orig.png', link: '#' },
  { image: '/images/untitled-001_orig.png', link: '#' },
  { image: '/images/untitled-010_orig.png', link: '#' },
  { image: '/images/untitled-004_orig.png', link: '#' },
  { image: '/images/untitled-012_orig.png', link: '#' },
  { image: '/images/untitled-002_orig.png', link: '#' }
])

// Partners logos row 2 (shuffled)
const partnersLogosRow2 = ref([
  { image: '/images/untitled-009_orig.png', link: '#' },
  { image: '/images/untitled-005_orig.png', link: '#' },
  { image: '/images/untitled-008_orig.png', link: '#' },
  { image: '/images/untitled-003_orig.png', link: '#' },
  { image: '/images/untitled-011_orig.png', link: '#' },
  { image: '/images/untitled-006_orig.png', link: '#' }
])

// Hero image swipe state
let heroDragStartX = 0
const HERO_SWIPE_THRESHOLD = 50

// Hero text auto change
const startHeroTextLoop = () => {
  stopHeroTextLoop()
  heroTextIntervalId = window.setInterval(() => {
    heroWordIndex.value = (heroWordIndex.value + 1) % heroWords.value.length
  }, HERO_TEXT_INTERVAL)
}

const stopHeroTextLoop = () => {
  if (heroTextIntervalId) {
    window.clearInterval(heroTextIntervalId)
    heroTextIntervalId = undefined
  }
}

// Hero image auto change
const startHeroImageLoop = () => {
  stopHeroImageLoop()
  if (!heroImages.value.length) return
  heroImageIntervalId = window.setInterval(() => {
    heroNextImage()
  }, HERO_IMAGE_INTERVAL)
}

const stopHeroImageLoop = () => {
  if (heroImageIntervalId) {
    window.clearInterval(heroImageIntervalId)
    heroImageIntervalId = undefined
  }
}

const heroNextImage = () => {
  heroImageIndex.value = (heroImageIndex.value + 1) % heroImages.value.length
}

const heroPrevImage = () => {
  heroImageIndex.value =
    (heroImageIndex.value - 1 + heroImages.value.length) % heroImages.value.length
}

const heroGotoImage = (index) => {
  heroImageIndex.value = index
}

const restartHeroImageLoop = () => {
  startHeroImageLoop()
}

const getClientX = (event) => {
  if (event.touches && event.touches.length) {
    return event.touches[0].clientX
  }
  if (event.changedTouches && event.changedTouches.length) {
    return event.changedTouches[0].clientX
  }
  return event.clientX
}

const onHeroPointerDown = (event) => {
  heroDragStartX = getClientX(event)
  stopHeroImageLoop()
}

const onHeroPointerUp = (event) => {
  if (!heroImages.value.length) {
    restartHeroImageLoop()
    return
  }

  const endX = getClientX(event)
  const delta = endX - heroDragStartX

  if (delta > HERO_SWIPE_THRESHOLD) {
    heroPrevImage()
  } else if (delta < -HERO_SWIPE_THRESHOLD) {
    heroNextImage()
  }

  restartHeroImageLoop()
}

const onHeroPointerLeave = () => {
  restartHeroImageLoop()
}

const onHeroDotClick = (index) => {
  stopHeroImageLoop()
  heroGotoImage(index)
  restartHeroImageLoop()
}

onMounted(() => {
  startHeroTextLoop()
  startHeroImageLoop()
})

onUnmounted(() => {
  stopHeroTextLoop()
  stopHeroImageLoop()
})
</script>

<style scoped>
/* Import CSS từ HTML structure */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* Ensure Poppins font is loaded */
@font-face {
  font-family: 'Poppins';
  font-display: swap;
}

.home-page {
  width: 100%;
}

/* Section 1: Hero */
.home-page-section-1 {
  min-height: 550px;
  position: relative;
  padding: 0;
  overflow: hidden;
}

.hero-slider {
  position: relative;
  height: 550px;
}

.hero-image-layer {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.home-page-section-1 .slider-box {
  max-width: 100%;
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

.hero-heading-prefix {
  font-family: "Poppins";
  font-size: 50px;
  font-weight: 400;
  line-height: 70px;
  text-align: left;
  text-transform: unset;
  color: #fff;
  margin: 0;
}

.hero-heading-main {
  font-family: "Poppins";
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  text-align: left;
  color: #fff;
  margin: 8px 0 10px 0;
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

.hero-slider-controls {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 2;
}

.hero-dots {
  display: flex;
  gap: 8px;
}

.hero-dots .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.35);
  cursor: pointer;
  padding: 0;
}

.hero-dots .dot.active {
  background: #FF9900;
}

/* Text fade animation */
.hero-text-fade-enter-active,
.hero-text-fade-leave-active {
  transition: opacity 0.6s ease;
}

.hero-text-fade-enter-from,
.hero-text-fade-leave-to {
  opacity: 0;
}

/* Image fade animation */
.hero-image-fade-enter-active,
.hero-image-fade-leave-active {
  transition: opacity 1s ease;
}

.hero-image-fade-enter-from,
.hero-image-fade-leave-to {
  opacity: 0;
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

.home-page-section-4 .wpb_text_column {
  text-align: center;
  margin-bottom: 50px;
}

.home-page-section-4 .wpb_text_column h2 {
  font-family: 'Poppins';
  font-size: 36px;
  font-weight: 600;
  color: #000;
  margin: 0 0 20px 0;
}

.home-page-section-4 .wpb_text_column p {
  font-family: 'Poppins';
  font-size: 16px;
  color: #4F5F58;
  margin: 0;
}

.home-page-section-4 .vc_grid-container-wrapper {
  width: 100%;
}

.home-page-section-4 .vc_grid {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
}

.home-page-section-4 .vc_grid-item {
  flex: 0 0 calc(33.333% - 20px);
  max-width: calc(33.333% - 20px);
}

.home-page-section-4 .vc_grid-row-2 {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.home-page-section-4 .vc_grid-row-2 .vc_grid-item {
  flex: 0 0 calc(33.333% - 20px);
  max-width: calc(33.333% - 20px);
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
  margin: 0;
  text-align: left;
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

/* Section 7: Associations & Partners */
.home-page-section-7 {
  padding: 80px 70px;
  background: #fff;
}

.home-page-section-7 .container {
  max-width: 1200px;
  margin: 0 auto;
}

.wsite-content-title {
  font-family: 'Poppins';
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: #000;
  margin: 0 0 40px 0;
}

.wsite-content-title a {
  color: #000;
  text-decoration: none;
  transition: color 0.3s;
}

.wsite-content-title a:hover {
  color: #026937;
}

.wsite-spacer {
  height: 45px;
}

.wsite-spacer-small {
  height: 23px;
}

.wsite-spacer-hr {
  height: 20px;
  overflow: hidden;
  width: 100%;
}

.styled-hr {
  width: 100%;
  border: none;
  border-top: 1px solid #ddd;
  margin: 0;
}

/* Associations logos - 5 logos */
.associations-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.associations-logos .logo-item {
  flex: 0 0 calc(20% - 30px);
  max-width: calc(20% - 30px);
  padding: 10px 15px;
  text-align: center;
}

.associations-logos .logo-item img {
  width: auto;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

/* Partners logos - 6 logos per row */
.partners-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.partners-logos .logo-item {
  flex: 0 0 calc(16.666% - 30px);
  max-width: calc(16.666% - 30px);
  padding: 0 15px;
  text-align: center;
}

.partners-logos .logo-item img {
  width: auto;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

/* Section Markets: Thị trường */
.home-page-section-markets {
  padding: 80px 70px;
  background: #f4f4f4;
}

.home-page-section-markets .container {
  max-width: 1200px;
  margin: 0 auto;
}

.markets-content {
  text-align: justify;
}

.markets-heading {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 140%;
  color: #000;
  margin: 0 0 20px 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.markets-description {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: #4F5F58;
  margin: 0 0 40px 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.markets-map-container {
  position: relative;
  width: 100%;
  margin-top: 40px;
}

.markets-map-image {
  width: 100%;
  position: relative;
  z-index: 1;
}

.map-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.markets-map-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.markets-map-lines svg {
  position: absolute;
  width: auto;
  height: auto;
  max-width: 100%;
  z-index: 100;
  pointer-events: auto;
}

/* Position các SVG lines - giữ nguyên viewBox, chỉ điều chỉnh vị trí */
.markets-map-lines svg:nth-child(1) {
  top: 8%;
  right: 12%;
  width: 269px;
  height: 145px;
}

.markets-map-lines svg:nth-child(2) {
  top: 18%;
  left: 8%;
  width: 264px;
  height: 34px;
}

.markets-map-lines svg:nth-child(3) {
  top: 28%;
  right: 3%;
  width: 23px;
  height: 64px;
}

.markets-map-lines svg:nth-child(4) {
  top: 12%;
  left: 3%;
  width: 464px;
  height: 190px;
}

.markets-map-lines svg:nth-child(5) {
  bottom: 22%;
  right: 8%;
  width: 625px;
  height: 120px;
}

.markets-map-lines svg:nth-child(6) {
  bottom: 12%;
  left: 6%;
  width: 90px;
  height: 120px;
}

.markets-map-lines svg:nth-child(7) {
  bottom: 8%;
  left: 18%;
  width: 471px;
  height: 127px;
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

  /* Tablet: Section 4 - mỗi service 1 hàng */
  .home-page-section-4 {
    padding: 60px 40px !important;
  }

  .home-page-section-4 .vc_grid,
  .home-page-section-4 .vc_grid-row-2 {
    flex-direction: column;
    align-items: center;
  }

  .home-page-section-4 .vc_grid-item {
    flex: 0 0 100% !important;
    max-width: 100% !important;
    width: 100%;
    margin-bottom: 20px;
  }

  .home-page-section-7 {
    padding: 60px 40px !important;
  }

  .associations-logos .logo-item {
    flex: 0 0 calc(33.333% - 30px) !important;
    max-width: calc(33.333% - 30px) !important;
  }

  .partners-logos .logo-item {
    flex: 0 0 calc(33.333% - 30px) !important;
    max-width: calc(33.333% - 30px) !important;
  }

  .home-page-section-markets {
    padding: 60px 40px !important;
  }

  .markets-heading {
    font-size: 28px;
  }

  .markets-description {
    font-size: 15px;
  }

  .markets-map-lines svg {
    display: none;
  }

  .markets-map-lines svg:nth-child(4),
  .markets-map-lines svg:nth-child(5),
  .markets-map-lines svg:nth-child(7) {
    display: block;
    width: 200px !important;
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

  .home-page-section-4 .vc_grid,
  .home-page-section-4 .vc_grid-row-2 {
    flex-direction: column;
    align-items: center;
  }

  .home-page-section-4 .vc_grid-item {
    flex: 0 0 100% !important;
    max-width: 100% !important;
    width: 100%;
    margin-bottom: 20px;
  }

  .home-page-section-7 {
    padding: 40px 16px !important;
  }

  .wsite-content-title {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .associations-logos .logo-item,
  .partners-logos .logo-item {
    flex: 0 0 calc(50% - 30px) !important;
    max-width: calc(50% - 30px) !important;
    margin-bottom: 20px;
  }

  .home-page-section-markets {
    padding: 40px 16px !important;
  }

  .markets-heading {
    font-size: 24px;
    margin-bottom: 15px;
  }

  .markets-description {
    font-size: 14px;
    margin-bottom: 30px;
    text-align: left;
  }

  .markets-map-lines svg {
    display: none;
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
