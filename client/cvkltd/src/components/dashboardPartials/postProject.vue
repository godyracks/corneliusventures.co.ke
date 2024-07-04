<template>
  <div class="dashboard-container">
 
     <h1>Dashboard - Upload Project</h1> 
     <!-- Button to navigate to the blog post creation page -->
    <button @click="navigateToCreateBlog" class="create-blog-button">Create a New Blog Post</button>
      <div class="form-container">
   

    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <div class="form-group">
        <label>Name:</label>
        <input v-model="name" type="text" placeholder="Enter name">
      </div>
      <div class="form-group">
        <label>Description:</label>
        <textarea v-model="description" placeholder="Enter description"></textarea>
      </div>
      <div class="form-group">
        <label>Image Upload:</label>
        <input type="file" name="image" @change="handleFileUpload">
      </div>
      <div class="form-group">
        <label>Start Date:</label>
        <input v-model="startDate" type="date">
      </div>
      <div class="form-group">
        <label>Complete Date:</label>
        <input v-model="completeDate" type="date">
      </div>
      <div class="form-group">
        <label>Status:</label>
        <input v-model="status" type="text" placeholder="Enter status (in progress/completed/not started)">
      </div>
      <button type="submit" class="submit-button">Submit</button>
    </form>

   
      </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
 
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
    },
    navigateToCreateBlog() {
      this.$router.push('/create-a-new-blog-post');
    }
  }
};
</script>

<style scoped>

.dashboard-container {
background-color: #2C2C2C; 
  color: #FFFFFF; 
  width: 100%;
  margin: 0 auto;
}

.form-container {
  background-color: #535151; 
  color: #FFFFFF; 
max-width: 600px;
padding: 20px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="date"],
textarea,
input[type="file"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #444;
  background-color: #3C3C3C;
  color: #FFFFFF;
}

input[type="text"]::placeholder,
textarea::placeholder,
input[type="date"]::placeholder {
  color: #AAAAAA;
}

textarea {
  resize: vertical;
}

.submit-button,
.create-blog-button {
  background-color: #444;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover,
.create-blog-button:hover {
  background-color: #555;
}
</style>
