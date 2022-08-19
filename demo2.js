//parentNode
var itemlist=document.querySelector('#items');
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.background='gray';
//console.log(itemlist.parentNode.parentNode);

//parentElement
//console.log(itemlist.parentElement);
//itemlist.parentElement.style.background='gray';
//console.log(itemlist.parentElement.parentElement);

//childNode
//console.log(itemlist.childNodes);

//childrenNode
//console.log(itemlist.children);
//console.log(itemlist.children[1]);
//itemlist.children[1].style.background='yellow';


//firstChild
//console.log(itemlist.firstChild);


//firstElementChild
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent='Hello 1';


//latsChild
//console.log(itemlist.lastChild);


//firstElementChild
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent='Hello 1';

//nextSibling
//console.log(itemlist.nextSibling);

//nextElementSibling
//console.log(itemlist.nextElementSibling);


//previousSibling
//console.log(itemlist.previousSibling);
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color='green';

//creatElement

//creat a div
var newdiv=document.createElement('div');

//Add class
newdiv.className='Hello';

//Add id
newdiv.id='hello1';

//Add atribute
newdiv.setAttribute('title','hello-div');

//Creat a text node
var newdivText=document.createTextNode('HELLo word');

//Add text to div
newdiv.appendChild(newdivText);
var cont=document.querySelector('header .container');
var h1=document.querySelector('header h1');
var con=document.querySelector('div .list-group');
var h=document.querySelector('div li');

console.log(newdiv);

cont.insertBefore(newdiv,h1);

var div=document.createElement('div');
var text=document.createTextNode('HELLo word');
div.appendChild(text);
con.insertBefore(div,h);