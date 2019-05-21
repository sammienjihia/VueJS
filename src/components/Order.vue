<template>
    <div>
        <h1>Add a book</h1>
        Book id: <input type="text" v-model="book_id">
        Book title: <input type="text" v-model="book_title">
        Book author: <input type="text" v-model="book_author">
        Book description: <input type="text" v-model="book_description">
        <button @click="addBook()">Add book</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
     book_id: '',
     book_title: '',
     book_author: '',
     book_description: ''
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
    addBook: function(){
        let data = {
            bid: this.book_id, 
            btitle: this.book_title, 
            bauth: this.book_author, 
            bdes: this.book_description
        };

      this.$store.dispatch('addBook', data);
    }
  }

  
}
</script>