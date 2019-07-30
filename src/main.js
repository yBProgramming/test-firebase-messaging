import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCB01z2ReEqTRv0jD_66TTBTgPZaxOcsco",
  authDomain: "your-sw.firebaseapp.com",
  databaseURL: "https://your-sw.firebaseio.com",
  projectId: "your-sw",
  storageBucket: "",
  messagingSenderId: "905012060414",
  appId: "1:905012060414:web:229b7a9dcbd007b7"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BOF0N-oSAI3Q9EdEwyLxCNkf9_7lO1IYCHvFsNq-Nm4JhZ_71CLV9x7Q2VginiZrn5OC8d6Nww9eLtx7sQ1K8xc"); // 1. Generate a new key pair
// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');

  // Get Token
  messaging.getToken().then((token) => {
    console.log(token)
    prompt("Notification Token", token);
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});

messaging.onMessage(function(playload){
  console.log(playload['notification']['title'])
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    var options = {
        body: playload['notification']['body']
    };
    var n = new Notification(playload['notification']['title'], options);
  }
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var options = {
            body: playload['notification']['body']
        };
        var n = new Notification(playload['notification']['title'], options);
      }
    });
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

