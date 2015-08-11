describe("Question", function() {

  it("should return score", function() {
    var input = new Question({name:'003-2',type:'checkbox',answer:['A','B','C']});
    var score = input.getScore(input);
    expect(score).toEqual(2);
  });
});
