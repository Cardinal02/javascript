/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html
*/
//<div id="inject"> <div>
/*<center>
  <h1><i>HTML Practice Exercise TEKcamp.</i></h1>
  <h2><a href="">TEKsystems "TEKcamp"</a></h2>
</center>

<hr />
I love <i>HTML</i> for the following reasons:
<ol>
  <li>I learned it quickly.</li>
  <li>I can make web pages using code
<li> It’s fun.</li>
</ol>
<hr />
  My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.
<h1>Have a great day!</h1>  I really look forward to learning how to code!  Have a great day.  
-[Team "Git'er Done"]*/

const containerDiv = document.getElementById('inject');  //grabbing the inject div
const centerEl = document.createElement('center');     //creating center,h1,h2 and adding content
const heading1 = document.createElement('h1');
heading1.innerHTML = '<i>HTML Practice Exercise TEKcamp.</i>';
const heading2 = document.createElement('h2');
heading2.innerHTML = '<a href="">TEKsystems "TEKcamp"</a>';
containerDiv.appendChild(centerEl);                        //adding center HTML element as child to the inject div
centerEl.appendChild(heading1);                            //adding center h1, h2 elements as child to the center element
centerEl.appendChild(heading2);
document.body.appendChild(containerDiv);                   //setting inject div as child of body element
var hrEl = document.createElement("HR");                   //Adding horizontal row
containerDiv.appendChild(hrEl);
//console.log(document);
const pEl = document.createElement('p');                  //creating the rest of text and ordered list and adding as child to inject div
pEl.innerHTML = 'I love <i>HTML</i> for the following reasons:';
containerDiv.appendChild(pEl);
const olEl = document.createElement('ol');
const liEl1 = document.createElement('li');
liEl1.innerHTML='I learned it quickly.';
const liEl2 = document.createElement('li');
liEl2.innerHTML='I can make web pages using code';
const liEl3 = document.createElement('li');
liEl3.innerHTML='It’s fun.';
olEl.appendChild(liEl1);
olEl.appendChild(liEl2);
olEl.appendChild(liEl3);
pEl.appendChild(olEl);
var hrEl2 = document.createElement("HR");                   //Adding second horizontal row
containerDiv.appendChild(hrEl2);
const pEl2 = document.createElement('p');
pEl2.innerHTML='My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.';
containerDiv.appendChild(pEl2);
const pEl3 = document.createElement('h1');
pEl3.innerHTML='Have a great day!'
containerDiv.appendChild(pEl3);
const pEl4 = document.createElement('p');
pEl4.innerHTML = 'I really look forward to learning how to code!  Have a great day.-[Team "Git\'er Done"]';
containerDiv.appendChild(pEl4);



