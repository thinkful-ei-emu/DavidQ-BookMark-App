/* eslint-disable no-unused-vars */
/* global cuid */
'use strict';
// define book class

class book{
  constructor(Name,Rating,Descript='',Id=cuid()){
    this.id=Id;//currently set to random number for testing purpose
    this.name = Name;
    this.rating = Rating;
    this.descript = Descript;
  }
  setRating(newRating){
    this.rating = newRating;
  }
}