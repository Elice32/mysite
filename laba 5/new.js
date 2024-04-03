var current = 1

var questions=
{
  1: [1,2,0], //третий элемент массив: 0 - не выбрано ничего, 1 - отмечено да, 2 - отмечено нет
  2: [2,0,0],
  3: [1,0,0],
  4: [1,0,0],
  5: [2,0,0],
  6: [2,0,0],
  7: [2,0,0],
  8: [2,0,0],
  9: [2,0,0],
  10: [2,0,0],
  11: [2,0,0]
} 

var questions_text= 
{
  1: "1. В выборе одежды вы полагаетесь на свой вкус, а не на «предписания моды»?",
  2: "2. Вы любите помечтать перед сном, лёжа в постели?",
  3: "3. Вы рисуете во время собраний, заседаний или планёрок?",
  4:"4. У вас размашистый почерк?",
  5:"5. Рассказывая о каком-то реальном случае, вы прибегаете к вымышленным подробностям?",
  6: "6. Вы любите читать фэнтези?",
  7: "7. Вы любите мелодрамы?",
  8:"8. Вы обладаете артистическими наклонностями?",
  9: "9. Вы верите в судьбу?",
  10: "10. Вы часто видите необычные, фантастические сны?",
  11: "11. Когда вы слушаете музыку, возникают ли у вас какие-нибудь образы, связанные с мелодией?",
}

var showImages = 
  [
    {
  1:{ name: "1", id: "image1", src: "1.png" },
  2:{ name: "2", id: "image2", src: "2.png" },
  3:{ name: "3", id: "image3", src: "3.png" },  
  4:{ name: "4", id: "image4", src: "4.png" },
  5:{ name: "5", id: "image5", src: "5.png" },
  6:{ name: "6", id: "image6", src: "6.png" },
  7:{ name: "7", id: "image7", src: "7.png" },  
  8:{ name: "8", id: "image8", src: "8.png" },
  9:{ name: "9", id: "image9", src: "9.png" },
  10:{ name: "10", id: "image10", src: "10.png" },
  11:{ name: "11", id: "image11", src: "11.png" }  
    }
  ]


function Check_answer()
{
  if(document.getElementById('radio_1').checked)
  {
    questions[current][2] = 1

    document.getElementById("next").style.cursor =  "pointer";
    document.getElementById("prev").style.cursor =  "pointer";

    document.getElementById("prev").style.background="#FFFFFF";
    document.getElementById("prev").style.color="#44BABD";
    document.getElementById("prev").style.border="1px solid #44BABD";
    
  }

  else if(document.getElementById('radio_2').checked)
  {
    questions[current][2] = 2

    document.getElementById("next").style.cursor =  "pointer";
    document.getElementById("prev").style.cursor =  "pointer";

    document.getElementById("prev").style.background="#FFFFFF";
    document.getElementById("prev").style.color="#44BABD";
    document.getElementById("prev").style.border="1px solid #44BABD";
  }

  document.getElementById("next").disabled = false;
  document.getElementById("next").style.background = "#44BABD";
}


function Start()
{
  var el = document.getElementById('button_start');
  el.remove();
  document.getElementById('blue_rect_start').style.display="none";

  var new_rect = document.getElementById('rect_frame');
  new_rect.id = "rect_new";

  const container = 
  `
  <img id="rect1" src="Rectangle 2.1.png">
    <img id="rect2" src="Rectangle 2 2.png"> 
    <text id="textahead">тотои</text>
    <button id="prev" disabled onclick="Prev()">Предыдущий вопрос</button>
    <button id="next" disabled onclick="Next()">Следующий вопрос</button>

    <text id="text_question"></text>
    <text id="showImage"></text>

  
    <input id="radio_1" type="radio" name="radio" value="1" onclick="Check_answer()">
	<label for="radio_1"></label>

 <input id="radio_2" type="radio" name="radio" value="2" onclick="Check_answer()">
	<label for="radio_2"></label>

 <text id="yes">Да</text>
 <text id="no">Нет</text> 
 `;

  document.body.innerHTML += container;
  document.getElementById('textahead').textContent="Вопрос " + current + " из 11";
  document.getElementById('text_question').textContent= questions_text[1];
  document.getElementById('showImage').textContent=showImage(showImages,1);
}

function showImage(showImages, number) {
  document.querySelectorAll('img').forEach(function(element) {
  element.parentNode.removeChild(element);
  });
  var img = document.createElement('img');
  img.src = showImages[0][number].src;
  document.body.appendChild(img);
  return;
  }

