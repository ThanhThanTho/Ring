<template>
  <nav class="header apply-header white-header clearfix">
    <div class="nav-box">
      <div class="stuck-nav">
        <div class="header-top hidden-xs hidden-sm">
          <div class="container-fluid">
            <div class="col"></div>
          </div>
        </div>
        <div class="container-fluid">
          <!-- Logo -->
          <div class="top-logo">
            <router-link to="/" @click="scrollToTop">
              <img
                alt="Logo"
                class="logo1 avo-logo-dark"
                style="height: 70px"
                src="/images/logo.jpg"
              />
              <img
                alt="Logo"
                class="logo1 avo-logo-light"
                style="height: 70px"
                src="/images/logo.jpg"
              />
            </router-link>
          </div>
          <!--End Logo-->

          <!-- Navigation Menu -->
          <div class="main-menu menu-wrapper hidden-xs hidden-sm">
            <div class="menu-menu-2-container">
              <ul id="menu-menu-2" class="home-nav navigation menu">
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <router-link to="/about-us" @click="scrollToTop">About Us</router-link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                  <a href="#" @click.prevent>
                    Services
                    <span class="dropdown-arrow">▼</span>
                  </a>
                  <ul class="sub-menu">
                    <li class="menu-item">
                      <router-link to="/services/sea-freight" @click="scrollToTop">Sea Freight</router-link>
                    </li>
                    <li class="menu-item">
                      <router-link to="/services/air-freight" @click="scrollToTop">Air Freight</router-link>
                    </li>
                    <li class="menu-item">
                      <router-link to="/services/land-freight" @click="scrollToTop">Domestic Transport</router-link>
                    </li>
                    <li class="menu-item">
                      <router-link to="/services/custom-clearance" @click="scrollToTop">Customs Clearance</router-link>
                    </li>
                    <li class="menu-item">
                      <router-link to="/services/warehouse" @click="scrollToTop">Warehouse</router-link>
                    </li>
                  </ul>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <router-link to="/careers" @click="scrollToTop">Careers</router-link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <router-link to="/contact" @click="scrollToTop">Contact</router-link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <router-link to="/support" @click="scrollToTop">Support</router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- End menu-wrapper -->

          <!-- Search Icon -->
          <div class="search-icon-header hidden-xs hidden-sm">
            <a class="search" href="#" @click.prevent="toggleSearch">
              <i class="fa fa-search"></i>
            </a>
            <!-- Minelog:: Custom search box -->
            <div class="black-search-block" :class="{ active: isSearchOpen }">
              <div class="black-search-table">
                <div class="black-search-table-cell">
                  <div>
                    <form role="search" method="get" id="search-form-1" class="searchform" @submit.prevent="handleSearch">
                      <input
                        type="search"
                        class="focus-input"
                        placeholder="Type search keyword..."
                        v-model="searchQuery"
                        name="s"
                      />
                      <input type="submit" class="searchsubmit" value="" />
                    </form>
                  </div>
                </div>
              </div>
              <div class="close-black-block">
                <a href="#" @click.prevent="toggleSearch">
                  <i class="fa fa-times">✕</i>
                </a>
              </div>
            </div>
          </div>

          <div class="mobile-wrapper hidden-lg">
            <a href="#" class="hamburger" @click.prevent="toggleMobileMenu">
              <div class="hamburger__icon" :class="{ active: isMobileMenuOpen }"></div>
            </a>
            <div class="fat-nav" :class="{ active: isMobileMenuOpen }">
              <router-link to="/" @click="closeMobileMenu">
                <img src="/images/logo.jpg" alt="Logo" />
              </router-link>
              <div class="fat-nav__wrapper">
                <form role="search" method="get" id="search-form-2" class="searchform" @submit.prevent="handleSearch">
                  <input
                    type="search"
                    class="focus-input"
                    placeholder="Type search keywords..."
                    v-model="searchQuery"
                    autocomplete="off"
                    name="s"
                    required
                  />
                  <button type="submit" class="searchsubmit" value="">
                    <span>🔍</span>
                  </button>
                </form>
                <div class="fat-list">
                  <ul id="menu-menu-3" class="mob-nav menu">
                    <li class="menu-item">
                      <router-link to="/about-us" @click="closeMobileMenu">About Us</router-link>
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a href="#" @click.prevent="toggleMobileSubmenu">
                        Services
                        <span class="mobile-arrow">▼</span>
                      </a>
                      <ul class="sub-menu" :class="{ active: isMobileSubmenuOpen }">
                        <li class="menu-item">
                          <router-link to="/services/sea-freight" @click="closeMobileMenu">Sea Freight</router-link>
                        </li>
                        <li class="menu-item">
                          <router-link to="/services/air-freight" @click="closeMobileMenu">Air Freight</router-link>
                        </li>
                        <li class="menu-item">
                          <router-link to="/services/land-freight" @click="closeMobileMenu">Domestic Transport</router-link>
                        </li>
                        <li class="menu-item">
                          <router-link to="/services/custom-clearance" @click="closeMobileMenu">Customs Clearance</router-link>
                        </li>
                        <li class="menu-item">
                          <router-link to="/services/warehouse" @click="closeMobileMenu">Warehouse</router-link>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item">
                      <router-link to="/insights" @click="closeMobileMenu">Insights</router-link>
                    </li>
                    <li class="menu-item">
                      <router-link to="/careers" @click="closeMobileMenu">Careers</router-link>
                    </li>
                    <li class="menu-item">
                      <router-link to="/support" @click="closeMobileMenu">Support</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!--End mobile-wrapper-->
        </div>
        <!--End container-fluid-->
      </div>
      <!--End stuck-nav-->
    </div>
    <!--End nav-box-->
  </nav>
  <!--End header-->
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isSearchOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileSubmenuOpen = ref(false)
const searchQuery = ref('')

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isMobileSubmenuOpen.value = false
  document.body.style.overflow = ''
  // Scroll về đầu trang
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleMobileSubmenu = () => {
  isMobileSubmenuOpen.value = !isMobileSubmenuOpen.value
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // Xử lý tìm kiếm ở đây
    console.log('Searching for:', searchQuery.value)
    // Có thể thêm router navigation hoặc API call
  }
}
</script>

