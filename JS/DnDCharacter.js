//DnDCharacter.js
// For CS1520 assignment 2 we were assigned to create a form
// and using javascript, run simple form validation and form
// submission

//Author: Matt Snyder

//var: player, character, gender, alignent, race, class - variables to store the text based entries and choices
//var: age, str, dex, con, int, wis, cha, age - variables to store the number based entries
//var: skillpoints - a variable for storing the constant 75, the total combined skill levels of a level 1 character.
//var: background - a variable for storing the backstory. I think a string is best
var player, character, gender, alignment, race, role;
var age, str, dex, con, inT, wis, cha;
var skillpoints = 75;
var skillTotal = str + dex + con + wis + inT + cha;
var background;
// the invalids will be used to check if the form is valid for submission
var statInvalid = false;
var nameInvalid = false;
var ageInvalid = false;
//*********************************************************

$(document).ready(function() {
  $("#submission").prop("disabled", true);	
})

function statChangeHandler(event) {
  //alert(skillpoints);
  str = parseInt(document.querySelector('[name="str"]').value);
  dex = parseInt(document.querySelector('[name="dex"]').value);
  con = parseInt(document.querySelector('[name="con"]').value);
  inT = parseInt(document.querySelector('[name="inT"]').value);
  wis = parseInt(document.querySelector('[name="wis"]').value);
  cha = parseInt(document.querySelector('[name="cha"]').value);
  //alert("Strength: " + str + " Dexterity: " + dex + " Constitution: " + con + " Intelligence: " + inT + " Wisdom: " + wis + " Charisma: " + cha);
  skillTotal = str + dex + con + wis + inT + cha;
  if (skillTotal > skillpoints) {
    alert("Too many skillpoints!");	
    statInvalid = true;
  }
  //alert(skillTotal);
}

function validateForm() {
  //alert("Can you see me?");
  var pName = document.querySelector('[name="playerName"]').value;
  var cName = document.querySelector('[name="characterName"]').value;
  var age = parseInt(document.querySelector('[name="age"]').value);
  //alert(pName);
  //alert(cName);
  //alert(age);
  if (skillTotal != skillpoints) {
	alert("Not enough skillpoints!");
	document.getElementsByTagName("label")[7].style.color = "red";
	document.getElementsByTagName("label")[8].style.color = "red";
	document.getElementsByTagName("label")[9].style.color = "red";
	document.getElementsByTagName("label")[10].style.color = "red";
	document.getElementsByTagName("label")[11].style.color = "red";
	document.getElementsByTagName("label")[12].style.color = "red";
	statInvalid = true;	
  }
  else {
	statInvalid = false;
	document.getElementsByTagName("label")[7].style.color = "black";
	document.getElementsByTagName("label")[8].style.color = "black";
	document.getElementsByTagName("label")[9].style.color = "black";
	document.getElementsByTagName("label")[10].style.color = "black";
	document.getElementsByTagName("label")[11].style.color = "black";
	document.getElementsByTagName("label")[12].style.color = "black";
  }
  if (age <= 18){
	alert("Character is too young to go adventuring!");
	document.getElementsByTagName("label")[2].style.color = "red";
	ageInvalid = true;
  }
  else {
    ageInvalid = false;
	document.getElementsByTagName("label")[2].style.color = "black";
  }
  if (pName == null || pName == "") {
	alert("Tell me, what is your name?");
	document.getElementsByTagName("label")[0].style.color = "red";
	nameInvalid = true;
  }
  else {
    nameInvalid = false;
	document.getElementsByTagName("label")[0].style.color = "black";
  }
  if (cName == null || cName == "") {
    alert("You must name your character something...");
	document.getElementsByTagName("label")[1].style.color = "red";
    nameInvalid = true;	
  }
  else {
    nameInvalid = false;
	document.getElementsByTagName("label")[1].style.color = "black";
  }
  if (nameInvalid == true || ageInvalid == true || statInvalid == true) {
	return false;
  }
  else {
	//alert("How do you do?");
	$("#submission").prop("disabled", false);
    return true;
  }
}