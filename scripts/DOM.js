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
      render();
      // to be removed later
      //$('.modal').toggle();
      //---->
      console.log(collection.adding);
    });

  }
  function handleFormSubmit(){
    $('.js-inputForm').submit((e)=>{
      e.preventDefault();
      let data = new FormData(document.getElementById('inputForm'));
      API.addNewBook(data);//need a way to tell DOM that it was successfull
      $('.js-inputForm')[0].reset();
      render();
      console.log('form Submited');
    });
    //also going to handle cancel event
    $('.js-inputForm').on('reset',(e)=>{
      collection.adding = false;
      render();
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
      collection.minStars =  e.target.value;
      collection.toggleHidden();
      render();
      //alert('filter changed to: ' + e.target.value);
    });

  }
  function hookUpEvents(){
    handleFilter();
    handleRemoveBtn();
    handleExpandBookMark();
    handleFormSubmit();
    handleAddBtn();
    handleErrorExit();  
  }
  function render(){
    //draw everything in the collection
    console.log('rendering');
    let html = collection.books.map(book=>createHTML(book));
    //---------------->draw all books
    let errorHtml = createErrorHtml();
    ///-----if there is a pending error, draw it
    if(collection.adding){ 
      $('.modal').removeClass('hidden');
    }else{
      $('.modal').addClass('hidden');
    }
    //---------------> draw modal
    $('.js-error').html(errorHtml);
    $('.js-list').html(html);
  }
  function createErrorHtml(){
    if(collection.error){
      collection.adding =true;
      let result = `
      <div class="error col-3">
      <h3>${collection.error}</h3><button class="errorBtn">&times</button>
      <p>The Server has responded with a ${collection.error}. Please ensure internet connectivty then try again</p>
      </div>`;
      collection.error = null;
      return result;
    }else{
      return '';
    }
  }
  function handleErrorExit(){
    $('.js-error').on('click','.errorBtn',(e)=>{
      render();
    });
  }
  function createHTML(book){
    if(book.hidden){
      return '';
    
    }else if(book.id === collection.focused){
      return ` <div class="js-list-item col-12" data-book-id="${book.id}">
      <div class="col-12">
    <span>${book.title}<button class="js-remove">remove</button></span>
      <p>rating:${book.getStars()}</p>
      <article><p>${book.desc}</p></article>
      <a href="${book.url}">Visit website</a>
      </div>
    </div>`;
    }else{
      return ` <div class="js-list-item col-12" data-book-id="${book.id}">
    <div class="row"><p class="col-6-sm">${book.title}</p><p class="col-6-sm">${book.getStars()}</p>
    <!--<p>rating:${book.getStars}
    <a href="${book.url}"> Visit Website</a>-->
    </div>
  </li>`;//this is collapsed

    }

  }
  return{
    hookUpEvents,
    render,
  };
})();