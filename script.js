
function showMessage(input, message, type) {

	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;

	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	input.focus();
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	
	if (!hasValue(input, requiredMsg)) {
		return false;
	}

	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		
		return showError(input, invalidMsg);
	}
	return true;
}

function validatePhoneNo(input,requiredNo,invalidNo) {
    if(!hasValue(input,requiredNo)) {
        return false;
    }
    const phoneNo=/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/;
    const no=input.value.trim();
    if(!phoneNo.test(no)){
        return showError(input,invalidNo);
    }
    return true;
}

function validateAddress(input,requiredAdd,validaddress){
	if(!hasValue(input,requiredAdd)) {
		return false;
	}
	const address=/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/;
	const add=input.value.trim();
	if(address.test(add)){
		return showError(input,invalidaddress);
	}
	
}
function validateDate(input,requiredDate){
	if(!hasValue(input,requiredDate)){
		return false;
	}
}
const form = document.querySelector("#form");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";
const PHONE_REQUIRED = "Please enter your mobile number";
const PHONE_INVALID = "Please enter a correct mobile  number";
const ADDRESS_REQUIRED="Please enter an address";
const ADDRESS_INVALID="Please enter a valid address";
const DATE_REQUIRED="Please enter the date of the event";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["fname"], NAME_REQUIRED);
    let nameValid1 = hasValue(form.elements["lname"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    let phoneValid = validatePhoneNo(form.elements["phno"], PHONE_REQUIRED, PHONE_INVALID);
	let addressValid = validateAddress(form.elements["address"],  ADDRESS_REQUIRED,ADDRESS_INVALID);
	let dateValid = validateDate(form.elements["date"], DATE_REQUIRED);
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("Demo only. No form was posted.");
	}
});


