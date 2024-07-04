
<template>
  <div id="app">
      <Spinner :isLoading="isLoading" />
    <router-view></router-view>
  </div>
</template>

<script>
import Spinner from '@/components/common/Spinner.vue';
export default {
  name: 'App',

  components: {
    Spinner,
    Home: () => import('./views/HomeView.vue'),
    Portfolio: () => import('./views/PortfolioView.vue'),
    AboutUs: () => import('./views/AboutUsView.vue'),
    ContactUs: () => import('./views/ContactUsView.vue'),
    PostBlog: () => import('./views/PostBlogsView.vue'),
    Services: () => import('./views/ServicesView.vue'),
    Dashboard: () => import('./views/DashboardView.vue'),
    GetAQuote: () => import('./views/GetAQuoteView.vue'),

  }
}
</script>

<style>
/* Global styles for App.vue */
</style>
