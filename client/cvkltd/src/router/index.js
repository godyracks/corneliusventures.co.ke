// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Portfolio from '../views/PortfolioView.vue';
import AboutUs from '../views/AboutUsView.vue';
import ContactUs from '../views/ContactUsView.vue';
import Services from '../views/ServicesView.vue';
import Blog from '../views/BlogView.vue';
import GetAQuote from '../views/GetAQuoteView.vue';
import Dashboard from '../views/DashboardView.vue';
import PostBlogs from '../views/PostBlogsView.vue';


// const routes = [
//   { path: '/', components: { default: Home, navbar: Navbar, footer: Footer } },
//   { path: '/portfolio', components: { default: Portfolio, navbar: Navbar, footer: Footer } },

// ];
const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/about-us', component: AboutUs },
  { path: '/contact-us', component: ContactUs },
  { path: '/services', component: Services },
  { path: '/blog', component: Blog },
  { path: '/get-a-quote', component: GetAQuote },
  { path: '/dashboard', component: Dashboard },
  { path: '/create-a-new-blog-post', component: PostBlogs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
