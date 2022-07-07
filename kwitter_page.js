const firebaseConfig = {
    apiKey: "AIzaSyBsLd_IRYnaUIQbKHkU-YqgzjQeX-kqcnY",
    authDomain: "kwitter-project-f0876.firebaseapp.com",
    databaseURL: "https://kwitter-project-f0876-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-f0876",
    storageBucket: "kwitter-project-f0876.appspot.com",
    messagingSenderId: "309125653131",
    appId: "1:309125653131:web:470611395e619cdfe4aa8e"
  };
firebase.initializeApp(firebaseConfig);
room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name:user_name,
                  message:msg,
                  like:0
            }
      );
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }