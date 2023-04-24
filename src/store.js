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
        news:[],
        submenu:[],
        users:[],
        zag:[]
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
        bindSM: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('submenu', db.collection('submenu'))
        }),
        bindUser: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('users', db.collection('users'))
        }),

        addUser: firestoreAction((context, payload) => {
            return db.collection('users').add(payload)
        }),
        delUser: firestoreAction((context, payload) => {
            return db.collection('users').doc(payload).delete()
        }),

        bindquest: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('zag', db.collection('zagadki'))
        }),

       
       initFirebase(){
        //  const firebaseApp =
          firebase.initializeApp({
            apiKey: "AIzaSyDC4qJty0l_AMa7kN-TP__cGh0cRH9BKok",
            authDomain: "rusik-magaz17.firebaseapp.com",
            databaseURL: "https://rusik-magaz17-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "rusik-magaz17",
            storageBucket: "rusik-magaz17.appspot.com",
            messagingSenderId: "37682391596",
            appId: "1:37682391596:web:c2fa73eda7beff2eb0ff89"
          });
        },
    }
})

store.dispatch('bindMenu')
store.dispatch('bindB')
store.dispatch('bindN')
store.dispatch('bindSM')
store.dispatch('bindUser')
store.dispatch('bindquest')
