<template>
  <div class="map-container">
    <iframe 
      class="google-map"
      :src="mapUrl" 
      width="600" 
      height="450" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.207175924854!2d38.5567331!3d-3.3984886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18392955840748c1%3A0x612879b76e474c69!2sVoi!5e0!3m2!1sen!2ske!4v1720097509837!5m2!1sen!2ske'
    };
  }
};
</script>

<style scoped>
.map-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  /* padding: 20px; */
  text-align: center;
}

.google-map {
  width: 100%;
  height: 400px;
  border: none;
}
</style>
