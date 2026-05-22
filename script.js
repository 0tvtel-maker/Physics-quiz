// ===================================
// Zone du quiz
// ===================================

const quizContent = document.getElementById("quiz-content");

// ===================================
// Récupération des éléments utilisateur
// ===================================

const usernameInput = document.getElementById("username");

const userclassInput = document.getElementById("userclass");

const startButton = document.getElementById("start-btn");

const userForm = document.getElementById("user-form");

// ===================================
// Démarrage du Quiz
// ===================================

startButton.onclick = function () {

  // Récupération des valeurs

  const username =
    usernameInput.value.trim();

  const userclass =
    userclassInput.value.trim();


  // ===================================
  // Vérification des champs
  // ===================================

  if (username === "" || userclass === "") {

    alert("Veuillez remplir tous les champs");

    return;

  }


  // ===================================
  // Sauvegarde locale
  // ===================================

  localStorage.setItem("username", username);

  localStorage.setItem("userclass", userclass);


  // ===================================
  // Gestion des visites
  // ===================================

  let visits =
    localStorage.getItem("visits");

  if (visits === null) {

    visits = 1;

  } else {

    visits = Number(visits) + 1;

  }

  localStorage.setItem("visits", visits);


  // ===================================
  // Masquer le formulaire
  // ===================================

  userForm.style.display = "none";


  // ===================================
  // Afficher le quiz
  // ===================================

  quizContent.style.display = "block";


  // ===================================
  // Lancer le quiz
  // ===================================

  showQuestion();

};



// ===============================
// جلب عناصر HTML
// ===============================

const questionElement = document.getElementById("question");

const choicesElement = document.getElementById("choices");

const nextButton = document.getElementById("next-btn");

const scoreElement = document.getElementById("score");


// ===============================
// متغيرات التطبيق
// ===============================

// رقم السؤال الحالي

let currentQuestion = 0;


// عدد النقاط

let score = 0;


// ===============================
// عرض السؤال الحالي
// ===============================

function showQuestion() {

  // جلب السؤال الحالي

  const q = questions[currentQuestion];


  // وضع نص السؤال داخل الصفحة

  questionElement.innerText = q.question;


  // حذف الاختيارات القديمة

  choicesElement.innerHTML = "";


  // إنشاء الأزرار الخاصة بالاختيارات

  q.choices.forEach((choice, index) => {

    // إنشاء زر جديد

    const button = document.createElement("button");


    // كتابة نص الاختيار

    button.innerText = choice;


// ===============================
// عند الضغط على الاختيار
// ===============================

button.onclick = function () {

  // تعطيل جميع الأزرار بعد الاختيار

  const allButtons = choicesElement.querySelectorAll("button");


  allButtons.forEach(btn => {

    btn.disabled = true;

  });


  // ===============================
  // الجواب الصحيح
  // ===============================

  if (index === q.correct) {

    score++;

    button.style.backgroundColor = "green";

  } else {

    button.style.backgroundColor = "red";


    // ===============================
    // إظهار الجواب الصحيح
    // ===============================

    allButtons[q.correct].style.backgroundColor = "green";

  }

};   
     // ===============================
     // عند الضغط على الاختيار
     // ===============================

     button.onclick = function () {

     // تعطيل جميع الأزرار بعد الاختيار

     const allButtons = choicesElement.querySelectorAll("button");


         allButtons.forEach(btn => {

         btn.disabled = true;

         });


     // ===============================
     // الجواب الصحيح
     // ===============================

        if (index === q.correct) {

          score++;

           button.style.backgroundColor = "green";

        } else {

            button.style.backgroundColor = "red";
  

         // ===============================
         // إظهار الجواب الصحيح
         // ===============================

        allButtons[q.correct].style.backgroundColor = "green";

  }

};
    // ===============================
    // عند الضغط على الزر
    // ===============================

   /* button.onclick = function () {

      // التحقق من الجواب الصحيح

      if (index === q.correct) {

        score++;

        alert("✅ Bonne réponse");

      } else {

        alert("❌ Mauvaise réponse");

      }

    };*/


    // إضافة الزر داخل الصفحة

    choicesElement.appendChild(button);

  });

}


// ===============================
// زر السؤال التالي
// ===============================

nextButton.onclick = function () {

  // الانتقال للسؤال التالي

  currentQuestion++;


  // ===============================
  // هل انتهت الأسئلة ؟
  // ===============================

  if (currentQuestion < questions.length) {

    // عرض السؤال التالي

    showQuestion();

  } else {

    // عرض النتيجة النهائية

    questionElement.innerText = "Quiz terminé";

    choicesElement.innerHTML = "";

    nextButton.style.display = "none";


    // عرض النقاط

    scoreElement.innerText =
      "Votre score : " +
      score +
      " / " +
      questions.length;

  }

};


// ===============================
// تشغيل أول سؤال
// ===============================

showQuestion();