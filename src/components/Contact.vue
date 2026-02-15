<template>
  <div class="contact-page">
    <!-- Hero Slider Section -->
    <section class="hero-section relative">
      <div class="absolute inset-0 w-full h-full">
        <img 
          src="/images/contact-slider.jpg" 
          alt="Contact" 
          class="object-cover w-full h-full" 
          loading="eager"
        />
      </div>
      <div class="bg-common absolute inset-0 w-full h-full"></div>
      <div class="relative z-10 flex items-center h-full">
        <div class="container">
          <div>
            <h1 class="text-white display-1">Contact</h1>
          </div>
          <div class="description title-3 text-white mt-4">
            With our fully integrated logistics solutions, we provide end-to-end support for all your shipment needs. Reach out to us for expert support.
          </div>
        </div>
      </div>
    </section>

    <!-- Office Hours & Map Section -->
    <section class="support-page-row-3">
      <div class="vc_row wpb_row vc_row-fluid">
        <div class="wpb_column vc_column_container vc_col-sm-6">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <h2>Our Address</h2>
                  <h4>Weekdays</h4>
                  <p>9:00 am – 6:00 pm</p>
                  <h4>Weekends &amp; Public Holidays</h4>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wpb_column vc_column_container vc_col-sm-6">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_gmaps_widget wpb_content_element" style="filter:none;">
                <div class="wpb_wrapper">
                  <div class="wpb_map_wraper">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149141.000542373!2d106.58932294282903!3d10.801419331720126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1768370722681!5m2!1sen!2s" 
                      width="100%" 
                      height="410" 
                      style="border:0;" 
                      allowfullscreen="" 
                      loading="lazy" 
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Connect with us Section -->
    <section class="wsite-section-wrap">
      <div class="wsite-section wsite-body-section">
        <div class="wsite-section-content">
          <div class="container">
            <div class="wsite-section-elements">
              <!-- Content 1 -->
              <div class="wsite-multicol">
                <div class="wsite-multicol-grid">
                  <div class="wsite-multicol-col-image">
                    <div class="wsite-image wsite-image-border-none">
                      <a href="/contact">
                        <img src="/images/nv1.jpg" alt="Picture">
                      </a>
                    </div>
                  </div>
                  <div class="wsite-multicol-col-text">
                    <div class="paragraph">
                      <font size="5" style="color:rgb(63, 63, 63)">
                        <strong>
                          <font color="#0a2560">
                            <a href="/contact">Connect with us</a>
                          </font>
                        </strong>
                      </font>
                      <br><br>
                      We'd love to help support your business, add value, and provide the supply chain solution you need. Let's discuss about the ways we can help.
                    </div>
                    <div style="text-align:left;">
                      <a class="wsite-button wsite-button-small wsite-button-highlight" href="/contact">
                        <span class="wsite-button-inner">Get in touch</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content 2 -->
              <div class="wsite-multicol">
                <div class="wsite-multicol-grid">
                  <div class="wsite-multicol-col-image">
                    <div class="wsite-image wsite-image-border-none">
                      <a href="/contact">
                        <img src="/images/nv2.jpg" alt="Picture">
                      </a>
                    </div>
                  </div>
                  <div class="wsite-multicol-col-text">
                    <div class="paragraph">
                      <font size="5" style="color:rgb(63, 63, 63)">
                        <strong>
                          <font color="#0a2560">
                            <a href="/contact">Connect with us</a>
                          </font>
                        </strong>
                      </font>
                      <br><br>
                      We'd love to help support your business, add value, and provide the supply chain solution you need. Let's discuss about the ways we can help.
                    </div>
                    <div style="text-align:left;">
                      <a class="wsite-button wsite-button-small wsite-button-highlight" href="/contact">
                        <span class="wsite-button-inner">Get in touch</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
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

onUnmounted(() => {
  if (toastTimeoutId) {
    clearTimeout(toastTimeoutId)
  }
})
</script>

