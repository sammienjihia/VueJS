<template>
  <div>
    <h1>List of books</h1>
    <p>Name: {{name}}</p>
    <p>Phone: {{phone}}</p>
    <button  v-on:click="seen = !seen">Edit Book details</button>
     <hr>
    <ol v-for="book in books" :key="book.id">
      
      <p>Book Title: {{book.title}}</p>
      <p>Book Author: {{book.author}}</p>
      <p>Book Description: {{book.description}}</p>
      


      

      <div v-if="seen">
        <input type="text" v-model="book.title">
        <input type="text" v-model="book.author">
        <input type="text" v-model="book.description">
        <button @click="editBook(book.id, book.title, book.author, book.description)">Submit</button>
      </div>
      



       <hr>
    </ol>
    
   
    <input type="text" v-model="new_phone">
    <button @click="changePhone()">Change phone</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
     new_phone: '',
     seen: false
    }
  },

  computed: {
    ...mapGetters({
      name: 'name',
      phone: 'phone',
      books: 'books'
    })
  },

  methods:{
    changePhone: function(){
      this.$store.dispatch('changePhone', this.new_phone);
    },
    editBook:function(id, tit, auth, des){
      let book_obj = {
        id: id,
        title: tit,
        author: auth,
        description: des
      }
      this.$store.dispatch('editBook', book_obj )
      console.log(tit, auth, des)
    }
  }

  
}
</script>
