let selectedNumber=null;
function handleButtonClick(numberId){
    if (selectedNumber!==null){
        let selectedButton=document.getElementById()
    }
}
/*selectedNumber=document.querySelector();7

// Függvény a kattintás kezelésére
/*function handleButtonClick(numberId) {
    if (selectedNumber !== null) {
      var selectedButton = document.getElementById(selectedNumber);
      selectedButton.classList.remove('selected');
    }
  
    selectedNumber = numberId;
    var selectedButton = document.getElementById(selectedNumber);
    selectedButton.classList.add('selected');
  }*/
  /*submit gomb lenyomása- display állítás
*/
const Submit=document.getElementById('submit');
const FirstDisplay=document.getElementById('startState');
const SecondDisplay=document.getElementById('thankState');
const Selection=document.getElementById('selection');
const selectionText=Selection.textContent;
const change='null'

// HSL színkód beállítása
var hue = 216; // Színárnyalat (0-360 fok)
var saturation = 12; // Telítettség (0-100%)
var lightness = 54; // Világosság (0-100%)


Submit.addEventListener("click",function(){
  if (FirstDisplay.style.display='block'){
    FirstDisplay.style.display='none';
    SecondDisplay.style.display='block';
    let newSelection=selectionText.replace(change,value);
    Selection.textContent=newSelection;

  }
  else {
    FirstDisplay.style.display='block';
    SecondDisplay.style.display='none';
  }
  if (value=='one'){one.classList.add('.numbers')
one.style.backgroundColor="hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";;}
})

const one=document.getElementById('one');
const two=document.getElementById('two');
const three=document.getElementById('three');
const four=document.getElementById('four');
const five=document.getElementById('five');

let value=null;
one.addEventListener('click',function(){
  value=one.textContent;
})
two.addEventListener('click',function(){
  value=two.textContent;
})
three.addEventListener('click',function(){
  value=three.textContent;
})
four.addEventListener('click',function(){
  value=four.textContent;
})
five.addEventListener('click',function(){
  value=five.textContent;
})