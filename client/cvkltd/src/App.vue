
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {
    Home: () => import('./components/Home.vue'),
    Portfolio: () => import('./components/Portfolio.vue'),
    AboutUs: () => import('./components/AboutUs.vue'),
    ContactUs: () => import('./components/ContactUs.vue'),
    Services: () => import('./components/Services.vue'),
    Blog: () => import('./components/Blog.vue'),
    GetAQuote: () => import('./components/GetAQuote.vue'),
    Dashboard: () => import('./components/Dashboard.vue'),
  }
}
</script>

<style>
/* Global styles for App.vue */
</style>
