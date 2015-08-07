// function FormSerializer() {
// }
// FormSerializer.prototype.getInputs = function(form){
//   var inputs = form[0].getElementsByTagName('input');
//   var result = [];
//   var obj1 = [];
//   var obj2 = [];
//   var obj3 = [];
//   for(var i = 0; i < inputs.length ; i++){
//     // if(inputs[i].name === 'text'){
//     //   obj.push(inputs[i]);
//     // }
//
//   }
//   result.forEach(function(val){
//     obj.push({name:val.name,type:val.type,value:val.value});
//   });
//   return obj;
// };


function FormSerializer() {}
FormSerializer.prototype.getInputs = function(form) {
  var inputs = form[0].getElementsByTagName('input');
  var text = [];
  var radio = [];
  var checkBox = [];
  var result = [];

  //
  // var getResult = function(input){
  //   result.forEach(function(val){
  //     if(val.name === input.name){
  //
  //     }
  //   });
  // }

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === 'text') {
      text.push(inputs[i]);
    }
    if (inputs[i].type === 'radio') {
      radio.push(inputs[i]);
    }
    if (inputs[i].type === 'checkbox') {
      checkBox.push(inputs[i]);
    }
  }



  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked === true) {
      result.push({
        name: radio[i].name,
        type: 'radio',
        value: radio[i].value
      });
    }
  }



  for (i = 0; i < text.length; i++) {
    if (text[i].value !== "") {
      for (var k = 0; k < result.length; k++) {
        if (result[k].name === text[i].name) {
          result[k].value.push(text[i].value);
          break;
        } else if (k === result.length - 1) {
          result.push({
            name: text[i].name,
            type: 'text',
            value: [text[i].value]
          });
          break;
        }
      }
    }
  }




  for (i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked === true) {
      for (var loop = 0; loop < result.length; loop++) {
        if (result[loop].name === checkBox[i].name) {
          result[loop].value += checkBox[i].value;
          break;
        } else if (loop === result.length - 1) {
          result.push({
            name: checkBox[i].name,
            type: 'checkbox',
            value: checkBox[i].value
          });
          break;
        }
      }
    }
  }

  return result;
};
