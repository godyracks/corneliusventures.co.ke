<template>
  <div>
    <Navbar /> 
     <Hero /> 
       <About /> 
     <FeaturedProjects /> 
   
      <Footer /> 
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './Navbar.vue'; 
import Footer from './Footer.vue'; 
import Hero from './Hero.vue'; 
import About from './About.vue'; 
import FeaturedProjects from './FeaturedProjects.vue';

export default {
  components: {
    Navbar,
    Hero,
    About,
    FeaturedProjects,
    Footer
  },
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
 
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  margin: 10px 0;
}

h1 {
  text-align: center;
}

div {
  max-width: 100%; 
  margin: 0 auto;
  padding: 0;
}
</style>
