
const Auth = {
  usernameInput: document.getElementById("username-input"),
  userclassInput: document.getElementById("userclass-input"),
  saveBtn: document.getElementById("save-user-btn"),

  init() {
    if (!this.saveBtn) return;

    this.saveBtn.addEventListener("click", () => {
      const username = this.usernameInput?.value.trim() || "";
      const userclass = this.userclassInput?.value.trim() || "";

      if (!username || !userclass) {
        alert("Complétez les informations");
        return;
      }

      localStorage.setItem("username", username);
      localStorage.setItem("userclass", userclass);

      window.location.href = "dashboard.html";
    });
  },

  isAuthenticated() {
    return Boolean(
      localStorage.getItem("username") && localStorage.getItem("userclass")
    );
  },

// ====================================
// Protection des pages
// ====================================

  requireAuth() {

  if ( !this.isAuthenticated() ) { window.location.href = "../index.html";

  }

 },
};

document.addEventListener("DOMContentLoaded", () => Auth.init());