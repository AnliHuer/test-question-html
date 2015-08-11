function StregyFactory() {}

StregyFactory.prototype.getStregy = function(resultObj) {
  var score;
  if (resultObj.type === 'text') {
    var text = new Text();
    score = text.calculateScore (resultObj);
  }
  if (resultObj.type === 'radio' || resultObj.type === 'checkbox') {
    var select = new Select();
    score = select.calculateScore(resultObj);
  }
  return score;
};
