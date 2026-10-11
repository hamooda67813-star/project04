const profilePhoto = document.getElementById("profilePhoto");

const casualButton = document.getElementById("casualButton");
const professionalButton = document.getElementById("professionalButton");


casualButton.addEventListener("click", function () {

    profilePhoto.src = "assets/casual.jpg";
    profilePhoto.alt = "Mohammed casual profile photo";

});


professionalButton.addEventListener("click", function () {

    profilePhoto.src = "assets/professional.jpg";
    profilePhoto.alt = "Mohammed professional profile photo";

});