import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
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
  routes
})

export default router

