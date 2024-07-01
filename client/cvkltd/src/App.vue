
<template>
  <div id="app">
      <Spinner :isLoading="isLoading" />
    <router-view></router-view>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
export default {
  name: 'App',

  components: {
    Spinner,
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
