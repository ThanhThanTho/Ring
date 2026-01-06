<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  min-height: 400px;
  background: #f5f5f5;
  padding-top: 75px;
}
</style>
