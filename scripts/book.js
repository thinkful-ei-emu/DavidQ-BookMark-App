/* eslint-disable no-unused-vars */
/* global cuid */
'use strict';
// define book class

class book{
  constructor(Name,Rating,URL,Descript='',Id=cuid()){
    this.id=Id;//currently set to random number for testing purpose
    this.title = Name;
    this.url = URL;
    this.rating = Rating;
    this.desc = Descript;
  }
  setRating(newRating){
    this.rating = newRating;
  }
}