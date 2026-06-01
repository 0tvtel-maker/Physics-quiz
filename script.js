// ===================================
// HTML ELEMENTS
// ===================================

const questionElement = document.getElementById("question");

const choicesElement = document.getElementById("choices");

const nextButton = document.getElementById("next-btn");

const scoreElement = document.getElementById("score");

const quizContent = document.getElementById("quiz-content");

const usernameInput = document.getElementById("username");

const userclassInput = document.getElementById("userclass");

const startButton = document.getElementById("start-btn");

const userForm = document.getElementById("user-form");



// ===============================
// متغيرات التطبيق  APP STATE
// ===============================

// رقم السؤال الحالي

let currentQuestion = 0;


// عدد النقاط

let score = 0;



// ===============================
// FONCTIONS
// ===============================

  // عرض السؤال الحالي 
   
function handleAnswer(button,index,q){

  // تعطيل جميع الأزرار بعد الاختيار

  const allButtons = choicesElement.querySelectorAll("button");


     allButtons.forEach(btn => {

       btn.disabled = true;

    });


    // الجواب الصحيح

    if (index === q.correct) {

       score++;

       button.classList.add("correct");

    } else {

       button.classList.add("wrong");

       // إظهار الجواب الصحيح
     
        allButtons[q.correct].classList.add("correct");

      }
}
 // إنشاء الأزرار الخاصة بالاختيارات

function createChoiceButton(choice, index,q) {

    // إنشاء زر جديد

    const button = document.createElement("button");


    // كتابة نص الاختيار

    button.innerHTML = choice;


   // ===============================
   // عند الضغط على الاختيار
   // ===============================

    button.addEventListener("click", function () {

    handleAnswer(button,index,q);

    });

    return button;
}

function showQuestion() {

  // جلب السؤال الحالي

  const q = questions[currentQuestion];


  // وضع نص السؤال داخل الصفحة

  questionElement.innerHTML = q.question;
 
  

  // حذف الاختيارات القديمة

  choicesElement.innerHTML = "";

  // إنشاء الأزرار الخاصة بالاختيارات

   q.choices.forEach((choice, index) => {

   const button = createChoiceButton(choice, index, q);

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

 MathJax.typeset();

}

// ===================================
// Mélanger les questions du quiz
// ===================================

function shuffleArray(array) {

  // Boucle inversée sur le tableau

  for (

    let i = array.length - 1;

    i > 0;

    i--

  ) {

    // Générer un index aléatoire

    const j = Math.floor(

      Math.random() * (i + 1)

    );


    // Échanger les éléments

    [array[i], array[j]] =

    [array[j], array[i]];

  }

}

// ===================================
// Démarrage du Quiz
// ===================================

startButton.addEventListener("click",function () {

  // Récupération des valeurs

  const username = usernameInput.value.trim();

  const userclass = userclassInput.value.trim();


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

  let visits = localStorage.getItem("visits");

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
  // Melanger les questions 
  // ===================================

  shuffleArray(questions);

  // ===================================
  // Lancer le quiz
  // ===================================

  showQuestion();

});

// ===============================
// زر السؤال التالي
// ===============================

nextButton.addEventListener("click", function () {

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

    questionElement.innerHTML = "Quiz terminé";

    choicesElement.innerHTML = "";

    nextButton.style.display = "none";


    // عرض النقاط

    scoreElement.innerText =
      "Votre score : " +
      score +
      " / " +
      questions.length;

  }

});