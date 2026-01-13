import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AboutUs from '../components/AboutUs.vue'
import Careers from '../components/Careers.vue'
import SeaFreight from '../components/SeaFreight.vue'
import AirFreight from '../components/AirFreight.vue'
import LandFreight from '../components/LandFreight.vue'
import CustomClearance from '../components/CustomClearance.vue'
import Warehouse from '../components/Warehouse.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers
  },
  {
    path: '/services/sea-freight',
    name: 'SeaFreight',
    component: SeaFreight
  },
  {
    path: '/services/air-freight',
    name: 'AirFreight',
    component: AirFreight
  },
  {
    path: '/services/land-freight',
    name: 'LandFreight',
    component: LandFreight
  },
  {
    path: '/services/custom-clearance',
    name: 'CustomClearance',
    component: CustomClearance
  },
  {
    path: '/services/warehouse',
    name: 'Warehouse',
    component: Warehouse
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  }
})

export default router