<style scoped>
/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 75px;
  z-index: 9999;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.nav-box {
  position: relative;
  width: 100%;
}

.stuck-nav {
  position: relative;
  width: 100%;
}

.container-fluid {
  max-width: 75%;
  width: 100%;
  margin: 0 auto;
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: nowrap;
  gap: 20px;
}

/* Logo */
.top-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 75px;
}

.top-logo img {
  height: 70px;
  width: auto;
}

.top-logo a,
.top-logo router-link {
  display: flex;
  align-items: center;
  height: 100%;
}

.avo-logo-light {
  display: none;
}

/* Navigation Menu */
.main-menu {
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  margin: 0;
  margin-left: auto;
}

.navigation.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.navigation.menu > .menu-item {
  position: relative;
}

.navigation.menu > .menu-item > a,
.navigation.menu > .menu-item > router-link,
.navigation.menu > .menu-item router-link {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 15px 18px;
  display: block;
  transition: color 0.3s;
  white-space: nowrap;
}

.navigation.menu > .menu-item > a:hover,
.navigation.menu > .menu-item > router-link:hover,
.navigation.menu > .menu-item router-link:hover {
  color: #FF9900;
}

/* Dropdown Menu */
.menu-item-has-children {
  position: relative;
}

.dropdown-arrow {
  font-size: 10px;
  margin-left: 5px;
  display: inline-block;
}

.menu-item-has-children:hover .sub-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.sub-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  min-width: 250px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 10px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s;
  z-index: 1000;
}

.sub-menu .menu-item {
  border-bottom: 1px solid #f0f0f0;
}

.sub-menu .menu-item:last-child {
  border-bottom: none;
}

.sub-menu .menu-item a,
.sub-menu .menu-item router-link {
  color: #333;
  text-decoration: none;
  padding: 12px 20px;
  display: block;
  font-size: 14px;
  transition: background 0.3s, color 0.3s;
}

.sub-menu .menu-item a:hover,
.sub-menu .menu-item router-link:hover {
  background: #f8f9fa;
  color: #FF9900;
}

/* Search */
.search-icon-header {
  display: flex;
  align-items: center;
  position: relative;
  flex-shrink: 0;
}

.search {
  color: #333;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
}

.search:hover {
  color: #FF9900;
}

.black-search-block {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: none;
  align-items: center;
  justify-content: center;
}

.black-search-block.active {
  display: flex;
}

.black-search-table {
  display: table;
  width: 100%;
  height: 100%;
}

