<template>
  <div class="hero">
    <div class="slider">
      <div class="slide" v-for="(image, index) in images" :key="index" :class="{ 'active': index === activeIndex }">
        <div class="overlay"></div>
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
    <div class="content">
      <h2 class="subtitle">CREATIVE BUILDERS</h2>
      <h1 class="title">WHERE INNOVATION MEETS CREATIVITY</h1>
      <div class="buttons">
        <button class="pdf-button">Company Info PDF</button>
        <button class="explore-button">Explore Portfolio</button>
      </div>
    </div>
    <div class="social-icons">
      <a href="#" class="social-icon"><img src="@/assets/x_ic.png" alt="X Icon" /></a>
      <a href="#" class="social-icon"><img src="@/assets/fb_ic.png" alt="Facebook Icon" /></a>
      <a href="#" class="social-icon"><img src="@/assets/yt_ic.png" alt="YouTube Icon" /></a>
      <a href="#" class="social-icon"><img src="@/assets/ig_ic.png" alt="Instagram Icon" /></a>
      <a href="#" class="social-icon"><img src="@/assets/wats_ic.png" alt="LinkedIn Icon" /></a>
    </div>
  </div>
</template>

<script>
import hero1 from '@/assets/hero1.jpg';
import hero2 from '@/assets/hero2.jpg';
import hero3 from '@/assets/hero3.jpg';

export default {
  name: 'Hero',
  data() {
    return {
      images: [
        { src: hero1, alt: 'Hero Image 1' },
        { src: hero2, alt: 'Hero Image 2' },
        { src: hero3, alt: 'Hero Image 3' }
      ],
      activeIndex: 0
    };
  },
  mounted() {
    setInterval(this.nextSlide, 3000);
  },
  methods: {
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    }
  }
};
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}

.slider {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide.active {
  opacity: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 25, 26, 0.3);
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  z-index: 1;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.buttons {
  margin-top: 20px;
}

button {
  padding: 15px 30px;
  margin: 0 10px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  
  border-radius: 12px;
}

.pdf-button {
  background-color: orange;
  color: #ffffff;
  border: 2px solid #000000;
}

.explore-button {
background-color: transparent;
 border: 2px solid rgba(114, 160, 193);
  color: #000000;
}

.social-icons {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
   
}

.social-icon {
  margin-bottom: 10px;
  height: 60px;
  width: 60px;
  background-color: #72A0C1;
  border-radius: 50%;
   box-shadow: 4px 0 8px rgba(0, 0, 0, 0.5);
 
}

.social-icon img {
   height: 50px;
  width: 50px;
}

@media (max-width: 768px) {
  .content {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .title {
    font-size: 2.5rem;
  }

  .buttons button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  .social-icons {
  position: absolute;
  top: 100%;
  bottom: -110px;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  }

  .social-icon {
  margin-bottom: 10px;
  height: 50px;
  width: 50px;
  background-color: #72A0C1;
  border-radius: 50%;
   box-shadow: 4px 0 8px rgba(0, 0, 0, 0.5);
 
}

.social-icon img {
   height: 40px;
  width: 40px;
}
}
</style>
