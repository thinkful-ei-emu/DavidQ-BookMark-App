/* global collection */
/* eslint-env jquery */
'use strict';
/* This module deals with all DOM manipulations and event handles */

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
  function handleRemoveBtn(){
    //event for if the removed button is pressed
    $('.js-list').on('click','.js-remove',(e)=>{
      e.stopPropagation();
      let bookmark = $(e.currentTarget).closest('li').data('book-id');//id of book to remove
      collection.DeleteBook(bookmark);
      render();
    });
  }
  function hookUpEvents(){
    handleRemoveBtn();
    handleExpandBookMark();
    handleAddBtn();  
  }
  function render(){
    //draw everything in the collection
    console.log('rendering');
    let html = collection.books.map(book=>createHTML(book));
    $('.js-list').html(html);
  }
  function createHTML(book){
    if(book.id === collection.focused){
      return ` <li class="js-list-item row" data-book-id="${book.id}">
      <div class="col-12">
    ${book.name}<button class="js-remove">remove</button>
      <p>rating:${book.rating}</p>
      <article>Description:<br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac enim facilisis, condimentum augue at, aliquet ex. Etiam at velit eu lectus sagittis ultrices eu sit amet dolor. Integer hendrerit bibendum tortor blandit fringilla.</p></article>
      <a href="#">link to book website</a>
      </div>
    </li>`;
    }else{
      return ` <li class="js-list-item row" data-book-id="${book.id}">
    <div class="col-12">${book.name}<button class="js-remove">remove</button>
    <p>rating:${book.rating}</p>
    <article class="hidden">Description:<br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac enim facilisis, condimentum augue at, aliquet ex. Etiam at velit eu lectus sagittis ultrices eu sit amet dolor. Integer hendrerit bibendum tortor blandit fringilla.</p></article>
    <a href="#">link to book website</a>
    </div>
  </li>`;

    }

  }
  return{
    hookUpEvents,
    render,
  };
})();