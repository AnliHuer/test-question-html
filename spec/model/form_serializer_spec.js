describe("FormSerializer", function() {
  var form;
  var content = document.getElementById("content");
  beforeEach(function() {
    content.innerHTML += "<form>" +
      "<h4>一 、 填空题</h4>" +
      "<p>1. UML 的中文全称是:&nbsp;&nbsp;" +
      "<input type='text' name='001-1' style='border:none;border-bottom:1px solid #000;' value='统一建模语言' />。" +
      "<p> 2. 对象最突出的特征是:" +
      "<input type='text' name='001-2' style='border:none;border-bottom:1px solid #000;' value='多态性' />&nbsp;、" +
      "<input type='text' name='001-2' style='border:none;border-bottom:1px solid #000;' value='继承性' />&nbsp;、" +
      "<input type='text' name='001-2' style='border:none;border-bottom:1px solid #000;' value='封装性' />。" +
      "</p>" +
      "</p>" +
      "<h4>二 、 选择题 </h4>" +
      "1.UML 与软件工程的关系是:" +
      "<input type='radio' name='002-1' value='A' />UML 就是软件工程" +
      "<input type='radio' name='002-1' value='B' checked='ture' />UML 参与到软件工程中软件开发过程的几个阶段" +
      "<input type='radio' name='002-1' value='C' />UML 与软件工程无关" +
      "<input type='radio' name='002-1' value='D' />UML 是软件工程的一部分" +
      "<h4>三 、 多选题 </h4>" +
      "< p > 1. 用例的粒度分为以下哪三种。" +
      "【 < label name = '0031' > < /label>】  < br >" +
      "<input type = 'checkbox' name = '003-1'  value = 'A' checked='ture' / > 概述级 < br >" +
      "<input type = 'checkbox' name = '003-1'  value = 'B' checked='ture' / > 需求级 < br > " +
      "<input type = 'checkbox' name = '003-1'  value = 'C' / > 用户目标级 < br >" +
      "<input type = 'checkbox' name = '003-1'  value = 'D' checked='ture' / > 子功能级 " +
      "<h4> 四 、 判断题</h4>" +
      "<p> 1. 用例图只是用于和客户交流和沟通的,用于确定需求。【" +
      "<label name='0041'></label>】" +
      "<br>" +
      "<input type='radio' name='004-1' value='V' />对" +
      "<input type='radio' name='004-1' value='X' checked='ture'/>错" +
      "</form>";
    form = content.getElementsByTagName("form");
  });
  afterEach(function() {
    content.innerHTML = "";
  });

  it("should return correct tag name", function() {
    var input = new FormSerializer().getInputs(form);
    expect(input).toEqual([{
      name: '001-1',
      type: 'text',
      answer: ['统一建模语言']
    }, {
      name: '001-2',
      type: 'text',
      answer: ['多态性', '继承性', '封装性']
    }, {
      name: '002-1',
      type: 'radio',
      answer: ['B']
    }, {
      name: '003-1',
      type: 'checkbox',
      answer: ['A','B','D']
    }, {
      name: '004-1',
      type: 'radio',
      answer: ['X']
    }]);
  });
});
