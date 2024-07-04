<template>
  <div class="blog-container">
    <h2 class="section-title">BLOG POSTS</h2>
    <div class="carousel-container" ref="carousel">
      <div class="carousel-track" 
           :style="trackStyle"
           v-if="!isDesktop"
           @touchstart="handleTouchStart"
           @touchmove="handleTouchMove"
           @touchend="handleTouchEnd">
        <div class="blog-card" v-for="(post, index) in displayedBlogPosts" :key="index">
          <div class="blog-image">
            <img :src="post.imageUrl" alt="Blog Image" />
            <div class="blog-date">{{ formatDate(post.date) }}</div>
          </div>
          <div class="blog-details">
            <h3 class="blog-title">{{ post.title }}</h3>
            <p class="blog-content">{{ truncateContent(post.content) }}</p>
            <a href="#" class="read-more">Read More</a>
          </div>
        </div>
      </div>
      <div class="carousel-track" v-else>
        <div class="blog-card" v-for="(post, index) in displayedBlogPosts" :key="index">
          <div class="blog-image">
            <img :src="post.imageUrl" alt="Blog Image" />
            <div class="blog-date">{{ formatDate(post.date) }}</div>
          </div>
          <div class="blog-details">
            <h3 class="blog-title">{{ post.title }}</h3>
            <p class="blog-content">{{ truncateContent(post.content) }}</p>
            <a href="#" class="read-more">Read More</a>
          </div>
        </div>
      </div>
      <div class="carousel-dots" v-if="isMobile">
        <span
          v-for="(post, index) in displayedBlogPosts"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="setCurrentIndex(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TopBlogs',
  data() {
    return {
      blogPosts: [],
      displayedBlogPosts: [],
      currentIndex: 0,
      startX: 0,
      isMobile: window.innerWidth <= 768,
      isDesktop: window.innerWidth > 768,
      trackStyle: { transform: 'translateX(0%)' },
    };
  },
  computed: {
    trackStyle() {
      return {
        transform: `translateX(-${this.currentIndex * (this.isDesktop ? 100 : 100)}%)`,
        transition: 'transform 0.5s ease',
      };
    },
  },
  methods: {
    formatDate(dateString) {
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    },
    truncateContent(content) {
      if (!content) return ''; // Handle undefined or null content

      // Split content into words and limit to 20 words
      const words = content.split(' ').slice(0, 20).join(' ');
      return `${words}...`;
    },
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
    async fetchBlogPosts() {
      try {
        const response = await axios.get('/api/blogs', { params: { limit: 3 } });
        this.blogPosts = response.data;
        this.displayedBlogPosts = this.blogPosts; // Initially display all fetched posts
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
      this.isDesktop = window.innerWidth > 768;
    },
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      const currentX = event.touches[0].clientX;
      const diff = this.startX - currentX;

      if (Math.abs(diff) > 10) {
        event.preventDefault();
      }
    },
    handleTouchEnd(event) {
      const currentX = event.changedTouches[0].clientX;
      const diff = this.startX - currentX;

      if (diff > 50 && this.currentIndex < this.displayedBlogPosts.length - 1) {
        this.currentIndex++;
      } else if (diff < -50 && this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.fetchBlogPosts(); // Fetch blog posts on component mount
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>


<style scoped>
.blog-container {
  background-color: #2C3335;
  padding: 50px 20px;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 20px;
}

.carousel-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.blog-card {
  background-color: #535C68;
  color: #ffffff;
  border-radius: 8px;
  border-bottom: 1px solid orange;
  overflow: hidden;
  flex: 0 0 100%;
  max-width: 290px;
  height: 400px;
  position: relative;
  margin: 10px;
}

.blog-image {
  position: relative;
  height: 0;
  padding-top: 80%;
}

.blog-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-date {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: orange;
  color: #ffffff;
  padding: 5px;
  font-size: 0.8rem;
  border-radius: 3px;
}

.blog-details {
  padding: 20px;
}

.blog-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.blog-content {
  font-size: 1rem;
  line-height: 1.4;
  max-height: 2.8em;
  overflow: hidden;
  text-overflow: ellipsis;
}

.read-more {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: orange;
  text-decoration: underline;
  transition: color 0.3s;
}

.read-more:hover {
  color: #ffffff;
}

.carousel-dots {
  text-align: center;
  margin-top: 10px;
}

.carousel-dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.carousel-dots span.active {
  background-color: orange;
}

@media (min-width: 768px) {
  .carousel-track {
    flex-wrap: wrap;
    justify-content: center;
  }

  .blog-card {
    flex: 0 0 calc(33.333% - 20px);
    margin: 10px;
  }

  .carousel-dots {
    display: none;
  }
}
</style>
