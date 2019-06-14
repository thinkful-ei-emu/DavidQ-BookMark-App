'use strict';
const API = (function(){
  const BaseUrl ='https://thinkful-list-api.herokuapp.com/DavidQ/bookmarks';
  function doFetch(Method='GET', Body='', Id=null){
    let completeUrl =BaseUrl;
    let options = {
      headers: new Headers({'Content-Type':'application/json'}),
      method:Method,
      body:Body
    };
    return fetch(completeUrl,options).then(resp=>resp.json());
  }

  return{
    doFetch,//to be removed after testing

  };
})();