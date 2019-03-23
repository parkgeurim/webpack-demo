
// lodash를 모듈로 가져오는 방법 : CommonJS 스펙
// var_ = require('lodash');
// lodash를 _를 붙여 가져오겠다는 의미
// 기존은 require을 사용, es6는 import 사용
// 버전에 따라 다름

// es6 방식의 모듈 가져오는 방법 :import
import _ from 'lodash';
import "./style.css";
import  "./hello.scss";

//named export : 반드시 {} 안에  동일한 이름으로 넣어햐 한다.
import {area, circumference} from "./js/circle";
// default는 {} 가져올 수 있고 이름을 마음대로 바꿀 수 있다.

import aaa from "./js/demo";

'./js/circle';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(area(5), circumference(5));
console.log(aaa(4));