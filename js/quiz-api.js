// ====================================
// Quiz API Couche intermédiaire entre
// les pages HTML et le moteur
// ====================================

const QuizAPI = {

    // Lancer un quiz
  
  start(config) {

    // Matière

    Quiz.subject = config.subject;

    // Questions

    Quiz.currentQuestions = config.questions;

    // Groupe

    Quiz.playedGroup = config.group || 1;

    // Mode du quiz

    Quiz.mode = config.mode || "general";

    // Initialisation

    Quiz.init();

  }

};