describe("Select", function() {

  it("should return score", function() {
    var answers = loadAllAnswer();
    Select.getRealAnswer(answers);
    var score = new Select().calculateScore({name:'003-2',type:'checkbox',answer:['A','B','C']});
    expect(score).toEqual(2);
  });
});
