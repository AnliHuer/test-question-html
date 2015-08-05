function FormSerializer() {
}
FormSerializer.prototype.getInputs = function(form){
  var inputs = form[0].getElementsByTagName('input');
  var result = [];
  var obj = [];
  for(var i = 0; i < inputs.length ; i++){
    if(inputs[i].type !== 'button'){
      result.push(inputs[i]);
    }
  }
  result.forEach(function(val){
    obj.push({name:val.name,type:val.type,value:val.value});
  });
  return obj;
};
