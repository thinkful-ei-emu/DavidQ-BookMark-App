/* eslint-disable no-unused-vars */
//represents local data store
/* global book, DOM, API */
'use strict';

const collection = (function(){
  const books =[new book('Mobey Dick',5),new book('Stuwart little',4)];//todo currently hard coded
  let focused = null;//set to the book that has focus
  let adding = false;
  /**
   * 
   * @param {string} ID
   * @returns {number} index of book in books 
   * @summary search the books array and gives the index of book with this id
   */
  function findByID(ID){
    return this.books.indexOf(this.books.find((book)=>book.id === ID));
  }
  /**
   * @param {string} ID 
   */
  function DeleteBook(ID){
    //given an id, cleanly remove that book from list
    this.books.splice(this.findByID(ID),1);
  }
  return{
    books,
    focused,
    DeleteBook,
    findByID,
    adding,
  };
})();
