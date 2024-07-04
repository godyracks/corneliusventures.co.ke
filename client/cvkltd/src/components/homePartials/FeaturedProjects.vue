<template>
  <div class="featured-projects">
    <h2 class="section-title">FEATURED PROJECTS</h2>
    <div class="button-group">
      <button class="filter-button active">ALL</button>
      <button class="filter-button">Category 1</button>
      <button class="filter-button">Category 2</button>
      <button class="filter-button">Category 3</button>
      <button class="filter-button">Category 4</button>
    </div>
    <div class="image-container">
      <div
        class="image-card"
        v-for="project in projects"
        :key="project.id"
        ref="cards"
      >
        <img :src="getImageUrl(project.image1_url)" :alt="project.name" />
        <div class="overlay">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
    <button class="view-all">VIEW ALL PROJECTS</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FeaturedProjects',
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    this.fetchProjects();
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, options);

    // Using $nextTick to ensure DOM is updated
    this.$nextTick(() => {
      if (this.$refs.cards) {
        this.$refs.cards.forEach((card) => {
          observer.observe(card);
        });
      }
    });
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get('http://localhost:5000/api/portfolio?limit=6');
        this.projects = response.data;
        console.log('Projects fetched:', this.projects);
        console.log('Images fetched:', this.projects.map(project => project.image1_url));
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    getImageUrl(imageFilename) {
      return `http://localhost:5000/${imageFilename}`;
    }
  },
};
</script>

<style scoped>
.featured-projects {
  background-color: #2C3335;
  padding: 50px 20px;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-button {
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.filter-button.active,
.filter-button:hover {
  background-color: orange;
  color: #ffffff;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  max-width: 1000px;
  margin: 0 auto;

}

.image-card {
  position: relative;
  width: calc(33.333% - 20px);
  overflow: hidden;
  opacity: 1;
    border-radius: 5px;
    height: 280px;
 
}



.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.overlay {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  padding: 20px;
  transition: top 0.3s;
}

.image-card:hover .overlay {
  top: 0;
}

.view-all {
  background-color: #2F363F;
  color: #ffffff;
  border: 1px solid orange;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .filter-button {
    width: calc(50% - 10px);
  }

  .image-card {
    width: calc(50% - 10px);
  }
}

@media (max-width: 480px) {
  .image-card {
    width: 100%;
  }
}
</style>
