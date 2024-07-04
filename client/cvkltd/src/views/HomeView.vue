<script setup>
import Navbar from '../components/common/Navbar.vue'
import Hero from '../components/homePartials/Hero.vue'
import About from '../components/homePartials/About.vue'
import Featured from '../components/homePartials/FeaturedProjects.vue'
import WorkFlow from '../components/homePartials/WorkFlow.vue'
import ServicesHighlights from '../components/homePartials/OurServices.vue'
import Banner from '../components/homePartials/Banner.vue'
import TopBlogs from '../components/homePartials/TopBlogs.vue'
import Footer from '../components/common/Footer.vue'
</script>

<template>
  <main>
    <Navbar />
    <Hero />
    <About />
    <Featured />
    <WorkFlow />
    <ServicesHighlights />
    <Banner />
      <TopBlogs />
    <Footer />
  </main>
</template>
