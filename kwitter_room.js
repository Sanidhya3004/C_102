
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDaLUXcUoi4Rizw76-NAUkwSAmtjGiX17g",
      authDomain: "kwiter-d000c.firebaseapp.com",
      databaseURL: "https://kwiter-d000c-default-rtdb.firebaseio.com",
      projectId: "kwiter-d000c",
      storageBucket: "kwiter-d000c.appspot.com",
      messagingSenderId: "913858860145",
      appId: "1:913858860145:web:f480fd6bf2dd73805db7d0",
      measurementId: "G-B4J3M9P0NJ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = " Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+ Room_names+" onclick=redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}