function addRest(){
	var database = firebase.database();
	var restaurantRef = database.ref('/Restaurants');
	var restaurant = document.getElementById('addrest').value;
	restaurantRef.push(restaurant);
}