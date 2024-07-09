<template>
  <div class="ongoing-projects" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
    <div class="overlay">
      <h1>Ongoing Projects</h1>
      <div class="projects-container">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <img :src="getImageUrl(project.image_url)" :alt="project.name" />
          <div class="project-details">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <button class="view-project-button">View Project</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import backgroundImage from '@/assets/arch_design.jpg'; // Importing the image using ES6 module syntax

export default {
  name: 'OngoingProjects',
  data() {
    return {
      projects: [],
      backgroundImage: `url(${backgroundImage})`, // Set the background image dynamically
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
        console.error('Error fetching ongoing projects:', error);
      }
    },
    getImageUrl(imageFilename) {
      return `http://localhost:5000/${imageFilename}`;
    },
  },
};
</script>

<style scoped>
.ongoing-projects {
  position: relative;
  background-size: cover;
  background-position: center;
 height: 1800px; /*change this property the best way you can @matagaro*/
  overflow: hidden;
  margin-bottom: 0; 
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(171, 171, 228, 0.5); /* Blue overlay with 50% opacity */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 20px;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin-top: 10px;
}

.project-card {
  width: calc(50% - 20px);
  background-color: #180a49;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.project-details {
  flex: 1;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}

p {
  margin-bottom: 10px;
}

.view-project-button {
  background-color: #ff6600;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-project-button:hover {
  background-color: #e65c00;
}
@media screen and (max-width: 769px) {
.project-card {
  width: calc(100% - 20px);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}
}
</style>
