/* eslint-disable no-unused-vars */
//represents local data store
/* global book, DOM, API */
'use strict';

const collection = (function(){
  const books =[];
  let focused = null;//set to the book that has focus
  let adding = false;
  let minStars = 0;
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
  function deleteBook(ID){
    //given an id, cleanly remove that book from list
    this.books.splice(this.findByID(ID),1);
  }
  function addBook(obj){
    if(this.books.find((b)=>b.id === obj.id)=== undefined){ //check if book is already there
      this.books.push(new book(obj));
    }

  }
  return{
    books,
    focused,
    deleteBook,
    addBook,
    findByID,
    adding,
  };
})();
