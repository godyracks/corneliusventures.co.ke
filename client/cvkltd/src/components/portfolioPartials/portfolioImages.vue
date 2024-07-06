<template>
  <div>
    <h1>Portfolio</h1>
    <div class="portfolio-container">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <img :src="getImageUrl(project.image1_url)" alt="Project Image" />
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <p>Start Date: {{ formatDate(project.start_date) }}</p>
        <p v-if="project.complete_date">Complete Date: {{ formatDate(project.complete_date) }}</p>
        <p>Status: {{ project.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get('http://localhost:5000/api/portfolio');
        this.projects = response.data;
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
  }
};
</script>

<style scoped>
.portfolio-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.project-card {
  border: 1px solid #ddd;
  /*padding: 16px;*/
  margin: 8px;
  flex: 1 1 calc(50% - 32px);
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
  border-radius: 8px;
  max-height: 300px;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

img {
  max-width: 100%;
  height: 150px;
  object-fit: cover;

  transition: transform 0.3s ease;
}

.project-card:hover img {
  transform: scale(1.05);
}

h2 {
  font-size: 1.5em;
  margin: 16px 0 8px;
  transition: color 0.3s ease;
}

.project-card:hover h2 {
  color: #ff6600;
}

p {
  margin: 8px 0;
  transition: color 0.3s ease;
}

.project-card:hover p {
  color: #333;
}
</style>
