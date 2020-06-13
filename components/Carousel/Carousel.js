/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel(){

      //CREATE ELEMENTS
      let carousel_div = document.createElement('div');
      let leftButton = document.createElement('div');
      let rightButton = document.createElement('div');
      let img_1 = document.createElement('img');
      let img_2 = document.createElement('img');
      let img_3 = document.createElement('img');
      let img_4 = document.createElement('img');
      //CLASSES
      carousel_div.classList.add('carousel');
      leftButton.classList.add('left-button');
      rightButton.classList.add('right-button');

      //ADD CONTENT
      img_1.src = '../../assets/carousel/mountains.jpeg';
      img_2.src = '../../assets/carousel/computer.jpeg';
      img_3.src = '../../assets/carousel/trees.jpeg';
      img_4.src = '../../assets/carousel/turntable.jpeg';
      leftButton.textContent = '<';
      rightButton.textContent = '>';
      

      carousel_div.appendChild(leftButton);
      carousel_div.appendChild(img_1);
      carousel_div.appendChild(img_2);
      carousel_div.appendChild(img_3);
      carousel_div.appendChild(img_4);
      carousel_div.appendChild(rightButton);

      console.log(carousel_div)
      //APPEND TO DOM
      document.querySelector('.carousel-container').appendChild( carousel_div );

}

createCarousel()