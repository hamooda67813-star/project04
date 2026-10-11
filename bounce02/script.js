const translations = {

    en: {
        name: "Mohammed",
        job: "Computer Engineering Student",
        description: "Welcome to my personal portfolio.",
        aboutTitle: "About Me",
        aboutText: "I am a Computer Engineering student interested in technology and programming.",
        hobbiesTitle: "My Hobbies",
        hobby1: "Going to the gym",
        hobby2: "Playing football",
        hobby3: "Reading books",
        hobby4: "Writing expressions",
        languageButton: "العربية"
    },

    ar: {
        name: "محمد",
        job: "طالب هندسة حاسوب",
        description: "مرحباً بكم في ملفي الشخصي.",
        aboutTitle: "نبذة عني",
        aboutText: "أنا طالب هندسة حاسوب مهتم بالتكنولوجيا والبرمجة.",
        hobbiesTitle: "هواياتي",
        hobby1: "الذهاب إلى النادي الرياضي",
        hobby2: "لعب كرة القدم",
        hobby3: "قراءة الكتب",
        hobby4: "كتابة التعبيرات",
        languageButton: "English"
    }

};


let currentLanguage = "en";


const languageButton = document.getElementById("languageButton");


languageButton.addEventListener("click", function () {

    if (currentLanguage === "en") {

        currentLanguage = "ar";

        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";

    } else {

        currentLanguage = "en";

        document.documentElement.dir = "ltr";
        document.documentElement.lang = "en";
    }


    document.getElementById("name").textContent =
        translations[currentLanguage].name;

    document.getElementById("job").textContent =
        translations[currentLanguage].job;

    document.getElementById("description").textContent =
        translations[currentLanguage].description;

    document.getElementById("aboutTitle").textContent =
        translations[currentLanguage].aboutTitle;

    document.getElementById("aboutText").textContent =
        translations[currentLanguage].aboutText;

    document.getElementById("hobbiesTitle").textContent =
        translations[currentLanguage].hobbiesTitle;

    document.getElementById("hobby1").textContent =
        translations[currentLanguage].hobby1;

    document.getElementById("hobby2").textContent =
        translations[currentLanguage].hobby2;

    document.getElementById("hobby3").textContent =
        translations[currentLanguage].hobby3;

    document.getElementById("hobby4").textContent =
        translations[currentLanguage].hobby4;

    languageButton.textContent =
        translations[currentLanguage].languageButton;

});