<!-- Navbar.vue -->

<template>
  <nav class="navbar">
    <!-- Navbar content here -->
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/about">About Us</router-link></li>
      <!-- Add more links as needed -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  // Add component-specific logic if needed
}
</script>

<style scoped>
/* Component-specific styles for Navbar */
.navbar {
  /* Navbar styles */
}
.navbar ul {
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
}
.navbar li {
  margin: 0 10px;
}
</style>
