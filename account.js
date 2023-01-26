const tabs = document.querySelector(".tabs");
const tabButton = document.querySelectorAll(".navTab");
const content = document.querySelectorAll(".content");

tabs.addEventListener("click", e => {
	const id = e.target.dataset.toggle;
	if (id) {
		tabButton.forEach(navTab => {
			navTab.classList.remove("active");
		});
		e.target.classList.add("active");
	}
	content.forEach(content => {
		content.classList.remove("active");
	});

	const element = document.getElementById(id);
	element.classList.add("active");
});

const passwordInput = document.getElementById("Registerpassword");
const confirmPasswordInput = document.getElementById("confirmPassword");
const registerBtn = document.querySelector(".register-btn");



registerBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let inputValue = passwordInput.value;
	console.log(String(inputValue.length))
	if(String(inputValue).length > 5){
		if(passwordInput.value === confirmPasswordInput.value){
			alert("Welcome");
		}else{
			alert("Your password is not confirmed.")
		}
	}else{
		alert("Your password must be atleast 6 charecters");
	}
});