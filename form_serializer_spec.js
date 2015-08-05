describe("FormSerializer", function() {
  var form;
  var content = document.getElementById("content");
  beforeEach(function() {
    content.innerHTML += "<form>" +
      "1.UML 与软件工程的关系是:" +
      "<input type='radio' name='002-1' value='A' />UML 就是软件工程" +
      "<input type='radio' name='002-1' value='B' />UML 参与到软件工程中软件开发过程的几个阶段" +
      "<input type='radio' name='002-1' value='C' />UML 与软件工程无关" +
      "<input type='radio' name='002-1' value='D' />UML 是软件工程的一部分" +
      "</form>";
    form = content.getElementsByTagName("form");
  });

  afterEach(function() {
    content.innerHTML="";
  });

  it("should return correct tag name", function() {
    var input = new FormSerializer().getInputs(form);
    expect(input).toEqual([{
      name: '002-1',
      type: 'radio',
      value: 'A'
    }, {
      name: '002-1',
      type: 'radio',
      value: 'B'
    }, {
      name: '002-1',
      type: 'radio',
      value: 'C'
    }, {
      name: '002-1',
      type: 'radio',
      value: 'D'
    }]);
  });
});
