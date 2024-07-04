<template>
  <div>
    <Navbar />
    <h1>Dashboard - Upload Blog Post</h1>

    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <div>
        <label>Author:</label>
        <input v-model="author" type="text" placeholder="Enter author name">
      </div>
      <div>
        <label>Title:</label>
        <input v-model="title" type="text" placeholder="Enter title">
      </div>
      <div>
        <label>Content:</label>
        <textarea v-model="content" placeholder="Enter content"></textarea>
      </div>
      <div>
        <label>Image Upload:</label>
        <input type="file" name="image" @change="handleFileUpload">
      </div>
      <div>
        <label>Date:</label>
        <input v-model="date" type="date">
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      author: '',
      title: '',
      content: '',
      image: null,
      date: ''
    };
  },
  methods: {
    handleFileUpload(event) {
      this.image = event.target.files[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('author', this.author);
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('image', this.image);
      formData.append('date', this.date);

      try {
        const response = await axios.post('http://localhost:5000/api/blogs', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Blog post uploaded successfully:', response.data);
        this.author = '';
        this.title = '';
        this.content = '';
        this.image = null;
        this.date = '';
      } catch (error) {
        console.error('Error uploading blog post:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Component-specific styles */
/* Add your component-specific styles here */
</style>
