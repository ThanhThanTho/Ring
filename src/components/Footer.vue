<template>
  <footer class="avo-custom-footer clearfix">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Logo -->
        <router-link to="/" class="footer-logo-link" @click="scrollToTop">
          <!-- Dùng tạm logo hiện có trong project -->
          <img src="/images/logo.jpg" alt="logo footer" loading="lazy" class="footer-logo-img" />
        </router-link>

        <!-- Grid Layout: 4 Columns -->
        <div class="footer-grid">
          <!-- Column 1: Company Info -->
          <div class="footer-col footer-col-1">
            <div class="footer-company-title">Công ty TNHH Tiếp Vận Thực</div>
            <div class="footer-contact-list">
              <div class="footer-contact-item">
                <!-- Thay icon path bằng logo tạm để tránh lỗi import, có thể đổi lại khi có file icon -->
                <img src="/icons/footer-location.webp" alt="icon location" class="footer-icon" />
                <span class="footer-contact-text">
                  <a href="https://maps.app.goo.gl/AmbFRs665pVeQs718" target="_blank" rel="noopener noreferrer nofollow" class="footer-link">
                    39 - 41, Đường B4, Phường An Khánh, TP. Hồ Chí Minh, Việt Nam
                  </a>
                </span>
              </div>
              <div class="footer-contact-item">
                <img src="/icons/footer-phone.webp" alt="icon phone" class="footer-icon" />
                <span class="footer-contact-text">
                  <a href="tel:02836363888" class="footer-link">028.3636.3888</a>
                </span>
              </div>
              <div class="footer-contact-item">
                <img src="/icons/footer-mail.webp" alt="icon mail" class="footer-icon" />
                <span class="footer-contact-text">
                  <a href="mailto:info@reallogistics.vn" class="footer-link">info@reallogistics.vn</a>
                </span>
              </div>
            </div>
          </div>

          <!-- Column 2: Services -->
          <div class="footer-col footer-col-2">
            <div class="footer-section-header">
              <div class="footer-section-title">Services</div>
            </div>
            <ul class="footer-links">
              <li><router-link to="/services/sea-freight" class="footer-link" active-class="" @click="scrollToTop">Sea Freight</router-link></li>
              <li><router-link to="/services/air-freight" class="footer-link" active-class="" @click="scrollToTop">Air Freight</router-link></li>
              <li><router-link to="/services/land-freight" class="footer-link" active-class="" @click="scrollToTop">Domestic Transport</router-link></li>
              <li><router-link to="/services/custom-clearance" class="footer-link" active-class="" @click="scrollToTop">Custom Clearance</router-link></li>
              <li><router-link to="/services/warehouse" class="footer-link" active-class="" @click="scrollToTop">Warehouse</router-link></li>
            </ul>
          </div>

          <!-- Column 3: Beacon -->
          <div class="footer-col footer-col-3">
            <div class="footer-section-header">
              <div class="footer-section-title">Beacon</div>
            </div>
            <ul class="footer-links">
              <li><router-link to="/about-us" class="footer-link" active-class="" @click="scrollToTop">About Us</router-link></li>
              <li><router-link to="/careers" class="footer-link" active-class="" @click="scrollToTop">Career</router-link></li>
            </ul>
          </div>

          <!-- Column 4: Hỗ trợ -->
          <div class="footer-col footer-col-4">
            <div class="footer-section-header">
              <div class="footer-section-title">Support</div>
            </div>
            <ul class="footer-links">
              <!-- No items -->
            </ul>
          </div>
        </div>

        <!-- Social Media Icons -->
        <ul class="footer-social-list">
          <li>
            <a href="#" class="footer-social-icon" aria-label="Facebook">
              <div class="footer-social-bg"></div>
              <i class="fab fa-facebook-f footer-social-svg"></i>
            </a>
          </li>
          <li>
            <a href="#" class="footer-social-icon" aria-label="Email">
              <div class="footer-social-bg"></div>
              <i class="fas fa-envelope footer-social-svg"></i>
            </a>
          </li>
          <li>
            <a href="#" class="footer-social-icon" aria-label="Phone">
              <div class="footer-social-bg"></div>
              <i class="fas fa-phone footer-social-svg"></i>
            </a>
          </li>
          <li>
            <a href="#" class="footer-social-icon footer-social-icon-whatsapp" aria-label="WhatsApp">
              <div class="footer-social-bg"></div>
              <i class="fab fa-whatsapp footer-social-svg"></i>
            </a>
          </li>
          <li>
            <a href="#" class="footer-social-icon" aria-label="Linked In">
              <div class="footer-social-bg"></div>
              <i class="fab fa-linkedin-in footer-social-svg"></i>
            </a>
          </li>
          <li>
            <a href="#" class="footer-social-icon" aria-label="Zalo">
              <div class="footer-social-bg"></div>
              <i class="fas fa-comment-dots footer-social-svg"></i>
            </a>
          </li>
          <li>
            <a href="#" class="footer-social-icon footer-social-icon-wechat" aria-label="WeChat">
              <div class="footer-social-bg"></div>
              <i class="fab fa-weixin footer-social-svg"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer Bar: Copyright -->
    <div class="footer-bar">
      <div class="footer-bar-container">
        <div class="footer-bar-content">
          <div class="footer-copyright">
            Copyright © 2026 Real Logistics Co., Ltd. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.avo-custom-footer[data-v-4896eafd] {
    background: radial-gradient(ellipse 60% 58% at 16% 14%, #ffffff 0%, #ffffff 20%, rgba(0, 77, 115, 0.4) 30%, rgba(0, 61, 96, 0.75) 89%, #003d5c 121%);
    color: #FF9900;
    width: 100%;
    position: relative;
    padding: 40px 0 0;
}

.footer-container {
  max-width: 80%;
  margin: 0 auto;
  padding: 0 40px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.footer-logo-link {
  display: block;
  max-width: 180px;
  width: 100%;
}

.footer-logo-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  scale: 1.5;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.footer-col-1 {
  max-width: 301px;
}

.footer-company-title {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
}

.footer-contact-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.footer-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 2px;
}

.footer-contact-text {
  flex: 1;
}

.footer-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 10px 0;
}

