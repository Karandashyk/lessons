export class Module {
  constructor(str) {
  	this.str = str;
  }
};

export default class Module {
  constructor(str) {
  	this.str = str;
  }
};

export function f() {
  alert("Hi!");
};

export {Module, f}


export {Module as one, f as two};



import {one, two} from "./module";

import Module from './module';

import * as Module from './module';


