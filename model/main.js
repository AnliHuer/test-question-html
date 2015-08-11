document.getElementById('num').addEventListener("keydown", function(evt) { //设置学号只能输入数字，并且删除键可用
  console.log(evt.keyCode);
  if (evt.keyCode !== 8 && (evt.keyCode < 48 || evt.keyCode > 57)) {
    evt.preventDefault();
  }
});

//设置选择和判断题选定选项后，选中答案在题目后显示
var question1 = document.getElementsByName("002-1");
Array.prototype.forEach.call(question1, function(elem) {
  elem.addEventListener('click', function() {
    document.getElementsByName("0021")[0].innerHTML = elem.value;
  });
});

var question2 = document.getElementsByName("002-2");
Array.prototype.forEach.call(question2, function(elem) {
  elem.addEventListener('click', function() {
    document.getElementsByName("0022")[0].innerHTML = elem.value;
  });
});

var question3 = document.getElementsByName("003-1");
var question4 = document.getElementsByName("003-2");

function getResult(question) {
  var result = [].filter.call(question, function(elem) {
    return elem.checked;
  }).map(function(elem) {
    return elem.value;
  });
  return result;
}
Array.prototype.forEach.call(question3, function(elem) {
  elem.addEventListener('click', function() {
    document.getElementsByName("0031")[0].innerHTML = getResult(question3);
  });
});
Array.prototype.forEach.call(question4, function(elem) {
  elem.addEventListener('click', function() {
    document.getElementsByName("0032")[0].innerHTML = getResult(question4);
  });
});

var question5 = document.getElementsByName("004-1");
Array.prototype.forEach.call(question5, function(elem) {
  elem.addEventListener('click', function() {
    document.getElementsByName("0041")[0].innerHTML = getResult(question5);
  });
});

var question6 = document.getElementsByName("004-2");
Array.prototype.forEach.call(question6, function(elem) {
  elem.addEventListener('click', function() {
    document.getElementsByName("0042")[0].innerHTML = elem.value;
  });
});


document.getElementById('submit').addEventListener("click", function(evt) {
  var form = document.getElementsByTagName('form');
  var formObj = new FormSerializer();
  var result = formObj.getInputs(form);
  var totalScore = formObj.getTotal(result);
  alert(totalScore);
  var score = document.getElementById('score');
  score.value = totalScore;
  evt.preventDefault();
});
