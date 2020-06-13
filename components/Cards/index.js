// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

    /*------------------------------------- 
    Object = { articles : 
                     { javascript: [ 
                           { }, 
                           { }, 
                           { } ],
                       bootstrap: [ 
                           { }, 
                           { }, 
                           { } ],
                       technology: [ 
                           { }, 
                           { }, 
                           { } ]  
                     }
                  } 
      OBJECT > OBJECTS > ARRAY OF OBJECTS

      response.data.articles =  5 OBJECTS
      response.data.articles[i] = ARRAY OF 3 OBJECTS

     --------------------------------------*/

     // for-in loop to loop through OBJECTS
     // forEach() to loop through ARRAYS

     //Object.articles( key in response.data.articles ) // javascript, bootstrap ...
     //repsonse.data. ARTICLES . [ARRAYS OF OBJECTS] . [ARRAY INDEX] . KEY
     //                  1                2                 3           4

     // console.log(response.data.articles[key][index].headline)

     //---------------------------------------------------------


axios.get('https://lambda-times-backend.herokuapp.com/articles')
   .then( (response) => {

      //ACCESS EACH OF THE 5 OBJECTS 
      for( key in response.data.articles){

         //LOOP THROUGH THE ARRAY OF OBJECTS FOR EACH OBJECT
         returnCard(response.data.articles[key]);
      }
   }) 
   .catch( error => console.log(error) )

 
   
 //COMPONENT FUNCTION - RETURNS A NEW CARD
 function returnCard( key ){

      //EACH OF THESE KEYS REPRESENTS AN ARRAY OF OBJECTS - LOOP THROUGH
      //THE ARRAY AND FOR EACH ARRAY ITEM ( WHICH IS AN OBJECT) ACCESS
      //THE NEEDED key:value PAIRS ( articleComponent ) ON THAT ITERATION
      //AND APPEND THAT CARD TO THE DOM

      key.forEach( (articleComponent) => {  
      
         //CREATE ELEMENTS
         // --divs--
         let container_div = document.createElement('div');
         let headline_div = document.createElement('div');
         let author_div = document.createElement('div');
         let img_div = document.createElement('div');
         // --tags--
         let img_tag = document.createElement('img');
         let span_tag = document.createElement('span');
         //ADD CLASSES
         container_div.classList.add('card');
         headline_div.classList.add('headline');
         author_div.classList.add('author');
         img_div.classList.add('img-container');

         //CREATE CARD ( NESTED TAGS WORKING OUTWARD )
         img_div.appendChild(img_tag);
         author_div.appendChild(img_div);
         author_div.appendChild(span_tag);
         container_div.appendChild(headline_div);
         container_div.appendChild(author_div);

         //ADD CONTENT
         headline_div.textContent = articleComponent.headline;
         img_tag.src = articleComponent.authorPhoto;
         span_tag.textContent = articleComponent.authorName;

         //APPEND TO DOM
         document.querySelector('.cards-container').appendChild( container_div );
      })

 }