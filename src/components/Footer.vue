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
              <li><router-link to="/services/land-freight" class="footer-link" active-class="" @click="scrollToTop">Land Freight</router-link></li>
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
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer nofollow" 
               class="footer-social-icon" aria-label="Facebook">
              <div class="footer-social-bg"></div>
              <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer-social-svg">
                <path d="M10.139 9.033L9.80741 11.8198C9.7931 11.9492 9.73139 12.0686 9.63419 12.1551C9.537 12.2416 9.4112 12.2891 9.28109 12.2883H6.38635V20.5514C6.38706 20.6501 6.34872 20.745 6.2797 20.8155C6.21068 20.886 6.11658 20.9264 6.01793 20.9277H3.07056C3.02149 20.9271 2.97303 20.9167 2.92796 20.8973C2.88288 20.8779 2.84207 20.8498 2.80786 20.8146C2.77365 20.7794 2.7467 20.7378 2.72856 20.6922C2.71042 20.6466 2.70145 20.5979 2.70214 20.5488L2.71793 12.2883H0.525827C0.38624 12.2883 0.25237 12.2328 0.153666 12.1341C0.0549631 12.0354 -0.000488281 11.9015 -0.000488281 11.7619V8.97773C-0.000488281 8.83815 0.0549631 8.70428 0.153666 8.60557C0.25237 8.50687 0.38624 8.45142 0.525827 8.45142H2.70214V5.75142C2.70214 2.62774 4.56267 0.927734 7.28109 0.927734H9.51004C9.64963 0.927734 9.78349 0.983185 9.8822 1.08189C9.9809 1.18059 10.0364 1.31446 10.0364 1.45405V3.79879C10.0364 3.93838 9.9809 4.07225 9.8822 4.17095C9.78349 4.26965 9.64963 4.3251 9.51004 4.3251H8.14425C6.6653 4.34879 6.38635 5.05668 6.38635 6.11458V8.44352H9.62846C9.70189 8.44519 9.77416 8.46222 9.84062 8.4935C9.90708 8.52478 9.96625 8.56962 10.0143 8.62514C10.0624 8.68066 10.0984 8.74564 10.1198 8.81588C10.1413 8.88612 10.1478 8.96008 10.139 9.033Z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer nofollow" 
               class="footer-social-icon" aria-label="Linked In">
              <div class="footer-social-bg"></div>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer-social-svg">
                <path d="M3.75165 16.7387V6.07045H0.208826V16.7387H3.75202H3.75165ZM1.98098 4.61413C3.21618 4.61413 3.98517 3.79493 3.98517 2.77116C3.96205 1.72407 3.21618 0.927734 2.00447 0.927734C0.791929 0.927734 0 1.72407 0 2.77107C0 3.79484 0.768716 4.61404 1.95777 4.61404H1.9807L1.98098 4.61413ZM5.71266 16.7387H9.2552V10.7817C9.2552 10.4633 9.27833 10.144 9.37192 9.91662C9.62791 9.27931 10.2108 8.6196 11.1898 8.6196C12.4714 8.6196 12.9844 9.59782 12.9844 11.0321V16.7387H16.5268V10.6219C16.5268 7.34517 14.7793 5.82034 12.4484 5.82034C10.5375 5.82034 9.6982 6.88938 9.2319 7.61749H9.25548V6.07082H5.71284C5.75908 7.07164 5.71256 16.7391 5.71256 16.7391L5.71266 16.7387Z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer nofollow" 
               class="footer-social-icon" aria-label="Zalo">
              <div class="footer-social-bg"></div>
              <svg width="28" height="10" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer-social-svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3987 0.00976562C17.4033 1.24213 17.4012 2.4747 17.3991 3.70723V3.70727V3.70731V3.70734C17.3959 5.57472 17.3927 7.442 17.4129 9.30834C17.5598 9.8281 18.0685 9.79427 18.5446 9.76261C18.7306 9.75023 18.9116 9.73819 19.0642 9.75963C19.0552 6.5101 19.0552 3.25929 19.0642 0.00976562H17.3987ZM0.427991 0.12485L0.427381 0.250875C0.424901 0.757311 0.422416 1.26468 0.433163 1.77095C1.62198 1.75802 2.81137 1.76003 4.00056 1.76204H4.00057H4.00058H4.00059C4.59515 1.76304 5.18966 1.76405 5.78403 1.76319C4.78424 3.02594 3.77501 4.28183 2.76573 5.53778L2.76567 5.53785L2.76566 5.53787L2.7656 5.53794L2.76558 5.53796L2.76548 5.53809C2.02303 6.462 1.28055 7.38594 0.541783 8.31266C0.197222 8.70479 0.19013 9.24903 0.183705 9.74203L0.183594 9.75058C1.51244 9.76451 2.8417 9.76264 4.17114 9.76077H4.17121H4.17127H4.17133C5.18599 9.75934 6.20074 9.75791 7.2155 9.7635C7.23801 9.76329 7.26092 9.76324 7.2841 9.7632H7.28428C7.53666 9.76272 7.8215 9.76219 7.9849 9.53722C8.18399 9.27116 8.16838 8.94114 8.15304 8.61674C8.14646 8.47761 8.13994 8.3395 8.15041 8.20792C7.61506 8.20792 7.07971 8.20856 6.54435 8.20919C5.206 8.21077 3.86764 8.21236 2.52929 8.20404C3.40094 7.11818 4.26373 6.02535 5.12658 4.93245C6.00845 3.81547 6.89037 2.69841 7.78188 1.58862C8.12067 1.18001 8.14912 0.629153 8.16723 0.123557C6.33445 0.110695 4.50232 0.115456 2.66945 0.120218C1.92245 0.122159 1.17533 0.124101 0.427991 0.12485ZM23.1931 2.27654C22.0888 2.51059 21.0996 3.24894 20.5875 4.25884C19.9836 5.40322 20.0237 6.85924 20.6884 7.97129C21.5354 9.47644 23.4905 10.2277 25.1237 9.6523C27.0466 9.073 28.2104 6.81139 27.5729 4.90927C27.0647 3.08084 25.05 1.86146 23.1931 2.27654ZM9.43705 3.6304C8.25645 5.02952 8.3224 7.27432 9.5961 8.59197C10.7909 9.95229 13.05 10.2057 14.4879 9.08852C14.5036 9.12373 14.5187 9.16013 14.5341 9.19694C14.6211 9.4061 14.7136 9.62827 14.9379 9.71954C15.197 9.77295 15.4622 9.76814 15.7272 9.76334C15.8471 9.76116 15.967 9.75899 16.0862 9.76221C16.0797 7.33018 16.0823 4.89943 16.0849 2.46869V2.46792C15.8244 2.46921 15.5642 2.46954 15.3041 2.46986H15.3039H15.3037C15.0435 2.47018 14.7833 2.47051 14.5228 2.4718C14.5248 2.53212 14.528 2.62206 14.5312 2.71222L14.5312 2.71309L14.5312 2.71425L14.5313 2.71542L14.5313 2.71628C14.5345 2.80644 14.5377 2.89638 14.5396 2.95671C14.1414 2.7149 13.7289 2.48732 13.2737 2.37223C11.8952 1.97784 10.3306 2.52352 9.43705 3.6304ZM11.5422 3.95657C12.6232 3.49623 13.9797 4.10915 14.3819 5.2031C14.797 6.20912 14.3508 7.4673 13.3849 7.97418C12.3439 8.57159 10.8879 8.11642 10.3707 7.03282C9.76419 5.92077 10.3448 4.37812 11.5422 3.95657ZM26.0573 5.29216C25.6952 4.13097 24.2922 3.46116 23.162 3.92408C22.0293 4.32364 21.4189 5.70207 21.8612 6.81542C22.2271 7.86799 23.4594 8.51195 24.5301 8.18867C25.7521 7.89644 26.4905 6.46499 26.0573 5.29216Z" fill="currentColor"></path>
              </svg>
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
.avo-custom-footer {
  background-image: url('/images/Footer.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #E5E9E7;
  color: #FF9900 ;
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
}

.footer-social-icon:hover .footer-social-svg {
  color: #fff;
}

/* Responsive */
@media (max-width: 991px) {
  .avo-custom-footer {
    background-image: url('/images/Footer_mobile.png');
    background-size: cover;
    background-position: center top;
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