<style scoped>
.contact-page {
  width: 100%;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 550px;
  display: flex;
  align-items: center;
  overflow: hidden;
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

.bg-common {
  background: rgba(0, 0, 0, 0.4);
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

.hero-section .container {
  max-width: 100%;
  padding: 0 10%;
}

.display-1 {
  font-family: 'Poppins';
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  margin: 0 0 10px 0;
  text-align: left;
  color: #fff;
}

.description {
  width: 100%;
  max-width: 720px;
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  color: #fff;
}

.text-white {
  color: #fff;
}

.mt-4 {
  margin-top: 16px;
}

/* Office Hours & Map Section */
.support-page-row-3 {
  width: 100%;
  padding: 0;
}

.support-page-row-3 .vc_row {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  gap: 0;
}

.support-page-row-3 .wpb_column {
  width: 50%;
  flex: 0 0 50%;
  padding: 0;
}

.support-page-row-3 .vc_column-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.support-page-row-3 .wpb_wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.support-page-row-3 .wpb_text_column {
  width: auto;
  align-self: center;
}

.support-page-row-3 .wpb_text_column .wpb_wrapper {
  width: auto;
  text-align: left;
  display: block;
}

.support-page-row-3 .wpb_text_column .wpb_wrapper h2,
.support-page-row-3 h2 {
  font-family: 'Poppins';
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin: 0 0 30px 0;
  text-align: left !important;
}

.support-page-row-3 .wpb_text_column .wpb_wrapper h4,
.support-page-row-3 h4 {
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 20px 0 10px 0;
  text-align: left !important;
}

.support-page-row-3 h4:first-of-type {
  margin-top: 0;
}

.support-page-row-3 .wpb_text_column .wpb_wrapper p,
.support-page-row-3 p {
  font-family: 'Poppins';
  font-size: 16px;
  color: #666;
  margin: 0 0 10px 0;
  line-height: 1.6;
  text-align: left !important;
}

.wpb_map_wraper {
  width: 100%;
  height: 410px;
  border-radius: 0;
  overflow: hidden;
}

.wpb_map_wraper iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.wpb_content_element{
    width: 100%;
}

/* Connect with us Section */
.wsite-section-wrap {
  width: 100%;
  padding: 60px 0;
  background: #fff;
}

.wsite-section-wrap .container {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

/* 2 content nằm trên 1 hàng + thống nhất thành 1 khối */
.wsite-section-elements {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  background: #fff;
  border-radius: 0;
  overflow: hidden;
  border: none;
}

.wsite-multicol {
  width: 100%;
  padding: 40px 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wsite-multicol + .wsite-multicol {
  border-left: none;
}

/* layout bên trong mỗi content */
.wsite-multicol-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 30px;
  align-items: center;
  margin: 0 auto;
  max-width: 90%;
}

.wsite-image {
  text-align: center;
  margin: 0;
}

.wsite-image img {
  width: 200px;
  max-width: 200px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.paragraph {
  font-family: 'Poppins';
  font-size: 18px;
  line-height: 1.6;
  color: #3f3f3f;
  margin-bottom: 20px;
}

.paragraph font[size="5"] {
  font-size: 28px;
}

.paragraph font[color="#0a2560"] a {
  color: #0a2560;
  text-decoration: none;
  font-weight: 700;
}

.paragraph font[color="#0a2560"] a:hover {
  text-decoration: underline;
}

.wsite-button {
  display: inline-block;
  text-decoration: none;
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.wsite-button-highlight {
  background-color: #FF9900;
  color: #fff;
}

.wsite-button-highlight:hover {
  background-color: #e68900;
  color: #fff;
}

.wsite-button-inner {
  display: block;
}

/* Responsive */
@media (max-width: 767px) {
  .hero-section {
    height: 410px;
  }

  .hero-section .container {
    padding: 0 20px;
  }

  .display-1 {
    font-size: 28px;
    line-height: 40px;
  }

  .description {
    font-size: 16px;
    line-height: 22px;
  }

  .support-page-row-3 {
    padding: 0;
  }

  .support-page-row-3 .vc_row {
    padding: 0;
    flex-direction: column;
    gap: 0;
  }

  .support-page-row-3 .wpb_column {
    width: 100%;
    flex: 0 0 100%;
    padding: 10% 0;
  }

  .support-page-row-3 .wpb_column:nth-child(2) {
    padding: 0;
  }

  .support-page-row-3 h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .support-page-row-3 h4 {
    font-size: 18px;
    margin: 15px 0 8px 0;
  }

  .wpb_map_wraper {
    height: 300px;
  }

  .wsite-section-wrap {
    padding: 40px 0;
  }

  .wsite-section-wrap .container {
    padding: 0;
  }

  .wsite-section-elements {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .wsite-multicol-grid {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
  }

  .wsite-section-elements {
    border-radius: 0;
  }

  .wsite-multicol {
    padding: 20px 0;
  }

  .wsite-multicol + .wsite-multicol {
    border-left: none;
    border-top: none;
  }

  .wsite-image {
    width: 100%;
    margin: 0 auto;
  }

  .wsite-image img {
    width: 95%;
    max-width: 95%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  .wsite-multicol-col-image {
    text-align: center;
  }

  .paragraph {
    font-size: 16px;
    text-align: left;
    padding: 0 16px;
    box-sizing: border-box;
  }

  /* Button "Get in touch" căn lề giống paragraph */
  .wsite-multicol-col-text > div:last-child {
    padding: 0 16px;
    box-sizing: border-box;
  }

  .paragraph font[size="5"] {
    font-size: 20px;
  }
}

/* Contact Form Section */
.careers-section-3 {
  width: 100%;
  padding: 60px 0;
  background-color: #0170A7;
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

/* Responsive Contact Form */
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

