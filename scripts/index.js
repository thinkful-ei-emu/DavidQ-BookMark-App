/* eslint-disable no-console */
/* eslint-env jquery */
/* global collection,DOM  */
'use strict';
function main(){
  console.log(collection.books);
  DOM.hookUpEvents();
  API.getAllBooks();
  DOM.render();
}
$(main);