.footer-section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}


.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links li {
  margin: 0;
}

.footer-link {
  font-family: 'Poppins';
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  line-height: 1.6;
}

.footer-link:hover {
  color: #FF9900;
}

.footer-link.router-link-active,
.footer-link.router-link-exact-active {
  color: rgba(255, 255, 255, 0.7);
}

.footer-link.router-link-active:hover,
.footer-link.router-link-exact-active:hover {
  color: #FF9900;
}

.footer-social-list {
  display: flex;
  align-items: center;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 0 6px;
}

.footer-social-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  text-decoration: none;
}

.footer-social-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #026937;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
}

.footer-social-icon:hover .footer-social-bg {
  transform: translate(-50%, -50%) scale(1);
}

.footer-social-svg {
  position: relative;
  z-index: 20;
  color: #026937;
  transition: color 0.3s ease-in-out;
  font-size: 18px;
}

.footer-social-icon:hover .footer-social-svg {
  color: #fff;
}

/* WhatsApp và WeChat có màu riêng */
.footer-social-icon-whatsapp .footer-social-svg {
  color: #25D366;
}

.footer-social-icon-wechat .footer-social-svg {
  color: #07C160;
}

/* WhatsApp và WeChat không có hover effect vì đã có màu sẵn */
.footer-social-icon-whatsapp:hover .footer-social-bg,
.footer-social-icon-wechat:hover .footer-social-bg {
  transform: translate(-50%, -50%) scale(0);
}

.footer-social-icon-whatsapp:hover .footer-social-svg,
.footer-social-icon-wechat:hover .footer-social-svg {
  color: inherit;
}

/* Responsive */
@media (max-width: 991px) {
  .avo-custom-footer {
    background: radial-gradient(
      ellipse 100% 70% at 15% 22%,
      #ffffff 0%,
      #ffffff 20%,
      rgba(0, 77, 115, 0.4) 50%,
      rgba(0, 61, 96, 0.75) 75%,
      #003d5c 100%
    );
    padding: 30px 0 0;
  }

  .footer-container {
    padding: 0 20px;
  }

  .footer-logo-link {
    max-width: 157px;
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .footer-col-1 {
    max-width: 360px;
  }

  .footer-col-2,
  .footer-col-3,
  .footer-col-4 {
    padding-left: 120px;
  }
}

@media (max-width: 767px) {
  .footer-container {
    padding: 0 16px;
  }

  .footer-content {
    gap: 30px;
  }

  .footer-logo-link {
    max-width: 157px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .footer-col {
    margin-bottom: 0;
  }

  .footer-col-1 {
    max-width: 100%;
  }

  .footer-col-2,
  .footer-col-3,
  .footer-col-4 {
    padding-left: 0;
  }

  .footer-section-header {
    padding: 0 6px;
  }

  .footer-links {
    padding: 12px 0;
  }

  .footer-social-list {
    padding: 0 6px;
  }

  .footer-social-icon {
    width: 35px;
    height: 35px;
  }
}

/* Footer Bar: Copyright & Terms */
.footer-bar {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background-color: transparent;
  padding-top: 12px;
  padding-bottom: 40px;
}

.footer-bar-container {
  max-width: 80%;
  margin: 0 auto;
  padding: 0 40px;
}

.footer-bar-content {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}

.footer-copyright {
  font-family: 'Poppins';
  font-size: 14px;
  line-height: 1.6;
}

/* Responsive Footer Bar */
@media (min-width: 768px) {
  .footer-bar {
    padding-bottom: 40px;
  }

  .footer-bar-content {
    text-align: left;
  }
}

@media (max-width: 767px) {
  .footer-bar {
    padding-bottom: 28px;
  }

  .footer-bar-container {
    padding: 0 16px;
  }
}

.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
</style>
