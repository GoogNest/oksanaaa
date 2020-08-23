var btn_details__advanced = document.querySelector(".advanced-learn__details");
var mod_details__advanced = document.querySelector(".advanced-learn__modal-details");
var close__advanced  = mod_details__advanced.querySelector(".advanced-learn__modal-details--close");

var btn_details__base = document.querySelector(".base-learn__details");
var mod_details__base = document.querySelector(".base-learn__modal-details");
var close__base  = mod_details__base.querySelector(".base-learn__modal-details--close");

var btn_details__advanced__buy = document.querySelector(".advanced-learn__modal-details__buy");
var mod_details__advanced__buy = document.querySelector(".advanced-learn__modal-buy");
var close__advanced__buy  = mod_details__advanced__buy.querySelector(".advanced-learn__modal-buy--close");

var btn_details__base__buy = document.querySelector(".base-learn__modal-details__buy");
var mod_details__base__buy = document.querySelector(".base-learn__modal-buy");
var close__base__buy  = mod_details__base__buy.querySelector(".base-learn__modal-buy--close");

var isStorageSupport = true;
var storage_login = "";
var storage_email = "";

try {
    storage_login = localStorage.getItem("login");
    storage_email = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

btn_details__advanced.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_details__advanced.classList.add("advanced-learn__modal-details--modal-show");   
});

close__advanced.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_details__advanced.classList.remove("advanced-learn__modal-details--modal-show");
    mod_details__advanced.classList.remove("advanced-learn__modal-details--modal-error");
});

btn_details__base.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_details__base.classList.add("base-learn__modal-details--modal-show");       
});

close__base.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_details__base.classList.remove("base-learn__modal-details--modal-show");
    mod_details__base.classList.remove("base-learn__modal-details--modal-error");
});

btn_details__advanced__buy.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_details__advanced__buy.classList.add("advanced-learn__modal-buy--modal-show"); 
    mod_details__advanced.classList.remove("advanced-learn__modal-details--modal-show");
    mod_details__advanced.classList.remove("advanced-learn__modal-details--modal-error");      
});

close__advanced__buy.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_details__advanced__buy.classList.remove("advanced-learn__modal-buy--modal-show");
    mod_details__advanced__buy.classList.remove("advanced-learn__modal-buy--modal-error");
});

btn_details__base__buy.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_details__base__buy.classList.add("base-learn__modal-buy--modal-show"); 
    mod_details__base.classList.remove("base-learn__modal-details--modal-show");
    mod_details__base.classList.remove("base-learn__modal-details--modal-error");      
});

close__base__buy.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_details__base__buy.classList.remove("base-learn__modal-buy--modal-show");
    mod_details__base__buy.classList.remove("base-learn__modal-buy--modal-error");
});

// if (storage_login && storage_email) {
    //     login.value = storage_login;
    //     email.value = storage_email;
    //     text.focus();
    // } else {
    //     login.focus(); 
    // }

// form.addEventListener("submit", function (evt) {
    
//     if (!login.value || !email.value) {
//         evt.preventDefault();
//         mod_wu.classList.remove("modal-error");
//         mod_wu.offsetWidth = mod_wu.offsetWidth;
//         mod_wu.classList.add("modal-error");
//         console.log("введите логин и емайл");
//     } else {
//         if (isStorageSupport) {
//         localStorage.setItem("login", login.value);
//         localStorage.setItem("email", email.value);
//         }
//     }
// });



// window.addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 27) {
//         if (mod_wu.classList.contains("modal-show")) {
//             mod_wu.classList.remove("modal-show");
//             mod_wu.classList.remove("modal-error");
//             localStorage.clear();
//         }
//     }
// });