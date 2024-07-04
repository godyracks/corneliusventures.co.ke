<template>
  <div class="about">
    <h2 class="about-title">ABOUT US</h2>

    <div class="cards-container">
      <div class="card" v-for="(card, index) in cards" :key="index" ref="cards">
        <img :src="card.image" :alt="card.title" />
        <div class="card-content">
          <div class="card-header">{{ card.title }}</div>
          <p>{{ card.content }}</p>
        </div>
      </div>
    </div>

    <button class="read-more">READ MORE</button>
  </div>
</template>

<script>
import projectPlanningImg from '@/assets/project_planning.jpg';
import constructionImg from '@/assets/construction1.jpg';
import archDesignImg from '@/assets/arch_design.jpg';

export default {
  name: 'About',
  data() {
    return {
      cards: [
        {
          title: 'Project Planning',
          image: projectPlanningImg,
          content: 'At CVK LTD, we pride ourselves on meticulous project planning. Our dedicated team works tirelessly to ensure every detail is considered, providing comprehensive solutions tailored to meet our clients\' needs.'
        },
        {
          title: 'Recommendation Services',
          image: constructionImg,
          content: 'Our recommendation services are built on years of industry expertise. We guide our clients through the decision-making process, offering insights and advice to ensure successful outcomes.'
        },
        {
          title: 'Civil Works',
          image: archDesignImg,
          content: 'Excellence in civil works is the cornerstone of our commitment. From groundbreaking to completion, we execute projects with precision and quality.'
        }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Initialize animation check
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const cards = this.$refs.cards;
      if (!cards) return;

      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight * 0.8) { // Adjust the trigger point as needed
          card.classList.add('show');
        } else {
          card.classList.remove('show');
        }
      });
    }
  }
};
</script>

<style scoped>
.about {
  background-color: #414A4C;
  padding: 50px 20px;
  text-align: center;
}

.about-title {
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 40px;
}

.cards-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}

.card {
  width: 30%;
  background-color: #535C68;
  border-bottom: 1px solid orange;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.card.show {
  opacity: 1;
  transform: translateY(0);
}

.card img {
  width: 100%;
  height: 50%;
  object-fit: cover;
  margin: 0;
  padding: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-content {
  padding: 20px;
  background-color: #535C68;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.card-header {
 
  color: orange;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px;
}

.card p {
  color: #ffffff;
    font-size: 0.9rem;
    padding-bottom: 5px;
}

.read-more {
  background-color: #333;
  color: #ffffff;
  border: 1px solid orange;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 20px;
}

.read-more:hover {
  background-color: orange;
  color: #333;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    display: flex;
    flex-direction: column; /* Stack image and content */
  }

  .card img {
    height: auto; /* Allow image to scale naturally */
    max-height: 200px; /* Limit the height to ensure content visibility */
  }

  .card-content {
    padding: 15px; /* Reduce padding to fit smaller screens */
  }
}

</style>
