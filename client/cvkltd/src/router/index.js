// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Portfolio from '../components/Portfolio.vue';
import AboutUs from '../components/AboutUs.vue';
import ContactUs from '../components/ContactUs.vue';
import Services from '../components/Services.vue';
import Blog from '../components/Blog.vue';
import GetAQuote from '../components/GetAQuote.vue';
import Dashboard from '../components/Dashboard.vue';
import PostBlogs from '../components/PostBlogs.vue';

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
