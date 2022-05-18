// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC_JXTKi6E8FgAc1xigzhG20snK0rtqbBg",
      authDomain: "qwitter-92aa9.firebaseapp.com",
      databaseURL: "https://qwitter-92aa9-default-rtdb.firebaseio.com",
      projectId: "qwitter-92aa9",
      storageBucket: "qwitter-92aa9.appspot.com",
      messagingSenderId: "897937724236",
      appId: "1:897937724236:web:948577df0c598a0648b5e9"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
