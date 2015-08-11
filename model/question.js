
function Question(obj) {
  this.name = obj.name;
  this.type = obj.type;
  this.answer = obj.answer;
}

Question.prototype.getScore = function() {
  return new StregyFactory().getStregy(this);
};
