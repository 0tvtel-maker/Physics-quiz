// ===================================
// HTML ELEMENTS
// ===================================

const questionElement = document.getElementById("question");

const questionCounter = document.getElementById("question-counter");

const quizProgressBar = document.getElementById("quiz-progress-bar");

const choicesElement = document.getElementById("choices");

const nextButton = document.getElementById("next-btn");

const scoreElement = document.getElementById("score");

const quizContent = document.getElementById("quiz-content");

const usernameInput = document.getElementById("username");

const userclassInput = document.getElementById("userclass");

const startButton = document.getElementById("start-btn");

const userForm = document.getElementById("user-form");

const groupsDashboard = document.getElementById("groups-dashboard"); 

const groupsContainer = document.getElementById("groups-container");
// Progression elements 
const progressText = document.getElementById( "progress-text" ); 

const progressBar = document.getElementById( "progress-bar" ); 
// Score global 
const globalScore = document.getElementById( "global-score" );

const backDashboardBtn = document.getElementById( "back-dashboard-btn" );

// ===============================
// متغيرات التطبيق  APP STATE
// ===============================

// رقم السؤال الحالي

let currentQuestion = 0;
let playedGroup = 1;
let currentQuestions = [];
let score = 0;

let unlockedGroup = Number(localStorage.getItem("unlockedGroup")) || 1;

//  Scores des groupes 

let groupScores = JSON.parse(localStorage.getItem( "groupScores" )) || {};

// Nombre total des groupes

const totalGroups = Math.max( ...questions.map( q => q.group ));


// ===============================
// FONCTIONS
// ===============================

// Mise à jour progression 

function updateProgress() {

  // Progression générale 
  
  const generalProgress = Math.floor(
    
    ((unlockedGroup - 1) / totalGroups) * 100
  ); 
   
  // Texte progression 
   
  progressText.innerText = "Progression générale : " + generalProgress + "%"; 
  
  // Barre progression 
  
  progressBar.style.width = generalProgress + "%"; 

  // Calcul score général 
  
  let totalScore = 0; 
      
  for (const key in groupScores) { 

    totalScore += groupScores[key];

  } 
  // Affichage score général 
  
  globalScore.innerText = "Score global : " + totalScore;

}

//  Gestion des écrans 

function showScreen(screen) {

  userForm.style.display = "none";

  groupsDashboard.style.display = "none";

  quizContent.style.display = "none";

  screen.style.display = "block";

}

function generateGroups() { 
// Vider le container 
groupsContainer.innerHTML = ""; 

// Mise à jour progression 

updateProgress();


// Boucle groupes


for ( let i = 1; i <= totalGroups; i++) { 
  
  // Création du bouton 
  const button = document.createElement("button"); 
  
  // Score groupe 
  
  const groupScore = groupScores[i] || 0;
  
  // Texte 
  
  button.innerText = "Niveau " + i+
  
  " • " + groupScore + "/10";

  // Classe générale
  
  button.classList.add("group-btn"); 
  
 // =========================
 // Groupe débloqué 
 // ========================= 
 
 if (i <= unlockedGroup) { 
  button.classList.add( "group-unlocked" );
  
  // ========================= // 
  // Click groupe // 
  // ========================= 
  
  button.addEventListener( "click", function () { 
    
// ===================================
// Sauvegarder groupe joué
// ===================================

     playedGroup = i;
    
    // Questions du groupe 
    
    currentQuestions = questions.filter( 
      
      q => q.group === playedGroup 
    );
     // Mélange 

    shuffleArray(currentQuestions); 
    
    // Reset 
     
    resetQuiz();

    // Afficher quiz 
    
    showScreen(quizContent);
    
    
    // Star quiz
    
    showQuestion(); 
  } 
  );
 } 
 
 // ========================= 
 // Groupe verrouillé  
 // ========================= 

 else {
  
  button.classList.add( "group-locked" ); 
  
  button.innerText += " 🔒";

} 

// Ajouter bouton 

  groupsContainer.appendChild(button); 
} 
}

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

  // Activer bouton suivant

  nextButton.disabled = false;
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

// Réinitialisation du quiz

function resetQuiz() {

  // Question actuelle

  currentQuestion = 0;

  // Score

  score = 0;

}
function showQuestion() {

  // جلب السؤال الحالي

  const q = currentQuestions[currentQuestion];

  // Affichage compteur

  questionCounter.innerText = "Q: " + 
  (currentQuestion + 1) +
  " / " +
  currentQuestions.length;


// Progression quiz


const progress =
  (
    (currentQuestion + 1) /
    currentQuestions.length
  ) * 100;

quizProgressBar.style.width =
  progress + "%";

  // وضع نص السؤال داخل الصفحة

  questionElement.innerHTML = q.question;
 
  // Désactiver bouton suivant


   nextButton.disabled = true;

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

// Mélanger les questions du quiz

function shuffleArray(array) {

  // Boucle inversée sur le tableau

  for ( let i = array.length - 1; i > 0; i-- ) {

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
// Afficher dashboard
// ===================================

showScreen(groupsDashboard);

// Générer les groupes

generateGroups();


});


// =================================== 
//  Retour dashboard 
// =================================== 
 
backDashboardBtn.addEventListener( "click", function () { 
  
  showScreen(groupsDashboard);

   // Régénérer groupes 

generateGroups();
 } );

// ===============================
// زر السؤال التالي
// ===============================

nextButton.addEventListener("click", function () {

  // الانتقال للسؤال التالي

  currentQuestion++;

  // ===============================
  // هل انتهت الأسئلة ؟
  // ===============================

  if (currentQuestion < currentQuestions.length) {

    // عرض السؤال التالي

    showQuestion();

  } else {

  // ===================================  
  // Fin du groupe 
  // =================================== 
  
    //  Sauvegarder score du groupe 
  
  
  groupScores[playedGroup] = score;
  
  localStorage.setItem( 
    
    "groupScores", JSON.stringify(groupScores) 
  
  );

  scoreElement.innerText = "Votre score : " + 
  score + " / " + 
  currentQuestions.length;

// Débloquer uniquement le groupe suivant

if (
  score >= 7 &&
  playedGroup < totalGroups
) {

  // Nouveau groupe débloqué

  const nextGroup =
    playedGroup + 1;

  // Empêcher les sauts

  if (nextGroup > unlockedGroup) {

    unlockedGroup = nextGroup;

    // Sauvegarde locale

    localStorage.setItem(
      "unlockedGroup",
      unlockedGroup
    );

  }

}
  
  // =================================== // 
  // Vider quiz 
  // =================================== 
  
  questionElement.innerHTML = "";
  choicesElement.innerHTML = "";
    
  
  // ===================================
  //  Afficher dashboard
  //  =================================== 
 
  showScreen(groupsDashboard);
  
  resetQuiz();

  // =================================== 
  // Régénérer dashboard 
  // =================================== 
   
  generateGroups();

  }

});