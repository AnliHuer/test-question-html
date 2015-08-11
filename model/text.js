function Text() {}
// realAnswers = [];
Text.getRealAnswer = function(answers) {
  realAnswers = answers;
};

Text.deleteRepate = function(val, answers) {
  for (var m = 0; m < answers.length; m++) {
    if (answers[m] === val) {
      return;
    }
  }
  answers.push(val);
};

Text.prototype.calculateScore = function(resultObj) {
  var realAnswers = loadAllAnswer();
  var score = 0;
  var answers = [];
  var obj;
  for (var n = 0; n < realAnswers.length; n++) {
    if (realAnswers[n].name === resultObj.name) {
      obj = realAnswers[n];
      break;
    }
  }
  resultObj.answer.forEach(function(val) { //去重
     Text.deleteRepate(val, answers);
  });
  for (var j = 0; j < answers.length; j++) {
    for (var k = 0; k < obj.realAnswer.length; k++) {
      if (answers[j] === obj.realAnswer[k]) {
        score += 1;
      }
    }
  }
  return score;
};
