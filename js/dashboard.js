const Dashboard = {
  welcomeText: document.getElementById("welcome-user"),
  subjectsContainer: document.querySelector(".subjects-container"),

  subjects: [
    { title: "Physique", href: "physique/index.html", unlocked: true },
    { title: "Mathématiques", href: "maths/index.html", unlocked: false },
    { title: "SVT", href: "svt/index.html", unlocked: false },
    { title: "Histoire-Géo", href: "histoire/index.html", unlocked: false },
  ],

  init() {
    if (!Auth.isAuthenticated()) {
      window.location.href = "index.html";
      return;
    }

    const username = localStorage.getItem("username");
    if (this.welcomeText) {
      this.welcomeText.textContent = `Bienvenue ${username}`;
    }

// ===================================
// Informations utilisateur
// ===================================

const usernameDisplay = document.getElementById( "username-display" );

const classDisplay = document.getElementById( "class-display");

if (usernameDisplay) {

  usernameDisplay.textContent =
    "👤 " +
    localStorage.getItem(
      "username"
    );

}

if (classDisplay) {

  classDisplay.textContent =
    "Classe : " +
    localStorage.getItem(
      "userclass"
    );

}

    this.renderSubjects();
  },

  renderSubjects() {
    if (!this.subjectsContainer) return;

    this.subjectsContainer.innerHTML = "";
    this.subjects.forEach((subject) => {
      const card = document.createElement("a");
      card.className = "subject-card";
      card.textContent = subject.unlocked ? `📘 ${subject.title}` : `🔒 ${subject.title}`;

      if (subject.unlocked) {
        card.href = subject.href;
      } else {
        card.classList.add("locked");
        card.href = "#";
      }

      this.subjectsContainer.appendChild(card);
    });
  }
};

document.addEventListener("DOMContentLoaded", () => Dashboard.init());