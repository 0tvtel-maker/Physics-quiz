let questions = [];

const params =
  new URLSearchParams(
    window.location.search
  );

const subject =
  params.get("subject");
console.log("Subject=",subject);
if (subject === "histoire") {

  questions = histoireQuestions;

}

else if (
  subject === "geographie"
) {

  questions = geographieQuestions;

}

else if (
  subject === "citoyennete"
) {

  questions = citoyenneteQuestions;

}