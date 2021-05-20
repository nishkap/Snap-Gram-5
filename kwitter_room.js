 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyD3xqbNUT6bkp5vr1ooHJ0osaG_wH75xpQ",
      authDomain: "social-website-1.firebaseapp.com",
      databaseURL: "https://social-website-1-default-rtdb.firebaseio.com",
      projectId: "social-website-1",
      storageBucket: "social-website-1.appspot.com",
      messagingSenderId: "364224354674",
      appId: "1:364224354674:web:9382f551dc6c7c8436e5eb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name+"!"; 

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}