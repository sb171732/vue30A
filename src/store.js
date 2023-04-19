import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './db'
import firebase from 'firebase/app'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        menu: [],
        banners: [],
        news:[]
    },
    mutations: {
        ...vuexfireMutations,
    },
    actions: {
        bindMenu: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('menu', db.collection('menu'))
        }),
        bindB: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('banners', db.collection('banners'))
        }),
        bindN: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('news', db.collection('news'))
        }),
       
       initFirebase(){
        //  const firebaseApp =
          firebase.initializeApp({
            apiKey: "AIzaSyDIi78t--LzwxsCKqLXlgWOzUmhtaq1ucw",
            authDomain: "vue30app.firebaseapp.com",
            projectId: "vue30app",
            storageBucket: "vue30app.appspot.com",
            messagingSenderId: "1042190249851",
            appId: "1:1042190249851:web:7a1f4aa5cd079bdc1097de"
          });
        },
    }
})

store.dispatch('bindMenu')
store.dispatch('bindB')
store.dispatch('bindN')