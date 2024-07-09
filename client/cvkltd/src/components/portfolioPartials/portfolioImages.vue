<template>
  <div>
    <div class="tabs-container">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: index === activeTab }]"
        @click="setActiveTab(index)"
      >
        <img :src="tab.icon" alt="Tab Icon" class="tab-icon" />
        <div>
          <p class="tab-title">{{ tab.title }}</p>
          <p class="tab-subtitle">{{ tab.subtitle }}</p>
        </div>
      </div>
    </div>
    <div v-if="activeTab === 1" class="portfolio-container">
      <div class="projects-row">
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
  </div>
</template>

<script>
import axios from 'axios';
import workflowIcon from '@/assets/plan_ic.png';
import workIcon from '@/assets/work_ic.png';
import quoteIcon from '@/assets/quotation.png';

export default {
  data() {
    return {
      projects: [],
      tabs: [
        { title: 'How We Work', subtitle: 'Our Workflow', icon: workflowIcon },
        { title: 'Our Work', subtitle: 'Our Completed Projects', icon: workIcon },
        { title: 'Get a Quote', subtitle: 'Get a Catchy Thin Line', icon: quoteIcon },
      ],
      activeTab: 1,
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
    },
    setActiveTab(index) {
      this.activeTab = index;
    }
  }
};
</script>

<style scoped>
.tabs-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
}

.tab {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid transparent;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.tab.active {
  background-color: #e0f7fa;
  border-color: #00796b;
}

.tab-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.tab-title {
  font-size: 1.2em;
  margin: 0;
}

.tab-subtitle {
  font-size: 0.9em;
  margin: 0;
  color: #666;
}

.portfolio-container {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  max-width: 100%;
  padding: 16px 0;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; 
}

.portfolio-container::-webkit-scrollbar {
  display: none;  
}
.projects-row {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  width: 100%;
}

.project-wrapper {
  display: flex;
  flex-direction: row;
  margin: 16px;
  flex: 0 0 auto;
  width: 300px;
}

.image-card, .details-card {
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
  margin-left: -15px;
  margin-top: -15px;
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
