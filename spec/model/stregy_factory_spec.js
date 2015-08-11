describe("StregyFactory", function() {
  it("should return score", function() {
    var score1 = new StregyFactory().getStregy({name:'003-2',type:'checkbox',answer:['A','B','C']});
    var score2 = new StregyFactory().getStregy({name:'001-1',type:'text',answer:['统一建模语言']});
    expect(score1).toEqual(2);
    expect(score2).toEqual(1);
  });
});
