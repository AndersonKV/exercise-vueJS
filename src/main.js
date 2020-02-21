import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDbBGYW09hQJENsrypi_ZzV-S_AH4GAGGc",
  authDomain: "vue-calandar-2e5d0.firebaseapp.com",
  databaseURL: "https://vue-calandar-2e5d0.firebaseio.com",
  projectId: "vue-calandar-2e5d0",
  storageBucket: "vue-calandar-2e5d0.appspot.com",
  messagingSenderId: "87977253689",
  appId: "1:87977253689:web:686727da6b7695102926e8"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
