// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

   //CREATE ELEMENTS /ADD CLASSES
   let header_div = document.createElement('div');
   let header_span_1 = document.createElement('span');
   let header_h1 = document.createElement('h1');
   let header_span_2 = document.createElement('span');

   header_div.classList.add('header');
   header_span_1.classList.add('date');
   header_span_2.classList.add('temp');

   //CONTENT
   header_span_1.textContent = 'March 28, 2019';
   header_h1.textContent = 'Lambda Times';
   header_span_2.textContent = '98°';

   //ADD ELEMENTS TO DIV
   header_div.appendChild(header_span_1);
   header_div.appendChild(header_h1);
   header_div.appendChild(header_span_2);
   
   return header_div;
}

//ADD TO DOM
document.querySelector('.header-container').appendChild( Header() );
