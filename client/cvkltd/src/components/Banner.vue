<template>
  <div class="banner-container">
    <div class="banner-grid">
      <div class="banner-square image-square manager-image">
        <img src="@/assets/manager.jpg" alt="Manager Image" />
      </div>
      <div class="banner-square text-square mantra-text">
        <h2>Empowering Success - Our Mantra</h2>
        <ul>
          <li>High Quality Services</li>
          <li>Customer Satisfaction</li>
          <li>Innovative Solutions</li>
          <li>Professional Team</li>
          <li>Commitment to Excellence</li>
        </ul>
      </div>
      <div class="banner-square text-square designs-text">
        <h2>Distinctive Designs</h2>
        <ul>
          <li>Creative Concepts</li>
          <li>Unique Styles</li>
          <li>Attention to Detail</li>
          <li>Modern Techniques</li>
        </ul>
      </div>
      <div class="banner-square image-square design-image">
        <img src="@/assets/interior_design.jpg" alt="Designs Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
};
</script>

<style scoped>
.banner-container {
  background-color: #414A4C;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  max-width: 800px;
}

.banner-square {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #535C68;
  color: #fff;
  overflow: hidden;
}

.image-square img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-square {
  padding: 20px;
  text-align: center;
}

.text-square h2 {
  margin-bottom: 10px;
  color: orange;
}

.text-square ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.text-square li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
  text-align: left;
}

.text-square li::before {
  content: '•';
  color: orange;
  position: absolute;
  left: 0;
}

.manager-image {
  border-top-left-radius: 10px;
}

.mantra-text {
  border-top-right-radius: 10px;
}

.designs-text {
  border-bottom-left-radius: 10px;
}

.design-image {
  border-bottom-right-radius: 10px;
}

@media (max-width: 768px) {
  .banner-grid {
    grid-template-columns: 1fr;
  }

  .manager-image {
    order: 1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .mantra-text {
    order: 2;
    border-radius: 0;
  }

  .design-image {
    order: 3;
    border-radius: 0;
  }

  .designs-text {
    order: 4;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .text-square {
    padding: 10px;
  }
}
</style>
