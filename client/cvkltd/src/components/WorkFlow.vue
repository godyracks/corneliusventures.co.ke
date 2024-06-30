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
  </div>
</template>

<script>
export default {
  name: 'Workflow',
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
}

.step-header {
  color: orange;
  font-size: 1.2rem;
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
</style>
