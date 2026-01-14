<template>
  <div class="careers-page">
    <!-- Section 1: Hero (ảnh slider + chữ đổi riêng) -->
    <section class="vc_section section-slider home-page-section-1">
      <div class="hero-slider">
        <div
          class="hero-image-layer"
          :style="{ backgroundImage: `url(${heroImage})` }"
        ></div>
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
        </div>
      </div>
    </section>

    <!-- Section 2: What we value -->
    <section class="vc_section careers-section-2">
      <div class="vc_row wpb_row vc_row-fluid career1 vc_column-gap-10">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element vc_custom_1662374632946">
                <div class="wpb_wrapper">
                  <h2 style="font-size: 36px;">What we value</h2>
                </div>
              </div>
              <div class="vc_row wpb_row vc_inner vc_row-fluid vc_column-gap-10">
                <!-- Teamwork -->
                <div class="wpb_column vc_column_container vc_col-sm-4">
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                      <div class="wpb_single_image wpb_content_element vc_align_center">
                        <figure class="wpb_wrapper vc_figure">
                          <div class="vc_single_image-wrapper vc_box_border_grey">
                            <img 
                              decoding="async" 
                              width="150" 
                              height="150" 
                              src="https://minelog.com.my/wp-content/uploads/2022/07/teamwork-150x150.png" 
                              class="vc_single_image-img attachment-thumbnail" 
                              alt="teamwork" 
                              title="teamwork"
                            />
                          </div>
                        </figure>
                      </div>
                      <div class="wpb_text_column wpb_content_element">
                        <div class="wpb_wrapper">
                          <h2 style="text-align: center; font-size: 24px;">Teamwork</h2>
                          <p style="text-align: center; font-size: 18px;">We work as a team to achieve common goals and ensure smooth sailing no matter what the situation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Personal Growth -->
                <div class="wpb_column vc_column_container vc_col-sm-4">
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                      <div class="wpb_single_image wpb_content_element vc_align_center">
                        <figure class="wpb_wrapper vc_figure">
                          <div class="vc_single_image-wrapper vc_box_border_grey">
                            <img 
                              decoding="async" 
                              width="150" 
                              height="150" 
                              src="https://minelog.com.my/wp-content/uploads/2022/07/personal-growth-150x150.png" 
                              class="vc_single_image-img attachment-thumbnail" 
                              alt="personal growth" 
                              title="personal growth"
                            />
                          </div>
                        </figure>
                      </div>
                      <div class="wpb_text_column wpb_content_element">
                        <div class="wpb_wrapper">
                          <h2 style="text-align: center; font-size: 24px;">Personal Growth</h2>
                          <p style="text-align: center; font-size: 18px;">If you have a desire to grow and have an open mind, come join our team and we will lead you to the right step.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Efficiency -->
                <div class="wpb_column vc_column_container vc_col-sm-4">
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                      <div class="wpb_single_image wpb_content_element vc_align_center">
                        <figure class="wpb_wrapper vc_figure">
                          <div class="vc_single_image-wrapper vc_box_border_grey">
                            <img 
                              decoding="async" 
                              width="150" 
                              height="150" 
                              src="https://minelog.com.my/wp-content/uploads/2022/09/icon-3-150x150.png" 
                              class="vc_single_image-img attachment-thumbnail" 
                              alt="efficiency" 
                              title="icon-3"
                            />
                          </div>
                        </figure>
                      </div>
                      <div class="wpb_text_column wpb_content_element">
                        <div class="wpb_wrapper">
                          <h2 style="text-align: center; font-size: 24px;">Efficiency</h2>
                          <p style="text-align: center; font-size: 18px;">Working efficiently is what we continuously strive to achieve through teamwork and technology.</p>
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

    <!-- Section 3: Contact Form -->
    <section class="vc_section careers-section-3">
      <div class="vc_row wpb_row vc_row-fluid row-6">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <h2 style="text-align: center;">Didn't find what you're looking for?<br> Get in touch and we'll find a suitable role that fits you.</h2>
                </div>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <form
                    action="https://formsubmit.co/son.nguyen1@rikai.technology"
                    method="POST"
                    class="contact-form"
                    enctype="multipart/form-data"
                    @submit.prevent="handleContactSubmit"
                  >
                    <input type="hidden" name="_subject" value="Career Application" />
                    <input type="hidden" name="_captcha" value="false" />
                    <div class="row">
                      <div class="col-sm-6">
                        <p>
                          <label>Position<em>*</em></label>
                          <input class="contact-form-control" placeholder="Senior Manager" type="text" name="position" required>
                        </p>
                      </div>
                      <div class="col-sm-6">
                        <p>
                          <label>Full Name<em>*</em></label>
                          <input class="contact-form-control" type="text" name="full_name" required>
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <p>
                          <label>Email<em>*</em></label>
                          <input class="contact-form-control" placeholder="example@mail.com" type="email" name="email" required>
                        </p>
                      </div>
                      <div class="col-sm-6">
                        <p>
                          <label>Phone Number<em>*</em></label>
                          <input class="contact-form-control" type="text" name="phone_number" required>
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <p>
                          <label>Attachments<em>*</em> (resume, cover letter, portfolio)</label>
                          <input class="contact-form-control contact-file" accept=".pdf,.jpg,.jpeg,.png" type="file" name="attachment" required>
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <p>
                          <label>Why did you apply for this position?<em>*</em></label>
                          <textarea class="contact-form-control contact-textarea" placeholder="Write your message..." name="message" required></textarea>
                        </p>
                      </div>
                      <div class="col-sm-12">
                        <p>
                          <input class="contact-submit" type="submit" :value="isContactSubmitting ? 'Submitting...' : 'Submit'" :disabled="isContactSubmitting">
                        </p>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="showToast" class="toast-container">
      <div
        class="toast-message"
        :class="toastType === 'success' ? 'toast-success' : 'toast-error'"
      >
        {{ toastMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Hero: chỉ 1 ảnh
const heroImage = ref('/images/home-slider-1.webp')

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

// Contact form state (FormSubmit AJAX, không redirect)
const isContactSubmitting = ref(false)

// Toast
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success') // 'success' | 'error'
let toastTimeoutId

const triggerToast = (message, type = 'success') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true

  if (toastTimeoutId) {
    clearTimeout(toastTimeoutId)
  }

  toastTimeoutId = window.setTimeout(() => {
    showToast.value = false
  }, 4000)
}

const handleContactSubmit = async (event) => {
  const form = event.target
  isContactSubmitting.value = true

  try {
    const formData = new FormData(form)

    const response = await fetch('https://formsubmit.co/ajax/son.nguyen1@rikai.technology', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })

    const result = await response.json()

    if (response.ok) {
      form.reset()
      triggerToast('Your contact has been submitted successfully.', 'success')
    } else {
      triggerToast('There was an error submitting your contact. Please try again.', 'error')
    }
  } catch (error) {
    triggerToast('There was an error submitting your application. Please try again.', 'error')
  } finally {
    isContactSubmitting.value = false
  }
}

