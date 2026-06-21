// ====================================
// Moteur du Quiz - Logique principale
// ====================================

const Quiz = {
  // Éléments du DOM
  questionElement: document.getElementById("question"),
  choicesElement: document.getElementById("choices"),
  nextButton: document.getElementById("next-btn"),
  questionCounter: document.getElementById("question-counter"),
  quizProgressContainer: document.getElementById("quiz-progress-container"),
  quizProgressBar: document.getElementById("quiz-progress-bar"),
  quizContent: document.getElementById("quiz-content"),
  scoreElement: document.getElementById("score"),
  backDashboardBtn: document.getElementById("back-dashboard-btn"),
// ====================================
// Dashboard des groupes
// ====================================
 groupsDashboard: document.getElementById( "groups-dashboard" ),
 groupsContainer: document.getElementById( "groups-container" ),
// ====================================
// Eléments progression
// ====================================
   progressText: document.getElementById( "progress-text" ),
   progressBar: document.getElementById( "progress-bar" ),

globalScore: document.getElementById( "global-score" ),

  // État du quiz
  currentQuestion: 0,
  score: 0,
  currentQuestions: [],
  playedGroup: 1,

  unlockedGroup: Number( localStorage.getItem( "unlockedGroup" ) ) || 1,

  TEXT: {

  next: "Question suivante →",

  finish: "🏁 Voir le résultat",

  back: "← Retour au groupe"

},

//================ Initialisation ===========

  init() {

    // Vérification : les questions sont-elles chargées ?

    if (typeof questions === "undefined" || !Array.isArray(questions)) {
      console.error("❌ questions.js non chargé ou invalide");
      if (this.questionElement) {
        this.questionElement.innerHTML = "<p>Erreur : questions non trouvées</p>";
      }
      return;
    }

    // Charger les questions du groupe (ou toutes les questions si pas de groupe)

    this.setupEventListeners();
    this.showGroupsDashboard();
    this.generateGroups();
  },

//============== Navigation ==================

// ====================================
// Affichage Dashboard Groupes
// ====================================

 showGroupsDashboard() {

    if (this.groupsDashboard) {

       this.groupsDashboard.style.display = "block";
    }
    if (this.quizContent) {

      this.quizContent.style.display = "none";
    }

    this.updateProgress();
},

// ====================================
// Métadonnées des questions
// ====================================

getQuestionsMetadata() {

  const totalQuestions = questions.length;
  const totalGroups = Math.max( ...questions.map( q => q.group ) );

  return { totalQuestions, totalGroups };
},

// ====================================
// Générer les groupes
// ====================================

generateGroups() {

  if ( !this.groupsContainer ) return;

  this.groupsContainer.innerHTML =  "";

  const metadata = this.getQuestionsMetadata();

const totalGroups = metadata.totalGroups;

  for ( let i = 1; i <= totalGroups; i++ ) {

    const button = document.createElement( "button" );

    button.textContent = "Niveau " + i;

    if ( i <= this.unlockedGroup ) {

      button.addEventListener( "click",() => {

          this.playedGroup = i;

          this.groupsDashboard.style.display = "none";

          this.quizContent.style.display = "block";

          this.scoreElement.style.display = "none";

          this.currentQuestion = 0;
          this.score = 0;

// ====================================
// Réinitialisation interface Quiz
// ====================================

this.scoreElement.innerHTML = "";

this.choicesElement.style.display = "";

this.nextButton.style.display = "";

this.backDashboardBtn.style.display = "";

          this.loadQuestions();

          this.showQuestion();

        }
      );

    } else {

      button.disabled = true;

      button.textContent += " 🔒";

    }


    this.groupsContainer.appendChild(button);

  }

},

  // ====================================
  // Configurer les écouteurs d'événements
  // ====================================

setupEventListeners() {
    // Bouton suivant
    if (this.nextButton) {
      this.nextButton.addEventListener("click", () => this.next());
    }

    // Bouton retour au dashboard
    if (this.backDashboardBtn) {
      this.backDashboardBtn.addEventListener("click", () => {
         this.showGroupsDashboard();
         this.generateGroups();

      });
    }
  },

//==============Quiz====================

  // ====================================
  // Charger les questions
  // ====================================

loadQuestions() {
    // Si playedGroup est défini, filtrer les questions par groupe
    // Sinon, utiliser toutes les questions
    if (this.playedGroup && this.playedGroup > 0) {
      this.currentQuestions = questions.filter(q => q.group === this.playedGroup);
    } else {
      this.currentQuestions = questions.slice(0, 10); // Les 10 premières questions
    }

    // Mélanger les questions
    this.shuffleArray(this.currentQuestions);

  },

  // ====================================
  // Afficher la question actuelle
  // ====================================
showQuestion() {
    // Vérification : y a-t-il des questions ?
    if (!this.currentQuestions || this.currentQuestions.length === 0) {
      console.error("❌ Pas de questions à afficher");
      return;
    }

    // Récupérer la question courante
    const q = this.currentQuestions[this.currentQuestion];

    if (!q) {
      console.error("❌ Question non trouvée : " + this.currentQuestion);
      return;
    }

    // Afficher le texte de la question
    if (this.questionElement) {
      this.questionElement.innerHTML = q.question;
    }

    // Mettre à jour le compteur
    if (this.questionCounter) {
      this.questionCounter.textContent =
        `Q: ${this.currentQuestion + 1} / ${this.currentQuestions.length}`;
    }

    // Mettre à jour la barre de progression
    if (this.quizProgressContainer) {
      const progress = ((this.currentQuestion + 1) / this.currentQuestions.length) * 100;
      this.quizProgressBar.style.width = progress + "%";
    }

    // Désactiver le bouton suivant
    if (this.nextButton) {
      this.nextButton.disabled = true;
      this.nextButton.textContent = this.TEXT.next;
    }

    // Effacer les choix précédents
    if (this.choicesElement) {
      this.choicesElement.innerHTML = "";

      // Créer les boutons de réponse
      if (q.choices && Array.isArray(q.choices)) {
        q.choices.forEach((choice, index) => {
          const button = this.createChoiceButton(choice, index, q);
          this.choicesElement.appendChild(button);
        });
      }
    }

    // Mettre à jour MathJax si disponible
    if (typeof MathJax !== "undefined" && MathJax.typeset) {
      try {
        MathJax.typeset();
      } catch (e) {
        console.warn("⚠️ MathJax erreur", e);
      }
    }
  },

  // ====================================
  // Créer un bouton de réponse
  // ====================================

createChoiceButton(choice, index, q) {
    const button = document.createElement("button");
    button.innerHTML = choice;
    button.className = "choice-button";

    // Événement : clic sur une réponse
    button.addEventListener("click", () => this.handleAnswer(button, index, q));

    return button;
  },

  // ====================================
  // Gérer la réponse sélectionnée
  // ====================================

handleAnswer(button, index, q) {
    // Récupérer tous les boutons
    const allButtons = this.choicesElement.querySelectorAll(".choice-button");

    // Désactiver tous les boutons
    allButtons.forEach(btn => btn.disabled = true);

    // Vérifier si la réponse est correcte
    if (index === q.correct) {
      // ✅ Bonne réponse
      this.score++;
      button.classList.add("correct");
    } else {
      // ❌ Mauvaise réponse
      button.classList.add("wrong");

      // Afficher la bonne réponse
      if (q.correct !== undefined) {
        allButtons[q.correct]?.classList.add("correct");
      }
    }

    // Activer le bouton suivant
    if (this.nextButton) {
      this.nextButton.disabled = false;

      // Changer le texte du dernier bouton
      if (this.currentQuestion === this.currentQuestions.length - 1) {
        this.nextButton.textContent = this.TEXT.finish;
      }
    }
  },

 // ====================================
  // Question suivante
  // ====================================

next() {
    this.currentQuestion++;

    // Y a-t-il d'autres questions ?
    if (this.currentQuestion < this.currentQuestions.length) {
      this.showQuestion();
    } else {
      // Fin du quiz
      this.finish();
    }
  },

  // ====================================
  // Fin du quiz - Afficher le résultat
  // ====================================

finish() {
    if (!this.scoreElement) return;

    const totalQuestions = this.currentQuestions.length;
    const percentage = Math.round((this.score / totalQuestions) * 100);

    // Message de résultat
    let message = `✅ Votre score : ${this.score} / ${totalQuestions}`;

    if (percentage >= 70) {
      message += "<br>🎉 Excellent ! Vous avez réussi !";
    } else if (percentage >= 50) {
      message += "<br>👍 Bien ! Continuez vos révisions";
    } else {
      message += "<br>💪 À revoir - N'abandonner pas !";
    }


    // Cacher les choix et le bouton suivant
    if (this.choicesElement) {
      this.choicesElement.style.display = "none";
    }
    if (this.nextButton) {
      this.nextButton.style.display = "none";
    }

    // Afficher le bouton retour
    if (this.backDashboardBtn) {
      this.backDashboardBtn.style.display = "block";
      this.backDashboardBtn.textContent = this.TEXT.back;
    }
// ====================================
// Débloquer le groupe suivant
// ====================================
   let unlockMessage = "";

if ( this.score >= 7 && this.playedGroup >= this.unlockedGroup ) {

  this.unlockedGroup++;

  localStorage.setItem( "unlockedGroup", this.unlockedGroup );

   unlockMessage = "<br>🔓 Nouveau groupe débloqué !<br>";



}
this.scoreElement.style.display = "block";
   message += unlockMessage;
    // Afficher le résultat
    this.scoreElement.innerHTML = message;
    // Sauvegarder le score (optionnel)
    this.saveScore();
  },

//============== Progression ================
  // ====================================
  // Mise à jour progression
  // ====================================

updateProgress() {

  const progress = Math.floor(((this.unlockedGroup - 1) / 11) * 100 );

  // Texte

  if (this.progressText) { this.progressText.textContent =
                               "Progression : " + progress + "%";
    }

  // Barre

  if (this.progressBar) { this.progressBar.style.width =  progress + "%";

    }

  // Score global

  const scores = JSON.parse( localStorage.getItem( "groupScores" ) || "{}" );

  let total = 0;

  for (const key in scores) {

    total += scores[key];

  }

  if (this.globalScore) { this.globalScore.textContent = "Score global : " + total;

    }

},

  // ====================================
  // Sauvegarder le score
  // ====================================
saveScore() {
    try {
      const groupScores = JSON.parse(localStorage.getItem("groupScores") || "{}");
      groupScores[this.playedGroup] = this.score;
      localStorage.setItem("groupScores", JSON.stringify(groupScores));
    } catch (e) {
      console.warn("⚠️ Erreur lors de la sauvegarde du score", e);
    }
  },

//================== Utilitaires =================
  // ====================================
  // Mélanger les questions
  // ====================================
  shuffleArray(array) {
    // Algorithme Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
};

// ====================================
// Lancer le quiz au chargement
// ====================================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {

    Quiz.init();
  });
} else {

  Quiz.init();
}