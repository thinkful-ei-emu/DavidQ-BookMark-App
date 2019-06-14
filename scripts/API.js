/* global collection, DOM */
'use strict';
const API = (function(){
  const BaseUrl ='https://thinkful-list-api.herokuapp.com/DavidQ/bookmarks';
  function doFetch(Method='GET', Body=null, Id=null){
    let completeUrl =BaseUrl;
    let options = {
      headers: new Headers({'Content-Type':'application/json'}),
      method:Method,
      body:Body
    };
    return fetch(completeUrl,options).then(resp=>{
      if(resp.ok){
        return resp.json();
      }else{
        return Promise.reject(new Error('resp.statusText'));
      }
    
    });
  }
  function getAllBooks(){
    //gets all books on server
    doFetch().then(book=>{
      collection.addBook(book);
      DOM.render();
    });/* .catch((e)=>{
      alert(e.message);//TODO handle errors properly
    }); */
  }

  return{
    doFetch,//to be removed after testing
    getAllBooks,

  };
})();