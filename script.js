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

const groupsDashboard = document.getElementById("groups-dashboard"); 

const groupsContainer = document.getElementById("groups-container");

const backDashboardBtn = document.getElementById( "back-dashboard-btn" );

// ===============================
// متغيرات التطبيق  APP STATE
// ===============================

// رقم السؤال الحالي

let currentQuestion = 0;

let currentGroup = Number(localStorage.getItem("currentGroup")) || 1;

let playedGroup = 1;

let currentQuestions = [];

let unlockedGroup = Number(localStorage.getItem("unlockedGroup")) || 1;

// عدد النقاط

let score = 0;

// ===============================
// FONCTIONS
// ===============================

// ===================================
//  Gestion des écrans 
// ===================================

function showScreen(screen) {

  userForm.style.display = "none";

  groupsDashboard.style.display = "none";

  quizContent.style.display = "none";

  screen.style.display = "block";

}

function generateGroups() { 
// Vider le container 
groupsContainer.innerHTML = ""; 

// Créer les 11 groupes 

for (let i = 1; i <= 11; i++) { 
  
  // Création du bouton 
  const button = document.createElement("button"); 
  
  // Texte 
  
  button.innerText = "Niveau " + i;

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
    
    // Groupe actuel 

    currentGroup = i; 
    
// ===================================
// Sauvegarder groupe joué
// ===================================

     playedGroup = i;
    
    // Questions du groupe 
    
    currentQuestions = questions.filter( 
      
      q => q.group === currentGroup 
    );
     // Mélange 

    shuffleArray(currentQuestions); 
    
    // Reset 
     
    currentQuestion = 0; score = 0; 
    
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

  const q = currentQuestions[currentQuestion];


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

    // عرض النتيجة النهائية
    
    // ===================================  
    //  Déblocage du groupe suivant 
    // ===================================

      if (score >= 7) { 
      
       currentGroup++; 
       
       localStorage.setItem( "currentGroup", currentGroup ); 
      
      }

  // ===================================  
  // Fin du groupe 
  // =================================== 
  
  // Affichage score 
  
  scoreElement.innerText = "Votre score : " + 
  score + " / " + 
  currentQuestions.length;


// ===================================
// Débloquer uniquement
// le groupe suivant
// ===================================

if (
  score >= 7 &&
  playedGroup < 11
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
 
  // =================================== 
  // Régénérer dashboard 
  // =================================== 
   
  generateGroups();

  }

});

currentQuestion = 0;
score = 0;