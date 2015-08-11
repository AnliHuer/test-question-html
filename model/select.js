function Select() {}
//var realAnswers = [];
Select.getRealAnswer = function(answers) { //注入
  realAnswers = answers;
};

Select.prototype.calculateScore = function(resultObj) {
  var realAnswers = loadAllAnswer();
  var obj;
  var score = 0;
  for (var i = 0; i < realAnswers.length; i++) {
    if (realAnswers[i].name === resultObj.name) {
      obj = realAnswers[i];
      break;
    }
  }
  for (var j = 0; j < resultObj.answer.length; j++) {
    for (var k = 0; k < obj.realAnswer.length; k++) {
      if (resultObj.answer[j] !== obj.realAnswer[k]) {
        break;
      } else {
        if (resultObj.answer.length === obj.realAnswer.length) {
          score = 2;
        } else {
          score = 1;
        }
      }
    }
  }
  return score;
};
