/* eslint-disable no-unused-vars */
/* global cuid */
'use strict';
// define book class

class book{
  constructor(obj={id:cuid(),title:'Mobey Dick',url:'http://www.google.com',rating:5}){
    this.id=obj.id;//currently set to random number for testing purpose
    this.title = obj.title;
    this.url = obj.url;
    this.rating = obj.rating;
    this.desc = obj.desc;
    this.hidden =false;
  }
  setRating(newRating){
    this.rating = newRating;
  }
}