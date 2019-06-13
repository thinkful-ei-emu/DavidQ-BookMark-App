/* global collection */
/* eslint-env jquery */
'use strict';
/* This module deals with all DOM manipulations and event handles */

const DOM =(function(){
  /* adds all event handles */
  function handleExpandBookMark(){
    //event handle for bookmark expansion
    $('.js-list').on('click','.js-list-item',(e)=>{
      collection.focused = e.target;
      $(e.target).find('article').toggleClass('hidden');
    });
  }
  function hookUpEvents(){
    handleExpandBookMark();

  }
  function render(){
    //draw everything in the store
    console.log('drawing new content');
    let html = collection.books.map(book=>createHTML(book));
    $('.js-list').html(html);
  }
  function createHTML(book){
    return ` <li class="js-list-item row">
    <div class="col-12">
  <span>${book.name}<button class="js-remove">remove</button></span>
    <p><rating:5></rating:${book.rating}></p>
    <article class="hidden">Description:<br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac enim facilisis, condimentum augue at, aliquet ex. Etiam at velit eu lectus sagittis ultrices eu sit amet dolor. Integer hendrerit bibendum tortor blandit fringilla.</p></article>
    <a href="#">link to book website</a>
    </div>
  </li>`;

  }
  return{
    hookUpEvents,
    render,
  };
})();