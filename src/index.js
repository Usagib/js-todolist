// import stylesheets
import './style.css';

const main = document.querySelector('#content');


const hr = document.createElement('hr');
hr.className = 'my-4';

const footer = document.createElement('footer');
footer.className = 'footer';

const small = document.createElement('small');
small.innerHTML = 'test';


footer.appendChild(hr);
footer.appendChild(small);


main.innerHTML = footer.outerHTML;
