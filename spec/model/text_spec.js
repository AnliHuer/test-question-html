describe("Text", function() {
  it("should return score", function() {
    var answers = loadAllAnswer();
    Text.getRealAnswer(answers);
    var score = (new Text()).calculateScore({name:'001-1',type:'text',answer:['统一建模语言']});
    expect(score).toBe(1);
  });
});
