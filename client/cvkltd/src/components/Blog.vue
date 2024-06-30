<!-- Home.vue -->
<template>
  <div>
      <Navbar /> 
    <h1>Welcome to our Website</h1>
    <!-- Your Home page content goes here -->
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    components: {
    Navbar // Register Navbar component
  },
  name: 'Blog',
  // Component logic goes here

}
</script>

<style scoped>
/* Component-specific styles */
</style>
