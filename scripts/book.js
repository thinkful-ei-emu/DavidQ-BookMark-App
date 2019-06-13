/* eslint-disable no-unused-vars */
'use strict';
// define book class

class book{
  constructor(Name,Rating,Descript='',Id=null){
    this.id=Id;
    this.name = Name;
    this.rating = Rating;
    this.descript = Descript;
  }
  setRating(newRating){
    this.rating = newRating;
  }
}