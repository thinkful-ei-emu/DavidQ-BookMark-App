/* eslint-disable no-console */
/* eslint-env jquery */
/* global collection,DOM  */
'use strict';
function main(){
  console.log(collection.books);
  DOM.hookUpEvents();
  DOM.render();
  API.doFetch('POST',JSON.stringify(collection.books[0])).then(obj=>{console.log(obj);});
}
$(main);