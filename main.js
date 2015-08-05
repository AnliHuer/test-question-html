

document.getElementById('num').addEventListener("keydown", function(evt) {
  console.log(evt.keyCode);
  if (evt.keyCode !== 8 && (evt.keyCode < 48 || evt.keyCode > 57)) {
    evt.preventDefault();
  }
});

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
function getResult(question){
  var result = [].filter.call(question,function(elem){
    return elem.checked;
  }).map(function(elem){
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
