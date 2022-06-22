var percent = "%";
var message = "Access Denied";


// JAVASCRIPT PROGRESS AND FUNCTION
var jsProgress = document.getElementById('jsProgress');
var JsError = document.getElementById("javaScript");
jsProgress.textContent = 45 + percent;
console.log(jsProgress);

function javaScript(){
JsError.textContent = message;
}

//HTML PROGRESS
var htmlProgress = document.getElementById("htmlProgress");
var htmlError = document.getElementById("html")
htmlProgress.textContent = 90 + percent;

function html(){
    htmlError.textContent = message;
}

//CSS PROGRESS
var cssProgress = document.getElementById("cssProgress");
var cssError = document.getElementById("css")
cssProgress.textContent = 80 + percent;

function css(){
    cssError.textContent = message;
}