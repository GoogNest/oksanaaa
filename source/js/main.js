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

var mod_overlay = document.querySelector(".modal-overlay");

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
    mod_overlay.classList.add("modal-overlay--show"); 
});

close__advanced.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_details__advanced.classList.remove("advanced-learn__modal-details--modal-show");
    mod_details__advanced.classList.remove("advanced-learn__modal-details--modal-error");
    mod_overlay.classList.remove("modal-overlay--show");
});

btn_details__base.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_details__base.classList.add("base-learn__modal-details--modal-show");   
    mod_overlay.classList.add("modal-overlay--show");     
});

close__base.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_details__base.classList.remove("base-learn__modal-details--modal-show");
    mod_details__base.classList.remove("base-learn__modal-details--modal-error");
    mod_overlay.classList.remove("modal-overlay--show");
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
    mod_overlay.classList.remove("modal-overlay--show");
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
    mod_overlay.classList.remove("modal-overlay--show");
});

mod_overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_overlay.classList.remove("modal-overlay--show");

    mod_details__base.classList.remove("base-learn__modal-details--modal-show");
    mod_details__base.classList.remove("base-learn__modal-details--modal-error");

    mod_details__base__buy.classList.remove("base-learn__modal-buy--modal-show");
    mod_details__base__buy.classList.remove("base-learn__modal-buy--modal-error");

    mod_details__advanced.classList.remove("advanced-learn__modal-details--modal-show");
    mod_details__advanced.classList.remove("advanced-learn__modal-details--modal-error");

    mod_details__advanced__buy.classList.remove("advanced-learn__modal-buy--modal-show");
    mod_details__advanced__buy.classList.remove("advanced-learn__modal-buy--modal-error");
});
