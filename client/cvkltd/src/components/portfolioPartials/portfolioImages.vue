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
    <div v-if="activeTab === 0" class="tab-content">
      <h2>Our Workflow</h2>
      <p>Here you can describe your workflow, steps, processes,just like in the homepage</p>
      
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
    <div v-if="activeTab === 2" class="tab-content">
      <h2>Get a Quote</h2>
      <p>Here you can describe how clients can get a quote from you.</p>
      <form @submit.prevent="submitQuote">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="quoteForm.name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="quoteForm.email" required />
        </div>
        <div>
          <label for="details">Project Details:</label>
          <textarea id="details" v-model="quoteForm.details" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
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
        { title: 'Get a Quote', subtitle: 'Submit your request', icon: quoteIcon },
      ],
      activeTab: 1,
      quoteForm: {
        name: '',
        email: '',
        details: ''
      }
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
    },
    async submitQuote() {
      try {
        const response = await axios.post('http://localhost:5000/api/quotes', this.quoteForm);
        console.log('Quote submitted:', response.data);
        // Handle successful submission (e.g., show a success message)
      } catch (error) {
        console.error('Error submitting quote:', error);
        // Handle error (e.g., show an error message)
      }
    }
  }
};
</script>

<style scoped>
.tabs-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 36px;
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
  background-color: #0ac0d8;
  border-color: #00796b;
  border-radius: 18px;
  margin-top: 10px;
 
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

.tab-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
  margin-bottom: 36px;
  background-color: #180a49;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.portfolio-container {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  max-width: 100%;
  padding: 16px 0;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none;  /* For Internet Explorer and Edge */
}

.portfolio-container::-webkit-scrollbar {
  display: none;  /* For Chrome, Safari, and Opera */
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
  background-color: #180a49;
  overflow: hidden;
  width: 50%;
  height: 300px;
  border-radius: 8px;
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-card {
  position: relative;
 width: 300px; 
}

.details-card {
  margin-left: -15px;
  margin-top: -15px;
  padding: 16px;
   width: 250px; 
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

form {
  display: flex;
  flex-direction: column;
}

form div {
  margin-bottom: 16px;
}

label {
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #ff6600;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e65c00;
}
@media screen and (max-width: 769px) {
  .project-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .image-card, .details-card {
    width: 100%;
    margin: 8px 0;
  }
}
</style>
