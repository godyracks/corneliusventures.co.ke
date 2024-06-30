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
        v-for="(project, index) in projects"
        :key="index"
        ref="cards"
      >
        <img :src="project.image" :alt="project.title" />
        <div class="overlay">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
    <button class="view-all">VIEW ALL PROJECTS</button>
  </div>
</template>

<script>
export default {
  name: 'FeaturedProjects',
  data() {
    return {
      projects: [
        { title: 'Project 1', image: 'https://via.placeholder.com/300', description: 'Description 1' },
        { title: 'Project 2', image: 'https://via.placeholder.com/300', description: 'Description 2' },
        { title: 'Project 3', image: 'https://via.placeholder.com/300', description: 'Description 3' },
        { title: 'Project 4', image: 'https://via.placeholder.com/300', description: 'Description 4' },
        { title: 'Project 5', image: 'https://via.placeholder.com/300', description: 'Description 5' },
        { title: 'Project 6', image: 'https://via.placeholder.com/300', description: 'Description 6' },
      ],
    };
  },
  mounted() {
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

    this.$refs.cards.forEach((card) => {
      observer.observe(card);
    });
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
  max-width: 800px;
  margin: 0 auto;
}

.image-card {
  position: relative;
  width: calc(33.333% - 20px);
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.image-card.show {
  opacity: 1;
  transform: translateY(0);
}

.image-card img {
  width: 100%;
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
  border: 2px solid orange;
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
