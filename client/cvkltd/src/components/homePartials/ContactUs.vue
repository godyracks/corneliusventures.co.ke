<template>
  <div class="contact-container">
    <h2 class="contact-header">Contact Us</h2>
    <h4 class="contact-subheader">Do not hesitate to contact us</h4>
    <div class="contact-details">
      <div class="contact-column">
        <img src="@/assets/location-icon.png" alt="Location Icon" class="icon"/>
        <h4 class="contact-title">Our Address</h4>
        <p class="contact-info">Name of Street, Voi - Kenya</p>
      </div>
      <div class="contact-column">
        <img src="@/assets/phone-icon.png" alt="Phone Icon" class="icon"/>
        <h4 class="contact-title">Phone Number</h4>
        <p class="contact-info">+254112582559</p>
      </div>
      <div class="contact-column">
        <img src="@/assets/working-hours.png" alt="Clock Icon" class="icon"/>
        <h4 class="contact-title">Working Hours</h4>
        <p class="contact-info">Mon-Fri 9 AM - 4 PM</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
};
</script>

<style scoped>
.contact-container {
  height: 480px;
  background-color: #414A4C; 
  color: #ffffff;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-header {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.contact-subheader {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.contact-details {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap; 
}

.contact-column {
  flex: 1;
  text-align: center;
  margin: 10px; 
}

.icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.contact-title {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.contact-info {
  font-size: 1rem;
}

@media (max-width: 769px) {
  .contact-header {
    font-size: 2rem;
  }

  .contact-subheader {
    font-size: 1rem;
  }

  .contact-details {
    flex-direction: column;
    align-items: center;
  }

  .contact-column {
    margin-bottom: 20px;
    width: 80%;
  }

  .icon {
    width: 40px;
    height: 40px;
  }

  .contact-title {
    font-size: 1.2rem;
  }

  .contact-info {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .contact-header {
    font-size: 1.8rem;
  }

  .contact-subheader {
    font-size: 0.9rem;
  }

  .contact-column {
    width: 100%; 
  }

  .icon {
    width: 30px;
    height: 30px;
  }

  .contact-title {
    font-size: 1rem;
  }

  .contact-info {
    font-size: 0.8rem;
  }
}
</style>
