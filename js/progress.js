

const Progress = {
  getGroupScores() {
    return JSON.parse(localStorage.getItem("groupScores") || "{}");
  },

  saveGroupScore(group, score) {
    const scores = this.getGroupScores();
    scores[group] = score;
    localStorage.setItem("groupScores", JSON.stringify(scores));
  },

  getUnlockedGroup() {
    return Number(localStorage.getItem("unlockedGroup")) || 1;
  },

  saveUnlockedGroup(group) {
    localStorage.setItem("unlockedGroup", group);
  },

  calculateGeneralProgress(unlockedGroup, totalGroups) {
    return Math.floor(((unlockedGroup - 1) / totalGroups) * 100);
  }
};