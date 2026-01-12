<template>
  <div class="about-page">
    <!-- Hero Slider Section -->
    <section class="hero-section relative">
      <div class="absolute inset-0 w-full h-full">
        <img 
          src="/images/about-us-header.jpg" 
          alt="About Us" 
          class="object-cover w-full h-full" 
          loading="eager"
        />
      </div>
      <div class="bg-common absolute inset-0 w-full h-full"></div>
      <div class="relative z-10 flex items-center h-full">
        <div class="container">
          <div>
            <h1 class="text-white display-1">About Minelog</h1>
          </div>
          <div class="description title-3 text-white mt-4">
            We are a Total Logistics Solution Provider with a reputation for consistency, quality and reliability in delivering services to our global clients.
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: About Content -->
    <section class="about-content-section">
      <div class="vc_row wpb_row vc_row-fluid about-page-row-4">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <h2>We Are a Total Logistics Solution Provider.</h2>
                  <p>
                    Determined to make a difference and bring total logistics solutions to the industry,
                    Mr. Dereck Ng and Mr. Hong Yeow formed Mine Logistics Sdn. Bhd. (Minelog) in 2009.
                    Despite its humble beginnings as a small freight forwarding company with just five
                    employees, Minelog has grown to become one of Malaysia's most trusted one-stop total
                    logistics solution providers, with over 150 experienced employees offering the most
                    comprehensive logistics services. We're accredited as an International Integrated
                    Logistics Services (IILS) provider and have successfully acquired ISO 9001:2015
                    certification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Vision / Mission / Values -->
    <section class="about-vmv-section">
      <div class="vmv-row">
        <div class="vmv-col vmv-col-image vmv-col-image-left">
          <img src="/images/our-vision.jpg" alt="Our Vision" class="vmv-image" />
        </div>
        <div class="vmv-col vmv-col-text">
          <div class="wpb_text_column wpb_content_element">
            <div class="wpb_wrapper">
              <h2>Our Vision</h2>
              <p>To be a world class supply chain ecosystem company</p>
            </div>
          </div>
        </div>
      </div>

      <div class="vmv-row">
        <div class="vmv-col vmv-col-text">
          <div class="wpb_text_column wpb_content_element">
            <div class="wpb_wrapper">
              <h2>Our Mission</h2>
              <p>Keeping supply chain flowing in a World of Change</p>
            </div>
          </div>
        </div>
        <div class="vmv-col vmv-col-image vmv-col-image-right">
          <img src="/images/our-mission.jpg" alt="Our Mission" class="vmv-image" />
        </div>
      </div>

      <div class="vmv-row vmv-row-values">
        <div class="vmv-col vmv-col-image vmv-col-image-left">
          <img src="/images/our-value.png" alt="We Carry Your Trust" class="vmv-image" />
          <div class="vmv-col-values-title">
            <div class="wpb_text_column wpb_content_element">
              <div class="wpb_wrapper">
                <h1>We Carry</h1>
                <h1>Your Trust</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="vmv-col vmv-col-values-list">
          <div class="wpb_text_column wpb_content_element">
            <div class="wpb_wrapper">
              <h2>Our Values</h2>
              <p class="value-line">Maximise values and services</p>
              <p class="value-line">Integrate solutions just for you</p>
              <p class="value-line">Network foundation worldwide</p>
              <p class="value-line">Effectively &amp; Efficiently</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic if needed
</script>

<style scoped>
.about-page {
  width: 100%;
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

.hero-section .container {
  max-width: 100%;
  padding: 0 10%;
}

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

.text-white {
  color: #ffffff;
}

.mt-4 {
  margin-top: 16px;
}

.bg-common {
  background: rgba(0, 0, 0, 0.5);
}

/* Section 4: About Content */
.about-content-section {
  width: 100%;
  padding: 60px 0;
}

.about-page-row-4 {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}

.vc_col-sm-12 {
  width: 100%;
}

.vc_column-inner {
  width: 100%;
}

.wpb_wrapper {
  width: 100%;
}

.wpb_text_column {
  width: 100%;
}

.wpb_wrapper h2 {
  font-family: 'Poppins';
  font-size: 50px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  color: #000;
  margin: 0 0 20px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.about-page-row-4 > div > div p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  color: #0D100F;
  width: 70%;
  text-align: justify;
  margin: 0 auto;
  padding-top: 20px;
}

/* Section 5: Vision / Mission / Values */
.about-vmv-section {
  width: 100%;
  padding: 60px 0;
}

.vmv-row {
  width: 100%;
  max-width: 100%;
  margin: 0 0 40px 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
}

.vmv-row-values {
  align-items: stretch;
}

.vmv-col {
  flex: 0 0 50%;
  width: 50%;
  min-width: 0;
}

.vmv-col-image {
  background-color: #e8e9ea;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: stretch;
  height: 500px;
}

.vmv-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
}

