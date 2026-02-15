<template>
  <div class="land-freight-page">
    <!-- Breadcrumb Navigation -->
    <section class="breadcrumb-section">
      <div class="container">
        <nav class="breadcrumbs" aria-label="breadcrumbs">
          <ol class="breadcrumb-list">
            <li>
              <div class="breadcrumb-content">
                <router-link to="/" class="breadcrumb-link">Home</router-link>
              </div>
            </li>
            <li>
              <div class="breadcrumb-content">
                <span class="breadcrumb-separator">
                  <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.792627 7.35476L3.89862 4.25799C3.93548 4.22112 3.96154 4.18118 3.97677 4.13817C3.99226 4.09516 4 4.04908 4 3.99992C4 3.95077 3.99226 3.90469 3.97677 3.86168C3.96154 3.81866 3.93548 3.77873 3.89862 3.74186L0.792627 0.635868C0.706605 0.549847 0.599078 0.506836 0.470046 0.506836C0.341014 0.506836 0.230415 0.552919 0.138249 0.645085C0.046083 0.737251 0 0.844778 0 0.967665C0 1.09055 0.046083 1.19808 0.138249 1.29025L2.84793 3.99992L0.138249 6.7096C0.0522275 6.79562 0.00921655 6.90155 0.00921655 7.02739C0.00921655 7.15347 0.0552995 7.2626 0.147465 7.35476C0.239631 7.44693 0.347158 7.49301 0.470046 7.49301C0.592934 7.49301 0.700461 7.44693 0.792627 7.35476Z" fill="currentColor"></path>
                  </svg>
                </span>
                <router-link to="/#" class="breadcrumb-link">Services</router-link>
              </div>
            </li>
            <li class="breadcrumb-item-last">
              <div class="breadcrumb-content">
                <span class="breadcrumb-separator">
                  <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.792627 7.35476L3.89862 4.25799C3.93548 4.22112 3.96154 4.18118 3.97677 4.13817C3.99226 4.09516 4 4.04908 4 3.99992C4 3.95077 3.99226 3.90469 3.97677 3.86168C3.96154 3.81866 3.93548 3.77873 3.89862 3.74186L0.792627 0.635868C0.706605 0.549847 0.599078 0.506836 0.470046 0.506836C0.341014 0.506836 0.230415 0.552919 0.138249 0.645085C0.046083 0.737251 0 0.844778 0 0.967665C0 1.09055 0.046083 1.19808 0.138249 1.29025L2.84793 3.99992L0.138249 6.7096C0.0522275 6.79562 0.00921655 6.90155 0.00921655 7.02739C0.00921655 7.15347 0.0552995 7.2626 0.147465 7.35476C0.239631 7.44693 0.347158 7.49301 0.470046 7.49301C0.592934 7.49301 0.700461 7.44693 0.792627 7.35476Z" fill="currentColor"></path>
                  </svg>
                </span>
                <span class="breadcrumb-current">Domestic Transport</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Hero Slider Section -->
    <section class="hero-section relative">
      <div class="absolute inset-0 w-full h-full">
        <img 
          src="/images/land-freight.jpg" 
          alt="Domestic Transport" 
          class="object-cover w-full h-full" 
          loading="eager"
        />
      </div>
      <div class="bg-common absolute inset-0 w-full h-full"></div>
      <div class="relative z-10 flex items-center h-full">
        <div class="container">
          <div>
            <h1 class="text-white display-1">Domestic Transport</h1>
          </div>
          <div class="description title-3 text-white mt-4">
            Efficient and reliable overland transportation services. Our land freight solutions provide seamless connectivity across borders with flexible routes and competitive pricing.
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="overview-section">
      <div class="container">
        <div class="overview-grid">
          <!-- Image Column -->
          <div class="overview-image-col">
            <div class="overview-image-wrapper">
              <img 
                src="/images/land-freight.jpg" 
                alt="Overview" 
                loading="lazy"
                class="overview-image"
              />
            </div>
          </div>
          
          <!-- Content Column -->
          <div class="overview-content-col">
            <h2 class="overview-heading">Overview</h2>
            <div class="overview-text">
              We offer comprehensive land freight services designed to meet your overland transportation needs. Our road and rail freight solutions ensure reliable delivery across domestic and international routes. With a modern fleet of vehicles and strategic partnerships, Real Logistics provides flexible scheduling, real-time tracking, and cost-effective solutions for full truckload (FTL) and less than truckload (LTL) shipments.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our products Section -->
    <section class="industries-section">
      <div class="container">
        <div class="industries-content">
          <div class="industries-header">
            <h2 class="industries-heading">Our products</h2>
          </div>
          
          <div class="industries-slider-wrapper">
            <!-- Navigation Button Left (Previous) -->
            <button 
              class="industry-nav-btn industry-nav-prev" 
              @click="scrollIndustries('prev')"
            >
              <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 1.9349L1.16667 10.2682L9.5 18.6016" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            
            <div class="industries-slider" ref="sliderRef">
              <router-link 
                v-for="industry in industries" 
                :key="industry.id"
                :to="industry.path" 
                class="industry-card"
              >
                <div class="industry-image-wrapper">
                  <img 
                    :src="industry.image" 
                    :alt="industry.title" 
                    loading="lazy"
                    class="industry-image"
                  />
                </div>
                <div class="industry-overlay">
                  <div class="industry-title">{{ industry.title }}</div>
                </div>
              </router-link>
            </div>
            
            <!-- Navigation Button Right (Next) -->
            <button 
              class="industry-nav-btn industry-nav-next" 
              @click="scrollIndustries('next')"
            >
              <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 18.0651L9.83333 9.73177L1.5 1.39844" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Associations & Partners Section -->
    <section class="associations-partners-section">
      <div class="container">
        <div class="associations-partners-content">
          <!-- Partners -->
          <h2 class="partners-title">
            We earned trust from our strategic partners
          </h2>

          <div class="spacer-small"></div>

          <div class="partners-logos-wrapper">
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

          <div class="spacer-hr"></div>
          <hr class="styled-hr" />
          <div class="spacer-hr"></div>

          <div class="partners-logos-wrapper">
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
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const sliderRef = ref(null)
const scrollPosition = ref(0)
const cardWidth = ref(0)
const visibleCards = ref(1)

