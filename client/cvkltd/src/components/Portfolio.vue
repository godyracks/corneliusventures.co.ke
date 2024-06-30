<template>
  <div>
    <Navbar /> 

    <h1>Portfolio</h1>
    <div v-for="project in projects" :key="project.id" class="project-card">
      <img :src="getImageUrl(project.image1_url)" alt="Project Image" />
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
      <p>Start Date: {{ formatDate(project.start_date) }}</p>
      <p v-if="project.complete_date">Complete Date: {{ formatDate(project.complete_date) }}</p>
      <p>Status: {{ project.status }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './Navbar.vue'; 

export default {
  components: {
    Navbar // Register Navbar component
  },
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
.project-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px 0;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
