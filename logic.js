$(function () {
    let name1 = $("#name");
    let mail1 = $("#mail");
   // let text = $("#text");
  //  let content = $("#content");
    let list=$("#list");
    let list1=$("#list1");
    let btn = $("#btn");

    btn.click(function () {
        console.log(name1.val());
        console.log(mail1.val());
        let y=document.createElement('li');
        y.setAttribute('class','list-group-item')
        y.setAttribute('background-color','grey');
        y.innerText=name1.val()+"  "+ " |"+" "+ mail1.val();
        list.append(y)
    });

});