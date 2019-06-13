/* eslint-env jquery */
/* global collection, book, DOM, API,  */
'use strict';
function main(){
  console.log(collection.books);
  DOM.hookUpEvents();
  DOM.render();
}
$(main);