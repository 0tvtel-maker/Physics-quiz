

const Progress = {
  getGroupScores(subject) {

     const allScores = JSON.parse(localStorage.getItem( "groupScores" ) || "{}" );

     return allScores[subject] || {};

    },

  saveGroupScore(subject,group,score) {

     const allScores = JSON.parse(
      localStorage.getItem("groupScores") || "{}" );

     if (!allScores[subject]) {

         allScores[subject] = {};

        }

     allScores[subject][group] = score;

     localStorage.setItem( "groupScores",JSON.stringify( allScores )

        );

    },
  
  getUnlockedGroup(subject) {

     const progress = JSON.parse( localStorage.getItem( "subjectsProgress" ) || "{}" );

     return ( progress[subject] ?.unlockedGroup ) || 1;

    },

  saveUnlockedGroup(subject,group) {

     const progress = JSON.parse( localStorage.getItem( "subjectsProgress" ) || "{}");

      if (!progress[subject]) { progress[subject] = {}; }

     progress[subject].unlockedGroup = group;

     localStorage.setItem("subjectsProgress",JSON.stringify(progress) );

    },

  calculateGeneralProgress(unlockedGroup, totalGroups) {
    return Math.floor(((unlockedGroup - 1) / totalGroups) * 100);
  }
};