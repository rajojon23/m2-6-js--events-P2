// add js here
let form = document.querySelector("form");

let password = document.querySelector("#password");
let password_confirm = document.querySelector("#password_confirm");
let submit_button = document.querySelector("#submit");
let terms = document.querySelector("#terms");
let error_container = document.querySelector(".error");


let error_text = document.querySelector(".error_text");
// let error_text = document.createElement("p");
// error_text.classList.add("error_text");




let error = "";
let terms_checked = false; 
let pwd_check = false;

submit_button.addEventListener("click", function(){


	terms_checked = false; 
	pwd_check = false;

	console.log("submit clicked");

	clearErr();

	checkTerms();

	checkPwd();




	console.log("terms_checked", terms_checked);



	if(pwd_check == true && terms_checked == true){

		console.log("everything true");



		/*Needs this or else form submission bypasses in-browser validation, won't work on dinosaur browsers */
		if(form.reportValidity()){
			alert("success!");
		}


	}
	


});


form.addEventListener('submit', function(){

	event.preventDefault();

});


function checkTerms(){

	if(terms.checked == false){
		alert('terms have to be agreed');

		event.preventDefault();
	}
	else{
		terms_checked = true;
	}



}

function checkPwd(){
	if(password.value.length < 10){
		error = "Your password is too short! Please provide a password that is at least 10 characters long."
		showErr(error);

		event.preventDefault();
	}
	else if (password.value != password_confirm.value){
		error = 'The "password" and "confirm password" fields do not match.'
		
		password_confirm.focus();
		password_confirm.style.border = "2px solid red";
		showErr(error);

		event.preventDefault();


	}
	else{
		console.log("pwd check passed");

		pwd_check = true;


		
		return ;
	}

}


function showErr(message){


	error_text.textContent = message;
	error_container.style.display = "block";


}

function clearErr(){
	error_container.style.display = "none";
	password_confirm.style.border = "1px solid #E0E0E0";
	error = "";
}