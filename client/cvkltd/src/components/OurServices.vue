<template>
  <div class="services-container">
    <div class="service-card" v-for="(service, index) in services" :key="index">
      <img :src="service.icon" :alt="service.title" class="service-icon" />
      <h3 class="service-title">{{ service.title }}</h3>
      <p class="service-content">{{ service.content }}</p>
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
        { icon: icon1, title: 'Construction Consultant', content: 'Description of service one.' },
        { icon: icon2, title: 'Fit Outs & Renovation', content: 'Description of service two.' },
        { icon: icon3, title: 'Steel Fabrication', content: 'Description of service three.' },
        { icon: icon4, title: 'Civil Works', content: 'Description of service four.' },
        { icon: icon5, title: 'General Constructing', content: 'Description of service five.' },
        { icon: icon6, title: 'Constructing Supervision', content: 'Description of service six.' }
      ]
    };
  }
};
</script>

<style scoped>
.services-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #414A4C;
  padding: 20px;
}

.service-card {
  background-color: #535C68;
  color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  flex: 1 1 calc(33.333% - 40px); /* For desktop: 3 cards per row */
  box-sizing: border-box;
  text-align: center;
}

.service-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.service-title {
  color: orange;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.service-content {
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .service-card {
    flex: 1 1 calc(50% - 30px); /* For tablets: 2 cards per row */
  }
}

@media (max-width: 768px) {
  .service-card {
    flex: 1 1 100%; /* For mobile: 1 card per row */
  }
}
</style>
