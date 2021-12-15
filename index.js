/*!
 * seatrout <https://github.com/noffeperfekt/seatrout>
 *
 * Copyright (c) 2021-2022, ravneberg.co
 * Released under the MIT License.
 */
'use strict';
/**
 * Calculates fulton value.
 * @param {String} weight 
 * @param {String} length 
 * @returns {Float}
 */
function fultonCalculator(weight, length) {
  let actualWeight = (Number.parseFloat(weight)) ? Number.parseFloat(weight) : Number.parseFloat(0.0);
  let actualLength = (Number.parseFloat(length)) ? Number.parseFloat(length) : Number.parseFloat(0.0);
  return ((actualWeight*100) / (Math.pow(actualLength, 3))).toFixed(1);
}
/**
 * Skin-/Scale- color of the trout
 */
class TroutColor{
  static unknown = new TroutColor("unknown");
  static dark = new TroutColor("dark");
  static silver = new TroutColor("silver");
  static colorful = new TroutColor("colorful");
  constructor(name) {
    this.name = name
  }
}
class Name{
  constructor(){
    this.danish= "havørred";
    this.english= "seatrout";
    this.english_full= "searun brown trout";
    this.estonian= "meriforell";
    this.finnish= "meritaimen";
    this.frensh= "truite de mer";
    this.german= "meerforelle";
    this.icelandic= "sjóbirtingur";
    this.latin= "salmo trutta";
    this.latin_full= "salmo trutta morpha trutta";
    this.latvian= "taimiņa";
    this.lithuanian= "šlakiai";
    this.netherland= "zeeforel";
    this.norwegian= "sjøørret";
    this.polish= "troć wędrowna";
    this.russian= "морская форель";
    this.swedish= "havsöring";
  }
}
class Seatrout{
  constructor(){
    this.length   = "0.0";
    this.weight   = "0.0";
    this.color    = new TroutColor("unknown");
    this.fulton   = fultonCalculator;
    this.name     = new Name();
  }
}
module.exports = {
  Seatrout
};