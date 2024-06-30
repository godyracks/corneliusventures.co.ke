<template>
  <div class="workflow" ref="workflow">
    <div class="overlay"></div>
    <div class="content">
      <div class="left-child">
        <img src="@/assets/engineer.png" alt="Engineer" class="engineer-img" />
      </div>
      <div class="right-child">
        <h2 class="header">OUR WORKFLOW</h2>
        <h3 class="subheader">CREATING SUCCESSFUL STORIES</h3>
        <div class="steps">
          <div class="step" v-for="(step, index) in steps" :key="index">
            <h4 class="step-header">Step {{ index + 1 }}</h4>
            <p>{{ step.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Workflow',
  data() {
    return {
      steps: [
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
      ],
      observer: null,
      inView: false
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the component is visible
    });
    this.observer.observe(this.$refs.workflow);
  },
  destroyed() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.inView = true;
          observer.unobserve(entry.target);
        }
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
  background-color: rgba(15, 19, 21, 0.25);
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
}

.left-child {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-child .engineer-img {
  max-width: 100%;
  height: auto;
  border-radius: 0; /* Remove border-radius */
}

.right-child {
  flex: 1;
  padding: 20px;
  text-align: center;
  position: relative; /* Ensure relative positioning for the rain effect */
}

.header {
  color: orange;
  font-size: 2rem;
  margin-bottom: 10px;
}

.subheader {
  color: orange;
  font-size: 1.5rem;
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
  opacity: 0; /* Initially hide steps */
  animation: rain 0.5s ease forwards; /* Apply animation to each step */
}

.step-header {
  color: orange;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

/* Animation for rain effect */
@keyframes rain {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 769px) {
  .left-child {
    display: none; /* Hide the left child on smaller screens */
  }

  .right-child {
    flex: 1; /* Take full width on smaller screens */
  }
}
</style>
