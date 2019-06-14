/* eslint-disable no-unused-vars */
/* global collection */
'use strict';
// define book class

class book{
  constructor(obj){
    this.id=obj.id;//currently set to random number for testing purpose
    this.title = obj.title;
    this.url = obj.url;
    this.rating = obj.rating;
    this.desc = obj.desc;
    this.hidden = this.rating < collection.minStars;
  }
  setRating(newRating){
    this.rating = newRating;
  }
}