const industries = ref([
  {
    id: 1,
    title: 'Machinery & Equipment',
    path: '/industries/machinery-equipment',
    image: 'https://console.reallogistics.vn/storage/Industry/industry-5.jpg'
  },
  {
    id: 2,
    title: 'Automotives',
    path: '/industries/automotives',
    image: 'https://console.reallogistics.vn/storage/Industry/Car.webp'
  },
  {
    id: 3,
    title: 'Dangerous goods',
    path: '/industries/dangerous-goods',
    image: 'https://console.reallogistics.vn/storage/Industry/DG.webp'
  },
  {
    id: 4,
    title: 'Healthcare, Cosmetics & Medical supply',
    path: '/industries/healthcare-cosmetics-medical-supply',
    image: 'https://console.reallogistics.vn/storage/Industry/industry-6.jpg'
  },
  {
    id: 5,
    title: 'Electronics',
    path: '/industries/electronics',
    image: 'https://console.reallogistics.vn/storage/modern-stationary-collection-arrangement@0.25x.png'
  },
  
  {
    id: 6,
    title: 'Furniture & Houseware',
    path: '/industries/furniture-houseware',
    image: 'https://console.reallogistics.vn/storage/Industry/industry-3.jpg'
  },
  {
    id: 7,
    title: 'Metal & Construction materials',
    path: '/industries/metal-construction-materials',
    image: 'https://console.reallogistics.vn/storage/Industry/industry-4.jpg'
  },
  {
    id: 8,
    title: 'Food & Beverage',
    path: '/industries/food-beverage',
    image: 'https://console.reallogistics.vn/storage/Industry/image%2056.webp'
  },
  {
    id: 9,
    title: 'Garment & Footwear',
    path: '/industries/garment-footwear',
    image: 'https://console.reallogistics.vn/storage/Industry/industry-2.jpg'
  }
])

// Partners logos row 1
const partnersLogos = ref([
  { image: '/images/untitled-007_orig.png', link: '#' },
  { image: '/images/untitled-001_orig.png', link: '#' },
  { image: '/images/untitled-010_orig.png', link: '#' },
  { image: '/images/untitled-004_orig.png', link: '#' },
  { image: '/images/untitled-012_orig.png', link: '#' },
  { image: '/images/untitled-002_orig.png', link: '#' }
])

// Partners logos row 2
const partnersLogosRow2 = ref([
  { image: '/images/untitled-009_orig.png', link: '#' },
  { image: '/images/untitled-005_orig.png', link: '#' },
  { image: '/images/untitled-008_orig.png', link: '#' },
  { image: '/images/untitled-003_orig.png', link: '#' },
  { image: '/images/untitled-011_orig.png', link: '#' },
  { image: '/images/untitled-006_orig.png', link: '#' }
])

