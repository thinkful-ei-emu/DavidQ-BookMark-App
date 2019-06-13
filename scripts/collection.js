/* eslint-disable no-unused-vars */
//represents local data store
/* global book, DOM, API */
'use strict';

const collection = (function(){
  let books =[new book('Mobey Dick',5),new book('Stuwart little',4)];//todo currently hard coded
  let focused = null;//set to the book that has focus
  return{
    books,
    focused,
  };
})();
