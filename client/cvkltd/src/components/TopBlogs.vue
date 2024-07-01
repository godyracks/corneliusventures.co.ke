<template>
  <div class="blog-container">
    <h2 class="section-title">Blog Posts</h2>
    <div class="blog-cards">
      <div class="blog-card" v-for="(post, index) in blogPosts" :key="index">
        <div class="blog-image">
          <img :src="post.imageUrl" alt="Blog Image" />
          <div class="blog-date">{{ formatDate(post.date) }}</div>
        </div>
        <div class="blog-details">
          <h3 class="blog-title">{{ post.title }}</h3>
          <p class="blog-content">{{ post.content }}</p>
          <a href="#" class="read-more">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBlogs',
  data() {
    return {
      blogPosts: [
        {
          imageUrl: '@/assets/mansion2.jpg',
          date: '2023-12-19',
          title: 'Sample Blog Post 1',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          imageUrl: '@/assets/mansion1.jpg',
          date: '2023-11-15',
          title: 'Sample Blog Post 2',
          content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        {
          imageUrl: '@/assets/mansion_under.jpg',
          date: '2023-10-05',
          title: 'Sample Blog Post 3',
          content: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
        }
      ]
    };
  },
  methods: {
    formatDate(dateString) {
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    }
  }
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

.blog-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.blog-card {
  background-color: #535C68;
  color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  width: calc(33.333% - 20px); /* Initially 3 cards per row */
  position: relative;
  margin-bottom: 20px;
}

.blog-image {
  position: relative;
  height: 0;
  padding-top: 50%;
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
  max-height: 2.8em; /* Limit content to 4 lines */
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

@media (max-width: 768px) {
  .blog-card {
    width: 100%; /* Switch to single column on smaller screens */
  }
}
</style>
