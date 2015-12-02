$locationProvider.html5Mode(true);

console.log("hi from app.js");
var myApp = angular.module("FriendApp", []);

myApp.run(function(){
	console.log("It works!")
});