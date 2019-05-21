import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    name: 'Sammie',
    phone: '071234567654',
    books: [{
        id: 1,
        title: 'title1',
        author: 'author1',
        description: 'book1 description here'
    },
    {
        id: 2,
        title: 'title2',
        author: 'author2',
        description: 'book2 description here'
    }]
};

const getters = {
    name: state => state.name,
    phone: state => state.phone,
    books: state => state.books,
    getBooksById: state => (id) => {
        return state.books.find(book => book.id === id)
    }
};

const mutations = {
    "CHANGEPHONE" (state, num) {
        state.phone = num;
    },

    "ADDBOOK" (state, data){
        
        state.books.push({
            id : data.bid,
            title: data.btitle,
            author: data.bauth,
            description: data.bdes

        }) ;
        
    },
    'EDITBOOK' (state, data_obj){
        let bookobj = store.getters.getBooksById(data_obj.id)
        bookobj.title = data_obj.title,
        bookobj.author = data_obj.author,
        bookobj.description = data_obj.description

        console.log(bookobj);

    }
};

const actions = {
    changePhone (state, num) {
        state.commit('CHANGEPHONE', num);
    },
    addBook (state, data) {
        state.commit('ADDBOOK', data)
    }, 
    editBook (state,data_obj){
        state.commit('EDITBOOK', data_obj)
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})


export default store;