const scrollIndustries = (direction) => {
  if (!sliderRef.value) return
  
  // Scroll chỉ 1 card mỗi lần
  const scrollAmount = cardWidth.value // Chỉ scroll 1 card width (đã bao gồm gap)
  const currentScroll = sliderRef.value.scrollLeft
  const maxScroll = sliderRef.value.scrollWidth - sliderRef.value.clientWidth
  const threshold = 10 // Ngưỡng để xác định đã đến cuối/đầu
  
  let newPosition
  
  if (direction === 'next') {
    newPosition = currentScroll + scrollAmount
    
    // Nếu gần hoặc vượt quá cuối, quay về đầu (infinite loop)
    if (currentScroll >= maxScroll - threshold) {
      // Jump về đầu ngay lập tức (không animation)
      sliderRef.value.scrollLeft = 0
      // Scroll tiếp từ đầu 1 card
      setTimeout(() => {
        if (sliderRef.value) {
          sliderRef.value.scrollTo({
            left: Math.min(scrollAmount, maxScroll),
            behavior: 'smooth'
          })
        }
      }, 50)
      return
    }
  } else {
    newPosition = currentScroll - scrollAmount
    
    // Nếu ở đầu và scroll prev, đi đến cuối (infinite loop)
    if (currentScroll <= threshold) {
      // Jump đến cuối ngay lập tức (không animation)
      sliderRef.value.scrollLeft = maxScroll
      // Scroll ngược lại từ cuối 1 card
      setTimeout(() => {
        if (sliderRef.value) {
          const maxScrollValue = sliderRef.value.scrollWidth - sliderRef.value.clientWidth
          sliderRef.value.scrollTo({
            left: Math.max(maxScrollValue - scrollAmount, 0),
            behavior: 'smooth'
          })
        }
      }, 50)
      return
    }
  }
  
  sliderRef.value.scrollTo({
    left: newPosition,
    behavior: 'smooth'
  })
}

const updateScrollPosition = () => {
  if (!sliderRef.value) return
  scrollPosition.value = sliderRef.value.scrollLeft
}

const updateCardWidth = () => {
  if (!sliderRef.value) return
  
  // Get actual slider container width
  const containerWidth = sliderRef.value.offsetWidth
  
  // Get gap from computed style (responsive gap)
  const computedStyle = window.getComputedStyle(sliderRef.value)
  const gap = parseInt(computedStyle.gap) || 24
  
  let targetVisibleCards = 3 // Default: 3 cards
  
  // Responsive: determine how many cards to show
  if (window.innerWidth < 768) {
    targetVisibleCards = 1 // Mobile: 1 card
  } else if (window.innerWidth < 1024) {
    targetVisibleCards = 2 // Tablet: 2 cards  
  } else {
    targetVisibleCards = 3 // Desktop: >= 1024: 3 cards
  }
  
  // Calculate card width based on container width, gap, and target visible cards
  // Formula: (containerWidth - (targetVisibleCards - 1) * gap) / targetVisibleCards
  const calculatedCardWidth = Math.floor((containerWidth - (targetVisibleCards - 1) * gap) / targetVisibleCards)
  
  // Ensure minimum width
  const minCardWidth = 280
  const finalCardWidth = Math.max(calculatedCardWidth, minCardWidth)
  
  // Set card width with aspect ratio 8:5
  const calculatedHeight = Math.floor(finalCardWidth * 5 / 8)
  const cards = sliderRef.value.querySelectorAll('.industry-card')
  cards.forEach(card => {
    card.style.width = `${finalCardWidth}px`
    card.style.height = `${calculatedHeight}px`
  })
  
  cardWidth.value = finalCardWidth + gap
  visibleCards.value = targetVisibleCards
}

const handleResize = () => {
  updateCardWidth()
  updateScrollPosition()
}

