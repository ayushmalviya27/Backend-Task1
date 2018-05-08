function roomcheck(){
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    document.getElementById("roomform").style.visibility = "hidden";
	    document.getElementById("roomout").style.visibility = "visibile";
	  } else {
	    document.getElementById("roomform").style.visibility = "visibile";
	    document.getElementById("roomout").style.visibility = "hidden";
	  }
	});	
}
roomcheck();


function roomlogin(){
	var email = document.getElementById('emailid').value;
	var password = document.getElementById('pass').value;

	firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
		window.location.reload();
	}).catch(function(error) {
	   var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
	});
}

function roomsignout(){
	firebase.auth().signOut().then(function() {
	  console.log('User signed out');
	  window.location.reload();
	}).catch(function(error) {
	  console.log(error);
	});
	
}