<template>
  <div class="services-container">
    <h2 class="services-title">OUR SERVICES</h2>
    <div class="services-grid">
      <div class="service-card" v-for="(service, index) in services" :key="index">
        <img :src="service.icon" :alt="service.title" class="service-icon" />
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-content">{{ service.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import icon1 from '@/assets/contractor_icon.png';
import icon2 from '@/assets/crane_icon.png';
import icon3 from '@/assets/draw_icon.png';
import icon4 from '@/assets/design_icon.png';
import icon5 from '@/assets/bridge_icon.png';
import icon6 from '@/assets/project_manager.png';

export default {
  name: 'OurServices',
  data() {
    return {
      services: [
        { icon: icon1, title: 'Construction Consultant', content: 'Expert guidance and consultation to ensure your construction projects are a success.' },
        { icon: icon2, title: 'Fit Outs & Renovation', content: 'Transform your spaces with our fit-outs and renovation services, tailored to your needs.' },
        { icon: icon3, title: 'Steel Fabrication', content: 'Precision and quality in steel fabrication for robust and durable structures.' },
        { icon: icon4, title: 'Civil Works', content: 'Executing civil works with excellence, meeting industry standards and beyond.' },
        { icon: icon5, title: 'General Constructing', content: 'Comprehensive solutions for general construction, ensuring quality in every aspect.' },
        { icon: icon6, title: 'Constructing Supervision', content: 'Professional supervision throughout the construction process, ensuring efficiency and compliance.' }
      ]
    };
  }
};
</script>

<style scoped>
.services-container {
  /* background-color: #414A4C; */
  background-color: #2C3539;
  padding: 20px;
  text-align: center;

}

.services-title {
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 20px;
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
}

.service-card {
  background-color: #535C68;
  color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  flex: 1 1 calc(33.333% - 20px); 
  box-sizing: border-box;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.service-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.service-title {
  color: orange;
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 800;
}

.service-content {
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .service-card {
    flex: 1 1 calc(50% - 20px); 
  }
}

@media (max-width: 768px) {
  .service-card {
    flex: 1 1 100%; 
  }
}
</style>
