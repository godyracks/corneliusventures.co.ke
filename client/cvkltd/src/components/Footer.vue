<template>
  <footer class="footer">
    <div class="subscribe">
      <p>SUBSCRIBE TO OUR NEWSLETTER</p>
      <div class="subscribe-input">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
    <div class="footer-content">
      <div class="connect">
        <h3>Let's Connect</h3>
        <div class="social-icons">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"> </a>
        </div>
        <div class="business-info">
          <img src="@/assets/cvk.png" alt="Business Logo" />
          <p>CVK Ltd</p>
        </div>
      </div>
      <div class="working-hours">
        <h3>Working Hours</h3>
        <p>Mon-Fri: 9AM to 5PM</p>
        <p>Sat-Sun: Closed</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 CVK Ltd. All rights reserved.</p>
      <p class="site-by">Site by Gody</p>
    </div>
  </footer>
</template>

<script>

export default {
    
  name: 'Footer',
  
}
</script>

<style scoped>
.footer {
  background-color: #2C3539;
  color: white;
  padding: 20px;
  text-align: center;
}

.subscribe {
  margin-bottom: 20px;
}

.subscribe-input {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.subscribe-input input {
  background-color: white;
  border: none;
  padding: 10px;
  width: 300px; /* Adjust width as needed */
  margin-right: 0;
}

.subscribe-input button {
  background-color: orange;
  border: none;
  padding: 10px;
  color: white;
  cursor: pointer;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.connect, .working-hours {
  flex: 1;
  padding: 0 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.social-icons a {
  color: white;
  margin: 0 10px;
  font-size: 20px;
}

.business-info {
  text-align: center;
  margin-top: 10px;
}

.business-info img {
  height: 50px; /* Adjust size as needed */
}

.footer-bottom {
  margin-top: 20px;
}

.site-by {
  font-size: 8px;
  color: orange;
}
</style>
