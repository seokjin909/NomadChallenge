
const logInForm = document.querySelector("#logInForm");
const logInput = document.querySelector("#logInput");

const addClass = document.querySelector("#show");
const DISPLAY_HIDDEN = "hidden"
const YOURNAME = "username"
const savedUsername = localStorage.getItem(YOURNAME);

function logIn(event){
    event.preventDefault();
    logInForm.classList.add(DISPLAY_HIDDEN);
    const username = logInput.value;
    localStorage.setItem(YOURNAME,username);
    loadingName(username);
}

function loadingName(username){
    addClass.innerHTML = `Hello, ${username}🐯`;
    addClass.classList.remove(DISPLAY_HIDDEN);
}

if(savedUsername==null){
    logInForm.classList.remove(DISPLAY_HIDDEN)
    logInForm.addEventListener("submit", logIn)
} else {
    loadingName(savedUsername);
}
