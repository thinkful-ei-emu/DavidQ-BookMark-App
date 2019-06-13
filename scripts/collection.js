/* eslint-disable no-unused-vars */
//represents local data store
/* global book, DOM, API */
'use strict';

const collection = (function(){
  let books =[new book('Mobey Dick',5),new book('Stuwart little',4)];//todo currently hard coded
  let focused = null;//set to the book that has focus
  /**
   * 
   * @param {number} ID
   * @returns {number} index of book in books 
   * @summary search the books array and gives the index of book with this id
   */
  function findByID(ID){
    return this.books.indexOf(this.books.find((book)=>book.id === ID));
  }
  return{
    books,
    focused,
    findByID,
  };
})();