function Next() 
{
  current++;
  if (current==12)
  {
    document.getElementById('next').remove();
    document.getElementById('prev').remove();
    document.getElementById('radio_1').remove();
    document.getElementById('radio_2').remove();
    document.getElementById('yes').remove();
    document.getElementById('no').remove();
    document.getElementById('rect1').style.display="none";
    document.getElementById('rect2').style.display="none";
    var res = Result();

    cont = `<img id = "blue_rect_start" src="Rectangle 2.png">
    <text id="test_end">Тест завершён</text>
    <text id="dear"></text>
    <text id="text_res"></text>
    <img id="ura" src = sucess1.png>`;
    document.getElementById('showImages').remove();
    document.getElementById(showImage()).remove();

    document.getElementById('showImage').remove();
    document.getElementById('text_question').remove();
    document.body.innerHTML += cont;

    document.getElementById('dear').textContent = "Уважаемый Иван Иванович, благодарим Вас за прохождение теста! Вы набрали " + res +  " баллов из 20";

    if ((res>=1)&&(res<=5)) 
    {
      document.getElementById('text_res').textContent ="Сумма от 1 до 5 баллов означает, что вы трезвомыслящий реалист, не привыкший «витать в облаках», не желающий «терять почву под ногами». Возможно, это и помогает вам в жизни. Однако чуточку воображения и фантазии не помешало бы иметь. И не говорят ли вам окружающие, что вы, простите, слишком уж скучный человек?";
    }
       
    else if((res>=6) &&(res<=12)) 
    {
      document.getElementById('text_res').textContent ="Сумма от 6 до 12 баллов говорит о том, что вы обладаете средним воображением, которое неплохо было бы ещё немного развить (а это при желании вполне возможно). Ведь качество это помогает практически каждому человеку творчески относиться к любым делам.";
    }

    else 
    {
      document.getElementById('text_res').textContent="Сумма от 13 до 20 баллов свидетельствует о том, что у вас богатая фантазия. И если вы сумеете воспользоваться этим, то ваша жизнь станет интересней и сможет принести много радости окружающим вас людям.";
    }
  }

  else 
  {
    if(questions[current][2]!=0) 
    {
      document.getElementById("next").disabled = false;

      document.getElementById("next").style.background =  "#44BABD";
  
      document.getElementById("prev").style.background="#FFFFFF";
      document.getElementById("prev").style.color="#44BABD";
      document.getElementById("prev").style.border="1px solid #44BABD";}
    else 
    {
      document.getElementById("next").disabled = true;

      document.getElementById("next").style.background ="#C4C4C4";

      document.getElementById("next").style.cursor =  "defaut";
      document.getElementById("prev").style.cursor =  "default";

      document.getElementById("prev").style.background="#C4C4C4";
      document.getElementById("prev").style.color="#FFFFFF";
      document.getElementById("prev").style.border="1px solid #C4C4C4";
    }
 
    if (current!=1) 
    {
      document.getElementById("prev").disabled = false;

      document.getElementById("prev").style.background="#FFFFFF";
      document.getElementById("prev").style.color="#44BABD";
      document.getElementById("prev").style.border="1px solid #44BABD";
    }

    document.getElementById('textahead').textContent="Вопрос " + current + " из 11";
  
    document.getElementById('text_question').textContent= questions_text[current];
    document.getElementById('showImage').textContent=showImage(showImages,current);

    if (questions[current][2]==1) 
      document.getElementById('radio_1').checked = true;

    else if (questions[current][2]==2)
      document.getElementById('radio_2').checked = true;

    else if(questions[current][2]==0)
    {
      document.getElementById('radio_1').checked = false;
      document.getElementById('radio_2').checked = false;

      document.getElementById("next").style.cursor =  "default";
      document.getElementById("prev").style.cursor =  "default";

      document.getElementById("prev").style.background="#C4C4C4";
      document.getElementById("prev").style.color="#FFFFFF";
      document.getElementById("prev").style.border="1px solid #C4C4C4";
    }
  }
}


function Prev()
{
  if (!document.getElementById('radio_1').checked && !document.getElementById('radio_2').checked) 
  {
    return;
  }

  current--;
  if (current==1) 
    document.getElementById("prev").disabled = true;
  
  if (current>=1) 
  {
    document.getElementById('textahead').textContent="Вопрос " + current + " из 11";
    document.getElementById('text_question').textContent= questions_text[current];
    document.getElementById('showImage').textContent=showImage(showImages,current);


    if (current==1) 
    {
      document.getElementById("prev").style.background="#C4C4C4";
      document.getElementById("prev").style.color="#FFFFFF";
      document.getElementById("prev").style.border="1px solid #C4C4C4";
    }

    if(questions[current][2]!=0) 
    {
      document.getElementById("next").disabled = false;

      document.getElementById("next").style.background = "#44BABD"; 
    
      document.getElementById("prev").style.background="#FFFFFF";
      document.getElementById("prev").style.color="#44BABD";
      document.getElementById("prev").style.border="1px solid #44BABD";
    }

    else 
    {
      document.getElementById("next").disabled = true;

      document.getElementById("next").style.background ="#C4C4C4";

      document.getElementById("next").style.cursor =  "default";
      document.getElementById("prev").style.cursor =  "default";

      document.getElementById("prev").style.background="#44BABD";
      document.getElementById("prev").style.color="#FFFFFF";
      document.getElementById("prev").style.border="1px solid #44BABD";
    }

    if (questions[current][2]==1) 
      document.getElementById('radio_1').checked = true;
  
    else if (questions[current][2]==2)
      document.getElementById('radio_2').checked = true;

    else if(questions[current][2]==0)
    {
      document.getElementById('radio_1').checked = false;
      document.getElementById('radio_2').checked = false;
      
      document.getElementById("next").style.cursor = "defaut";
      document.getElementById("prev").style.cursor = "default";
    }
  }
}


function Result()
{
  var scores = 0
  for (key in questions) 
  {
    if (questions[key][2]==1) 
      scores+=questions[key][0];
    else if (questions[key][2]==2) 
      scores+=questions[key][1];
  }
  return scores;
}


