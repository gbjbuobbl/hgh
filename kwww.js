var firebaseConfig = {
    apiKey: "AIzaSyDRP06ozxP6t8LGqvSryTP0JY0uO5iEdUY",
    authDomain: "naruto-kun-dattebayo.firebaseapp.com",
    databaseURL: "https://naruto-kun-dattebayo-default-rtdb.firebaseio.com",
    projectId: "naruto-kun-dattebayo",
    storageBucket: "naruto-kun-dattebayo.appspot.com",
    messagingSenderId: "981095120524",
    appId: "1:981095120524:web:b5bc512d3cc54b6a4f05a9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  User = localStorage.getItem("playerid");
  document.getElementById("k").innerHTML = "Welcome" + User + "!";


  function addroom() {
    room_name = document.getElementById("room_name").value; 
    firebase.database().ref("/").child(room_name) .update({ purpose : "adding room name"
    )};
    localStorage.setItem("room_name", room_name); window. Location "kwitter_page.html";
    
  }