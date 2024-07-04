<template>
  <div v-if="isLoading" class="spinner-container">
    <img src="@/assets/cvk.png" alt="Loading..." class="spinner" />
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.spinner {
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
