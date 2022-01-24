
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyALXU86S5tWNcxuSc3noo8_p-Nmr8fRIIg",
      authDomain: "practice-f02f0.firebaseapp.com",
      databaseURL: "https://practice-f02f0-default-rtdb.firebaseio.com",
      projectId: "practice-f02f0",
      storageBucket: "practice-f02f0.appspot.com",
      messagingSenderId: "314968465676",
      appId: "1:314968465676:web:34e45ebff9966eec836929"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
    
    function addroom(){
         Room_name=document.getElementById("room_name").value;
         localStorage.setItem("room_name",room_name);
         window.location="kwitter_room.html"
         firebase.database().ref("/").child(user_name).update({
            purpose:"adding room name"
        });


    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
