/* eslint-disable no-console */
/* global collection, API */
/* eslint-env jquery */
'use strict';
/* This module deals with all DOM manipulations and event handles */

// eslint-disable-next-line no-unused-vars
const DOM =(function(){
  /* adds all event handles */
  function handleExpandBookMark(){
    //event handle for bookmark expansion
    $('.js-list').on('click','.js-list-item',(e)=>{
      collection.focused = $(e.currentTarget).data('book-id');
      //console.log(collection.focused);
      render();
      $(e.target).find('article').toggleClass('hidden');
    });
  }
  function handleAddBtn(){
    $('.js-addBtn').click((e)=>{
      collection.adding = true;
      // to be removed later
      $('.modal').toggle();
      //---->
      console.log(collection.adding);
    });

  }
  function handleFormSubmit(){
    $('.js-inputForm').submit((e)=>{
      e.preventDefault();
      let data = new FormData(document.getElementById('inputForm'));
      API.addNewBook(data);
      /*     let inputs=[];
      for(let x of data.entries()){inputs.push(x);}
      console.log(inputs);
      collection.addBook({inputs[0][1],inputs[3][1],inputs[1][1]}); */
      $('.js-inputForm')[0].reset();
      render();
      console.log('form Submited');
    });
    //also going to handle cancel event
    $('.js-inputForm').on('reset',(e)=>{
      $('.modal').toggle();
    });

  }
  function handleRemoveBtn(){
    //event for if the removed button is pressed
    $('.js-list').on('click','.js-remove',(e)=>{
      e.stopPropagation();
      let bookmark = $(e.currentTarget).closest('.js-list-item').data('book-id');//id of book to remove
      API.deleteBook(bookmark);
    });
  }
  function handleFilter(){
    $('#filter').on('change',(e)=>{
      alert('filter changed to: ' + e.target.value);
    });

  }
  function hookUpEvents(){
    handleFilter();
    handleRemoveBtn();
    handleExpandBookMark();
    handleFormSubmit();
    handleAddBtn();  
  }
  function render(){
    //draw everything in the collection
    console.log('rendering');
    let html = collection.books.map(book=>createHTML(book));
    $('.js-list').html(html);
  }
  function createHTML(book){
    if(book.hidden){
      return '';
    
    }else if(book.id === collection.focused){
      return ` <div class="js-list-item col-12" data-book-id="${book.id}">
      <div class="col-12">
    <span>${book.title}<button class="js-remove">remove</button></span>
      <p>rating:${book.rating}</p>
      <article><p>${book.desc}</p></article>
      <a href="${book.url}">Visit website</a>
      </div>
    </div>`;
    }else{
      return ` <div class="js-list-item col-12" data-book-id="${book.id}">
    <div class=""><span>${book.title}<button class="js-remove">remove</button></span>
    <!--<p>rating:${book.rating}
    <a href="${book.url}"> Visit Website</a>-->
    </div>
  </li>`;

    }

  }
  return{
    hookUpEvents,
    render,
  };
})();