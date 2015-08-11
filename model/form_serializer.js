function FormSerializer() {}

FormSerializer.prototype.getInputs = function(form) {
  var inputs = form[0].getElementsByTagName('input'); //form[0] !!!
  var result = [];
  var checkedInput = [];
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === 'text' || ((inputs[i].type === 'checkbox' || inputs[i].type === 'radio') && inputs[i].checked)) {
      checkedInput.push(inputs[i]);
    }
  }

  function getResult(val, result) {
    for (var i = 0; i < result.length; i++) {
      if (val.name === result[i].name) {
        result[i].answer.push(val.value);
        return;
      }
    }
    result.push({
      name: val.name,
      type: val.type,
      answer: [val.value]
    });
    return;
  }
  checkedInput.forEach(function(val) {
    getResult(val, result);
  });
  return result;
};

FormSerializer.prototype.getTotal = function(result) {
  var total = 0;
  for (var i = 0; i < result.length; i++) {
    total += new Question(result[i]).getScore();
  }
  return total;
};
