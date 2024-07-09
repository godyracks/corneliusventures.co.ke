<template>
  <div>
    <h1>Portfolio</h1>
    <div class="portfolio-container">
      <div v-for="project in projects" :key="project.id" class="project-wrapper">
        <div class="image-card">
          <img :src="getImageUrl(project.image1_url)" alt="Project Image" />
          <div class="play-button">
            <!-- <img src="play-icon.png" alt="Play Icon" /> -->
            <span>Play Images</span>
          </div>
        </div>
        <div class="details-card">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <button class="view-project-button">View Project</button>
        </div>
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
    getImageUrl(imageFilename) {
      return `http://localhost:5000/${imageFilename}`;
    }
  }
};
</script>

<style scoped>
.portfolio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.project-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 16px 0;
  width: 100%;
  max-width: 600px;
}

.image-card, .details-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  width: 50%;
  height: 300px;
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-card {
  position: relative;
}

.details-card {
  margin-left: -5px;
  padding: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4px 8px;
  border-radius: 4px;
}

.play-button img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.play-button span {
  color: #fff;
  font-size: 14px;
}

h2 {
  font-size: 1.5em;
  margin: 16px 0 8px;
}

p {
  margin: 8px 0;
  color: #666;
}

.view-project-button {
  margin-top: auto;
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
</style>
