<template>
  <div class="portfolio-banner" :style="backgroundImageStyle">
    <div class="overlay"></div>
    <h1>Projects</h1>
  </div>
</template>

<script>
import backgroundImage from '@/assets/mansion_under.jpg';

export default {
  name: 'PortfolioBanner',
  data() {
    return {
      backgroundImage
    };
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '300px' /* Adjust the height as needed */
      };
    }
  }
};
</script>

<style scoped>
.portfolio-banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 255, 0.5); /* Blue overlay with 50% opacity */
  z-index: 1;
}

h1 {
  position: relative;
  z-index: 2;
  font-size: 3em;
}
</style>
