<template>
  <footer class="avo-custom-footer clearfix">
    <div class="container-fluid">
      <!-- Footer Main Content Section -->
      <section class="footer-main">
        <div class="container-fluid">
          <div class="row g-0 justify-content-between">
            <!-- Column 1: Logo & Contact Info (Larger, Left) -->
            <div class="col-auto footer-contact-col">
              <div class="footer-logo">
                <img 
                  loading="lazy" 
                  src="/vite.svg" 
                  alt="Minelog_Logo"
                  class="footer-logo-img"
                />
              </div>
              <div class="footer-contact-info">
                <p>
                  Suite 06-03, Level 6, Centro 8, Jalan Batu Tiga Lama, 41300 Klang, Selangor Malaysia
                  <br />
                  <a href="tel:+603-33452788">+603-33452788</a>
                  <br />
                  <a href="mailto:info@minelog.com.my">info@minelog.com.my</a>
                </p>
              </div>
            </div>

            <!-- Column 2: Services & Solutions -->
            <div class="col-auto footer-links-col">
              <h4>Services & Solutions</h4>
              <ul class="footer-links">
                <li><a href="/air-freight">Air Freight</a></li>
                <li><a href="/sea-freight">Sea Freight</a></li>
                <li><a href="/haulage">Haulage & Transport</a></li>
                <li><a href="/custom-clearance">Custom Clearance</a></li>
                <li><a href="/warehouse">Warehouse</a></li>
                <li><a href="/break-bulk">Break Bulk</a></li>
                <li><a href="/project-cargo-handling">Project Cargo Handling</a></li>
                <li><a href="/supply-chain-financing">Supply Chain Financing</a></li>
                <li><a href="/cargo-insurance">Cargo Insurance</a></li>
              </ul>
            </div>

            <!-- Column 3: Minelog & Support -->
            <div class="col-auto footer-links-col">
              <h4>Minelog</h4>
              <ul class="footer-links">
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/insights">Insights</a></li>
                <li><a href="/careers">Careers</a></li>
              </ul>
              <h4>Support</h4>
              <ul class="footer-links">
                <li><a href="/post-login">Post Login</a></li>
                <li><a href="/support">Contact Us</a></li>
              </ul>
            </div>

            <!-- Column 4: Follow Us & Subscribe -->
            <div class="col-auto footer-links-col">
              <h4>Follow Us</h4>
              <div class="elementor-social-icons-wrapper">
                <a 
                  class="elementor-icon elementor-social-icon elementor-social-icon-facebook-f" 
                  href="https://www.facebook.com/minelogistics/" 
                  target="_blank"
                  aria-label="Facebook"
                >
                  <span class="elementor-screen-only">Facebook</span>
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a 
                  class="elementor-icon elementor-social-icon elementor-social-icon-twitter" 
                  href="https://twitter.com/MineLogistics" 
                  target="_blank"
                  aria-label="Twitter"
                >
                  <span class="elementor-screen-only">Twitter</span>
                  <i class="fab fa-twitter"></i>
                </a>
                <a 
                  class="elementor-icon elementor-social-icon elementor-social-icon-linkedin-in" 
                  href="https://www.linkedin.com/company/mine-logistics-sdn-bhd" 
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <span class="elementor-screen-only">LinkedIn</span>
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a 
                  class="elementor-icon elementor-social-icon elementor-social-icon-youtube" 
                  href="https://www.youtube.com/channel/UCNeMUPgMDaxv-fAQEMVybpw" 
                  target="_blank"
                  aria-label="YouTube"
                >
                  <span class="elementor-screen-only">YouTube</span>
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
              <h4>Subscribe</h4>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer Bar Section -->
      <section class="footer-bar">
        <div class="container">
          <div class="row align-items-center">
            <!-- Copyright Column -->
            <div class="col-md-4">
              <p class="mb-0">
                <a href="/">Copyright © {{ currentYear }} Minelog All Rights Reserved.</a>
              </p>
            </div>

            <!-- Terms & Privacy Column -->
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4 text-center">
                  <p class="mb-0">
                    <a href="/terms-of-use">Terms of Use</a>
                  </p>
                </div>
                <div class="col-md-4 text-end">
                  <p class="mb-0">
                    <a href="/privacy-policy">Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.avo-custom-footer {
  background-image: url('/images/Footer.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #E5E9E7;
  color: #333;
  width: 100%;
  position: relative;
}

.container-fluid {
  padding: 0;
}

/* Footer Main Section */
.footer-main {
  padding: 60px 0;
  background-color: transparent;
}

.container-fluid {
  padding: 0 40px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.row {
  margin: 0;
}

/* Footer Contact Column (Larger, Left) */
.footer-contact-col {
  padding-left: 0;
  padding-right: 80px;
  flex: 0 0 auto;
  max-width: none;
}

/* Footer Links Columns */
.footer-links-col {
  padding: 0 30px;
  flex: 0 0 auto;
  max-width: none;
}

.footer-logo-img {
  max-width: 200px;
  height: auto;
  margin-bottom: 20px;
}

.footer-contact-info {
  font-family: 'Poppins';
  font-size: 14px;
  line-height: 24px;
  color: #333;
}

.footer-contact-info p {
  margin: 0;
}

.footer-contact-info a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-contact-info a:hover {
  color: #FF9900;
}

/* Footer Links Columns */
.footer-links-col {
  padding: 0 15px;
}

.footer-links-col h4 {
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 600;
  color: #026937;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-links-col h4:not(:first-child) {
  margin-top: 30px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  font-family: 'Poppins';
  font-size: 14px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #FF9900;
}

/* Social Icons */
.elementor-social-icons-wrapper {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.elementor-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s;
  color: #333;
}

.elementor-social-icon:hover {
  background: #FF9900;
  color: #fff;
  transform: translateY(-3px);
}

.elementor-social-icon i {
  font-size: 18px;
}

.elementor-screen-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Footer Bar Section */
.footer-bar {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  background-color: transparent;
}

.footer-bar p {
  font-family: 'Poppins';
  font-size: 14px;
  color: #333;
  margin: 0;
}

.footer-bar a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-bar a:hover {
  color: #FF9900;
}

/* Responsive */
@media (max-width: 991px) {
  .avo-custom-footer {
    background-image: url('/images/Footer_mobile.png');
    background-size: cover;
    background-position: center top;
  }

  .container-fluid {
    padding: 0 20px;
  }

  .footer-main {
    padding: 40px 0;
  }

  .row.justify-content-between {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-contact-col {
    padding-right: 0;
    padding-bottom: 30px;
    margin-bottom: 30px;
    width: 100%;
  }

  .footer-links-col {
    padding: 0;
    margin-bottom: 30px;
    width: 100%;
  }

  .footer-logo-img {
    max-width: 150px;
  }
}

@media (max-width: 768px) {
  .avo-custom-footer {
    background-image: url('/images/Footer_mobile.png');
    background-size: cover;
    background-position: center top;
  }

  .footer-main {
    padding: 30px 0;
  }

  .container-fluid {
    padding: 0 16px;
  }

  .container {
    padding: 0 16px;
  }

  .footer-contact-col {
    padding-bottom: 25px;
    margin-bottom: 25px;
  }

  .footer-links-col {
    margin-bottom: 25px;
  }

  .footer-links-col h4 {
    font-size: 16px;
    margin-bottom: 15px;
  }

  .footer-links {
    font-size: 13px;
  }

  .footer-links li {
    margin-bottom: 10px;
  }

  .footer-bar .col-md-4,
  .footer-bar .col-md-8 {
    text-align: center;
    margin-bottom: 15px;
    width: 100%;
  }

  .footer-bar .row {
    flex-direction: column;
  }

  .elementor-social-icons-wrapper {
    gap: 10px;
    margin-bottom: 20px;
  }

  .elementor-social-icon {
    width: 35px;
    height: 35px;
  }

  .elementor-social-icon i {
    font-size: 16px;
  }
}

.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
</style>
