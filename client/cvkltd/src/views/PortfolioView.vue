<script setup>
import Navbar from '../components/common/Navbar.vue'
import Tabs from '../components/portfolioPartials/portfolioImages.vue'
import Hero2 from '../components/portfolioPartials/portfolioBanner.vue'
import Ongoing from '../components/portfolioPartials/ongoingProjects.vue'
import Briefing from '../components/homePartials/Briefing.vue'
import Footer from '../components/common/Footer.vue'

</script>

<template>
  <main>
    <Navbar />
      <Hero2 />
    <Tabs />
    <Ongoing />
    <Briefing />
    <Footer />
  </main>
</template>
