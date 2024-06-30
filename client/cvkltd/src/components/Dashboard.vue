<template>
  <div>
       <Navbar /> 
    <h1>Dashboard - Upload Project</h1>

    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <div>
        <label>Name:</label>
        <input v-model="name" type="text" placeholder="Enter name">
      </div>
      <div>
        <label>Description:</label>
        <textarea v-model="description" placeholder="Enter description"></textarea>
      </div>
      <div>
        <label>Image Upload:</label>
        <input type="file" name="image" @change="handleFileUpload">
      </div>
      <div>
        <label>Start Date:</label>
        <input v-model="startDate" type="date">
      </div>
      <div>
        <label>Complete Date:</label>
        <input v-model="completeDate" type="date">
      </div>
      <div>
        <label>Status:</label>
        <input v-model="status" type="text" placeholder="Enter status (ongoing/completed)">
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
    Navbar // Register Navbar component
  },
  data() {
    return {
      name: '',
      description: '',
      image: null,
      startDate: '',
      completeDate: '',
      status: ''
    };
  },
  methods: {
    handleFileUpload(event) {
      this.image = event.target.files[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('image', this.image);
      formData.append('startDate', this.startDate);
      formData.append('completeDate', this.completeDate);
      formData.append('status', this.status);

      try {
        const response = await axios.post('http://localhost:5000/api/portfolio', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Project uploaded successfully:', response.data);
        this.name = '';
        this.description = '';
        this.image = null;
        this.startDate = '';
        this.completeDate = '';
        this.status = '';
      } catch (error) {
        console.error('Error uploading project:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Component-specific styles */
/* Add your component-specific styles here */
</style>
