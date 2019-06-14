/* global collection, DOM */
'use strict';
const API = (function(){
  const BaseUrl ='https://thinkful-list-api.herokuapp.com/DavidQ/bookmarks';
  function doFetch(Method='GET', Body=null, Id=null){
    let completeUrl =BaseUrl;
    if(Id){
      completeUrl += `/${Id}`;
    }
    let options = {
      headers: new Headers({'Content-Type':'application/json'}),
      method:Method,
      body:Body
    };
    if(Body){
      console.log(Body);
    }
    console.log('this is the completed url:' + completeUrl);
    return fetch(completeUrl,options).then(resp=>{
      if(resp.ok){
        return resp.json();
      }else{
        //console.log(resp.json());
        
        return Promise.reject(new Error(resp.statusText));//todo change to resp obj
      }
    
    });
  }
  function addNewBook(book){
    doFetch('POST',serializeJson(book)).then(obj=>{
      console.log('new book added to server');
      getAllBooks();
    }).catch((e)=>{
      handleErrors(e);
    });

  }
  function deleteBook(id){
    doFetch('DELETE',null,id).then(obj=>{
      collection.deleteBook(id);
      DOM.render();
    }).catch(e=>handleErrors(e));
  }
  function handleErrors(err){
    collection.error = err;
    DOM.render();
    
  }
  function serializeJson(formData){
    let o ={};
    formData.forEach((value, name)=>{
      o[name] = value;
    });
    return JSON.stringify(o);
  }
  function getAllBooks(){
    //gets all books on server
    doFetch().then(books=>{
      books.forEach((book)=>{
        collection.addBook(book);
      });
     
      DOM.render();
    }).catch((e)=>{
      handleErrors(e);
    });
  }

  return{
    doFetch,//to be removed after testing
    getAllBooks,
    deleteBook,
    addNewBook,

  };
})();