.black-search-table-cell {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.searchform {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  width: 90%;
}

.focus-input {
  width: 100%;
  padding: 15px 50px 15px 20px;
  font-size: 18px;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  border-radius: 0;
  outline: none;
}

.focus-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.searchsubmit {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
}

.close-black-block {
  position: absolute;
  top: 30px;
  right: 30px;
}

.close-black-block a {
  color: #fff;
  font-size: 30px;
  text-decoration: none;
  display: block;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Get Quote Button */
.btn-nav-top {
  flex-shrink: 0;
  margin-left: 0;
}

.btn-nav-top a {
  background: #FF9900;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  transition: background 0.3s, color 0.3s;
  display: inline-block;
  white-space: nowrap;
}

.btn-nav-top a:hover {
  background: #e68900;
  color: #fff;
}

/* Mobile Menu */
.mobile-wrapper {
  display: none;
}

.hamburger {
  display: block;
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  z-index: 10001;
}

.hamburger__icon {
  width: 25px;
  height: 3px;
  background: #333;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
}

.hamburger__icon::before,
.hamburger__icon::after {
  content: '';
  width: 25px;
  height: 3px;
  background: #333;
  position: absolute;
  left: 0;
  transition: all 0.3s;
}

.hamburger__icon::before {
  top: -8px;
}

.hamburger__icon::after {
  bottom: -8px;
}

.hamburger__icon.active {
  background: transparent;
}

.hamburger__icon.active::before {
  top: 0;
  transform: rotate(45deg);
}

.hamburger__icon.active::after {
  bottom: 0;
  transform: rotate(-45deg);
}

.fat-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100vh;
  background: #fff;
  z-index: 10000;
  transition: right 0.3s;
  overflow-y: auto;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
}

.fat-nav.active {
  right: 0;
}

.fat-nav > a,
.fat-nav > router-link {
  display: block;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.fat-nav > a img {
  height: 35px;
  width: auto;
}

.fat-nav__wrapper {
  padding: 20px;
}

.fat-nav__wrapper .searchform {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.fat-nav__wrapper .focus-input {
  flex: 1;
  padding: 6px;
  border: 1px solid #ddd;
  color: #333;
  background: #fff;
}

.fat-nav__wrapper .searchsubmit {
  padding: 10px 15px;
  background: #FF9900;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: static;
  transform: none;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
}

.fat-nav__wrapper .searchsubmit span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.fat-nav__wrapper .searchsubmit:hover {
  background: #e68900;
}

.fat-list {
  margin-bottom: 20px;
}

.mob-nav {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mob-nav .menu-item {
  border-bottom: 1px solid #f0f0f0;
}

.mob-nav .menu-item a,
.mob-nav .menu-item router-link {
  color: #333;
  text-decoration: none;
  padding: 15px 0;
  display: block;
  font-size: 15px;
}

.mob-nav .menu-item-has-children > a {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-arrow {
  font-size: 12px;
  transition: transform 0.3s;
}

.mob-nav .sub-menu {
  position: static;
  opacity: 1;
  visibility: visible;
  transform: none;
  box-shadow: none;
  background: #f8f9fa;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;
  padding: 0;
}

.mob-nav .sub-menu.active {
  max-height: 1000px;
  padding: 10px 0;
}

.mob-nav .sub-menu .menu-item a,
.mob-nav .sub-menu .menu-item router-link {
  padding-left: 20px;
  font-size: 14px;
}

.fat-nav__wrapper > a:last-child {
  display: block;
  text-align: center;
  background: #FF9900;
  color: #fff;
  padding: 12px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background 0.3s;
}

.fat-nav__wrapper > a:last-child:hover {
  background: #e68900;
}

/* Responsive */
.hidden-xs {
  display: block;
}

.hidden-sm {
  display: block;
}

.hidden-lg {
  display: none;
}

@media (max-width: 991px) {
  .container-fluid {
    max-width: 100%;
  }
  .hidden-lg {
    display: block;
  }

  /* Ẩn menu desktop & search khi ở breakpoint mobile/tablet */
  .main-menu,
  .search-icon-header,
  .header-top {
    display: none;
  }

  .container-fluid {
    justify-content: space-between;
  }

  .btn-nav-top {
    display: none;
  }
}

@media (max-width: 767px) {
  .hidden-xs {
    display: none;
  }
}

@media (max-width: 575px) {
  .hidden-sm {
    display: none;
  }
}

.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
</style>
