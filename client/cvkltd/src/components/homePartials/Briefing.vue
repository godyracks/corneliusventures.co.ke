<template>
  <div class="briefing-container">
    <div class="briefing-column">
      <h4 class="briefing-header">500+</h4>
      <p class="briefing-content">JOBS DONE</p>
    </div>
    <div class="briefing-column">
      <h4 class="briefing-header">200+</h4>
      <p class="briefing-content">SATISFIED CLIENTS</p>
    </div>
    <div class="briefing-column">
      <h4 class="briefing-header">250+</h4>
      <p class="briefing-content">WORKERS</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Briefing',
};
</script>

<style scoped>
.briefing-container {
  max-height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url('@/assets/mansion2.jpg'); 
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}
.briefing-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(141, 141, 236, 0.5); 
  z-index: 0;
}

.briefing-column {
  flex: 1;
  text-align: center;
  color: #ffffff;
  z-index: 1;
  padding: 20px;
}

.briefing-header {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.briefing-content {
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
}

@media (max-width: 768px) {
  .briefing-header {
    font-size: 1.5rem;
  }

  .briefing-content {
    font-size: 0.8rem;
  }
}
</style>
