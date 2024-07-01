<template>
  <div class="workflow">
    <div class="overlay"></div>
    <div class="content">
      <div class="left-child">
        <img src="@/assets/engineer.png" alt="Engineer" class="engineer-img" />
      </div>
      <div class="right-child">
        <h2 class="header">OUR WORKFLOW</h2>
        <h3 class="subheader">CREATING SUCCESSFUL STORIES</h3>
        <div class="steps">
          <div class="step">
            <h4 class="step-header">Step 1</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="step">
            <h4 class="step-header">Step 2</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="step">
            <h4 class="step-header">Step 3</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div class="step">
            <h4 class="step-header">Step 4</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="rain-container" ref="rainContainer"></div>
  </div>
</template>

<script>
export default {
  name: 'Workflow',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Check if the workflow component is in view
      const workflow = this.$el;
      const rect = workflow.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // Trigger rain effect
        this.createRain();
      }
    },
    createRain() {
      // Clear previous rain elements
      const rainContainer = this.$refs.rainContainer;
      rainContainer.innerHTML = '';

      // Create raindrop elements
      const steps = this.$el.querySelectorAll('.step');
      steps.forEach((step, index) => {
        const stepRect = step.getBoundingClientRect();
        const rainDrop = document.createElement('span');
        rainDrop.textContent = step.querySelector('.step-header').textContent;
        rainDrop.classList.add('raindrop');
        rainDrop.style.top = `${stepRect.top}px`;
        rainContainer.appendChild(rainDrop);

        // Animate raindrop falling
        setTimeout(() => {
          rainDrop.style.top = `${window.innerHeight}px`;
          rainDrop.style.opacity = '0';
        }, index * 100); // Adjust timing for staggered effect
      });
    }
  }
};
</script>

<style scoped>
.workflow {
  position: relative;
  height: 100vh; /* Adjust height as needed */
  background-image: url('@/assets/eng_tools.jpg');
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 4, 6, 0.25);
}

.content {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  max-width: 1100px;
}

.left-child {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-child .engineer-img {
  max-width: 100%;
  height: 100%;
  border-radius: 0; 
  object-fit: cover;
}

.right-child {
  flex: 1;
  padding: 20px;
  text-align: center;
}

.header {
  color: orange;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 10px;
}

.subheader {
  color: orange;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.steps {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step {
  margin-bottom: 20px;
  text-align: center;
}

.step-header {
  color: orange;
  font-size: 1.2rem;
   font-weight: 700;
  margin-bottom: 10px;
}

@media (max-width: 769px) {
  .left-child {
    display: none; /* Hide the left child on smaller screens */
  }

  .right-child {
    flex: 1; /* Take full width on smaller screens */
  }
}

.rain-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.raindrop {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem; /* Adjust font size as needed */
  color: #ffffff;
  pointer-events: none;
  animation: rain-fall 1.5s linear;
}

@keyframes rain-fall {
  0% {
    transform: translateY(-50%);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>
