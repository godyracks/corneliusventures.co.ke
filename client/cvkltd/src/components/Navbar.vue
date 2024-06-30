<template>
  <nav class="navbar">
    <div class="navbar-left">
      <div class="logo">
        <img src="@/assets/cvk.png" alt="Business Logo" />
        <span class="business-name">CVK LTD</span>
      </div>
    </div>
    <div class="menu-icons" @click="toggleMenu">
      <img v-if="!isMenuOpen" src="@/assets/menu_ic.png" alt="Menu Icon" />
      <img v-if="isMenuOpen" src="@/assets/close_ic.png" alt="Close Icon" />
    </div>
    <div class="menu-container" :class="{ 'active': isMenuOpen }">
      <ul class="navbar-menu">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/portfolio" @click="closeMenu">Portfolio</router-link></li>
        <li><router-link to="/services" @click="closeMenu">Services</router-link></li>
        <li><router-link to="/about-us" @click="closeMenu">About Us</router-link></li>
        <li><router-link to="/blog" @click="closeMenu">Blog</router-link></li>
        <li><router-link to="/contact-us" @click="closeMenu">Contact Us</router-link></li>
        <li><router-link to="/get-a-quote" @click="closeMenu">Get a Quote</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
      isMobile: false
    };
  },
  mounted() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (!this.isMenuOpen && !this.isMobile) {
        document.body.style.overflow = 'auto'; // Reset body overflow
      } else if (this.isMenuOpen && !this.isMobile) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = 'auto'; // Reset body overflow on menu close
    },
    updateWindowWidth() {
      this.isMobile = window.innerWidth < 769; // Check if screen width is less than 769px
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #f2f2f2;
  z-index: 1000;
  padding: 10px 20px;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 50px;
  margin-right: 10px;
}

.business-name {
  font-size: 1.2rem;
  color: #ffffff;
}

.menu-icons {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.menu-icons img {
  height: 30px;
}

.menu-container {
  position: absolute;
  top: 80px; /* Adjust top position to align with navbar */
  right: 20px; /* Adjust right position */
  background-color: rgba(0, 0, 0, 0.8);
  width: 250px; /* Increase width for desktop */
  max-height: 10px;
  overflow: hidden;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: max-height 0.3s ease-in-out, width 0.3s ease-in-out; /* Add width transition */
}

.menu-container.active {
  max-height: 400px; /* Adjust max-height as needed */
  width: 300px; /* Increase width when menu is open on desktop */
}

.navbar-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  margin: 10px 0;
}

@media (max-width: 768px) {
  .menu-container {
    position: fixed;
    top: 60px; /* Adjust top position to align with navbar */
    right: 0;
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999; /* Ensure menu is above other content */
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .menu-container.active {
    transform: translateX(0);
  }

  .navbar-menu {
    padding: 20px; /* Adjust padding for better touch experience */
  }

  .menu-icons {
    margin-top: 10px; /* Move menu icon down slightly on smaller screens */
  }
}
</style>