.vmv-col-values-title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 40px;
  z-index: 10;
}

.vmv-col-text {
  display: flex;
  align-items: center;
  padding: 30px 40px;
}

.vmv-col-text h2 {
  font-family: 'Poppins';
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  color: #000;
  margin: 0 0 12px 0;
  text-align: left;
}

.vmv-col-text p {
  font-family: 'Poppins';
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: #4F5F58;
  margin: 0;
}

.vmv-col-values-title h1 {
  font-family: 'Poppins';
  font-size: 44px;
  font-weight: 700;
  line-height: 140%;
  color: #fff;
  margin: 0;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 6px;
}

.vmv-col-values-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 40px;
  min-height: 100%;
}

.vmv-col-values-list h2 {
  font-family: 'Poppins';
  font-size: 28px;
  font-weight: 700;
  line-height: 1.4;
  color: #000;
  margin: 0 0 16px 0;
  text-align: left;
}

.value-line {
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  color: #026937;
  margin: 0 0 8px 0;
}

/* Responsive - Tablet and below */
@media (max-width: 991px) {
  /* Hero Section */
  .hero-section {
    height: 400px;
  }

  .hero-section .container {
    padding: 0 5%;
  }

  .hero-section .display-1 {
    font-size: 36px;
    line-height: 50px;
  }

  .hero-section .description {
    font-size: 16px;
    line-height: 22px;
  }

  /* About Content Section */
  .about-content-section {
    padding: 40px 0;
  }

  .wpb_wrapper h2 {
    font-size: 32px;
    margin-bottom: 16px;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .about-page-row-4 > div > div p {
    font-size: 18px;
    width: 85%;
    text-align: left;
  }

  /* Vision / Mission / Values Section */
  .about-vmv-section {
    padding: 40px 0;
  }

  .vmv-row {
    margin-bottom: 0;
  }

  .vmv-col-text h2 {
    font-size: 36px;
  }

  .vmv-col-text p {
    font-size: 16px;
  }

  .vmv-col-values-title h1 {
    font-size: 40px;
  }

  .vmv-col-values-list h2 {
    font-size: 24px;
  }

  .value-line {
    font-size: 20px;
  }
}

/* Responsive - Mobile */
@media (max-width: 767px) {
  /* Hero Section */
  .hero-section {
    height: 300px;
  }

  .hero-section .container {
    padding: 0 20px;
  }

  .hero-section .display-1 {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 8px;
  }

  .hero-section .description {
    font-size: 14px;
    line-height: 20px;
    max-width: 100%;
  }

  /* About Content Section */
  .about-content-section {
    padding: 30px 0;
  }

  .wpb_wrapper h2 {
    font-size: 28px;
    margin-bottom: 12px;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .about-page-row-4 > div > div p {
    font-size: 16px;
    width: 100%;
    padding-top: 16px;
    text-align: left;
  }

  /* Vision / Mission / Values Section */
  .about-vmv-section {
    padding: 30px 0;
  }

  .vmv-row {
    flex-direction: column;
    margin-bottom: 0;
    gap: 0;
  }

  .vmv-col {
    width: 100%;
  }

  .vmv-col-image {
    min-height: 300px;
    height: 300px;
    order: -1;
    margin-bottom: 0;
    display: flex;
    align-items: stretch;
  }

  .vmv-image {
    width: 100%;
    height: 100%;
    min-height: 300px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .vmv-col-text {
    padding: 15% 10%;
    margin-top: 0;
  }

  .vmv-col-text h2 {
    font-size: 28px;
    margin-bottom: 16px;
  }

  .vmv-col-text p {
    font-size: 15px;
  }

  .vmv-col-values-title {
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .vmv-col-values-title h1 {
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 8px;
    line-height: 140%;
  }

  .vmv-col-values-list {
    padding: 15% 10%;
    min-height: auto;
  }

  .vmv-col-values-list h2 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  .value-line {
    font-size: 18px;
    margin-bottom: 6px;
    line-height: 140%;
  }
}
</style>

