// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
        apiKey: "AIzaSyAvs0bMkVARTScP5V_pv7H0wG8ZsfREWgw",
        authDomain: "basefirestore.firebaseapp.com",
        databaseURL: "https://basefirestore.firebaseio.com",
        projectId: "basefirestore",
        storageBucket: "basefirestore.appspot.com",
        messagingSenderId: "795760185099",
        appId: "1:795760185099:web:2998398b774aa707bd5c0e",
        measurementId: "G-BNJ39ET942"
      });
  
  var db = firebase.firestore();
  const firestore = firebase.firestore()

  const $elem = (selector) => document.querySelector(selector);

  const title = $elem('#title');
  const content =  $elem('#content');
  const form = $elem(".post-form");

  const docRef = firestore.doc("blog/posts")

  form.addEventListener("submit", (e) => {
      e.preventDefault();
      db.collection('posts').add({
          title: title.value,
          content: content.value
      }).then(doc => {
          form.reset()
      }).catch(error => {
          console.error('error happened ', error)
      })
  })