onMounted(() => {
  startHeroTextLoop()
})

onUnmounted(() => {
  stopHeroTextLoop()
  if (toastTimeoutId) {
    clearTimeout(toastTimeoutId)
  }
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

.careers-page {
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
  padding: 150px 80px 50px 10%;
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

/* Text fade animation */
.hero-text-fade-enter-active,
.hero-text-fade-leave-active {
  transition: opacity 0.6s ease;
}

.hero-text-fade-enter-from,
.hero-text-fade-leave-to {
  opacity: 0;
}

.clearfix::after {
  content: '';
  display: table;
  clear: both;
}

/* Responsive - Tablet */
@media (min-width: 601px) and (max-width: 1005px) {
  .home-page-section-1 .slider-box {
    padding: 120px 40px 40px;
    margin-left: 40px !important;
  }
}

/* Responsive - Mobile */
@media only screen and (max-width: 600px) {
  .home-page-section-1 {
    min-height: 450px;
  }

  .hero-slider {
    height: 450px;
  }

  .home-page-section-1 .slider-box {
    padding: 100px 20px 40px !important;
  }

  .hero-heading-prefix {
    font-size: 30px !important;
    line-height: 50px !important;
  }

  .hero-heading-main {
    font-size: 34px !important;
    line-height: 50px !important;
  }

  .home-page-section-1 .slider-text {
    font-size: 16px !important;
    max-width: 100% !important;
    width: 100% !important;
  }
}

/* Section 2: What we value */
.careers-section-2 {
  width: 100%;
  padding: 60px 0;
}

.career1 {
  padding: 50px 60px 0px 60px !important;
  max-width: 100%;
  margin: 0 auto;
}

.vc_col-sm-12 {
  width: 100%;
}

.vc_col-sm-4 {
  width: 33.333333%;
  float: left;
  padding: 0 15px;
  box-sizing: border-box;
}

.vc_column-inner {
  width: 100%;
}

.wpb_wrapper {
  width: 100%;
}

.wpb_text_column h2 {
  font-family: 'Poppins';
  font-weight: 700;
  color: #000;
  margin: 0 0 20px 0;
}

.wpb_text_column p {
  font-family: 'Poppins';
  font-weight: 400;
  color: #4F5F58;
  margin: 0;
  line-height: 1.6;
}

.wpb_single_image {
  margin-bottom: 20px;
}

.vc_single_image-wrapper {
  display: inline-block;
}

.vc_single_image-img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.vc_align_center {
  text-align: center;
}

.vc_row.vc_inner {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.vc_row.vc_inner::after {
  content: '';
  display: table;
  clear: both;
}

/* Responsive */
@media (max-width: 991px) {
  .career1 {
    padding: 40px 40px 0px 40px !important;
  }

  .vc_col-sm-4 {
    width: 50%;
    margin-bottom: 40px;
  }

  .vc_col-sm-4:last-child {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .career1 {
    padding: 30px 20px 0px 20px !important;
  }

  .vc_col-sm-4 {
    width: 100%;
    float: none;
    margin-bottom: 30px;
  }

  .wpb_text_column h2 {
    font-size: 20px !important;
  }

  .wpb_text_column p {
    font-size: 16px !important;
  }
}

/* Section 3: Contact Form */
.careers-section-3 {
  width: 100%;
  padding: 60px 0;
  background-color: #026937;
}

.row-6 {
  width: 90%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 5%;
}

.row-6 .wpb_wrapper h2 {
  font-family: 'Poppins';
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 40px 0;
  line-height: 1.4;
}

.contact-form {
  width: 100%;
}

.contact-form .row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.contact-form .col-sm-6,
.contact-form .col-sm-12 {
  padding: 0 15px;
  box-sizing: border-box;
}

.contact-form .col-sm-6 {
  width: 50%;
}

.contact-form .col-sm-12 {
  width: 100%;
}

.contact-form p {
  margin: 0 0 20px 0;
}

.contact-form label {
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 8px;
  display: block;
}

.contact-form label em {
  color: #ffeb3b;
  font-style: normal;
}

.contact-form-control {
  width: 100%;
  padding: 12px 15px;
  font-family: 'Poppins';
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.contact-form-control:focus {
  outline: none;
  border-color: #026937;
}

.contact-form-control.contact-textarea {
  min-height: 120px;
  resize: vertical;
}

.contact-form-control.contact-file {
  padding: 0;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
}

.contact-form-control.contact-file::file-selector-button {
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 600;
  color: #026937;
  background-color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  margin-right: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-form-control.contact-file::file-selector-button:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.contact-submit {
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 600;
  color: #026937;
  background-color: #fff;
  border: 2px solid #fff;
  padding: 14px 40px;
  border-radius: 4px;
  width: 100%;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-submit:hover:not(:disabled) {
  background-color: #e68900;
  color: #fff;
  border-color: #e68900;
}

.contact-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.toast-container {
  position: fixed;
  top: 90px;
  right: 30px;
  z-index: 9999;
}

.toast-message {
  min-width: 260px;
  max-width: 340px;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: 'Poppins';
  font-size: 14px;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

.toast-success {
  background-color: #2e7d32;
}

.toast-error {
  background-color: #c62828;
}



/* Responsive */
@media (max-width: 991px) {
  .careers-section-3 {
    padding: 50px 0;
  }

  .row-6 {
    width: 90%;
    padding: 0 4%;
  }

  .row-6 .wpb_wrapper h2 {
    font-size: 32px;
    margin-bottom: 35px;
  }

  .contact-form .row {
    margin: 0 -10px;
  }

  .contact-form .col-sm-6,
  .contact-form .col-sm-12 {
    padding: 0 10px;
  }
}

@media (max-width: 767px) {
  .careers-section-3 {
    padding: 40px 0;
  }

  .row-6 {
    width: 95%;
    padding: 0 3%;
  }

  .row-6 .wpb_wrapper h2 {
    font-size: 28px;
    margin-bottom: 30px;
  }

  .contact-form .row {
    margin: 0 -8px;
  }

  .contact-form .col-sm-6,
  .contact-form .col-sm-12 {
    padding: 0 8px;
  }

  .contact-form .col-sm-6 {
    width: 100%;
  }

  .contact-form-control {
    font-size: 14px;
    padding: 10px 12px;
  }

  .contact-form-control.contact-textarea {
    min-height: 100px;
  }

  .contact-submit {
    width: 100%;
    font-size: 16px;
    padding: 12px 30px;
  }

  .contact-form-control.contact-file::file-selector-button {
    font-size: 12px;
    padding: 6px 15px;
    margin-right: 8px;
  }
}

@media (max-width: 480px) {
  .row-6 {
    width: 100%;
    padding: 0 20px;
  }

  .row-6 .wpb_wrapper h2 {
    font-size: 24px;
    margin-bottom: 25px;
  }

  .contact-form label {
    font-size: 14px;
  }

  .contact-form-control {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