onMounted(() => {
  updateCardWidth()
  if (sliderRef.value) {
    sliderRef.value.addEventListener('scroll', updateScrollPosition)
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (sliderRef.value) {
    sliderRef.value.removeEventListener('scroll', updateScrollPosition)
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.land-freight-page {
  width: 100%;
}

/* Breadcrumb Section */
.breadcrumb-section {
  background-color: #f9fafb;
  padding: 9px 0;
  width: 100%;
}

.breadcrumbs {
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.breadcrumbs::-webkit-scrollbar {
  display: none;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb-item {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #9ca3af;
  transition: color 0.3s ease-in-out;
}

.breadcrumb-item:not(.breadcrumb-item-last):hover {
  color: #FF9900;
}

.breadcrumb-item-last {
  color: #4b5563;
}

.breadcrumb-item-last:hover {
  color: #4b5563;
}

.breadcrumb-content {
  display: flex;
  align-items: center;
}

.breadcrumb-link {
  white-space: nowrap;
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.breadcrumb-link:hover {
  color: #FF9900;
}

.breadcrumb-separator {
  color: #9ca3af;
  margin-right: 16px;
  display: inline-flex;
  align-items: center;
}

.breadcrumb-item-last .breadcrumb-separator {
  color: #4b5563;
}

.breadcrumb-current {
  white-space: nowrap;
  color: #4b5563;
}

.hero-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 550px;
  display: flex;
  align-items: center;
}

.hero-section > .relative {
  width: 100%;
}

.absolute {
  position: absolute;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.object-cover {
  object-fit: cover;
}

.relative {
  position: relative;
}

.z-10 {
  z-index: 10;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.hero-section .container {
  max-width: 100%;
  padding: 0 10%;
}

.breadcrumb-section .container {
  max-width: 100%;
  padding: 0 10%;
}

.text-white {
  color: #ffffff;
}

/* Hero content typography (match Home slider) */
.hero-section .display-1 {
  font-family: 'Poppins';
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  margin: 0 0 10px 0;
  text-align: left;
  color: #fff;
}

.hero-section .description {
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  color: #fff;
  max-width: 720px;
  text-align: left;
}

/* Overview Section */
.overview-section {
  width: 100%;
  padding: 40px 0;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 22px;
  border-radius: 16px;
  overflow: hidden;
  background-color: rgb(232 233 234 / 1);
}

.overview-image-col {
  grid-column: span 12;
  order: 2;
}

.overview-image-wrapper {
  width: 100%;
  height: 100%;
  min-height: 300px;
  position: relative;
  overflow: hidden;
}

.overview-image {
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: cover;
  display: block;
}

.overview-content-col {
  grid-column: span 12;
  order: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.overview-heading {
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #000;
  margin: 0 0 16px 0;
  line-height: 1.2;
}

.overview-text {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #4b5563;
  line-height: 1.6;
  text-align: justify;
}

/* Industries Section */
.industries-section {
  width: 100%;
  background-color: #ffffff;
  padding: 32px 0;
}

.industries-content {
  width: 100%;
}

.industries-header {
  text-align: center;
  margin-bottom: 24px;
}

.industries-heading {
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #000;
  margin: 0 0 12px 0;
  line-height: 1.2;
}

.industries-slider-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
}

.industries-slider {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 20px;
  flex: 1;
  position: relative;
}

.industries-slider::-webkit-scrollbar {
  display: none;
}

.industries-slider {
  scroll-snap-type: x mandatory;
}

.industry-card {
  position: relative;
  display: block;
  flex: 0 0 auto;
  width: 384px;
  height: 240px;
  overflow: hidden;
  border-radius: 16px;
  text-decoration: none;
  scroll-snap-align: start;
  transition: width 0.3s ease, height 0.3s ease;
}

.industry-image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.industry-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.industry-card:hover .industry-image {
  transform: scale(1.05);
}

.industry-overlay {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
}

.industry-title {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  padding: 12px 16px;
  width: 100%;
}

/* Navigation Buttons */
.industry-nav-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.industry-nav-btn:hover {
  background-color: #f0fdf4;
  border-color: #000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.industry-nav-btn:active {
  transform: scale(0.95);
}

.industry-nav-btn svg {
  width: 11px;
  height: 20px;
}

/* Responsive */
@media (min-width: 1280px) {
  .breadcrumb-section {
    padding: 18px 0;
  }
  
  .hero-section {
    height: 550px;
  }

  .overview-section {
    padding: 80px 0 40px 0;
  }

  .industries-section {
    padding: 80px 0 40px 0;
  }

  .industries-header {
    margin-bottom: 48px;
  }

  .industries-heading {
    font-size: 48px;
    margin-bottom: 12px;
  }

  .industries-slider {
    gap: 24px;
  }

  .industries-slider-wrapper {
    gap: 16px;
  }

  .industry-title {
    font-size: 20px;
    padding: 20px;
  }

  .overview-grid {
    gap: 32px;
  }

  .overview-image-col {
    grid-column: span 6;
    order: 1;
  }

  .overview-content-col {
    grid-column: span 6;
    order: 2;
    padding: 85px 56px;
    padding-left: 34px;
  }

  .overview-heading {
    font-size: 48px;
    margin-bottom: 36px;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .overview-section {
    padding: 80px 0;
  }

  .industries-section {
    padding: 80px 0;
  }

  .industries-header {
    margin-bottom: 32px;
  }

  .industries-slider {
    gap: 16px;
  }

  .overview-grid {
    gap: 22px;
  }

  .overview-image-col {
    grid-column: span 6;
    order: 1;
  }

  .overview-content-col {
    grid-column: span 6;
    order: 2;
    padding: 64px 38px;
    padding-left: 16px;
  }

  .overview-heading {
    font-size: 42px;
    margin-bottom: 24px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .breadcrumb-section {
    padding: 13px 0;
  }
  
  .hero-section {
    height: 350px;
  }
  
  .description {
    max-width: 600px;
  }

  .overview-section {
    padding: 40px 0;
  }

  .industries-section {
    padding: 32px 0;
  }

  .industries-header {
    margin-bottom: 32px;
  }

  .industries-slider {
    gap: 16px;
  }

  .industry-title {
    font-size: 16px;
    padding: 12px;
  }

  .overview-grid {
    gap: 22px;
  }

  .overview-image-col {
    grid-column: span 6;
    order: 1;
  }

  .overview-content-col {
    grid-column: span 6;
    order: 2;
    padding: 32px 22px;
  }

  .overview-heading {
    font-size: 36px;
    margin-bottom: 16px;
  }
}

@media (max-width: 767px) {
  .hero-section {
    height: 410px;
  }
  
  .description {
    width: 80%;
  }
  
  .display-1 {
    white-space: pre-line;
    font-size: 28px;
    line-height: 40px;
  }
  
  .title-3 {
    font-size: 16px;
  }
  
  .container {
    padding: 0 16px;
  }

  .overview-section {
    padding: 40px 0;
  }

  .overview-grid {
    gap: 0;
  }

  .overview-image-col {
    grid-column: span 12;
    order: 2;
  }

  .overview-content-col {
    grid-column: span 12;
    order: 1;
    padding: 16px;
  }

  .overview-heading {
    font-size: 28px;
    margin-bottom: 8px;
  }

  .overview-text {
    font-size: 14px;
  }

  .industries-section {
    padding: 32px 0;
  }

  .industries-header {
    margin-bottom: 20px;
  }

  .industries-heading {
    font-size: 28px;
    margin-bottom: 8px;
  }

  .industries-slider {
    gap: 16px;
  }

  .industry-title {
    font-size: 14px;
    padding: 12px;
  }

  .industries-slider-wrapper {
    gap: 12px;
  }

  .industry-nav-btn {
    width: 36px;
    height: 36px;
  }

  .industry-nav-btn svg {
    width: 10px;
    height: 18px;
  }

  /* Ẩn navigation buttons trên mobile nếu cần */
  @media (max-width: 480px) {
    .industry-nav-btn {
      width: 32px;
      height: 32px;
    }

    .industries-slider-wrapper {
      gap: 8px;
    }
  }
}

/* Associations & Partners Section */
.associations-partners-section {
  padding: 80px 70px;
  background: #fff;
  width: 100%;
}

.associations-partners-content {
  max-width: 1200px;
  margin: 0 auto;
}

.partners-title {
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: #000;
  margin: 0 0 40px 0;
}

.spacer-small {
  height: 23px;
}

.spacer-hr {
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

/* Partners logos */
.partners-logos-wrapper {
  width: 100%;
}

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

/* Responsive for Associations & Partners */
@media (min-width: 601px) and (max-width: 1005px) {
  .associations-partners-section {
    padding: 60px 40px;
  }

  .partners-logos .logo-item {
    flex: 0 0 calc(33.333% - 30px) !important;
    max-width: calc(33.333% - 30px) !important;
  }
}

@media (max-width: 600px) {
  .associations-partners-section {
    padding: 40px 16px;
  }

  .partners-title {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .partners-logos .logo-item {
    flex: 0 0 calc(50% - 30px) !important;
    max-width: calc(50% - 30px) !important;
    margin-bottom: 20px;
  }
}
</style>

