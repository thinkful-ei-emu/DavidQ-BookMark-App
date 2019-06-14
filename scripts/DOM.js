/* eslint-disable no-console */
/* global collection */
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
      let inputs=[];
      for(let x of data.entries()){inputs.push(x);}
      console.log(inputs);
      collection.addBook(inputs[0][1],inputs[3][1],inputs[1][1]);
      //todo clear all input fields
      //$('.modal').toggle();
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
      let bookmark = $(e.currentTarget).closest('li').data('book-id');//id of book to remove
      collection.deleteBook(bookmark);//prob replacing with api.delete
      render();
    });
  }
  function hookUpEvents(){
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
    if(book.id === collection.focused){
      return ` <li class="js-list-item row" data-book-id="${book.id}">
      <div class="col-12">
    <span>${book.title}<button class="js-remove">remove</button></span>
      <p>rating:${book.rating}</p>
      <article>Description:<br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac enim facilisis, condimentum augue at, aliquet ex. Etiam at velit eu lectus sagittis ultrices eu sit amet dolor. Integer hendrerit bibendum tortor blandit fringilla.</p></article>
      <a href="#">link to book website</a>
      </div>
    </li>`;
    }else{
      return ` <li class="js-list-item row" data-book-id="${book.id}">
    <div class="col-12"><span>${book.title}<button class="js-remove">remove</button></span>
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