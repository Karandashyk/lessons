
let pattern = /\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
let text = "+38 (063) 22-232-23";

pattern = /[а-яА-Я]+ [а-яА-Я]+ [а-яА-Я]+/;
text = "Иванов Иван Иванович";

pattern = /[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}/i;
text = "ivanov.ivan@example.com";

// http://www.google.com или https://www.google.com
pattern = /https?:\/\/[\w:\.\?\&]+/g;
text = "http://www.google.com или https://www.google.com blah-blah-blah http://www.google.com:80";
let res;
while ((res = pattern.exec(text)) != null) {
    alert("Найдено " + res + " по индексу " + res.index + ".");
}


// Set cookie
document.cookie = "username=John Doe";
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

// Read all cookie
var x = document.cookie; // "cookie1=value; cookie2=value; cookie3=value;"

// Change = Overwrite cookie
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// Delete cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// encode/decodeURIComponent()
let value = encodeURIComponent("John Doe");
document.cookie = "username=" + value;



// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
var data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();

// Get number of elements in Storage
sessionStorage.length; 

// Return key of n-th element in Storage
sessionStorage.key(n);




