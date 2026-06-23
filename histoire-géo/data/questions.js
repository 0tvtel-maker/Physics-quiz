let questions = [];

 params = new URLSearchParams(
    window.location.search
  );

 subject = params.get("subject");

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