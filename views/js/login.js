function checkIflog(){
	var user = firebase.auth().currentUser;
	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			console.log(user);
			console.log('signed in');
			document.getElementById('signIn').style.visibility='hidden';
		document.getElementById('signOut').style.visibility='visible';
		document.getElementById("name").innerHTML = user.displayName;
		}
		else
		{
			console.log('signed out');
			document.getElementById('signOut').style.visibility='hidden';
		document.getElementById('signIn').style.visibility='visible';
		}
	});
}
checkIflog();

function signoutFun(){
	firebase.auth().signOut();
	checkIflog();
}

function signInWithGoogle(){
	var googleAuthProvider = new firebase.auth.GoogleAuthProvider;

	firebase.auth().signInWithPopup(googleAuthProvider)
	.then(function(data){
		console.log(data);
		checkIflog();
	})
	.catch(function(error){
		console.log(error);
		checkIflog();
	})
}
