// Your code goes here

// #1 

document.querySelector("h1")
.addEventListener('click', function (event) {
    event.target.style.color = "blue"

    setTimeout(function(){
        event.target.style= "";
    }, 900);
    
})

 // #2 

const heading = document.querySelector('header')
heading.addEventListener('dblclick', (event) => {
    event.target.style.textTransform = 'uppercase';  
    
    setTimeout(function(){
        event.target.style= "";
    }, 900);

  }, true);

 // #3

 Array.from(document.querySelectorAll('h2')).forEach(element =>{

    element.addEventListener('mouseover',(event) =>{
        event.target.style.color = "purple";

        setTimeout(function(){
            event.target.style= "";
        }, 600);

    
    }, false);

 })


 //#4

const firstIMG = document.querySelector('img')
let scale = 1;
firstIMG.addEventListener('wheel',(event) => {

    event.preventDefault();
  scale += event.deltaY * -0.01;

  scale = Math.min(Math.max(.125, scale), 4);
  firstIMG.style.transform = `scale(${scale})`;

})

// #5

Array.from(document.querySelectorAll("img")).forEach(element =>{

    element.addEventListener('mousemove',(event) =>{
        event.target.style.border = '5px dotted blue';

        setTimeout(function(){
            event.target.style= "";
        }, 900);
    
 })
})

//#6

const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
    event.target.style.background = 'green';  
    
    setTimeout(function(){
        event.target.style= "";
    }, 900);

  }, true);

// #7

  function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You have chose destination: ${selection}`;
  }
  
  form.addEventListener('select', logSelection);


// #8 

document.addEventListener('keydown', (event) =>{
    document.body.style.backgroundColor = '#66FF53'
    document.body.style.color = '#faed27';

    setTimeout(function(){
        event.target.style= "";
    }, 200);

}) 

//#9

const btnTransform = document.querySelector("button")

.addEventListener('mousemove' , (event) =>{
    event.target.style.transform = "rotate(90deg)";

    setTimeout(function(){
        event.target.style= "";
    }, 700);
})


// #10 

document.addEventListener("drag", function(event) {
}, false);

document.addEventListener("dragstart", function(event) {
  dragged = event.target;
  event.target.style.opacity = 8;
}, false);

document.addEventListener("dragover", function(event) {
    event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function(event) {
  }, false); 
  

  document.addEventListener("drop", function(event) {
    
    event.preventDefault();
    if (event.target.className == "dropzone") {
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
}, false);